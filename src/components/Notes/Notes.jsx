import React, {useEffect} from 'react'
import { Link } from 'react-router-dom'
import './notes.css'
import {FaGithub} from 'react-icons/fa'
import {AiFillBook} from 'react-icons/ai'
import Me from '../../assets/myphoto.jpg'
import NotesPhoto from '../../assets/notesPhoto.jpg'
import Layout from '../Layout/Layout'
import {useSelector, useDispatch} from 'react-redux'
import { getFrontTopics } from '../../reducers/notesUserReducer'
import { generatePublicURL } from '../../urlConfig'

// for major projects
const data1 = [
  {
    id:1,
    image: NotesPhoto,
    title: 'Semester 1',
    link: '/notes/sem1',
  },
  {
    id:2,
    image: NotesPhoto,
    title: 'Semester 2',
    link: '/notes/sem2',
   },
   {
    id:3,
    image: NotesPhoto,
    title: 'Semester 3',
    link: '/notes/sem3',
  },
  {
    id:4,
    image: NotesPhoto,
    title: 'Semester 4',
    link: '/notes/sem4',
   },
   {
    id:5,
    image: NotesPhoto,
    title: 'Semester 5',
    link: '/notes/sem4',
  },
  {
    id:6,
    image: NotesPhoto,
    title: 'Semester 6',
    link: '/notes/sem5',
   },
   {
    id:7,
    image: NotesPhoto,
    title: 'Semester 7',
    link: '/notes/sem6',
  },
  {
    id:8,
    image: NotesPhoto,
    title: 'Semester 8',
    link: '/notes/sem6',
   }
]



function Notes() {
  const notes = useSelector((state) => state.uNotes);
  const dispatch = useDispatch();

  useEffect(() => {
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
                  <Link to={item.notesLink} className="btn btn-primary">See Notes<span><AiFillBook className="notePhoto"/></span></Link>
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