"use client";

import React, { useState } from 'react'
import { Button } from "./ui/button";
import { motion, AnimatePresence } from "framer-motion";

const BasicMotions = () => {
  const [isVisible, setIsVisible] = useState(true);

  return (
    <div className="gap-12 flex flex-row-reverse items-center justify-center">
      <motion.div layout>
        <Button onClick={() => setIsVisible(!isVisible)}>
          Show/Hide
        </Button>
      </motion.div>
      <AnimatePresence mode="popLayout">
        {
          isVisible && (
            <motion.div
              initial={{
                rotate: "0deg",
                scale: 0,
                y: 0,
              }}
              animate={{
                rotate: "180deg",
                scale: 1,
                y: [0, 150, -150, -150, 0],
              }}
              exit={{
                rotate: "0deg",
                scale: 0,
                y: 0,
              }}
              transition={{
                duration: 1,
                ease: "backInOut",
                times: [0, 0.25, 0.85, 1],
              }}
              className="size-[200px] rounded-xl bg-blue-400"
            >
            </motion.div>
          )
        }
      </AnimatePresence>
    </div>
  )
}

export default BasicMotions
