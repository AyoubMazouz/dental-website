// React Imports.
import { useEffect, useState } from "react"
// React Router Dom Imports.
import { useParams, Link } from "react-router-dom"
// Swiperjs Imports.
import { Swiper, SwiperSlide } from "swiper/react"
import { FreeMode, Scrollbar, Pagination } from "swiper"
// Hooks Imports.
import useDoc from "../../hooks/useDoc"
// Components Imports.
import Hero from "../../components/Hero"
import ImageModel from "./components/ImageModel"
import VideoModel from "../../components/VideoModel"
import Slider from "./components/Slider"
//  Pages Imports.
import Photos from "./Photos"
import Videos from "./Videos"
import BeforeAndAfter from "./BeforeAndAfter"
import Page404 from "../Page404"
// Utilities Imports.
import { getThumbnailFromUrl } from "../../util/video"
// Icon Imports.
import { LinkArrowIC } from "../../data/icons.data"

export default function Gallery() {
	const { mediaPage } = useParams()
	const [page, setPage] = useState(null)

	const pages = {
		photos: <Photos />,
		videos: <Videos />,
		before_and_after: <BeforeAndAfter />,
	}

	useEffect(() => {
		if (Object.keys(pages).includes(mediaPage)) {
			setPage(pages[mediaPage])
		} else setPage(<Page404 />)
	}, [mediaPage])

	// Images From db.
	const { document: photosDocs } = useDoc("gallery", "photos")
	// Selected Image to Display on the Model.
	const [photoModel, setPhotoModel] = useState(null)
	// Number of Images to show.
	const IMG_AT_ONCE = 20

	// Video Url From db.
	const { document: videosDocs } = useDoc("gallery", "videos")
	// Selected Video to Display on the Model.
	const [videoModel, setVideoModel] = useState(null)

	// Images From db.
	const { document: beforeAndAfterDocs } = useDoc("gallery", "before_and_after")
	const BEFORE_AND_AFTER_AT_ONCE = 4

	if (mediaPage?.length > 0) return page
	return (
		<>
			<Hero title="Gallery" />
			{/* Photo Model */}
			{typeof photoModel === "number" && (
				<ImageModel
					currIndex={photoModel}
					docs={photosDocs}
					setSelected={setPhotoModel}
				/>
			)}
			{typeof videoModel === "number" && (
				<VideoModel
					currIndex={videoModel}
					docs={videosDocs}
					setSelected={setVideoModel}
				/>
			)}
			<div className="mb-20 grid w-full justify-center">
				<div className="page-padding max-width">
					{/* Photos */}
					<div className="mb-4 flex items-center justify-between">
						<h1 className="font-bold text-primary">Photos</h1>
						<Link
							to="photos"
							className="link flex items-center gap-x-2 py-3 font-bold">
							<p>More</p>
							<LinkArrowIC className="text-4xl text-accent" />
						</Link>
					</div>
					<Swiper
						modules={[Scrollbar, FreeMode, Pagination]}
						grabCursor
						spaceBetween={10}
						slidesPerView={"auto"}
						pagination={{ clickable: true }}
						className="h-[190px] overflow-hidden rounded-lg">
						{photosDocs &&
							Object.entries(photosDocs).map(([alt, url], index) => {
								if (IMG_AT_ONCE > index)
									return (
										<SwiperSlide
											key={alt}
											className="max-h-[190px] max-w-[340px] overflow-hidden rounded-md">
											<img
												src={url}
												alt={alt}
												onClick={() => setPhotoModel(index)}
												className="h-full w-full object-cover"
											/>
										</SwiperSlide>
									)
								if (index === IMG_AT_ONCE + 1)
									return (
										<SwiperSlide
											key={alt}
											className="relative max-h-[190px] max-w-[340px] overflow-hidden rounded-md">
											<img
												src={url}
												alt={alt}
												className="h-full w-full object-cover"
											/>
											<Link
												to="photos"
												className="absolute top-0 grid h-full w-full place-items-center bg-black/75 text-lg font-semibold text-white">
												{`${
													Object.keys(photosDocs).length - IMG_AT_ONCE
												}+ More`}
											</Link>
										</SwiperSlide>
									)
							})}
					</Swiper>
					{/* Videos */}
					<div className="mb-4 mt-12 flex items-center justify-between">
						<h1 className="font-bold text-primary">Videos</h1>
						<Link
							to="photos"
							className="link flex items-center gap-x-2 py-3 font-bold">
							<p>More</p>
							<LinkArrowIC className="text-4xl text-accent" />
						</Link>
					</div>
					<Swiper
						modules={[Scrollbar, FreeMode, Pagination]}
						grabCursor
						spaceBetween={10}
						slidesPerView={"auto"}
						pagination={{ clickable: true }}
						className="h-[190px] overflow-hidden rounded-lg">
						{videosDocs &&
							Object.entries(videosDocs).map(([id, url], index) => {
								if (IMG_AT_ONCE > index)
									return (
										<SwiperSlide
											key={id}
											className="max-h-[190px] max-w-[340px] overflow-hidden rounded-md">
											<img
												src={getThumbnailFromUrl(url)}
												alt={id}
												onClick={() => setVideoModel(index)}
												className="h-full w-full object-cover"
											/>
										</SwiperSlide>
									)
								if (index === IMG_AT_ONCE + 1)
									return (
										<SwiperSlide
											key={id}
											className="relative max-h-[190px] max-w-[340px] overflow-hidden rounded-md">
											<img
												src={getThumbnailFromUrl(url)}
												alt={id}
												className="h-full w-full object-cover"
											/>
											<Link
												to="videos"
												className="absolute top-0 grid h-full w-full place-items-center bg-black/75 text-lg font-semibold text-white">
												{`${
													Object.keys(videosDocs).length - IMG_AT_ONCE
												}+ More`}
											</Link>
										</SwiperSlide>
									)
							})}
					</Swiper>
					{/* Before And After */}
					<div className="mb-4 mt-12 flex items-center justify-between">
						<h1 className="font-bold text-primary">Before And After</h1>
						<Link
							to="before_and_after"
							className="link flex items-center gap-x-2 py-3 font-bold">
							<p>More</p>
							<LinkArrowIC className="text-4xl text-accent" />
						</Link>
					</div>
					<div className="flex flex-wrap justify-around gap-2">
						{/* Map trough the Array of Images and Only Display the Allowed Numnber of Images */}
						{Object.entries(beforeAndAfterDocs).map(
							([alt, [before, after]], index) => {
								if (index < BEFORE_AND_AFTER_AT_ONCE)
									return (
										<div
											key={alt}
											className="aspect-video h-[190px] overflow-hidden rounded-lg">
											<Slider
												id={alt}
												alt={alt}
												before={before}
												after={after}
											/>
										</div>
									)

								if (index === BEFORE_AND_AFTER_AT_ONCE + 1)
									return (
										<div
											key={alt}
											className="relative aspect-video h-[190px] overflow-hidden rounded-lg">
											<Slider
												id={alt}
												alt={alt}
												before={before}
												after={after}
											/>
											<Link
												to="before_and_after"
												className="absolute top-0 grid h-full w-full place-items-center bg-black/75 text-lg font-semibold text-white">
												{`${
													Object.keys(beforeAndAfterDocs).length -
													BEFORE_AND_AFTER_AT_ONCE
												}+ More`}
											</Link>
										</div>
									)
							}
						)}
					</div>
				</div>
			</div>
		</>
	)
}
