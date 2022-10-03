import { useState, useEffect, ReactDOM, React } from "react";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import remarkGfm from "remark-gfm";

const Page = (content) =>
{   
    //const [data, setData] = useState();


    // useEffect(() => {
    //     if (content != null){
    //         setData(content);
    //     }
    // });

    return (
        <ReactMarkdown className="markdown" rehypePlugins={[rehypeRaw]} remarkPlugins={[remarkGfm]} linkTarget="_blank">
            {content.content}
        </ReactMarkdown>
    );
}

export default Page;