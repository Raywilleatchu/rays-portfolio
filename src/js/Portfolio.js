import "../css/Portfolio.scss"
import { useState, useEffect, ReactDOM } from "react";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import remarkGfm from "remark-gfm";

export const Portfolio = () =>
{
    const URL = "https://api.github.com/repos/raywilleatchu/rays-portfolio/contents/README.md"

    const [ doc, setDoc ] = useState([]);
    const [ content, setContent ] = useState("");

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

    return(
        <div className="text-container" style={{position: "absolute", padding:"50px 10px 10px 110px", fontSize: "20px", color: "white", wordBreak: "break-word"}}>
            <div style={{display: "flex"}}>
                <div name="Architecture" style={{flex: "2"}}>
                    <ReactMarkdown rehypePlugins={rehypeRaw} remarkPlugins={remarkGfm} linkTarget={"_blank"}>{content.slice(15400, 18764)}</ReactMarkdown>
                </div>

                <div name="Toolng" style={{flex: "1 500px"}}>
                    <ReactMarkdown rehypePlugins={rehypeRaw} remarkPlugins={remarkGfm} linkTarget={"_blank"}>{content.slice(4617, 9142)}</ReactMarkdown>
                </div>
            </div>

            <div style={{display: "flex"}}>
                <div name="Fullstack" style={{flex: "2"}}>
                    <ReactMarkdown rehypePlugins={rehypeRaw} remarkPlugins={remarkGfm} linkTarget={"_blank"}>{content.slice(11309, 13415)}</ReactMarkdown>
                </div>

                <div name="Integration" style={{flex: "1 500px"}}>
                    <ReactMarkdown rehypePlugins={rehypeRaw} remarkPlugins={remarkGfm} linkTarget={"_blank"}>{content.slice(9140, 11312)}</ReactMarkdown>
                </div>
            </div>

            <div style={{display: "flex"}}>
                <div name="Quality and Health" style={{flex: "2"}}>
                    <ReactMarkdown rehypePlugins={rehypeRaw} remarkPlugins={remarkGfm} linkTarget={"_blank"}>{content.slice(295, 3350)}</ReactMarkdown>
                </div>

                <div nam="Vision and Growth" style={{flex: "1 500px"}}>
                    <ReactMarkdown rehypePlugins={rehypeRaw} remarkPlugins={remarkGfm} linkTarget={"_blank"}>{content.slice(13410, 15403)}</ReactMarkdown>
                </div>
            </div>
            
            <div style={{display: "flex"}}>
                <div name="Programming Concepts" style={{flex: "2"}}>
                    <ReactMarkdown rehypePlugins={rehypeRaw} remarkPlugins={remarkGfm} linkTarget={"_blank"}>{content.slice(3394, 4620)}</ReactMarkdown>
                </div>
                <div style={{flex: "1 500px"}}>
                    <ReactMarkdown rehypePlugins={rehypeRaw} remarkPlugins={remarkGfm} linkTarget={"_blank"}>{content.slice(18760, 20000)}</ReactMarkdown>
                    <br/><br/> 
                    <h2>References</h2>
                    <ReactMarkdown rehypePlugins={rehypeRaw} remarkPlugins={remarkGfm} linkTarget={"_blank"}>{content.slice(11, 295)}</ReactMarkdown>
                </div>
            </div>
        </div>
    );
}