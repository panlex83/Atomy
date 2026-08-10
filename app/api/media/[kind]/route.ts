import { NextRequest } from "next/server";

const mediaIds: Record<string, string> = {
  history: "1bC1TrDuc5P1UxkUZT_gaiAMeLQAUacce",
  review2: "17BEsxcLELp7UeyIvJ7-NxrmzbnVRTxVu",
};

export async function GET(request: NextRequest, { params }: { params: Promise<{ kind: string }> }) {
  const { kind } = await params;
  const fileId = mediaIds[kind];

  if (!fileId) {
    return new Response("Not found", { status: 404 });
  }

  const range = request.headers.get("range");
  const upstream = await fetch(`https://drive.usercontent.google.com/download?id=${fileId}&export=download&confirm=t`, {
    headers: range ? { Range: range } : undefined,
    redirect: "follow",
    cache: "no-store",
  });

  if (!upstream.ok && upstream.status !== 206) {
    return new Response("Media unavailable", { status: upstream.status || 502 });
  }

  const headers = new Headers();
  for (const name of ["content-type", "content-length", "content-range", "accept-ranges", "etag", "last-modified"]) {
    const value = upstream.headers.get(name);
    if (value) headers.set(name, value);
  }
  if (!headers.has("content-type")) headers.set("content-type", "video/mp4");
  headers.set("cache-control", "public, max-age=3600, s-maxage=3600");

  return new Response(upstream.body, {
    status: upstream.status,
    headers,
  });
}
