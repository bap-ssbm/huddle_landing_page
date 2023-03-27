import Header from "./Header";
import TopSection from "./TopSection";
import MiddleSection from "./MiddleSection";
import Footer from "./Footer";
import { ReactComponent as BgSvg } from "../svgs/bg-hero-desktop.svg";
import { ReactComponent as BgSvgMobile } from "../svgs/bg-hero-mobile.svg";
import { useState, useEffect, useRef } from "react";
import { motion, useScroll,useTransform, useInView } from "framer-motion";


function App() {
  const [viewportWidth, setViewportWidth] = useState(window.innerWidth);
  useEffect(() => {
      function handleResize() {
          setViewportWidth(window.innerWidth);
      }

      window.addEventListener('resize', handleResize);

      return () => window.removeEventListener('resize', handleResize);
  }, []);
  const ref = useRef(null);
  
  const isInView = useInView(ref, { margin: "-650px 0px 0px 0px" } , { once: true});
  return (
    <motion.div className="App">

      <motion.div className="header-top-section" ref={ref}>
        <Header></Header>
        <TopSection ></TopSection>
      </motion.div>
      <MiddleSection isInView={isInView}></MiddleSection>
      <Footer viewportWidth={viewportWidth}></Footer>
      <div className="bg-img">
        {viewportWidth>768&&viewportWidth<1440?<BgSvg />:<BgSvgMobile/>}
      </div>
    </motion.div>
  );
}

export default App;
