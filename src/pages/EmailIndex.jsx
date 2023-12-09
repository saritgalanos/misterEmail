import { useEffect, useState } from "react"
import { emailService } from "../services/email.service"
import { EmailList } from "../cmps/EmailList"
import { SidePanel } from "../cmps/SidePanel"
import { EmailFilter } from "../cmps/EmailFilter"



export function EmailIndex() {
    const [emails, setEmails] = useState(null)
    const [filterBy, setFilterBy] = useState(emailService.getDefaultFilter())

    useEffect(() => {
        loadEmails()
    }, [filterBy])

    useEffect(() => {
        loadEmails()
    }, [])

    async function loadEmails() {

        const emails = await emailService.query(filterBy)
        setEmails(emails)

    }


    async function onRemoveEmail(emailId) {
        try {
            await emailService.remove(emailId)
            setEmails(prevEmails => {
                return prevEmails.filter(email => email.id !== emailId)
            })
        } catch (error) {
            console.log('error:', error)
        }
    }

    function onSetFilter(filterBy) {
        console.log('filer set')
        setFilterBy(prevFilter => ({ ...prevFilter, ...filterBy }))
        console.log(filterBy)
    }

    async function onStar(emailId) {
        try {
            const email = await emailService.getById(emailId)
            email.isStarred = !email.isStarred
            emailService.save(email)

        } catch (error) {
            console.log('error:', error)
        }
    }
    const { txt, emailStatus, isRead } = filterBy
    if (!emails) return <div>Loading...</div>

    return (
        <section className="email-index">
            <div className="side-content">
                <SidePanel />
            </div>
            <div className='main-content'>
                <EmailFilter filterBy={{ txt, emailStatus, isRead }} onSetFilter={onSetFilter} />
                <EmailList emails={emails} onRemoveEmail={onRemoveEmail} onStar={onStar} />
            </div>
        </section>
    )

}
