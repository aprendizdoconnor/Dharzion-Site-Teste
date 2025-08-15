function toggleVideos(header) {
    const videos = header.nextElementSibling;
    if (videos.style.display === "flex") {
        videos.style.display = "none";
    } else {
        videos.style.display = "flex";
    }
}
