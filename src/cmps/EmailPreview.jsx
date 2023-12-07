import { Link } from "react-router-dom";

export function EmailPreview({ email }) {
    return (
        // <section className="email-list">
        //     <h1>EmailPreview</h1>
        // </section>


        <article className="email-preview">
            <div className="from">{email.from}</div>
            <div className="subject"> <strong>{email.subject}</strong>  </div>
            <div> {email.body} </div>

            {/* <Link to={`/robot/${robot.id}`}>
                <img src={`https://robohash.org/${robot.id}`} alt="" />
                <h2>{robot.model}</h2>
                <h4>{robot.type}</h4>
            </Link> */}
        </article>
    )
}
