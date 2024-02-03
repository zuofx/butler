import '../css/home.css';

import Techniques from '../components/techniques.js'

const Home = () => {

    const techniquesList = [
        { name: 'Technique 1', description: 'Description 1', prompt: 'Prompt 1' },
        { name: 'Technique 2', description: 'Description 2', prompt: 'Prompt 2' },
    ];

    return(
        <div className='Home'>
            <div className="technique-container">
                <div className="tech-title-container">
                    <div className="tech-title">TECHNIQUES:</div>
                    <a className="create-tech" href="/create"><h1>NEW TECHNIQUE</h1></a>
                </div>

                <div className = 'techniques-container'>
                    {techniquesList.map((technique) => {
                        return(
                            <Techniques
                                name={technique.name}
                                desc={technique.description}
                                prompt={technique.prompt}
                            />
                        )
                    })}

                </div>



            </div>
        </div>
    )
}

export default Home