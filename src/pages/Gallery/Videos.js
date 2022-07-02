// React Imports.
import { useState } from "react"
// Hooks Imports.
import useDoc from "../../hooks/useDoc"
// Components Imports.
import Hero from "../../components/Hero"
import VideoModel from "../../components/VideoModel"
// Utilities Imports.
import { getThumbnailFromUrl } from "../../util/video"

export default function Videos() {
	// Selected Image to Display on the Model.
	const [selected, setSelected] = useState(null)
	// How Many Images to Show At Once.
	const [elementsAtOnce, setElementsAtOnce] = useState(20)
	// Images From db.
	const { document } = useDoc("gallery", "videos")

	return (
		<>
			<Hero title="Videos" parent="Gallery" />
			{typeof selected === "number" && (
				<VideoModel
					currIndex={selected}
					docs={document}
					setSelected={setSelected}
				/>
			)}
			{/* Videos Gallery */}
			<div className="mb-[6rem] grid justify-center">
				<div className="max-width flex flex-wrap justify-center gap-4">
					{/* Map trough the Array of Videos urls and Only Display the Allowed Numnber of Videos */}
					{document &&
						Object.entries(document).map(([id, url], index) =>
							index < elementsAtOnce ? (
								<div key={id} className="overflow-hidden rounded-lg">
									<img
										src={getThumbnailFromUrl(url)}
										alt={id}
										onClick={() => setSelected(index)}
										className="aspect-video w-[338px] select-none object-cover transition-transform duration-500 hover:scale-110"></img>
								</div>
							) : null
						)}
				</div>
				{/* Load More Button */}
				{Object.keys(document).length > elementsAtOnce ? (
					<div className="mt-[3rem] grid justify-center">
						<button
							onClick={() => setElementsAtOnce((prev) => prev + 10)}
							className="submit-btn">
							Load More
						</button>
					</div>
				) : (
					<div className="h-[6rem]"></div>
				)}
			</div>
		</>
	)
}
