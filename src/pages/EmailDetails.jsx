import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router"
import { emailService } from "../services/email.service"
import { Link } from "react-router-dom"

export function EmailDetails() {
    const [email, setEmail] = useState(null)
    // const params = useParams()
    // const navigate = useNavigate()

    // useEffect(() => {
    //     loadRobot()
    // }, [params.robotId])

    // async function loadRobot() {
    //     try {
    //         const robot = await robotService.getById(params.robotId)
    //         setRobot(robot)
    //     } catch (error) {
    //         console.log('error:', error)
    //     }
    // }

    // function onBack() {
    //     navigate('/robot')
    // }
    // console.log('Render');
    
    if (!email) return <div>Loading...</div>
    return (
        <section className="email-details">
            <h1>Email Details</h1>
            {/* <img src={`https://robohash.org/${robot.id}`} alt="" />
            <h3>Type: {robot.type}</h3>
            <h3>Model: {robot.model}</h3>
            <h3>Battery: {robot.batteryStatus}</h3>
            <Link to={`/robot/r3`} >Next Robot</Link>
            <button onClick={onBack}>Back</button> */}
        </section>
    )
}