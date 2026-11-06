import { useEffect } from 'react'
import './App.css'

function App() {

  const addNotes = async ()=>{
    const title = "Test 1"
    const content = "test 1"

    const responce = await fetch("http://localhost:5000/api/notes",{
      method:"POST",
      body: JSON.stringify({
        title: title,
        content: content
      })
    })

    const res = await responce.json()
    console.log(res)
  }

  useEffect(()=>{
    addNotes()
  }, [])

  return (
    <>
     Hello
    </>
  )
}

export default App
