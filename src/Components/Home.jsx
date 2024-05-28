import {ReactTyped} from "react-typed";
import myImg from "../assets/my-img.webp"
export default function Home(){
    return(
        <>
        <section className="section home">
            <div className="main-box">
                <div className="main-content">
                    <h1 className="main-head">Hello, my name is <span className="name">priyanka Vishwakarma</span></h1>
                    <h1 className="main-head">I'm a <ReactTyped strings={["Web Developer","web Designer","Graphic Designer","YouTuber"]} typeSpeed={60} backSpeed={40} loop/></h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint cupiditate officiis nostrum et nulla ducimus doloremque temporibus vitae tempore quod.</p>
                    <button className="btn1">More About Me</button>
                </div>
                <div className="hero-img">
                    <img src={myImg} alt="my-img" />
                </div>
            </div>
        </section>
        </>
    )
}