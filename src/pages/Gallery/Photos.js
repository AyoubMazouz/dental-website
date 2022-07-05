// React Imports.
import { useState } from "react"
// Hooks Imports.
import useDoc from "../../hooks/useDoc"
// Components Imports.
import ImageModel from "./components/ImageModel"
import Hero from "../../components/Hero"

export default function Photos() {
	// Selected Image to Display on the Model.
	const [selected, setSelected] = useState(null)
	// How Many Images to Show At Once.
	const [eleAtOnce, setEleAtOnce] = useState(25)
	// Images From db.
	const { document } = useDoc("gallery", "photos")
	return (
		<>
			<Hero title="Photos" parent="Gallery" />
			{typeof selected === "number" && (
				<ImageModel
					currIndex={selected}
					docs={document}
					setSelected={setSelected}
				/>
			)}
			{/* Image Gallery */}
			<div className="mb-[6rem] grid justify-center">
				<div className="max-width flex flex-wrap justify-center gap-4">
					{/* Map trough the Array of Images and Only Display the Allowed Numnber of Images */}
					{Object.entries(document).map(([alt, url], index) =>
						index < eleAtOnce ? (
							<div key={alt} className="overflow-hidden rounded-lg">
								<img
									src={url}
									alt={alt}
									onClick={() => setSelected(index)}
									className="h-[220px] w-[332px] select-none object-cover transition-transform duration-500 hover:scale-110"></img>
							</div>
						) : null
					)}
				</div>
				{/* Load More Button */}
				{Object.keys(document).length > eleAtOnce ? (
					<div className="mt-[3rem] grid justify-center">
						<button
							onClick={() => setEleAtOnce((prev) => prev + 10)}
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
