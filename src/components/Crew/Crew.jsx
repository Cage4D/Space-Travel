import "./crew.css"
import douglasHurleyWebp from "../../assets/crew/image-douglas-hurley.webp"
import douglasHurleyPng from "../../assets/crew/image-douglas-hurley.png"

function Crew() {
    return <div className="crew-container">
        <section className="crew-contents">
            <div className="crew-contents__info">
                <p className="crew-text"><span>02</span>Meet your crew</p>
                <h4 className="crew-member-position">Mission Specialist</h4>
                <h3 className="crew-member-name">Mark Shuttleworth</h3>
                <p className="crew-member-about">Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.</p>
                <div className="crew-button-group">
                    <button type="button"></button>
                    <button type="button"></button>
                    <button type="button"></button>
                    <button type="button"></button>
                </div>
            </div>
            <div className="crew-img-container">
                <picture>
                    <source srcSet={douglasHurleyWebp} type="image/webp"/>
                    <img 
                    src={douglasHurleyPng} 
                    alt="douglas hurley"/>
                </picture>
            </div>
        </section>
    </div>
}

export default Crew;