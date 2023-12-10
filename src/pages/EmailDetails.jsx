import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router"
import { emailService } from "../services/email.service"
import { Link } from "react-router-dom"

export function EmailDetails() {
    const [email, setEmail] = useState(null)
    const params = useParams()
   // const navigate = useNavigate()
   
    useEffect(() => {
        loadEmail()
    }, [params.emailId])

    useEffect(() => {
        setIsRead()
    }, [email])




    async function loadEmail() {
        try {
            const email = await emailService.getById(params.emailId)
            setEmail(email)
        } catch (error) {
            console.log('error:', error)
        }
    }
    async function setIsRead() {
        if(!email) {
            return;
        }
        try {
            email.isRead = true;
            await emailService.save(email)
        } catch (error) {
            console.log('error:', error)
        }
    }

    if (!email) return <div>Loading Email Deatils...</div>
   
    return (
        <div className="email-details">
            <div className="email-subject"> {email.subject}</div>
            <div><strong>from: {email.from}</strong></div>
            <div>to: {email.to}</div>
            <br></br>
            
            <div>{email.body}</div>
        </div>
    )
}