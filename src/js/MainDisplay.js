import nms from "../img/nms.png";
export default function MainDisplay(){
    return (
        <div style={{backgroundImage: `url(${nms})`, backgroundPosition: "center", backgroundSize: "cover", backgroundRepeat: "no-repeat", width: "100vw", height: "100vh", overflow: "hidden"}}>
            <div style={{position: "relative", fontSize: "100px", left: "400px", zindex: "1"}}>
                hello
            </div>
        </div>
    )
}