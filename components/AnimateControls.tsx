"use client";

import React from 'react'
import { Button } from "./ui/button"
import { motion, useAnimationControls } from "framer-motion"

const AnimateControls = () => {
  const controls = useAnimationControls()

  const handleClick = () => {
    controls.start("flip")
  }

  return (
    <div>
      <Button
        onClick={handleClick}
        className="w-full mb-3 text-lg"
      >
        Flip
      </Button>
      <motion.div
        variants={{
          initial: {
            rotate: "0deg",
          },
          flip: {
            rotate: "360deg"
          }
        }}
        initial="initial"
        animate={controls}
        className="size-[250px] rounded-2xl bg-blue-400"
      ></motion.div>
    </div>
  )
}

export default AnimateControls
