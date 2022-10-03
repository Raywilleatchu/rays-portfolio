import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import remarkGfm from "remark-gfm";

const Page = (data, key) => {
    const [ title, setTitle ] = useState("Title");
    const [ semiTitle, setSemiTitle ] = useState("Semi-Title");
    const [ content, setContent ] = useState("Content");
    const mds = document.querySelectorAll(".markdown");

    function setData() {
        setTitle(mds[1].children[0]);
        setSemiTitle(document.getElementById("h2"));
        setContent(document.getElementById("p"));
        console.log(title);
    }

    //useEffect(() => setData());

    return (
        <div>
            {title}
        </div>
    );
}

export default Page;

//TODO: figure out why markup wont render