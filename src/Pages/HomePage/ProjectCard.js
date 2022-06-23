import { useState } from "react"
import {SiReact, SiFlask, SiMongodb, SiNetlify, 
    SiHeroku, SiSqlite, SiGithub, SiDevpost, SiPython, 
    SiJupyter, SiNodedotjs, SiExpress, SiGit, SiScikitlearn, SiTailwindcss, SiFramer} from "react-icons/si"

const techicons = {
    "react": (<SiReact/>),
    "flask": (<SiFlask/>),
    "mongodb":(<SiMongodb/>),
    "netlify":(<SiNetlify/>),
    "heroku":(<SiHeroku/>),
    "sql":(<SiSqlite/>),
    "python":(<SiPython/>),
    "jupyter":(<SiJupyter/>),
    "nodejs":(<SiNodedotjs/>),
    "express":(<SiExpress/>),
    "git":(<SiGit/>),
    "scikit":(<SiScikitlearn/>),
    "tailwind":(<SiTailwindcss/>),
    "framer":(<SiFramer/>)

}

export default function ProjectCard(props){
    const listitems = props.icons.map((icon) => techicons[icon]);
    const [isClicked1, setClicked1] = useState(false)
    function clicked1 () {
        setClicked1(!isClicked1);
    }
    return (
        <div className="flex flex-row flex-wrap justify-center items-center">
            <div className="font-['Rajdhani'] text-[250px] opacity-10 font-thin z-10">{props.number}</div>
                <div className="z-0 w-[270px] h-[330px] shadow rounded-2xl bg-[#FFF2F2] dark:bg-[#F9F9F9] transition-all ease-in-out duration-[2000ms] m-3 flex flex-col">
                    {isClicked1 ?
                    <div className="z-20 flex flex-col mt-12">
                        <div className=" text-xl self-center text-left font-semibold w-5/6">Tools Used:</div>
                        <div className=" mt-1 flex flex-row self-center justify-baseline items-baseline align-baseline flex-wrap text-left text-4xl space-x-8 w-10/12 space-y-3">
                            {listitems}
                        </div>
                        <button className="text-left self-center w-5/6 italic font-extralight mt-2" onClick={clicked1} >Click here to return</button>
                    </div>
                    :<div className=" flex flex-col z-20">
                        <div className="mt-10 w-5/6 text-left flex self-center text-2xl">{props.title}</div>
                        <div className=" text-left text-xs w-5/6 flex self-center mt-2">{props.text}</div>
                        <div className="flex-row flex w-5/6 self-center space-x-4">
                            <a href={props.gitlink} ><button className="self-center text-left w-5/6 mt-1"><SiGithub/></button></a>
                            {props.devpost?<a href={props.devlink}><button className="self-center text-left w-5/6 mt-1"><SiDevpost/></button></a>:<></>}
                        </div>
                        <button className="z-20 text-left self-center w-5/6 italic font-extralight" onClick={clicked1} >Click here to see more</button>
                    </div>
                    }
                    
                </div>
        </div>
    )
}