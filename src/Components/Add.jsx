import React, { useState } from 'react'
import { Button, Textfield } from '@mui/material'

const Add = () => {
    const Add =()=> {
        var[input,Setinput] = useState({
            name:'',
            brand:''

        })

        const inputHandler =(e)=>{
            const{name,value}=e.target
            Setinput({...input,[name]:value})
        }
        const readvalues=()=>{
            console.log("Clicked")
            axios.post("http://localhost:3002/posts",input)
            .then(Response=>{
                alert("successfully added")
            })
            .catch(error=>console.log(error))
        }
    }  
  return (
    <div>
      <TextField label="Name" name='name' value={<input.name} onChange={inputHandler}/>
      <TextField label="Brand" name='name' value={input.brand} onChange={inputHandler}/>
      <TextField label="Quantity" name='name' value={input.quantity} onChange={inputHandler}/>
      <TextField label="Price" name='name' value={input.price} onChange={inputHandler}/>
      <Button varient='contained' onClick={readvalues}color='success'>submit</Button>
    </div>
  )
}

export default Add
