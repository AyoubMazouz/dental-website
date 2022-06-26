export const getThumbnailFromUrl = (url) => {
	// Take Youtube Video URL and get the Id.
	// Then Create URL for the Video Image.
	const VideoId = url.match(/youtube\.com.*(\?v=|\/embed\/)(.{11})/)?.pop()
	if (VideoId?.length == 11) {
		return "//img.youtube.com/vi/" + VideoId + "/0.jpg"
	}
}
