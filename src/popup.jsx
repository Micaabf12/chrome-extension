import React from "react";
import { render } from "react-dom";

function PopUp() {
    return (
        <div>
            <h1>Hola, Mundo!</h1>
            <p>Esto es simplemente un popup</p>
        </div>
    );
}

render(<PopUp />, document.getElementById("react-target"));