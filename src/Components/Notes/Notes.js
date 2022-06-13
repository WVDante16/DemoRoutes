import React from 'react';
import {getNotes} from '../../data';
import {Link, useParams} from 'react-router-dom';
import './Notes.css';

const Notes = () => {
    let notes = getNotes();

    const {noteId} = useParams();

    const filterNotes = (id) => {
        let selectedNote = false;

        if (id > 0) {
            selectedNote = notes.filter(
                note => note.id === Number(id)
            );
        }

        return selectedNote;
    }

    const selectedNote = filterNotes(noteId);

    const renderNotes = (notes) => (
        <ul>
            {
                notes.map((note, key) => (
                    <li key={key}>
                        <Link to={`/notes/${note.id}`}>
                            {note.title} 

                            {selectedNote != 0 && 
                                <h2>
                                    {note.description}
                                </h2>
                            }
                        </Link>
                    </li>
                ))
            }
        </ul>
    )

    return (
        <div className="Notes">
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact</Link>
                    </li>
                    <li>
                        <Link to="/notes/:noteId">Notes</Link>
                    </li>
                </ul>
            </nav>
            <h1>Notes</h1>
            {renderNotes(selectedNote || notes)}
            
        </div>
    );
}

export default Notes;