import { useEffect, useState } from "react"
import { emailService } from "../services/email.service"
import { EmailList } from "../cmps/EmailList"
//import { EmailFilter } from "../cmps/EmailFilter"



export function EmailIndex() {
    const [emails, setEmails] = useState(null)
    //const [filterBy, setFilterBy] = useState(robotService.getDefaultFilter())

    // useEffect(() => {
    //     loadRobots()
    // }, [filterBy])

    // async function loadRobots() {
    //     const robots = await robotService.query(filterBy)
    //     setRobots(robots)
    // }


    useEffect(() => {
        loadEmails()
    }, [])

    async function loadEmails() {
        const emails = await emailService.query()
        setEmails(emails)
    }


    // async function onRemoveRobot(robotId) {
    //     try {
    //         await robotService.remove(robotId)
    //         setRobots(prevRobots => {
    //             return prevRobots.filter(robot => robot.id !== robotId)
    //         })
    //     } catch (error) {
    //         console.log('error:', error)
    //     }
    // }

    // function onSetFilter(filterBy) {
    //     setFilterBy(prevFilter => ({ ...prevFilter, ...filterBy }))
    // }

    if (!emails) return <div>Loading...</div>

    return (
        <section className="email-index">
            <EmailList emails={emails} onRemoveEmail={() => { return } /*onRemoveRobot*/} />
        </section>
    )

}
