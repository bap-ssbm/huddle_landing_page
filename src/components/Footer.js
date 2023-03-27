import { ReactComponent as Logo } from "../svgs/logo.svg";
import { ReactComponent as Location } from "../svgs/icon-location.svg";
import { ReactComponent as Phone } from "../svgs/icon-phone.svg";
import { ReactComponent as Email } from "../svgs/icon-email.svg";
import { motion, useScroll, useTransform } from "framer-motion";

const linkVariant = {
    hover:{
        textDecoration: 'underline'
    }
}

const iconBorderVariant = {
    hover:{
        borderColor: "hsl(322, 100%, 66%)",
        color: "hsl(322, 100%, 66%)"
    }
}

const Footer = () => {
    const { scrollYProgress } = useScroll();
    let opacity = useTransform(scrollYProgress, [0.6, 0.9], [0, 1]);
   
    return (
        <motion.div className="footer" style={{ opacity: opacity, zIndex:0}}>
            <div className="footer-logo">
                <Logo />
            </div>
            <div className="footer-wrapper">


                <div className="footer-left">

                    <div>
                        <div className="icon-wrapper">
                            <Location />
                        </div>

                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                            incididunt ut labore et dolore magna aliqua
                        </p>

                    </div>
                    <div>
                        <div className="icon-wrapper">
                            <Phone />
                        </div>

                        <p>
                            +1-543-123-4567
                        </p>
                    </div>
                    <div>
                        <div className="icon-wrapper">
                            <Email />
                        </div>

                        <p>
                            example@huddle.com
                        </p>

                    </div>


                </div>
                <div className="footer-mid">
                    <div>
                        <motion.a variants={linkVariant} whileHover="hover">About Us</motion.a>
                        <motion.a variants={linkVariant} whileHover="hover">What We Do</motion.a>
                        <motion.a variants={linkVariant} whileHover="hover">FAQ</motion.a>
                    </div>
                    <div>
                        <motion.a variants={linkVariant} whileHover="hover">Career</motion.a>
                        <motion.a variants={linkVariant} whileHover="hover">Blog</motion.a>
                        <motion.a variants={linkVariant} whileHover="hover">Contact Us</motion.a>
                    </div>



                </div>
                <div className="footer-right">
                    <div className="social-icons">
                        <motion.div className="icon-circle" variants={ iconBorderVariant} whileHover="hover" >
                            <motion.i class="fa-brands fa-facebook-f"></motion.i>
                        </motion.div>
                        <motion.div className="icon-circle" variants={ iconBorderVariant} whileHover="hover">
                            <motion.i class="fa-brands fa-twitter"></motion.i>
                        </motion.div>
                        <motion.div className="icon-circle" variants={ iconBorderVariant} whileHover="hover">
                            <motion.i class="fa-brands fa-instagram"></motion.i>
                        </motion.div>
                    </div>
                    <p className="copyright">
                        &copy; Copyright 2018 Huddle. All rights reserved.
                    </p>
                </div>



            </div>
        </motion.div>
    )

}

export default Footer;
