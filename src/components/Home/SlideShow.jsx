import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion";
import { wrap } from "popmotion"



const SlideShow = ({ images, index, setIndex, autoScroll, timeInterval }) => {

  let timer;

  useEffect( () => {
    timer = setTimeout(() => {
      if (autoScroll) setIndex(index === images.length - 1 ? 0 : index + 1)
    }, timeInterval)
    return () => clearTimeout(timer)
  }, [index])

  
  return <img src={images[index]} alt="" className="object-cover" />
}

export default SlideShow