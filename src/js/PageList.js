import React from "react";
import Page from "./Page";

const PageList = ({data}) =>
{
    return(
        <div className="page-list">
            {data.map((page, index) => {
                return(
                    <Page 
                        content={page}
                        key={index}
                    />
                );
            })}
        </div>      

    );
};

export default PageList;