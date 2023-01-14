import React from "react"
import { IoLogoInstagram } from "react-icons/io5";
import Button from "../components/Button"
import "./style.scss";

const Acappella = () => {
    return (
        <div className="Acappella">
            <br/>
            <h1>My second family</h1>
            <p>I joined my first acappella group during junior year of high school and honestly I think it was one of the best decisions I ever made.</p>
            <p>I've met so many amazing people, discovered a new form of expressing myself, experienced the unmatched thrill of performing on stage, and opened so many new doors for me.</p>
            <p>
                My current acappella group is called <a href="https://www.instagram.com/dacadence_umd/" target="_blank" rel="noreferrer" className="pagelink"><span className="highlight">Dacadence</span></a> and we hold concerts, perform around campus and the community, 
                and compete in competitions such as the International Competition for Collegiate Acappella (<a href="https://varsityvocals.com/" target="_blank" rel="noreferrer" className="pagelink">ICCA</a>).
            </p>
            <p>The bond you develop by singing with others is really something unique and something can't experience through any other means.</p>
            <p>I've come to grow so close to my fellow members in the group through our experiences together and it truly feels like my second family.</p>
            <p>And if you were wondering, my voice part is <span className="highlight">Bass</span>.</p>
            {/* <br/> */}

            <div className="image-stack">
                <div className="image-stack__item image-stack__item—top">
                    <img src="img/dadudes.JPEG" alt="dadudes" className="dadudes"/>
                </div>

                <div className="image-stack__item image-stack__item—bottom">
                    <img src="img/dafam.jpg" alt="dafam" className="dafam"/>
                </div>
            </div>

            <div className="bottom-imgs">
                <div className="bottom-image1">
                        <img src="img/concert.jpg" alt="concert" className="concert"/>
                </div>

                <div className="bottom-image2">
                        <img src="img/hoff.jpg" alt="hoff" className="hoff"/>
                </div>
            </div>

            <div className="LinkButton">
                <Button text="@dacadence_umd" link="https://www.instagram.com/dacadence_umd/" icon={<IoLogoInstagram />} />
            </div>
        </div>
    )
}

export default Acappella;