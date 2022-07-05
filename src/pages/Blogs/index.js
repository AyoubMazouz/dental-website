// React Imports.
import { useState } from "react"
// Hooks Imports.
import useBlog from "../../hooks/useBlog"
// Components Imports.
import Hero from "../../components/Hero"
import BlogCard from "./components/BlogCard"

export default function Blogs() {
	const { blogs } = useBlog()
	// How Many Blogs to Show At Once.
	const [eleAtOnce, setEleAtOnce] = useState(10)

	return (
		<>
			<Hero title="Blogs" />
			<div className="flex w-full flex-col items-center pb-8 text-gray">
				<div className="page-padding max-width space-y-4">
					{blogs &&
						blogs.map((blog, i) => i < eleAtOnce && <BlogCard {...blog} />)}
				</div>
				{blogs?.length > eleAtOnce && (
					<button
						onClick={() => setEleAtOnce((prev) => prev + 10)}
						className="submit-btn my-4">
						Load More
					</button>
				)}
			</div>
		</>
	)
}
