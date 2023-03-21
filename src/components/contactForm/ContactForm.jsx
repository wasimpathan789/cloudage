import React, { useState } from 'react'
import './contactForm.css'

const ContactForm = () => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [query, setQuery] = useState("");
    const [errorMessage, setErrorMessage] = useState(false);
    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log(name);
        console.log(email);
        console.log(phoneNumber);
        console.log(query);

        if (!name || !email || !phoneNumber || query){
            setErrorMessage("Please filled all fields");
            return;
        }
        setErrorMessage("");

    }
  return (
    <div className='contact-form-Wrapper'>
            <h1>Ask your queries here​</h1>
            <form  onSubmit={handleSubmit} className="contact-form-wrapper">
              <div className="name-div">
                <label htmlFor="">Name</label>
                <input  type="text" value={name} placeholder='E.g. John Doe' onChange={(e)=>setName(e.target.value)} />
              </div>
              <div className="name-div">
                <label htmlFor="">Email Address</label>
                <input  type="email" value={email} placeholder='E.g. johndoe12@gmail.com'  onChange={(e)=>setEmail(e.target.value)}  />
              </div>
              <div className="name-div">
                <label htmlFor="">Phone Number</label>
                <input  type="number" value={phoneNumber} placeholder='E.g. (+91) 9921212121' onChange={(e)=>setPhoneNumber(e.target.value)}  />
              </div>
              <div className="name-div">
                <label htmlFor="">Name</label>
               <textarea  placeholder='Ask your queries here' value={query}  onChange={(e)=>setQuery(e.target.value)} name="" id="" cols="30" rows="10"></textarea>
              </div>
              <button className='contact-form-btn' type='submit'>Submit</button>
              {errorMessage && <div className='error'> {errorMessage} </div>}

              

            </form>


      
    </div>
  )
}

export default ContactForm
