export default function Card({ name, img, profession }) {
	return (
		<div className="relative h-[22rem] w-[18rem] overflow-hidden rounded-xl text-primary shadow-lg">
			{/* Image */}
			<img
				src={img}
				alt={name}
				className="aspect-1 h-full w-full object-cover"
			/>
			<div className="absolute bottom-0 w-full bg-light px-6 py-6">
				{/* Name */}
				<h3 className="text-center text-lg font-bold">{name}</h3>
				{/* Profession */}
				<h3 className="text-center text-lg">{profession}</h3>
			</div>
		</div>
	)
}
