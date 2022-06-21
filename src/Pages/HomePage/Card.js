import { useState } from "react"
import "./Home.css"
import me from './me.png'
import {MdDarkMode,} from 'react-icons/md'
import {BsSun, BsLinkedin, BsGithub} from 'react-icons/bs'

export default function useCard(){
    const [isdark,setdark] = useState("dark");
    const settingdark = () => {
        if (checkdark){
            setdark("")
            setcheckdark(false)
        }else{
            setdark("dark")
            setcheckdark(true)
        }
        
    }
    const [checkdark,setcheckdark] = useState(true);
    var w = window.innerWidth;
    console.log(w);
    const screenfunc = (w) => {
        if (w > 510){
            return true;
        }else{
            return false;    
        }
        
    }
    return{
        isdark,
        render: (
            <>
                {screenfunc(w)?
                <div className=" text-[#781D42] dark:text-[#30475E] h-[85%] w-[90%] bg-[#FFF2F2] rounded-3xl shadow-lg z-0 dark:bg-[#DDDDDD] transition ease-in-out duration-[2000ms]">
                    <div className="flex flex-col items-center">
                        <div className="h-48 w-full bg-[#EF9F9F] rounded-t-3xl z-10 dark:bg-[#222831] transition ease-in-out duration-[2000ms]"></div>
                        <img alt="Mansoor Anis" src={me} className=" h-40 w-40 bg-[#FAD4D4] dark:bg-[#FFFFFF] items-center my-[-80px] z-20 rounded-full transition ease-in-out duration-[2000ms]"></img>
                        <h3 className="pt-[90px] font-semibold text-center">Mansoor Anis</h3>
                        <text className=" mt-[-10px] font-light text-center">Aspiring Software Engineer</text>
                        <div className="mt-[10px] flex flex-row space-x-5">  
                            {checkdark?<BsSun className=" text-xl " onClick={settingdark}/>:<MdDarkMode className=" text-xl" onClick={settingdark}/>}
                            <BsLinkedin className=" text-xl"/>
                            <BsGithub className="text-xl"/>
                        </div>
                        <div className=" flex flex-row space-x-20 mt-16 justify-center items-center">
                            <div className=" w-4/12">
                                <div className=" text-2xl text-left whitespace-pre-wrap">About <text className="text-[#EF9F9F] dark:text-[#F05454] transition ease-in-out duration-[2000ms]">Me</text>
                                        {'\n'}
                                        <text className=" text-sm">
                                        Hi, I am a university student whose interested in programming from the age of 14. I enjoy creating and writing things that can be found on the internet. I am proficient in Python and C++, and can also create webapps using React.
                                        </text>
                                </div>
                            </div>
                            <div className=" w-4/12 text-sm">
                                <div className="grid grid-cols-2 grid-rows-5 text-left gap-x-0">
                                    <div className=" font-semibold">education</div>
                                    <div>University fo Alberta</div> 
                                    <div className=" font-semibold">location</div>
                                    <div>Canada</div>
                                    <div className=" font-semibold">address</div>
                                    <div>Edmonton, Alberta</div>
                                    <div className=" font-semibold">email</div>
                                    <div>mansooranis03@gmail.com</div>
                                    <div className=" font-semibold">interests</div>
                                    <div>Webapps, ML, Competitive Programming</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                            :
                            <div className=" text-[#781D42] dark:text-[#30475E] h-[85%] w-[90%] bg-[#FFF2F2] rounded-3xl shadow-lg z-0 dark:bg-[#DDDDDD] transition ease-in-out duration-[2000ms]">
                                <div className="flex flex-col items-center">
                                    <div className="h-48 w-full bg-[#EF9F9F] rounded-t-3xl z-10 dark:bg-[#222831] transition ease-in-out duration-[2000ms]"></div>
                                    <img alt="Mansoor Anis" src={me} className=" h-40 w-40 bg-[#FAD4D4] dark:bg-[#FFFFFF] items-center my-[-80px] z-20 rounded-full transition ease-in-out duration-[2000ms]"></img>
                                    <h3 className="pt-[90px] font-semibold text-center">Mansoor Anis</h3>
                                    <text className=" mt-[-10px] font-light text-center">Aspiring Software Engineer</text>
                                    <div className="mt-[10px] flex flex-row space-x-5">  
                                        {checkdark?<BsSun className=" text-xl " onClick={settingdark}/>:<MdDarkMode className=" text-xl" onClick={settingdark}/>}
                                        <BsLinkedin className=" text-xl"/>
                                        <BsGithub className="text-xl"/>
                                    </div>
                                    <div className=" flex flex-row space-x-20 mt-16 justify-center items-center">
                                        <div className=" w-4/6">
                                            <div className=" text-lg text-left whitespace-pre-wrap">About <text className="text-[#EF9F9F] dark:text-[#F05454] transition ease-in-out duration-[2000ms]">Me</text>
                                                    {'\n'}
                                                    <text className=" text-sm">
                                                    Hi, I am a university student whose interested in programming from the age of 14. I enjoy creating and writing things that can be found on the internet. I am proficient in Python and C++, and can also create webapps using React.
                                                    </text>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>  

                    }
            </>
        ),
    }
}