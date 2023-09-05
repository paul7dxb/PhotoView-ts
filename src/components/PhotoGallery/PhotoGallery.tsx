import { ImageInfo } from "../../util/imageFunctions";
import { PhotoViewer } from "../PhotoViewer/PhotoViewer";
import "./PhotoGallery.css"

interface GalleryProps {
	images: ImageInfo[];
    onClickHandler: (url: string) => void;
}

export function PhotoGallery({ images, onClickHandler }: GalleryProps) {
	return (
		<div className="photo-gallery">
			{images.map((img: ImageInfo) => (
				
					<PhotoViewer
						key={img.id}
						imgSrc={img.imgUrl}
						onClickHandler={onClickHandler}
					/>

			))}
		</div>
	);
}
