// React Imports.
import { useState } from "react"
// Components Imports.
import Hero from "../../components/Hero"
import VideoModel from "../../components/VideoModel"
// Data Imports.
import { videos } from "../../data"

export default function Videos() {
	// Selected Image to Display on the Model.
	const [selected, setSelected] = useState(null)
	// How Many Images to Show At Once.
	const [eleAtOnce, setEleAtOnce] = useState(25)

	return (
		<>
			<Hero title="Videos" parent="Gallery" />
			{typeof selected === "number" && (
				<VideoModel
					currIndex={selected}
					docs={videos}
					setSelected={setSelected}
				/>
			)}
			{/* Videos Gallery */}
			<div className="mb-[6rem] grid justify-center">
				<div className="max-width flex flex-wrap justify-center gap-4">
					{/* Map trough the Array of Videos urls and Only Display the Allowed Numnber of Videos */}
					{videos?.length &&
						videos.map((url, index) =>
							index < eleAtOnce ? (
								<div key={url} className="overflow-hidden rounded-lg">
									<img
										src={"//img.youtube.com/vi/" + url + "/0.jpg"}
										onClick={() => setSelected(index)}
										className="aspect-video w-[338px] select-none object-cover transition-transform duration-500 hover:scale-110"></img>
								</div>
							) : null
						)}
				</div>
				{/* Load More Button */}
				{videos.length > eleAtOnce ? (
					<div className="mt-[3rem] grid justify-center">
						<button
							onClick={() => setEleAtOnce((prev) => prev + 10)}
							className="submit-btn">
							Charger plus
						</button>
					</div>
				) : (
					<div className="h-[6rem]"></div>
				)}
			</div>
		</>
	)
}
