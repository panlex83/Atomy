import { NextRequest } from "next/server";

const files: Record<string, { id: string; type: string }> = {
  history: { id: "1bC1TrDuc5P1UxkUZT_gaiAMeLQAUacce", type: "video/mp4" },
  review2: { id: "17BEsxcLELp7UeyIvJ7-NxrmzbnVRTxVu", type: "video/mp4" },
  catalog: { id: "1dIbZCCxyUiMHeBvkI2TedTo7Mg6OUvlx", type: "application/pdf" },
};

async function fetchDriveFile(id: string, range?: string | null) {
  const url = `https://drive.usercontent.google.com/download?id=${id}&export=download&confirm=t`;
  const headers: HeadersInit = {};
  if (range) headers.Range = range;

  return fetch(url, {
    headers,
    redirect: "follow",
    cache: "no-store",
  });
}

export async function GET(
  request: NextRequest,
  context: { params: Promise<{ name: string }> },
) {
  const { name } = await context.params;
  const file = files[name];
  if (!file) return new Response("Not found", { status: 404 });

  const range = request.headers.get("range");
  const upstream = await fetchDriveFile(file.id, range);

  if (!upstream.ok && upstream.status !== 206) {
    return new Response(`Media unavailable (${upstream.status})`, { status: 502 });
  }

  const headers = new Headers();
  headers.set("Content-Type", file.type);
  headers.set("Accept-Ranges", "bytes");
  headers.set("Cache-Control", "public, max-age=3600, stale-while-revalidate=86400");

  const contentLength = upstream.headers.get("content-length");
  const contentRange = upstream.headers.get("content-range");
  if (contentLength) headers.set("Content-Length", contentLength);
  if (contentRange) headers.set("Content-Range", contentRange);

  return new Response(upstream.body, {
    status: upstream.status,
    headers,
  });
}
