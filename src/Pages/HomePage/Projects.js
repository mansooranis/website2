import ProjectCard from "./ProjectCard";

export default function Projects(){
    return (
        <div className="w-full" id="projects">
            <div className=" flex flex-wrap flex-row justify-center items-center text-[#781D42] dark:text-[#30475E]">
                <ProjectCard number="01" title="Health Beta" text="Webapp made to improve the mental well being by using Sentiment Analysis. (Winner for a Hackathon)" 
                    icons ={["react","sql","flask","nodejs","express","mongodb","heroku","git"]}
                    gitlink = "https://github.com/mansooranis/ram-hackedbeta"
                    devpost = {true}
                    devlink = "https://devpost.com/software/helpit-lwp8yz"
                        />
                <ProjectCard number = "02" title = "Loan Payoff Defaulter" text="Made Machine learning classifier model used to predict whether a person will pay off their loan."
                    icons = {["python","jupyter","scikit","sql","flask"]}
                    gitlink = "https://github.com/mansooranis/LoanPayOffPredictore"
                        />
                <ProjectCard 
                    number="03" 
                    title="ScheduleUp" 
                    text="Developed a full stack webapp to generate multiple combinations of selected university courses." 
                    icons={["react","netlify","nodejs","express","flask","mongodb","heroku","git"]}
                    devpost={true}
                    devlink = "https://devpost.com/software/schedule-up"
                    gitlink = "https://github.com/mansooranis/ScheduleUp"
                        />
                <ProjectCard 
                    number="04" 
                    title="Personal Website" 
                    text="Made my current website with animations and dark mode to portray my best projects."  
                    icons={["react","tailwind","framer"]}
                    gitlink = "https://github.com/mansooranis/mansooranis.github.io"
                        />
                <ProjectCard 
                    number="05" 
                    title="Library Management" 
                    text="Full stack desktop application using advanced concepts of Object oriented programming in Python." 
                    icons={["python","sql"]}
                    gitlink= "https://github.com/mansooranis/library-management"
                        />
            </div>
        </div>
    )
}