import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router"
import { emailService } from "../services/email.service"
import { Link } from "react-router-dom"

export function EmailDetails() {
    const [email, setEmail] = useState(null)
    const params = useParams()
   // const navigate = useNavigate()
   console.log('params:'+params)

    useEffect(() => {
        loadEmail()
    }, [params.emailId])

    async function loadEmail() {
        try {
            console.log ("loading by id:" + params.emailId)
            const email = await emailService.getById(params.emailId)
            setEmail(email)
        } catch (error) {
            console.log('error:', error)
        }
    }

        

    if (!email) return <div>Loading Email Deatils...</div>
   
    return (
        <section className="email-details">
            <h1>Email Details</h1>
            <h3>from: {email.from}</h3>
            <h3>to: {email.to}</h3>
            <h3>subject: {email.subject}</h3>
            <h3>{email.body}</h3>
        </section>
    )
}