import React, { useState, useEffect } from 'react'
import Tour from '../../setup/src/Tour'
import Loading from './Loading'
import Tours from './Tours'
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-tours-project'
function App() {
const [loading, setLoading] = useState(true)
const [tours, setTours] = useState([])

const fetchData = async () => {
try {
    setLoading(true)
const response = await fetch(url)
const tours = await response.json() 
setTours(tours) 
} catch (error) {
    console.log(error)
    setLoading(false)
}
}


useEffect(()=>{
setLoading(true)
fetchData()

},[])

if (loading) {
return <main>
    <Loading/>
</main>    
}


return (
<main>
<Tours/>
</main>
)

};





export default App
 