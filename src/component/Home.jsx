import React from 'react'
import { data } from './Data'
import{useState} from 'react'
import { Link } from 'react-router-dom'


const Home = () => {
    const[id,setId]=useState('');
    const[filterData,setFilterData]=useState("");
    const[newfilterData,setNewData]=useState(data)
    console.log({data})
    console.log(setFilterData)
    
    console.log(id);
    const handleSubmit=(e)=>{
     e.preventDefault();
    }
    console.log(filterData)
    const filterCity=(city)=>{
        const updateCity=data.filter((currentElem)=>{
          return currentElem.city===city||currentElem.cluster===city||currentElem.space_available.toString()===city
        
      });
      setNewData(updateCity)
      console.log(updateCity)
      console.log(newfilterData)
    }
 
   console.log(newfilterData)
   console.log(filterData)
  
  return (
    <div className='home'>
        <nav className='NavBar'>
            <div className='Heading'>
                <h1>WearHouse</h1>
                </div>
            <div className=''>
            <form onSubmit={handleSubmit}>

  <select name="city" id="city" onClick={(e)=>filterCity(e.target.value)}>
  <option value="Delhi">Delhi</option>
  <option value="Chennai">Chennai</option>
  <option value="Mumbai">Mumbai</option>
  <option value="Banglore">Balglore</option>
  <option value="Indore">Indore</option>
  <option value="Guwahati">Guwahati</option>
</select>
<select name="cluster" id="Cluster" onClick={(e)=>filterCity(e.target.value)}>
<option value="cluster-a-1">cluster-a-1</option>
<option value="cluster-a-2">cluster-a-2</option>
<option value="cluster-a-21">cluster-a-21</option>
  <option value="cluster-a-32">cluster-a-32</option>
  <option value="cluster-v-2">cluster-v-2</option>
</select>
<select name="space_available" id="space" onClick={(e)=>filterCity(e.target.value)}>
<option value="1">1</option>
<option value="4">4</option>
<option value="12">12</option>
  <option value="97">97</option>
  <option value="98"> 98</option>
  <option value="124"> 124</option>
  <option value="134"> 134</option>
  <option value="654">654</option>
  <option value="1234"> 1234</option>
  <option value="3456"> 3456</option>
  <option value="3456"> 1234545</option>
  <option value="1243434">1243434</option>
  
</select>
<a href=" ">View All</a>

</form>

            </div>
        </nav>
        <cards>
            {newfilterData.length>0&&<>
                {
           newfilterData.map((ele,idx)=>{
                return(
                    <div className='card'>
                        <div className='cardHead'>
                        <h3 > {ele.name} </h3>
                       <h5 className='head3'>{ele.city}</h5>
                        </div>
                      
                       <h5 className='head5'>{ele.space_available}</h5>
                       <h5 className='head5'>{ele.type}</h5>
                       
                       
                       <Link className="btn1"to={`/Detail/${ele.id}`} onClick={()=>{setId(idx+1)}}>Details</Link>
                    </div>
                )
            })
           }
            </>}
          
        </cards>
    </div>
  )
}
export default Home;