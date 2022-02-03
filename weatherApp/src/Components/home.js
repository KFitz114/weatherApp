import React, {useState} from "react";
import './home.css';

function Home() {
    const[home, setHome] = useState ([]);
    return(
        <div className = 'heroImage'>
            <div className = 'homeContainer'>
                <div className = 'homeFlex'>
                    <h1> Welcome to your eye on the sky </h1>
                    <h3> Look up before you "Look up" </h3>
                    <br></br>
                    <p className = 'indent'> This site has three links above which will 
                        provide information on the current weather, the current location of the International Space Station,
                        and moon and sun phases to help plan for star gazing. Future implementation will include satellites and
                        their locations on the ISS tab.</p>
                </div>
            </div>
        </div>
    )
}

export default Home;
