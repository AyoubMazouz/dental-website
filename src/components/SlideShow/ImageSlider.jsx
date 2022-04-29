import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion";


const SlideShow = ({ images, index, setIndex, autoScroll, timeInterval }) => {

  let timer;

  useEffect( () => {
    timer = setTimeout(() => {
      if (autoScroll) setIndex(index === images.length - 1 ? 0 : index + 1)
    }, timeInterval)
    return () => clearTimeout(timer)
  }, [index])

  
  return (
    images.map((img, id) => (
      index === id && <img key={id} src={img.img} alt={img.alt} className="object-cover" />
    ))
  )
}

export default SlideShow