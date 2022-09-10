import nms from "../img/nms.png";
import '../css/Home.css';

export const Home = () => {
    return(
        <div style={{backgroundImage: `url(${nms})`, backgroundPosition: "left", backgroundSize: "cover", backgroundRepeat: "no-repeat", width: "100%", height: "100%", overflow: "hidden"}}>
            <div style={{ color: "white", marginLeft: '30px', marginTop: '50vh', fontSize: 24, color: '#F0F0F0' }}>
                Raymond Mansour <br/>
                <div>
                    <p style={{fontSize: "20px"}}>Software Engineer</p>
                </div>
            </div>
        </div>
    );
}  