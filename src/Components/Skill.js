
import HtmlImg from "../assets/html.jfif"
import CssImg from "../assets/css.jfif"
import JsImg  from "../assets/javascript.jfif"
import BootstrapImg from "../assets/Bootstrap.jfif"
import TailwindImg  from  "../assets/tailwind.jfif"
import ReactImg from "../assets/react.jfif"
import CorejavaImg from "../assets/java.jfif"
import SqlImg from "../assets/sql.jfif"
import GitImg from "../assets/git1.jfif"
import AngularImg from "../assets/angular.jfif"

export default function Skill(){
    return (
        <section>
            <h1 className="flex  justify-center text-3xl bg-gray-600 rounded-lg text-white">SKILL SET</h1>
            <div className="flex flex-row md:flex-row flex-wrap px-5 py-5 pr-10 cursor-pointer md:gap-3">
                <img className=" size-40 md:mr-10" src={HtmlImg} alt="" />
                <img className=" size-40 md:mr-10" src={CssImg} alt="" />
                <img  className="size-40 md:mr-10" src={JsImg} alt="" />
                <img   className=" size-40 md:mr-10" src={BootstrapImg} alt="" />
                <img  className="size-40 md:mr-10" src={TailwindImg} alt="" />
                <img  className="md:mr-10 size-40" src={ReactImg} alt="" />
                <img className="md:mr-10 size-40" src={AngularImg} alt="" />
                <img  className="md:mr-10 size-40" src={CorejavaImg} alt="" />
                <img  className="md:mr-10 size-40" src={CorejavaImg} alt="" />
                <img  className="md:mr-10 size-40" src={SqlImg} alt="" />
                <img className="md:mr-10 size-40" src={GitImg} alt="" />
                

          
                   
                </div>  
              
               
               
        
        </section>
    )
}