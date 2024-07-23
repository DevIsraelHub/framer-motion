"use client";

import React from 'react'
import { Button } from "./ui/button"
import { motion, MotionConfig } from "framer-motion"

const Gestures = () => {
  return (
    <div>
      Gestures
      <MotionConfig
        transition={{
          duration: 0.125,
          ease: "easeInOut"
        }}
      >
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9, rotate: "2.5deg" }}
          className="mb-3"
        >
          <Button>
            Click me
          </Button>
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9, rotate: "2.5deg" }}
        >
          <Button variant="destructive">
            Click me
          </Button>
        </motion.div>
      </MotionConfig>
    </div>
  )
}

export default Gestures
