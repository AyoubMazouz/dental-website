// React Imports.
import { useState } from "react"
// Hooks Imports.
import useDoc from "../../hooks/useDoc"
// Components Imports.
import Hero from "../../components/Hero"
import Slider from "./components/Slider"

export default function BeforeAndAfterGallery() {
	// How Many Images to Show At Once.
	const [elementsAtOnce, setElementsAtOnce] = useState(20)
	// Images From db.
	const { document } = useDoc("gallery", "before_and_after")
	return (
		<div>
			<Hero title="Before and after" parent="Gallery" />
			{/* Image Gallery */}
			<div className="mb-[6rem] grid justify-center">
				<div className="max-width flex flex-wrap justify-center gap-4">
					{/* Map trough the Array of Images and Only Display the Allowed Numnber of Images */}
					{Object.entries(document).map(
						([alt, [before, after]], index) =>
							index < elementsAtOnce && (
								<div
									key={alt}
									className="aspect-video h-[190px] overflow-hidden rounded-lg">
									<Slider id={alt} alt={alt} before={before} after={after} />
								</div>
							)
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
		</div>
	)
}
