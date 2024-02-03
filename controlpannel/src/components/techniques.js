import '../css/techniques.css';

const Techniques = () => {

    const techniquesList = [
        { name: 'Technique 1', description: 'Description 1', prompt: 'Prompt 1' },
        { name: 'Technique 2', description: 'Description 2', prompt: 'Prompt 2' },
    ];

    return(
        <div className = 'techniques-container'>
            <h1>Techniques</h1>
            {techniquesList.map((technique, index) => {
                return(
                    <div key = {index} className = 'technique'>

                    <div className = 'techniques-left'>
                        <h3>{technique.name}</h3>
                        <h3>{technique.description}</h3>
                        <h3>{technique.prompt}</h3>
                    </div>

                    <div className = 'techniques-right'>
                        <button>EDIT</button>
                        <button>DELETE</button>
                    </div>

                </div>
                )
                
            })}

        </div>
    )
}

export default Techniques