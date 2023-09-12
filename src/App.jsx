import { useState } from 'react'
import './App.css'
import Blogs from './components/Blogs/Blogs'
import Bookmarks from './components/Bookmarks/Bookmarks'
import Header from './components/Header/Header'

function App() {
  const [bookmarks, setBookmarks] = useState([]);
  const handleAddToBookmarks = blog =>{
    console.log('Bookmarks Add')
  }

  return (
    <>
      <div className='container mx-auto'>
      <Header></Header>
      <div className='md:flex'>
        <Blogs handleAddToBookmarks={handleAddToBookmarks}></Blogs>
        <Bookmarks></Bookmarks>
      </div>
      </div>
    </>
  )
}

export default App
