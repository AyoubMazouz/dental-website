// React Imports.
import { useState } from "react"
// Hooks Imports.
import useDoc from "../../hooks/useDoc"
// Components Imports.
import ImageModel from "../../components/ImageModel"
import Hero from "../../components/Hero"

export default function Photos() {
	// Selected Image to Display on the Model.
	const [selected, setSelected] = useState(null)
	// How Many Images to Show At Once.
	const [elementsAtOnce, setElementsAtOnce] = useState(20)
	// Images From db.
	const { document } = useDoc("gallery", "photos")
	const heroValues = {
		currentPage: {
			label: "Photos",
			parent: {
				label: "Gallery",
				link: "/gallery",
			},
		},
		title: "Photos",
	}
	return (
		<div>
			{/* Hero Section */}
			<Hero {...heroValues} />
			{typeof selected === "number" && (
				<ImageModel
					currIndex={selected}
					docs={document}
					setSelected={setSelected}
				/>
			)}
			{/* Image Gallery */}
			<div className="grid justify-center mb-[6rem]">
				<div className="flex flex-wrap gap-4 justify-center max-width">
					{/* Map trough the Array of Images and Only Display the Allowed Numnber of Images */}
					{Object.entries(document).map((doc, index) =>
						index < elementsAtOnce ? (
							<div key={doc[0]} className="overflow-hidden rounded-lg">
								<img
									src={doc[1]}
									alt={doc[0]}
									onClick={() => setSelected(index)}
									className="w-[332px] h-[220px] object-cover hover:scale-110 transition-transform duration-500 select-none"></img>
							</div>
						) : null
					)}
				</div>
				{/* Load More Button */}
				{Object.keys(document).length > elementsAtOnce ? (
					<div className="grid justify-center mt-[3rem]">
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
		</div>
	)
}
