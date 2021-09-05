import React, { useState } from 'react'
import Link from 'next/link'

const actor = () => {
    const[name,setName]=useState('')
    const[industry,setIndustry]=useState('')


    const onSubmitActor=async(event)=>{
        event.preventDefault();
        const actor={name,industry};
        const url= 'http://localhost:8000/api/add';
        const option={
            headers: {
                'Content-type':'application/json'
             
             },
             method: 'POST',
             body:JSON.stringify(actor),
        }
        const response = await fetch(url,option);
        console.log(response)

    }
    return (
        <div className=' d-flex flex-column justify-content-center align-items-center'>
            <form className='w-25 mt-5' onSubmit={onSubmitActor}>

                <div className="form-floating">
                <input type="text" className="form-control" id="floatingInput" placeholder="Actor Name" onChange={(e)=>{
                    setName(e.target.value)
                }}/>
                <label htmlFor="floatingInput">Actor Name</label>
                </div>
                <div className="form-floating">
                
                <select className="form-select" aria-label="Default select example" onChange={(e)=>{
                    setIndustry(e.target.value)
                }}>
                    <option selected>Industry</option>
                    <option value="Tollywood">Tollywood</option>
                    <option value="Bollywood">Bollywood</option>
                    <option value="Hollywood">Hollywood</option>
                    <option value="Kollywood">Kollywood</option>

                </select>
                
                </div>

                <button className="w-100 btn btn-lg btn-primary" type="submit">Submit</button>
            </form>

            <Link href='/'><h6 className='mt-5'>Go to home</h6></Link>
        </div>
    )
}

export default actor
