import { useEffect, useState } from "react"
import { utilService } from "../services/util.service"

export function SidePanelFilter({ filterBy, onSetFilter }) {
    const [filterByToEdit, setFilterByToEdit] = useState(filterBy)

    function handleChange(ev) {
        // let { name: field, value, type } = ev.target
        // if (type === 'number') value = +value
        // setFilterByToEdit(prevFilter => ({ ...prevFilter, [field]: value }))
    }

    useEffect(() => {
        onSetFilter(filterByToEdit)
    }, [filterByToEdit])

    // function handleModelChange(value) {
    //     setFilterByToEdit(prevFilter => ({ ...prevFilter, model: value }))
    // }

    // function handleBatteryChange(value) {
    //     setFilterByToEdit(prevFilter => ({ ...prevFilter, minBatteryStatus: value }))
    // }

    // const { model, minBatteryStatus } = filterByToEdit

    function OnStarFilter() {

    }

    return (

        <section className="side-panel-filter">
            <div className="image-with-text">Inbox</div>
            <div className="image-with-text"><img className="icon" onClick={() => OnStarFilter()} src={utilService.getStarIconUrl(false)} /> <p>Starred</p> </div>
            <div className="image-with-text">Sent</div>
            <div className="image-with-text">Draft</div>
            <div className="image-with-text"><img className="icon" onClick={() => OnStarFilter()} src={utilService.getTrashIconUrl(false)} /> <p>Trash</p> </div>
        </section>

        // <form className="side-panel-filter">
        //     <h1>SidePanelFilter</h1>
        //     <label htmlFor="model">Model</label>
        //     <input onChange={handleChange} id="model" value={model} name="model" type="text" />

        //     <label htmlFor="minBatteryStatus">Battery</label>
        //     <input onChange={handleChange} id="minBatteryStatus" value={minBatteryStatus || ''} name="minBatteryStatus" type="number" />
        // </form>
    )
}
