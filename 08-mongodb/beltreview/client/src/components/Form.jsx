import React, { useState } from 'react'
import axios from 'axios'

const Form=()=>{

  
    let [title, setTitle] = useState("");
    let [price, setPrice] = useState("");
    let [description, setDescription] = useState("");

    const addProduct = (e)=>{
        e.preventDefault();

        let formInfo= { title, price, description}


        axios.post("http://localhost:8000/api/products", formInfo)
            .then(res=>{
                console.log("response after posting form-->", res)

            //clear out the state variable to clear out the form
            setTitle("");
            setPrice("");
            setDescription("");

            })
            .catch(err=>console.log("errr", err))

          

    }


    return (
        <>
        <div>
                <h1>Product Manager </h1>
                    <form onSubmit={addProduct} className="p-1 justify-content-center align-items-center" >
                        
                        <div className="form-group">
                        <label htmlFor=''>Title:</label>
                            <input type="text" onChange={(e)=>setTitle(e.target.value)} className='form-control' value={title}  />
                            
                        </div>
                        <div className="form-group ">
                            <label htmlFor=''>Price:</label>
                            <input type="number" onChange={(e)=>setPrice(e.target.value)}  className='form-control' value={price} />
                        
                        </div>
                        <div className="form-group ">
                            <label htmlFor=''>Description:</label>
                            <input text="text" onChange={(e)=>setDescription(e.target.value)}  className='form-control' value={description}  />
                        
                        </div>
                        
                            <input type="submit" value="Create" className='btn btn-success' />
                    

                    </form>

        </div>
        <hr />
        </>
    )

}
    
  


export default Form;