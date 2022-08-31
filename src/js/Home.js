import nms from "../img/nms.png";
import '../css/Home.css';

export const Home = () => {
    return(
        <div style={{backgroundImage: `url(${nms})`, backgroundPosition: "left", backgroundSize: "cover", backgroundRepeat: "no-repeat", width: "100vw", height: "100vh", overflow: "hidden"}}>
            <div style={{position: "relative", fontSize: "50px", left: "400px", top: "20pc", color: "white"}}>
                Raymond Mansour <br/>
                <div>
                    <p style={{fontSize: "20px"}}>Software Engineer</p>
                </div>
            </div>
        </div>
    );
}  