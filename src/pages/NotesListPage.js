import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom'
import ListItem from '../components/items/ListItem';
import { faList } from "@fortawesome/free-solid-svg-icons";
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const NotesListPage = props => {

    let [notes, setNotes] = useState([])

    useEffect(() => {
        getNotes()
    }, [])

    let getNotes = async () =>{
        let response = await fetch('/api/notes/')
        let data = await response.json()
        console.log('DATA:', data)
        setNotes(data)
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
                                    <span className="badge badge-light bg-light text-dark mt-2">{notes.length}</span>
                                </h6>
                                </div>
                                <div className="card-body">
                                    <h5 className="card-title">Bootstrap Notes Application</h5>                                                                   
                                    {notes.map((note, index) =>(
                                            <ListItem key={index} note={note}/>
                                        ))}                                                                                                      
                                    
                                </div>
                                <Link to="/note/new">
                                    <h1 className="text-end"><FontAwesomeIcon icon={faPlusCircle} className="m-3"/></h1>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    )
}

export default NotesListPage
