import '../css/home.css';

import Techniques from '../components/techniques.js'
import { useState } from 'react';

const Home = () => {

    const [techniques, setTechniques] = useState([]);

    const getTechniques=()=>{
        fetch('/data/techniques.json'
        ,{
          headers : { 
            'Content-Type': 'application/json',
            'Accept': 'application/json'
           }
        }
        )
          .then(function(response){
            console.log(response)
            return response.json();
          })
    
          .then(function(myJson) {
            console.log(myJson);
            setTechniques(myJson);
          });
      }
    getTechniques();

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
                                name={technique.name}
                                desc={technique.description}
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