import { useEffect, useState } from "react"
import { utilService } from "../services/util.service"

export function SidePanel() {
    
    function OnStarFilter() {

    }

    return (

        <section className="side-panel">
            <div className="image-with-text">Inbox</div>
            <div className="image-with-text"><img className="icon" onClick={() => OnStarFilter()} src={utilService.getStarIconUrl(false)} /> <p>Starred</p> </div>
            <div className="image-with-text">Sent</div>
            <div className="image-with-text">Draft</div>
            <div className="image-with-text"><img className="icon" onClick={() => OnStarFilter()} src={utilService.getTrashIconUrl(false)} /> <p>Trash</p> </div>
        </section>

    )
}
