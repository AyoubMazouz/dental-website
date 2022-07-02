// React Router Dom Imports.
import { Link } from "react-router-dom"

export default function Hero({ imgURL, parent, title, description }) {
	return (
		<div className="relative flex min-h-[300px] w-full justify-center overflow-hidden">
			{imgURL && (
				<img
					src={imgURL}
					alt={title}
					className="h-[65vh] w-[99.14vw] object-cover"
				/>
			)}
			<div
				className={`page-padding absolute top-0 flex h-full w-full flex-col items-center justify-end text-sm ${
					imgURL
						? "bg-gradient-to-t from-[rgba(0,0,0,0.8)] via-[rgba(0,0,0,0.6)] to-transparent text-light lg:via-transparent"
						: "text-gray"
				}`}>
				<div className="w-full max-w-[1800px] space-y-6 py-12">
					<div className="flex gap-x-2">
						<Link
							to="/"
							className="transition-all duration-300 hover:underline hover:opacity-75">
							home
						</Link>
						{parent && (
							<>
								<span>{">"}</span>
								<Link
									to={"/" + parent.replace(" ", "-").toLowerCase()}
									className="transition-all duration-300 hover:underline hover:opacity-75">
									{parent}
								</Link>
							</>
						)}
						<span>{">"}</span>
						<span className="underline">{title}</span>
					</div>
					<h1 className={!description && "text-primary"}>{title}</h1>
					<p>{description}</p>
				</div>
			</div>
		</div>
	)
}

//
