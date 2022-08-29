import sky from "../img/sky.png";

export const About = () => {
    return(
        <div style={{backgroundImage: `url(${sky})`, backgroundPosition: "left", backgroundSize: "cover", backgroundRepeat: "no-repeat", width: "100vw", height: "100vh", overflow: "hidden"}}>
            <div style={{position: "relative", fontSize: "50px", left: "400px", top: "20pc", color: "white"}}>
                <head>
                    <h1>
                        A self taught engineer on the road to self taught master <br/>
                    </h1>
                </head>
                <body>
                    <p style={{fontSize: "20px"}}>Software Engineer</p>
                </body>
            </div>
        </div>
    );
}  