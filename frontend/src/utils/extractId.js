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

export function getInstagramEmbedUrl(link) {
  if (!link || typeof link !== "string") return null;

  try {
    // Normalize URL (remove query params, trailing slashes)
    const cleanLink = link.split("?")[0].replace(/\/$/, "");

    if (cleanLink.includes("/reel/")) {
      // Reels → convert to /p/ form (Instagram embeds require /p/)
      const id = cleanLink.split("/reel/")[1];
      return `https://www.instagram.com/p/${id}/embed`;
    }

    if (cleanLink.includes("/p/")) {
      // Regular posts
      const id = cleanLink.split("/p/")[1];
      return `https://www.instagram.com/p/${id}/embed`;
    }

    // Fallback — unsupported link type
    return null;
  } catch {
    return null;
  }
}
