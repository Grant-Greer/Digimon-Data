import React from 'react'
import {useState, useEffect} from 'react'
import axios from 'axios';
import { DigimonCard } from './DigimonCard'

export default function DigimonContainer () {
  
  const [digimonData, setDigimonData] = useState([]);
  

    useEffect(() => {
      const getDigimonData = async () => {
        
        try {
          const response = await axios.get(
            `https://digimon-api.herokuapp.com/api/digimon`
          );
          setDigimonData(response.digimonData);
        } catch (error) {
          console.log(error);
        }
      };

      getDigimonData();
    }, []);
    
    console.log(digimonData)
  return (
    <div>  { digimonData && digimonData.length ? 
      digimonData.map((Digimon, index) => ( 
      <DigimonCard 
      key={index}
      name={Digimon.img}
      img={Digimon.name}
      level={Digimon.level}
       /> 
       )) : <h1>Loading...</h1>  
      }
       
       </div>
  )
}
