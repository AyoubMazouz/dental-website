import React from "react"
import { useState } from "react"

export default function useResizeImage() {
	const resizeImageToDataUrl = (file, size) => {
		const reader = new FileReader()

		reader.onload = (e) => {
			const img = document.createElement("img")
			img.src = e.target.result

			img.onload = () => {
				// Dynamically create a canvas element
				const canvas = document.createElement("canvas")
				canvas.width = size
				canvas.height = (size * (img.height / img.width)) | 0
				const ctx = canvas.getContext("2d")
				// Actual resizing
				ctx.drawImage(img, 0, 0, canvas.width, canvas.height)
				return canvas.toDataURL()
			}
		}
		reader.readAsDataURL(file)
	}
	return { resizeImageToDataUrl }
}
