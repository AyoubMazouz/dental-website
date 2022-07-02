import { Link } from "react-router-dom"
import useBlog from "../../hooks/useBlog"
import Hero from "../../components/Hero"

export default function Blogs() {
	const { blogs } = useBlog()

	return (
		<>
			<Hero title="Blogs" />
			<div className="flex w-full justify-center pb-8 text-gray">
				<div className="page-padding max-width space-y-4">
					{blogs &&
						blogs.map(({ blogId, title, description, imgURL, createdAt }) => (
							<div className="rounded-lg border-2 border-gray/25 p-4 shadow-lg">
								<Link to={blogId}>
									<h3 className="capitalize text-primary">{title}</h3>
								</Link>
								<p className="text-blog-card">{description}</p>
								<p>{createdAt.toString()}</p>
								<p></p>
							</div>
						))}
				</div>
			</div>
		</>
	)
}
