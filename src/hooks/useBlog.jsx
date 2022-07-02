// React Imports.
import { useState, useEffect } from "react"
// React Router Dom Imports.
import { useParams } from "react-router-dom"
// Firebase Imports.
import { collection, doc, getDoc, getDocs } from "firebase/firestore"
import { db } from "../firebase"

export default function useBlog() {
	const { blogParam } = useParams()
	const [blogs, setBlogs] = useState(null)
	const [title, setTitle] = useState(null)
	const [imgURL, setImgURL] = useState(null)
	const [description, setDescription] = useState(null)
	const [markDown, setMarkDown] = useState(null)
	const [comments, setComments] = useState(null)

	useEffect(() => {
		// Get All Blogs.
		;(async () => {
			try {
				const blogsRes = await getDocs(collection(db, "blogs"))
				setBlogs(
					blogsRes.docs.map((doc) => {
						return { blogId: doc.id, ...doc.data() }
					})
				)
				if (blogParam) {
					// prettier-ignore
					const currBlog = blogsRes.docs.filter((doc) => doc.id === blogParam)[0]
					// const commentsRes = await getDoc(doc(db, "comments", currPathname))
					if (currBlog) {
						const blog = currBlog.data()
						setTitle(blog.title)
						setDescription(blog.description)
						setImgURL(blog.imgURL)
						setMarkDown(await fetch(blog.textURL).then((res) => res.text()))
					} else {
						setTitle(null)
						setDescription(null)
						setImgURL(null)
						setMarkDown(null)
					}
					// setComments(commentsRes.doc())
				}
			} catch (err) {
				console.log(err)
			}
		})()
	}, [blogParam])

	return {
		blogParam,
		blogs,
		markDown,
		comments,
		hero: {
			title,
			imgURL,
			description,
		},
	}
}
