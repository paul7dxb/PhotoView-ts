import { ImageInfo } from "../util/imageFunctions";
import { PhotoViewer } from "./PhotoViewer";

interface GalleryProps {
	images: ImageInfo[];
    onClickHandler: (url: string) => void;
}

export function PhotoGallery({ images, onClickHandler }: GalleryProps) {
	return (
		<>
			{images.map((img: ImageInfo) => (
				<>
					<PhotoViewer
						key={img.id}
						imgSrc={img.imgUrl}
						onClickHandler={onClickHandler}
					/>
				</>
			))}
		</>
	);
}
