import React from 'react'
import { Link } from 'react-router-dom'

const Contact = () => {
  return (
    <div className="container">
        <h1>Contact</h1>
        <h3>dofoll technologies</h3>
        <p>
            <b>Address: </b> 
            20 Gado Basca road, CBD, Abuja, FCT, Nigeria 995405           
        </p>
        <p>
            <b>Email: </b> 
            <Link to='info@dofoll.com' >info@dofoll.com.ng</Link>
        </p>
    </div>
  )
}

export default Contact