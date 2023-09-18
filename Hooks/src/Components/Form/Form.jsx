import React, {useState} from 'react'
import style from './Form.module.css'

export default function Form() {

    const [name, setName]= useState(null);
    const[email, setEmail]= useState(null);

    const onSubmit = (e)=>{
        e.preventDefault();
        setName(e.target[0]. value);
        setEmail(e.target[1].value);
    }
  return (
    <>
    <div>
      <form action="" className={style.form} onSubmit={onSubmit}>
        <input type="text" value={name}  placeholder='Full Name'/>
        <input type="email" value={email}  placeholder='Email' />
        <input type="password" placeholder='password' />
        <input type="password"  placeholder='Confirm Password' />
        <button type='submit'>Submit</button>
        {
          (name===null) ? <div> </div>:  <div style={{color: 'white'}}>{'Your name:' + name + ""+ 'Your Email:' + email}</div>
        }

       
      </form>
    </div>
    </>
  )
}
