import '../css/techniques.css';

const Techniques = ({name, desc, prompt}) => {

    return(

        <div className = 'technique'>

            <div className = 'techniques-left'>
                <div>{name}</div>
                <div>Description: {desc}</div>
                <div>Prompt: "{prompt}"</div>
            </div>

            <div className = 'techniques-right'>
                <a className="tr-edit">EDIT</a>
                <a className="tr-del">DELETE</a>
            </div>

        </div>
    )
}

export default Techniques