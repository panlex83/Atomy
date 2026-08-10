export async function GET() {
  const upstream = await fetch("https://drive.usercontent.google.com/download?id=1dIbZCCxyUiMHeBvkI2TedTo7Mg6OUvlx&export=download&confirm=t", { redirect: "follow", cache: "no-store" });
  if (!upstream.ok) return new Response("Catalog unavailable", { status: 502 });
  const out = new Headers();
  out.set("Content-Type", "application/pdf");
  const len = upstream.headers.get("content-length");
  if (len) out.set("Content-Length", len);
  return new Response(upstream.body, { status: 200, headers: out });
}
