import React, {useState, useEffect} from 'react'
import { Link, useParams, useNavigate  } from 'react-router-dom'
import { faList } from "@fortawesome/free-solid-svg-icons";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";



const NotePage = () => {
    let navigate = useNavigate();    
    let {id} = useParams();
    let noteId = id
    let [note, setNote] = useState(null)
    
    useEffect(() => {
        getNote()
    }, [noteId])

    let getNote = async () => {
        if(noteId === 'new') return
        let response = await fetch(`/api/notes/${noteId}`)
        let data = await response.json()
        setNote(data)
    }
    
    let createNote = async () => {
        fetch(`/api/notes/`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(note)
        })
    }

    let updateNote = async () => {
        fetch(`/api/notes/${noteId}/`, {
            method: "PUT",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(note)
        })
    }

    let deleteNote = async () => {
        fetch(`/api/notes/${noteId}/`, {
            method: "DELETE",
            headers: {
                'Content-Type': 'application/json'
            }
        })
        navigate('/')
    }
    
    let handleSubmit = ()=>{
        if(noteId !== 'new' && !note.body){
            deleteNote()
        }else if(noteId !== 'new'){
            updateNote()
        }else if(noteId == 'new' && note.body !== null){
            createNote()
        }      
        navigate('/')
    }


    return (
        <div className="container h-100">
            <div className="row align-items-center h-100">
                <div className="col-md-4 col-lg-6 col-sm-12 mx-auto">
                    <div className="card h-100 justify-content-center bg-dark">
                        <div>
                            <div className="card bg-dark text-white">
                                <div className="card-header">
                                    <h1><FontAwesomeIcon icon={faList}/> Notes</h1>
                                    <h6 className="text-end"> 
                                        <span className="text-light arrow mt-2" onClick={handleSubmit}><FontAwesomeIcon icon={faArrowLeft} /></span>
                                    </h6>
                                    {noteId !== 'new' ? (
                                        <button className="btn btn-outline-danger" onClick={deleteNote}>Delete</button> 
                                    ): (
                                        <button className="btn btn-outline-success" onClick={handleSubmit}>Done</button>  
                                    )}  
                                </div>
                                
                                <textarea onChange={(e) => {setNote({...note, 'body': e.target.value})}} value={note?.body}>

                                </textarea>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    )
}



export default NotePage
