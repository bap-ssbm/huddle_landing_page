
import { ReactComponent as MockupsSvg } from "../svgs/illustration-mockups.svg";
import { useRef } from "react";
import {
    motion,
    useScroll,

    useTransform

} from "framer-motion";

const buttonVariant = {
    hover: {
        opacity: 0.4
    }
}

const wrapperVaritant = {
    hidden: {
        opacity: 0
    },
    visible: {
        opacity: 1,
        transition: {
            duration: 1,
            staggerChildren: 1
        }
    }
}


const descVariant = {
    hidden: {
        opacity: 0
    },
    visible: {
        opacity: 1,
        transition: {
            duration: 1,
            delay: 2,
            staggerChildren: 2
        }
    }
}
const opacityVaritant = {
    hidden: {
        opacity: 0
    },
    visible: {
        opacity: 1
    }
}

const imgVariant = {
    hidden: {
        x: "30%",
        opacity: 0
    },
    visible: {
        x: 0,
        opacity: 1,
        transition: {
            duration: 1,
            delay: 1
        }
    }
}

const TopSection = () => {
    const { scrollYProgress } = useScroll();
    let y = useTransform(scrollYProgress, [0, 1], ["0vh", "-100vh"]);
    let opacity = useTransform(scrollYProgress, [0, .3], [1, 0]);
   

    return (
        <motion.div  className="top-section" variants={wrapperVaritant} initial="hidden" animate="visible" >
            <motion.div style={{y: y, opacity: opacity}} className="top-section-cta" variants={descVariant} >
            
                <motion.h1 key={0} variants={opacityVaritant}>
                    Build The Community Your Fans Will Love
                </motion.h1>
                <motion.p key={1} variants={opacityVaritant}>
                    Huddle re-imagines the way we build communities. You have a voice, but so does your audience.
                    Create connections with your users as you engage in genuine discussion.
                </motion.p>
                <motion.button variants={buttonVariant} whileHover="hover">
                    Get Started For Free
                </motion.button>
            </motion.div>
            <motion.div style={{y: y, opacity: opacity}} className="top-section-img" variants={imgVariant}>
                <MockupsSvg />
            </motion.div>

        </motion.div>
    )

}

export default TopSection;