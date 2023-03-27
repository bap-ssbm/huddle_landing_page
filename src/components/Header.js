import { ReactComponent as Logo } from "../svgs/logo.svg";
import { motion } from "framer-motion";

const opacityVaritant = {
    hidden:{
        y: -200,
        opacity:0
    },
    visible:{
        opacity:1,
        y:0,
        transition:{
            duration:1
        }
    }
}

const Footer = () => {
    return (
        <div className="header">
            <motion.div className = "logo" variants={opacityVaritant} initial="hidden" animate="visible">
                <Logo />
            </motion.div>
            <motion.div className="header-btn-wrapper" variants={opacityVaritant} initial="hidden" animate="visible">
                <motion.button whileHover={{ opacity: 0.5 }}>
                    Try It Free
                </motion.button>
            </motion.div>
        </div>
    )

}

export default Footer;