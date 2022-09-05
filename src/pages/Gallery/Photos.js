// React Imports.
import { useState } from "react"
// Components Imports.
import ImageModel from "./components/ImageModel"
import Hero from "../../components/Hero"
import { photos } from "../../data/"

export default function Photos() {
	// Selected Image to Display on the Model.
	const [selected, setSelected] = useState(null)
	// How Many Images to Show At Once.
	const [eleAtOnce, setEleAtOnce] = useState(25)
	return (
		<>
			<Hero title="Photos" parent="Gallery" />
			{typeof selected === "number" && (
				<ImageModel
					currIndex={selected}
					docs={photos}
					setSelected={setSelected}
				/>
			)}
			{/* Image Gallery */}
			<div className="mb-[6rem] grid justify-center">
				<div className="max-width flex flex-wrap justify-center gap-4">
					{/* Map trough the Array of Images and Only Display the Allowed Numnber of Images */}
					{photos.map((url, index) =>
						index < eleAtOnce ? (
							<div key={url} className="overflow-hidden rounded-lg">
								<img
									src={url}
									onClick={() => setSelected(index)}
									className="h-[220px] w-[332px] select-none object-cover transition-transform duration-500 hover:scale-110"></img>
							</div>
						) : null
					)}
				</div>
				{/* Load More Button */}
				{photos?.length > eleAtOnce ? (
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
