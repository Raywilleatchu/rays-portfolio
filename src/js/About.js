import sky from "../img/sky.png";

export const About = () => {
    return(
        <div style={{backgroundImage: `url(${sky})`, backgroundPosition: "left", backgroundSize: "cover", backgroundRepeat: "no-repeat", width: "100vw", height: "100vh", overflow: "hidden", display: "flex"}}>
            <div style={{position: "relative", fontSize: "10px", left: "400px", top: "20pc", color: "white", border: "solid red"}}>
                <div style={{border: "solid orange", position: "relative", bottom: "10pc", padding: "9px"}}>
                    <h1>
                        A self taught engineer on the road to self taught master <br/>
                    </h1>
                </div>
                <body>
                    <p style={{fontSize: "20px", textAlign: "justify", position: "relative", bottom: "10pc"}}>
                        <span>THIS WILL BE PRETTIED UP SOON AND WRITTEN BETTER</span> 
                        <br/>
                        <br/>
                        I started the FoC in 2019 just to get my foot in the door. 
                        I already aspired to be a software engineer but didnt know where to start. 
                        When training ended, the first week I met my leader I had received an email for DevBuild and asked her about it.
                        I was told I that I needed at least 9 months tenure to move up with that program. 
                        From that point on I made it known to any leader I encountered that I want to get into DevBuild. 
                        I spent most of my days in office making calls in LOLA, leaving voicemails and making sales, while at the same time programming a website for the first time with just raw HTML, CSS & JS.
                        That site was awful but I learned a lot. Visual Studio Code was very hard to setup locally so I needed a new way to teach myself.
                        I found myself learning on a website called CodeAcedemy. I exploited their poorly setup trial system and got multiple months of their free top tier lessons in Java, C# & Python.
                        After a while they caught on to what I was doing and updated the way they made their trials... (Now you need to put down a card to make an account to trial with).
                        Due to some unfortunate circumstances including the pandemic and team/schedule changing, I made it to the goal, DevBuild by 2021 and completed the 20 week program.

                        My story is uninteresting, and I have very little professional experience let alone education in software but that's alright.
                        I am living proof that anyone can be comprehensive and attain new skills through perserverence and grit and do anything without a college education that'll cost me tens of thousands of dollars.
                        My goal is to be the best there is through my own passion and eventually hit my goal to make something great.
                    </p>
                </body>
            </div>
        </div>
    );
}  