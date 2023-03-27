import {motion,
    useScroll,
   useInView, useTransform} from "framer-motion";
import { useRef } from "react";

const rightVariant = {
    hidden: {
        x: "-50%",
        opacity: 0
    },
    visible: {
        x: 0,
        opacity: 1
    }
}
const leftVariant = {
    hidden: {
        x: "50%",
        opacity:0
    },
    visible: {
        x: 0,
        opacity:1
    }
}
const Card = ({ cardData, type, cardisInView}) => {
  

 
    return (
        <motion.div className={"card " + "card-" + type} 
     
        variants={type === "left" ? leftVariant : rightVariant} 
        initial="hidden"
        whileInView="visible"
        transition={{duration: 1, delay:0.8}}
       
        viewport={{ once: true }}>
            <div className={"card-desc " + "desc-" + type}>
                <h2>
                    {cardData.title}
                </h2>
                <p>
                    {cardData.content}
                </p>
            </div>
            <div className={"card-img-wrapper " + "img-" + type}>
                {cardData.img}
            </div>

        </motion.div>
    )
}

export default Card;