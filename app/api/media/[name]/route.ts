const files: Record<string, { id: string; type: string }> = {
  history: { id: "1bC1TrDuc5P1UxkUZT_gaiAMeLQAUacce", type: "video/mp4" },
  review2: { id: "17BEsxcLELp7UeyIvJ7-NxrmzbnVRTxVu", type: "video/mp4" },
  catalog: { id: "1dIbZCCxyUiMHeBvkI2TedTo7Mg6OUvlx", type: "application/pdf" },
};

export async function GET(
  request: Request,
  { params }: { params: Promise<{ name: string }> },
) {
  const { name } = await params;
  const file = files[name];

  if (!file) {
    return new Response("Not found", { status: 404 });
  }

  const range = request.headers.get("range");
  const upstreamHeaders = new Headers();
  if (range) upstreamHeaders.set("Range", range);

  const upstream = await fetch(
    `https://drive.usercontent.google.com/download?id=${file.id}&export=download&confirm=t`,
    { headers: upstreamHeaders, redirect: "follow", cache: "no-store" },
  );

  if (!upstream.ok && upstream.status !== 206) {
    return new Response(`Media unavailable (${upstream.status})`, { status: 502 });
  }

  const responseHeaders = new Headers();
  responseHeaders.set("Content-Type", file.type);
  responseHeaders.set("Accept-Ranges", "bytes");
  responseHeaders.set("Cache-Control", "public, max-age=3600");

  const length = upstream.headers.get("content-length");
  const contentRange = upstream.headers.get("content-range");
  if (length) responseHeaders.set("Content-Length", length);
  if (contentRange) responseHeaders.set("Content-Range", contentRange);

  return new Response(upstream.body, {
    status: upstream.status,
    headers: responseHeaders,
  });
}
