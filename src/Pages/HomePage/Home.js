import NavBar from "./NavBar"
import useCard from "./Card"
import { AnimatePresence, motion } from "framer-motion"
import { useState } from "react";
export default function Home(){
    const {isdark,render} = useCard();
    const [showcomp , setshowcomp] = useState(true);
    return(
        <>
            <AnimatePresence>
                {showcomp && (
                <motion.div 
                    animate = {{opacity:[0,0,1,1,1,1,0]}}
                    transition={{ ease: "easeInOut",duration: 7}}
                    initial = {{opacity:0}}
                    exit = {{opacity:0}}
                >
                    <div className=" justify-center flex flex-row italic items-center h-screen text-3xl font-medium  my-[-200px]">
                        <div className="h-1/2 w-1/2 space-x-2 flex flex-row items-center justify-center">
                            <motion.div animate = {{opacity:[0,0,1]}}
                                transition={{ ease: "easeInOut",duration: 2}}
                                initial = {{opacity:0}}
                                exit = {{opacity:0}}>Live.</motion.div>
                            <motion.div animate = {{opacity:[0,0,0,1]}}
                                transition={{ ease: "easeInOut",duration: 4}}
                                initial = {{opacity:0}}
                                exit = {{opacity:0}}>Love.</motion.div>
                            <motion.div animate = {{opacity:[0,0,0,1]}}
                                transition={{ ease: "easeInOut",duration: 6}}
                                initial = {{opacity:0}}
                                exit = {{opacity:0}}>Laugh.</motion.div>
                        </div>
                    </div>
                    <div style={{opacity:0}}>{setTimeout(()=>{setshowcomp(false)},7000)}</div>
                </motion.div>)
                    }
                {!showcomp && (
                    <>
                        <motion.div className= {`${isdark} h-screen bg-white flex justify-center items-center`}
                            animate={{ opacity:[0,1]}}
                            transition={{ ease: "easeIn",duration: 2}}
                            initial = {{opacity:0}}
                            exit = {{opacity:0}}
                        >
                            {render} 
                            <NavBar/>
                        </motion.div>
                        <motion.div>
                            
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </>
    )
}