import "../css/Portfolio.scss"
import { useState, useEffect, ReactDOM } from "react";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import remarkGfm from "remark-gfm";
import { faAws, faJava, faGit, faUnity, faUbuntu, faJs } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Portfolio = () =>
{
    const URL = "https://api.github.com/repos/raywilleatchu/rays-portfolio/contents/README.md"

    const [ doc, setDoc ] = useState([]);
    const [ content, setContent ] = useState("");
    const sliders = document.querySelectorAll('.slide-in');

    useEffect(() => {
        async function fetchData(){
            const res = await fetch(URL, {
                method: 'GET',
                auth: process.env.REACT_APP_API_KEY
            })
            setDoc(await res.json())
        } 
        fetchData();
    }, []);
    useEffect(() => {
        if(doc.content != null){
            setContent(atob(doc.content));
            console.log(content.length)
        }
    }, doc.content, content.length);

    const appearOptions =  {
        threshold: 0
    };

    const appearOnScroll = new IntersectionObserver(function(entries, appearOnScroll) {
        entries.forEach(entry =>{
            if (!entry.isIntersecting){
                return;
            }else{
                entry.target.classList.add('.appear');
                appearOnScroll.unobserve(entry.target);
            }
        });
    }, appearOptions);

    sliders.forEach(slider => {
        appearOnScroll.observe(slider);
    })


    return(
        <div className="text-container">
            <div className="flex-container">
                <div name="Architecture" className="left-col slide-in">
                    <ReactMarkdown rehypePlugins={rehypeRaw} remarkPlugins={remarkGfm} linkTarget={"_blank"}>{content.slice(15376, 18740)}</ReactMarkdown>
                    <div style={{display: "flex", padding: "100px 100px 100px 100px"}}>
                        <FontAwesomeIcon icon={faAws}  size="6x"  style={{margin: "0 50px 0 50px"}}/>
                        <FontAwesomeIcon icon={faJava} size="6x"  style={{margin: "0 50px 0 50px"}}/>
                        <FontAwesomeIcon icon={faGit}  size="6x"  style={{margin: "0 50px 0 50px"}}/>
                    </div>
                </div>

                <div name="Toolng" className="right-col slide-in">
                    <ReactMarkdown rehypePlugins={rehypeRaw} remarkPlugins={remarkGfm} linkTarget={"_blank"}>{content.slice(4617, 9142)}</ReactMarkdown>
                </div>
            </div>

            <div className="flex-container">
                <div name="Fullstack" className="left-col slide-in">
                    <ReactMarkdown rehypePlugins={rehypeRaw} remarkPlugins={remarkGfm} linkTarget={"_blank"}>{content.slice(11309, 13415)}</ReactMarkdown>
                </div>

                <div name="Integration" className="right-col slide-in">
                    <ReactMarkdown rehypePlugins={rehypeRaw} remarkPlugins={remarkGfm} linkTarget={"_blank"}>{content.slice(9140, 11312)}</ReactMarkdown>
                </div>
            </div>

            <div className="flex-container">
                <div name="Quality and Health" className="left-col slide-in">
                    <ReactMarkdown rehypePlugins={rehypeRaw} remarkPlugins={remarkGfm} linkTarget={"_blank"}>{content.slice(295, 3390)}</ReactMarkdown>
                </div>

                <div nam="Vision and Growth" className="right-col slide-in">
                    <ReactMarkdown rehypePlugins={rehypeRaw} remarkPlugins={remarkGfm} linkTarget={"_blank"}>{content.slice(13410, 15379)}</ReactMarkdown>
                    <div style={{display: "flex", padding: "100px 100px 100px 100px"}}>
                        <FontAwesomeIcon icon={faJs}        size="6x"  style={{margin: "0 50px 0 50px"}}/>
                        <FontAwesomeIcon icon={faUbuntu}    size="6x"  style={{margin: "0 50px 0 50px"}}/>
                        <FontAwesomeIcon icon={faUnity}     size="6x"  style={{margin: "0 50px 0 50px"}}/>
                    </div>
                </div>
            </div>
            
            <div className="flex-container">
                <div name="Programming Concepts" className="left-col slide-in">
                    <ReactMarkdown rehypePlugins={rehypeRaw} remarkPlugins={remarkGfm} linkTarget={"_blank"}>{content.slice(3394, 4620)}</ReactMarkdown>
                </div>
                <div name="References" className="right-col slide-in">
                    <ReactMarkdown rehypePlugins={rehypeRaw} remarkPlugins={remarkGfm} linkTarget={"_blank"}>{content.slice(18736, 20000)}</ReactMarkdown>
                    <br/><br/> 
                    <h2>References</h2>
                    <ReactMarkdown rehypePlugins={rehypeRaw} remarkPlugins={remarkGfm} linkTarget={"_blank"}>{content.slice(11, 295)}</ReactMarkdown>
                </div>
            </div>
        </div>
    );
}