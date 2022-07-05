import { Link } from "react-router-dom"
import { LinkArrowIC } from "../../../data/icons.data"

export default function Blogcard({
	blogId,
	title,
	description,
	imgURL,
	createdAt,
	author,
}) {
	let lastUpdate = createdAt.toDate(),
		day = lastUpdate.getDay(),
		month = lastUpdate.getMonth(),
		year = lastUpdate.getFullYear()

	day = day > 9 ? day : `0${day}`
	month = month > 9 ? month : `0${month}`
	lastUpdate = `${day}/${month}/${year}`

	console.log()

	return (
		<div className="flex h-[280px] overflow-hidden rounded-lg shadow-lg">
			<div className="h-full w-full max-w-[480px]">
				<img src={imgURL} alt={title} className="h-full w-full object-cover" />
			</div>
			<div className="relative h-full w-full rounded-lg rounded-l-none border-2 border-l-0 border-gray/25 p-4">
				<Link to={blogId}>
					<h3 className="my-2 capitalize text-primary">{title}</h3>
				</Link>
				<p className="text-blog-card">{description}</p>
				<div className="absolute bottom-4 w-full pr-12 text-sm">
					<div className="flex justify-between">
						<div>
							<div>
								<span className="font-semibold">Author: </span>
								{author}
							</div>
							<div className="font-semibold text-secondary opacity-75">
								{lastUpdate}
							</div>
						</div>
						<Link
							to={blogId}
							className="link flex items-center gap-x-1 text-base">
							Read More
							<LinkArrowIC className="text-3xl text-accent" />
						</Link>
					</div>
				</div>
			</div>
		</div>
	)
}
