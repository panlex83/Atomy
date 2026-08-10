export async function GET(request: Request) {
  const range = request.headers.get("range");
  const headers = new Headers();
  if (range) headers.set("Range", range);
  const upstream = await fetch("https://drive.usercontent.google.com/download?id=17BEsxcLELp7UeyIvJ7-NxrmzbnVRTxVu&export=download&confirm=t", { headers, redirect: "follow", cache: "no-store" });
  if (!upstream.ok && upstream.status !== 206) return new Response("Video unavailable", { status: 502 });
  const out = new Headers();
  out.set("Content-Type", "video/mp4");
  out.set("Accept-Ranges", "bytes");
  const len = upstream.headers.get("content-length");
  const cr = upstream.headers.get("content-range");
  if (len) out.set("Content-Length", len);
  if (cr) out.set("Content-Range", cr);
  return new Response(upstream.body, { status: upstream.status, headers: out });
}
