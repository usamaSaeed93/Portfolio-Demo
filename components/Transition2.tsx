'use client'
import {motion} from 'framer-motion'
import { useRef,useState } from 'react';
import React from 'react'
import Middle from './Middle';

function Transition2() {
    const variants = {
        visible: { opacity: 1 },
        hidden: { opacity: 0 },
      }
    const nodeRef = useRef(null);
    const [inProp, setInProp] = useState(true);
  return (
   
<div>
<motion.div
  
  whileInView={{ opacity: 1,scale:1 ,x:-25,y:-20 }}
  viewport={{ once: true }}
  initial={{opacity:0,scale:0.5}}
  transition={{ ease: "easeIn", duration: 0.5,bounce:0.5 }}
>
    <Middle />
</motion.div>

    </div>
  )
}

export default Transition2






