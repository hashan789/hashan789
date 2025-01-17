// Filename - App.js

import React from 'react';

//importing typewriter-effect
import Typewriter from "typewriter-effect";

function App() {
    return (
        <div >
            <Typewriter
                onInit={(typewriter) => {
                    typewriter
                        .typeString("Full-Stack Developer")
                        .pauseFor(1000)
                        .deleteAll()
                        .typeString("AI Enthusiast")
                        .pauseFor(1000)
                        .deleteAll()
                        .typeString("Azure Enthusiast")
                        .start();
                }}
                options={{
                    loop: true,
                }}
            />
        </div>
    );
}

export default App;
