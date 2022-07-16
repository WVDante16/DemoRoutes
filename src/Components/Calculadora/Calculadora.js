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
            <h1 className="title">Calculadora Ahegao UwU</h1>

            <div className="calculatorcontainer">
                <form className="result">
                    <input type="text" class="resultadoimagen" value={result} />
                </form>

                <div className="keypad">
                    <input type="button" id="clear" class="botonClear" value="Clear" onClick={clear}></input>
                    <input type="button" id="backspace" class="botonC" value="C" onClick={backspace}></input>
                    <input type="button" name="/" class="botonDiv" value="/" onClick={handleClick}></input>
                    <input type="button" name="7" class="boton7" value="7" onClick={handleClick}></input>
                    <input type="button" name="8" class="boton8" value="8" onClick={handleClick}></input>
                    <input type="button" name="9" class="boton9" value="9" onClick={handleClick}></input>
                    <input type="button" name="*" class="botonX" value="X" onClick={handleClick}></input>
                    <input type="button" name="4" class="boton4" value="4" onClick={handleClick}></input>
                    <input type="button" name="5" class="boton5" value="5" onClick={handleClick}></input>
                    <input type="button" name="6" class="boton6" value="6" onClick={handleClick}></input>
                    <input type="button" name="-" class="boton-" value="-" onClick={handleClick}></input>
                    <input type="button" name="1" class="boton1" value="1" onClick={handleClick}></input>
                    <input type="button" name="2" class="boton2" value="2" onClick={handleClick}></input>
                    <input type="button" name="3" class="boton3" value="3" onClick={handleClick}></input>
                    <input type="button" name="+" class="botonMas" value="+" onClick={handleClick}></input>
                    <input type="button" name="0" class="boton0" value="0" onClick={handleClick}></input>
                    <input type="button" name="." class="botonDec" value="." onClick={handleClick}></input>
                    <input type="button" id="result" class="botonRes" value="=" onClick={calculate}></input>
                </div>
            </div>
        </div>
    );
}

export default Calculadora;