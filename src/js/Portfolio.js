import "../css/Portfolio.scss"
import { useState, useEffect } from "react";
import { Octokit } from "octokit";

export const Portfolio = () =>
{
    const URL = "https://api.github.com/repos/raywilleatchu/rays-portfolio/contents/README.md"

    const [ doc, setDoc ] = useState([]);

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
            console.log(atob(doc.content))
        }
        else {
            console.log("Content is null")
        }
    });
    
    
    // async function getGitApi() {

    //     const gitAPI = new Octokit({
    //         auth: process.env.REACT_APP_API_KEY
    //     });
    //     return useState(await gitAPI.request("GET /repos/raywilleatchu/rays-portfolio"));
    // }
    
    //const properties = doc.map((data) => JSON.parse(data.payload));

    //console.log("Response: ", doc);
    
    return(
        <div>
        </div>
    );
}