import React, {useState, useEffect} from 'react';
import axios from 'axios'
import { axiosWithAuth } from '../Utils/axiosWithAuth';

const Jokes = (props) => {
  

    const[jokes,setJokes] = useState ([])
    
   

    useEffect(() => {
        axiosWithAuth()
        .get(`/jokes`)
        .then(res => {
            console.log("jokes" ,res.data)
            setJokes(res.data)
        })
        .catch(err => console.log(err.response));
    }, [])
       
 
  
    return (
        <div>
           {/* {friends.map(item => (
            <Friend key ={item.id} friend ={item} />
           ))} */}
        </div>

    )
     }
    export default Jokes