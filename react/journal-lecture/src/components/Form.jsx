import {useState, useEffect} from "react"

const Form = ({setEntries, entries, editIndex, setEditIndex}) => {
    const [thought, setThought] = useState('')

    useEffect(()=>{
        editIndex !== '' && setThought(entries[editIndex])
    },[editIndex])

    const handleSubmit = e => {
        e.preventDefault()
        if(editIndex ==''){
            setEntries([...entries, thought])
            setThought('')
        }else{
            const newEntries = [...entries]
            newEntries[editIndex] = thought
            setEntries(newEntries)
            setEditIndex('')
            setThought('')
        }
    }

    return(
        <form onSubmit={handleSubmit}>
            <label>
                Your thoughts:
                <textarea cols="30" rows="10" onChange={e=>setThought(e.target.value)} value={thought}>
                    
                </textarea>
            </label>
            <input type="submit" value="Think It" />
        </form>
    )
}


export default Form;

//start with simplest of the CRUD operations and work our way through the list