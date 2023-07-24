export interface ImageInfo {
	id: string;
	imgUrl: string;
}

export function createImageUrls() {
	const images: ImageInfo[] = [];
	for (let i = 0; i < 50; i++) {
		images.push({
			id: `img${i}`,
			imgUrl: `https://picsum.photos/800/600?random=${i}`,
		});
	}

	return images;
}
