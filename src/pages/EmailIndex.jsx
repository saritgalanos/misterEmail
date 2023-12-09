import { useEffect, useState } from "react"
import { emailService } from "../services/email.service"
import { EmailList } from "../cmps/EmailList"
import { SidePanelFilter } from "../cmps/SidePanelFilter"



export function EmailIndex() {
    const [emails, setEmails] = useState(null)
    const [filterBy, setFilterBy] = useState(emailService.getDefaultFilter())

    useEffect(() => {
        loadEmails()
    }, [filterBy])

    async function loadEmails() {
        const robots = await robotService.query(filterBy)
        setEmails(robots)
    }


    useEffect(() => {
        loadEmails()
    }, [])

    async function loadEmails() {
        const emails = await emailService.query()
        console.log(emails)
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
         setFilterBy(prevFilter => ({ ...prevFilter, ...filterBy }))
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
    const { emailStatus, txt, isRead } = filterBy
    if (!emails) return <div>Loading...</div>

    return (
        <section className="email-index">
            <SidePanelFilter filterBy={ {emailStatus, txt, isRead }} onSetFilter={onSetFilter} />
            <EmailList emails={emails} onRemoveEmail={onRemoveEmail} onStar={onStar} />
        </section>
    )

}
