import React from "react";
import './skills.css'

const Skills = () => {
    return (
        <section>
             <h1 className="skillsTitle" id="Skills">Skills</h1>  
            <div className="skillIcons">
                <img src="/assets/Icons/javaIcon.svg" alt="" className="java-icon"/>
                <img src="/assets/Icons/cppIcon.svg" alt="" className="cpp-icon"/>
                <img src="/assets/Icons/pythonIcon.svg" alt="" className="python-icon"/>
                <img src="/assets/Icons/mysqlIcon.svg" alt="" className="mysql-icon"/>
                <img src="/assets/Icons/nodejsIcon.svg" alt="" className="node-icon"/>
                <img src="/assets/Icons/jsIcon.svg" alt="" className="js-icon"/>
                <img src="/assets/Icons/cssIcon.svg" alt="" className="css-icon"/>
                <img src="/assets/Icons/htmlIcon.svg" alt="" className="html-icon"/>
                <img src="/assets/Icons/reactIcon.svg" alt="" className="react-icon"/>
                <img src="/assets/Icons/andriodstudioIcon.svg" alt="" className="studio-icon"/>
                <img src="/assets/Icons/mongodbIcon.svg" alt="" className="mongo-icon"/>
                <img src="/assets/Icons/pandasIcon.ico" alt="" className="pandas-icon"/>
                <img src="/assets/Icons/numpyIcon.svg" alt="" className="numpy-icon"/>
                <img src="/assets/Icons/plotlyIcon.png" alt="" className="plotly-icon"/>
                <img src="/assets/Icons/awsIcon.svg" alt="" className="aws-icon"/>
            </div>
            <h2 className="advSkills">Advanced Proficiencies</h2>
            <div className="advCard">
            <ul>
                <li>Data Structures and Algorithms</li>
                <li>Git and GitHub</li>
                <li>Bash</li>
                <li>Probabilites and Statistics</li>
                <li>Database Systems</li>
                <li>Computer Architecture and Digital Logic</li>
                <li>Operating Systems</li>
            </ul>
            </div>
            <img src="/assets/purple.gif" className="purpleGif"/>
        </section>
    )
}

export default Skills