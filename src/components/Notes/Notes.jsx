import React, {useEffect} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './notes.css'
import {FaGithub} from 'react-icons/fa'
import {AiFillBook} from 'react-icons/ai'
import Me from '../../assets/myphoto.jpg'
import NotesPhoto from '../../assets/notesPhoto.jpg'
import Layout from '../Layout/Layout'
import {useSelector, useDispatch} from 'react-redux'
import { getFrontTopics, getNotesByParent } from '../../reducers/notesUserReducer'
import { generatePublicURL } from '../../urlConfig'


function Notes() {
  const notes = useSelector((state) => state.uNotes);
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const loadNotes = (parentId) => {
    dispatch(getNotesByParent(parentId));
  }

  useEffect(() => {
    if(!auth.authenticate)
    {
      navigate('/signin')
    }
    
    dispatch(getFrontTopics());
  }, [])

  return (
    <Layout>
      <section id='notes'>
        <h5>Get All Notes</h5>
        <h2>If you have any kind of notes, do share!</h2>

        <div className="container note-container">
          {
            notes.notesTopics.map((item, index) => {
              return (
                <article key={index} className="note-item">
                  <div className="note-item-image">
                    <img className='note-photo' src={generatePublicURL(item.notesImage)} alt={item.title} />
                  </div>
                  <h3>{item.title}</h3>
                  <Link to={item.notesLink} onClick={() => loadNotes(item._id)} className="btn btn-primary">See Notes<span><AiFillBook className="notePhoto"/></span></Link>
                </article>
              )
            })
          }
        </div>
      </section>
    </Layout>
  )
}

export default Notes