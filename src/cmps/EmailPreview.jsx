import { Link } from "react-router-dom";

export function EmailPreview({ email }) {

    function getImgUrl(url) {
        return new URL(url, import.meta.url).href
    }

    function onStarred() {
        console.log(email.isStarred)
        email.isStarred = !email.isStarred
        console.log(email.isStarred)
    }

    return (

        <article className="email-preview">

            <img className="icon" onClick={onStarred} src={getImgUrl("../assets/imgs/nostarred.png")} />
            <Link to={`/email/${email.id}`}>
                <div className="from">{email.from}</div>
                <div className="subject"> {email.subject} </div>
                <div> {email.body} </div>
            </Link>
            {/* <Link to={`/robot/${robot.id}`}>
                <img src={`https://robohash.org/${robot.id}`} alt="" />
                <h2>{robot.model}</h2>
                <h4>{robot.type}</h4>
            </Link> */}
        </article>
    )
}
