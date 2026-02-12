import React from "react"
import "./crew.css"
import { contents } from "./exports"

function Crew() {
    const [member, setMember] = React.useState(contents[0])
    return <div className="crew-container">
        <section className="crew-contents">
            <div className="crew-contents__info">
                <p className="crew-text"><span>02</span>Meet your crew</p>
                <h4 className="crew-member-position">{member.position}</h4>
                <h3 className="crew-member-name">{member.name}</h3>
                <p className="crew-member-about">{member.about}</p>
                <div className="crew-button-group">
                    {contents.map(item => (
                        <button 
                        key={item.name} 
                        type="button" 
                        className={`${member.name === item.name ? "crew-active crew-btn" : "crew-btn"}`}
                        onClick={() => setMember(item)}></button>
                    ))}
                </div>
            </div>
            <div className="crew-img-container">
                <picture>
                    <source srcSet={member.webp} type="image/webp"/>
                    <img 
                    src={member.png} 
                    alt={member.name}/>
                </picture>
            </div>
        </section>
    </div>
}

export default Crew;