import NavBar from "./NavBar"
import useCard from "./Card"
import { AnimatePresence, motion } from "framer-motion"
import { useState } from "react";
export default function Home(){
    const {isdark,render} = useCard();
    const [showcomp , setshowcomp] = useState(true);
    function getRndInteger(min, max) {
        return Math.floor(Math.random() * (max - min) ) + min;
      }
    return(
        <>
            <AnimatePresence>
                {showcomp && (
                <motion.div 
                    animate = {{opacity:[0,0,1,1,1,1,0]}}
                    transition={{ ease: "easeInOut",duration: 4}}
                    initial = {{opacity:0}}
                    exit = {{opacity:0}}
                >
                    <div className=" justify-center flex italic items-center h-screen text-3xl font-medium">
                        <div className=" w-1/2 h-1/2">Live. Love. Laugh</div>
                    </div>
                    <div style={{opacity:0}}>{setTimeout(()=>{setshowcomp(false)},4000)}</div>
                </motion.div>)
                    }
                {!showcomp && (
                    <motion.div className= {`${isdark} h-screen bg-white flex justify-center items-center`}
                        animate={{ opacity:[0,1]}}
                        transition={{ ease: "easeIn",duration: 2}}
                        initial = {{opacity:0}}
                        exit = {{opacity:0}}
                    >
                        {render} 
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    )
}