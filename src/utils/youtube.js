export function convertYouTubeUrlToEmbed(url) {
  try {
    const urlObj = new URL(url);
    const hostname = urlObj.hostname;

    let videoId = "";
    if (hostname.includes("youtube.com") && urlObj.searchParams.get("v")) {
      videoId = urlObj.searchParams.get("v");
    } else if (hostname === "youtu.be") {
      videoId = urlObj.pathname.slice(1);
    } else {
      return url;
    }

    let startParam = "";
    const tParam = urlObj.searchParams.get("t") || urlObj.searchParams.get("start");
    if (tParam) {
      const secondsMatch = tParam.match(/^(\d+)s?$/);
      if (secondsMatch) {
        startParam = `?start=${secondsMatch[1]}`;
      }
    }

    return `https://www.youtube.com/embed/${videoId}${startParam}`;
  } catch {
    return url;
  }
}
