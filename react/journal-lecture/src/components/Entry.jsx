import {useState, useEffect} from "react"

const Entry = ({entry, entries, setEntries, index, setEditIndex}) => {
    
    const deleteEntry = () => {
        //const newEntries = [...entries]
        const newEntries = entries.filter((entry, i ) => i !== index)
        setEntries(newEntries)
    }

    const edit = () =>{
        setEditIndex(index)
    }
    
    return(
        <div className="entry">
            <p>{entry}</p>
            <button onClick={deleteEntry}>Delete</button>
            <button onClick={edit}>Edit</button>
        </div>
    )
}


export default Entry