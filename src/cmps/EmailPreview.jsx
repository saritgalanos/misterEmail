import { Link } from "react-router-dom";
import { Component, useEffect, useState } from "react"
import { emailService } from "../services/email.service";
import { utilService } from "../services/util.service";

export function EmailPreview({ email, onStar }) {

    const [isStar, setIsStar] = useState(email.isStarred)

    function OnstarPreview() {
        setIsStar(!isStar)
        onStar(email.id)
    }

    function getStarIconUrl() {
        const starIcon = isStar ? "yellowstar" : "star"
        return utilService.getImgUrl(`../assets/imgs/${starIcon}.png`)
    }


   

    return (

        <div className="email-preview">
            <label>
                <input type="checkbox" value="selected" checked={false} onChange={() => { }} />
            </label>
            <img className="icon" onClick={() => OnstarPreview()} src={getStarIconUrl()} />
            <Link className="email-line" to={`/email/${email.id}`}>
                <div className="from">{email.from}</div>
                <div className="subject"> {email.subject} </div>
                <div> {email.body} </div>
                <div>{utilService.getDateToDisplay(new Date(email.sentAt))}</div>
            </Link>


        </div>
    )
}
