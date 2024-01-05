import axios from "axios";
import React, { useState } from "react";


const AddBooks = () => {
    const [data, setData] = useState({
        name : '',
    })

    function handleSubmit(e) {
        e.preventDefault();

        axios.post("http://localhost:5000/addBooks", data {
            name:name
        }).then((response){
            response.status(200).json({message:"Book successfully added"})
        }).catch((error) {
            console.log(error)
        })
    }
    
    return(
        <div>
            <div>
            <h1>Add Books</h1>
            </div>
            <form onSubmit={handleSubmit}>
                <input className="input"
                type="text"
                    onChange={e=>setData(e.target.value)}
                        placeholder="Enter Name"
                        value={name}/>
                <br/><br/>
                <button id="button" type="submit">Submit</button>
            </form>
        </div>
        
    )

}

export default AddBooks;