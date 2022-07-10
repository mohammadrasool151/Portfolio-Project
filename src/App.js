// import logo from './logo.svg';
// import './App.css';
import { Home } from './MyComponents/Home/Home';
// import { AboutMe } from './MyComponents/AboutMe/AboutMe';
import { Contact } from './MyComponents/Contact/Contact';
import { Skill } from './MyComponents/Skills/Skill';
import { Project } from './MyComponents/Project/Project';
import { Navbar } from './MyComponents/Navbar/Navbar';
import React, { useEffect, useState } from "react"
import axios from "axios"

function App() {

  const [buttondone, setButtondone] = useState(false)
  let [ home, setHome ] = useState("")

	useEffect(() => {
		axios.get("https://evmailer.herokuapp.com/home")
		.then(function(response) {
			setHome(response.data)
		})
	}, [])

  const postName = async (name, subject, email, message) =>{
		// e.preventDefault()
		try {
			await axios.post("https://evmailer.herokuapp.com/post_name", {
				name,
        subject,
        email,
        message
        // console.log("pass vallll", pass)
        
        
			})
		} catch (error) {
			console.error(error)
      // console.log("passss vall", pass)
		}
    // c
  }


  return (
    <div className="App">

       <Navbar buttondone={buttondone} setButtondone={setButtondone}/>
       <Home/>
       <Project/>
       <Skill/>
      <Contact postName={postName}/>
       
    {/* {buttondone === false ?    : null} */}
      {/* <AboutMe/> */}
       


    </div>
  );
}

export default App;
