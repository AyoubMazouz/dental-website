import useBlog from "../../hooks/useBlog"
import Hero from "../../components/Hero"
import Blogcard from "./components/Blogcard"

export default function Blogs() {
	const { blogs } = useBlog()

	return (
		<>
			<Hero title="Blogs" />
			<div className="flex w-full justify-center pb-8 text-gray">
				<div className="page-padding max-width space-y-4">
					{blogs && blogs.map((blog) => <Blogcard {...blog} />)}
				</div>
			</div>
		</>
	)
}
