// React Imports.
import { useState } from "react"
// Components Imports.
import Hero from "../../components/Hero"
import Slider from "./components/Slider"
// Data Imports.
import { beforeAndAfter } from "../../data"

export default function BeforeAndAfterGallery() {
	// How Many Images to Show At Once.
	const [eleAtOnce, setEleAtOnce] = useState(25)

	return (
		<div>
			<Hero title="Before and after" parent="Gallery" />
			{/* Image Gallery */}
			<div className="mb-[6rem] grid justify-center">
				<div className="max-width flex flex-wrap justify-center gap-4">
					{/* Map trough the Array of Images and Only Display the Allowed Numnber of Images */}
					{beforeAndAfter.map(
						([before, after], index) =>
							index < eleAtOnce && (
								<div
									key={before}
									className="aspect-video h-[190px] overflow-hidden rounded-lg">
									<Slider id={before} before={before} after={after} />
								</div>
							)
					)}
				</div>
				{/* Load More Button */}
				{beforeAndAfter.length > eleAtOnce ? (
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
		</div>
	)
}
