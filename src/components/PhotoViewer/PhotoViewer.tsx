// import React from 'react'
import "./PhotoViewer.css";

interface PhotoViewerProps {
	imgSrc?: string;
	onClickHandler: (url: string) => void;
}

export function PhotoViewer({ imgSrc, onClickHandler }: PhotoViewerProps) {
	return (
		<>
			{imgSrc ? (
				<img
					onClick={() => onClickHandler(imgSrc)}
					className="picture"
					src={imgSrc}
					alt="An image from Lorem Picsum"
				/>
			) : (
				<p>No Image source</p>
			)}
		</>
	);
}
