import { useEffect } from "react"
import { useState } from "react"

function Homepage() {
    const [foodpic, setFoodpic] = useState('')

    useEffect(function () {
        fetch('https://foodish-api.com/api/')
            .then(resp => resp.json())
            ,[]})
            .then(data => setFoodpic(data)
                console.log(data)
        )
         
   

    return ( 
        <div>
            <h1 className="bg-slate-400">Homepage</h1>
            <img src={foodpic}></img>
        </div>
      
    )
  

    }
  export default Homepage