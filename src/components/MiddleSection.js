import Card from "./Cards";
import { ReactComponent as GrowTogether } from "../svgs/illustration-grow-together.svg";
import { ReactComponent as FloweringConv } from "../svgs/illustration-flowing-conversation.svg";
import { ReactComponent as YourUsers } from "../svgs/illustration-your-users.svg";
import { motion, useInView } from "framer-motion";

import { useRef } from "react";
const cardData = [{
    title: "Grow Together",
    content: "Generate meaningful discussions with your audience and build a strong, loyal community. Think of the insightful conversations you miss out on with a feedback form.",
    img: <GrowTogether />
},
{
    title: "Flowing Conversations",
    content: "You wouldn't paginate a conversation in real life, so why do it online? Our threads have just-in-time loading for a more natural flow.",
    img: <FloweringConv />
},
{
    title: "Your Users",
    content: "It takes no time at all to integrate Huddle with your app's authentication solution. This means, once signed in to your app, your users can start chatting immediately.",
    img: <YourUsers />
}]


const MiddleSection = ({isInView}) => {
    const ref = useRef(null);
    const cardisInView = useInView(ref, { margin: "130px 100px 0px" } , { once: true});
    return (
        <motion.div ref={ref} style={{translateX : isInView ? 0 : 1, zIndex: 1}} className="middle-section">
            <Card cardisInView={cardisInView} cardData={cardData[0]} type="left" />
            <Card cardisInView={cardisInView}  cardData={cardData[1]} type="right" />
            <Card cardisInView={cardisInView}  cardData={cardData[2]} type="left" />
            <motion.div className="build-community-card" initial={{ y: 200, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ delay: 0.3, duration: 0.8 }}>
                <h1>
                    Ready To Build Your Community?
                </h1>
                <motion.button whileHover={{
                    opacity: 0.4
                }}>
                    Get Started For Free
                </motion.button>
            </motion.div>

        </motion.div>
    )

}

export default MiddleSection;