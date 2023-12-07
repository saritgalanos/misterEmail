import { useEffect, useState } from "react"

export function EmailFilter({ filterBy, onSetFilter }) {
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
    return (

        <section className="email-filter">
            <h1>Email Filter</h1>
        </section>

        // <form className="email-filter">
        //     <h1>EmailFilter</h1>
        //     <label htmlFor="model">Model</label>
        //     <input onChange={handleChange} id="model" value={model} name="model" type="text" />

        //     <label htmlFor="minBatteryStatus">Battery</label>
        //     <input onChange={handleChange} id="minBatteryStatus" value={minBatteryStatus || ''} name="minBatteryStatus" type="number" />
        // </form>
    )
}
