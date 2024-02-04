import '../css/home.css';

import Techniques from '../components/techniques.js'
import { useState, useEffect } from 'react';

const Home = () => {

    const [techniques, setTechniques] = useState([]);

    // const getTechniques=()=>{
    //     fetch('/data/techniques.json'
    //     ,{
    //       headers : { 
    //         'Content-Type': 'application/json',
    //         'Accept': 'application/json'
    //        }
    //     }
    //     )
    //       .then(function(response){
    //         console.log(response)
    //         return response.json();
    //       })
    
    //       .then(function(myJson) {
    //         console.log(myJson);
    //         setTechniques(myJson);
    //       });
    //   }
    // getTechniques();

    useEffect(() => {
        const handleTechniques = async () => {
            try {
                const response = await fetch('http://localhost:3002/api/techniques/get');
                const data = await response.json();
                console.log(data)
                setTechniques(data);
            } catch (error) {
                console.error('Error fetching techniques:', error);
            }
        }
      
        handleTechniques();
      }, []);

    return(
        <div className='Home'>
            <div className="technique-container">
                <div className="tech-title-container">
                    <div className="tech-title">TECHNIQUES:</div>
                    <a className="create-tech" href="/create"><h1>NEW TECHNIQUE</h1></a>
                </div>

                <div className = 'techniques-container'>
                    {techniques.map((technique) => {
                        return(
                            <Techniques
                                key = {technique.name}
                                name={technique.name}
                                desc={technique.desc}
                                prompt={technique.prompt}
                                script = {technique.script}
                                extra = {technique.extra}
                            />
                        )
                    })}

                </div>



            </div>
        </div>
    )
}

export default Home