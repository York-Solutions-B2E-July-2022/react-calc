import {useState} from "react";
import "./Calc.css"
export default function Calc(props){
    let [valueA, setValueA] =  useState(0);
    let [valueB, setValueB] =  useState(0);
    let [op, setOp] = useState("+");
    let [result, setResult] = useState(0);
    function doCalc(operation, a, b){
        switch(op){
            case "+": {
                // set result;
                console.log(`${a} + ${b}`)
                return setResult(a+ b);
            }
            case "*": {
                //set result;
                console.log(`${a} * ${b}`)
                return setResult(a* b);
            }
            case "/": {
                //set result;
                console.log(`${a} / ${b}`)
                return setResult(a/ b);
            }
            case "-": {
                //set result;
                console.log(`${a} - ${b}`)
                return setResult(a- b);
            }
            default: {
                setResult(0);
            }
        }
    }
    return (
        <>
            <div className={"calc"}>
                <div className={"calc-inputs"}>

                    <input type="number" value={valueA} onChange={(event)=>{
                        setValueA(parseInt(event.target.value));
                    }}/>
                    <select value={op} onChange={(event)=>{
                        console.log(event.target.selectedOptions.item(0).value)
                        console.log(event.target.value);
                        setOp(event.target.value);
                    }}>
                        <option value={"+"}>+</option>
                        <option value={"-"}>-</option>
                        <option value={"*"}>*</option>
                        <option value={"/"}>/</option>
                    </select>
                    <input type={"number"} value={valueB} onChange={(event)=>{
                        setValueB(parseInt(event.target.value))
                    }}/>
                </div>
                <button className={"calc-submit"} onClick={()=>doCalc(op, valueA, valueB)}>=</button>
                <div>
                    <input disabled={true} value={result}></input>
                </div>

            </div>

        </>
    );
}