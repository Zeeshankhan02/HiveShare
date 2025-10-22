export function extractYoutubeId(url) {
  try {
    const parsed = new URL(url);

    if (parsed.hostname === "youtu.be") return parsed.pathname.slice(1);
    if (parsed.searchParams.has("v")) return parsed.searchParams.get("v");
    if (parsed.pathname.startsWith("/shorts/")) return parsed.pathname.split("/shorts/")[1];
    if (parsed.pathname.startsWith("/embed/")) return parsed.pathname.split("/embed/")[1];

    return null;
  } catch {
    return null;
  }
}


export function extractIframeSrc(html) {
  const match = html.match(/src="([^"]+)"/);
  return match ? match[1] : null;
}