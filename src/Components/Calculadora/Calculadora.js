import React, {useState} from 'react';
import './Calculadora.css';

function Calculadora(props) {
    const [result, setResult] = useState("");
    
    //Funcion para que se escriba el valor de los botones
    const handleClick = (e) => {
        setResult(result.concat(e.target.name));
    }

    //Funcion para limpiar
    const clear = () => {
        setResult("");
    }

    //Funcion para borrar
    const backspace = () => {
        setResult(result.slice(0, result.length -1));
    }

    //Funcion que realizara las operaciones
    const calculate = () => {
        try {
            setResult(eval(result).toString());
        } 
        catch (err) {
            setResult("Syntax Error")
        }
    }

    return (
        <div>
            <h1>Calculadora</h1>

            <div className="calculatorcontainer">
                <form className="result">
                    <input type="text" class="resultadoimagen" value={result} />
                </form>

                <div className="keypad">
                    <input type="button" id="clear" class="botonimagen" value="Clear" onClick={clear}></input>
                    <input type="button" id="backspace" class="botonimagen" value="C" onClick={backspace}></input>
                    <input type="button" name="/" class="botonimagen" value="/" onClick={handleClick}></input>
                    <input type="button" name="7" class="botonimagen" value="7" onClick={handleClick}></input>
                    <input type="button" name="8" class="botonimagen" value="8" onClick={handleClick}></input>
                    <input type="button" name="9" class="botonimagen" value="9" onClick={handleClick}></input>
                    <input type="button" name="*" class="botonimagen" value="X" onClick={handleClick}></input>
                    <input type="button" name="4" class="botonimagen" value="4" onClick={handleClick}></input>
                    <input type="button" name="5" class="botonimagen" value="5" onClick={handleClick}></input>
                    <input type="button" name="6" class="botonimagen" value="6" onClick={handleClick}></input>
                    <input type="button" name="-" class="botonimagen" value="-" onClick={handleClick}></input>
                    <input type="button" name="1" class="botonimagen" value="1" onClick={handleClick}></input>
                    <input type="button" name="2" class="botonimagen" value="2" onClick={handleClick}></input>
                    <input type="button" name="3" class="botonimagen" value="3" onClick={handleClick}></input>
                    <input type="button" name="+" class="botonimagen" value="+" onClick={handleClick}></input>
                    <input type="button" name="0" class="botonimagen" value="0" onClick={handleClick}></input>
                    <input type="button" name="." class="botonimagen" value="." onClick={handleClick}></input>
                    <input type="button" id="result" class="botonimagen" value="=" onClick={calculate}></input>
                </div>
            </div>
        </div>
    );
}

export default Calculadora;