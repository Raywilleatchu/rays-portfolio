import React from "react";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import remarkGfm from "remark-gfm";

const PageContent = ({pages, loading}) =>
{
    if (loading) {
        return <h2>Loading....</h2>
    }

    console.log(pages)
    return(
        <ul>
            { 
            pages.map(page=> (
            <li>
                <ReactMarkdown className="markdown" rehypePlugins={[rehypeRaw]} remarkPlugins={[remarkGfm]} linkTarget={"_blank"}>
                    {page}
                </ReactMarkdown>
            </li>
            ))}
        </ul>
        );
}

export default PageContent