import Device from "../components/device.js";
import { useState, useEffect } from 'react';
import '../css/devices.css';

const Devices = () => {

    const [devices, setDevices] = useState([]);

    useEffect(() => {
        const handleTechniques = async () => {
            try {
                const response = await fetch('http://localhost:3002/api/devices/get');
                const data = await response.json();
                console.log(data)
                setDevices(data);
            } catch (error) {
                console.error('Error fetching techniques:', error);
            }
        }
      
        handleTechniques();
      }, []);

    return (
        <div className="Device">
            <div className = 'device-container'>

                <div className="tech-title-container">
                    <div className="tech-title">DEVICES:</div>
                    <a className="create-tech" href="/create"><h1>NEW DEVICE</h1></a>
                </div>



                {devices.map((devices) => {
                    return(
                        <Device
                            key = {devices.name}
                            name={devices.name}
                            type={devices.type}
                            prompt={devices.prompt}
                            script = {devices.script}
                            extra = {devices.extra}
                        />
                    )
                })}

            </div>
        </div>
    )
}

export default Devices;