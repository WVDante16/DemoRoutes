import React, {useState} from 'react';
import './Calculadora.css';

function Calculadora(props) {
    const [result, setResult] = useState("aaaaaaaa");
    
    return (
        <div>
            <h1>Calculadora</h1>

            <div className="container">
                <form className="result">
                    <input type="text" class="resultadoimagen" value={result} />
                </form>

                <div className="keypad">
                    <input type="button" class="botonimagen" value="Clear"></input>
                    <input type="button" class="botonimagen" value="C"></input>
                    <input type="button" class="botonimagen" value="/"></input>
                    <input type="button" class="botonimagen" value="7"></input>
                    <input type="button" class="botonimagen" value="8"></input>
                    <input type="button" class="botonimagen" value="9"></input>
                    <input type="button" class="botonimagen" value="X"></input>
                    <input type="button" class="botonimagen" value="4"></input>
                    <input type="button" class="botonimagen" value="5"></input>
                    <input type="button" class="botonimagen" value="6"></input>
                    <input type="button" class="botonimagen" value="-"></input>
                    <input type="button" class="botonimagen" value="1"></input>
                    <input type="button" class="botonimagen" value="2"></input>
                    <input type="button" class="botonimagen" value="3"></input>
                    <input type="button" class="botonimagen" value="+"></input>
                    <input type="button" class="botonimagen" value="0"></input>
                    <input type="button" class="botonimagen" value="."></input>
                    <input type="button" class="botonimagen" value="="></input>
                </div>
            </div>
        </div>
    );
}

export default Calculadora;