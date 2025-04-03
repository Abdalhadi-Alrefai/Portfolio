import React from 'react'
import { motion } from "framer-motion";


const Icons = ({url,icon}) => {
  return (
    <motion.a whileHover={{scale : 1.5}} whileTap={{scale : 0.9}} href={url} target='_blank'>
      <img src={icon} alt="" />
    </motion.a>
  )
}

export default Icons
