import React,{useState} from "react"


function Celsius(fahrenheit) {return (fahrenheit - 32)  / 1.8;}
function Fahrenheit(celsius) {return (celsius * 1.8) + 32;}

function handleChange(e){
    console.log(e.target.id);
    if(e.target.id=="celsius"){
        document.getElementById("fahrenayt").value=Fahrenheit(e.target.value)
    }else if(e.target.id=="fahrenayt"){
        document.getElementById("celsius").value=Celsius(e.target.value)
    }
}

export default function Form(){
    return(
        <>
            <div className="d-flex py-3 flex-wrap w-100 gap-2 justify-content-center">
                <div className="row w-100">
                        <div className="col" style={{paddingLeft:'0px'}}>
                            <input type="number" className="form-control shadow-none" name="celsius" id="celsius" min={0} placeholder="(°C) Celsius " step=".1" onChange={handleChange} />
                        </div>
                        <div className="col" style={{paddingRight:'0px'}}>
                            <input type="number" className="form-control shadow-none" name="fahrenayt" id="fahrenayt" min={0} placeholder="(°F) Fahrenhayt " step=".1" onChange={handleChange} />
                        </div>
                </div>
                <div className="row w-100 pt-4 px-0">
                    <p className="text-center w-100 p-0 m-0 text-muted"><span className="copyleft">&copy;</span> Tuğberk Yıldırım with Bootstrap 5</p>
                </div>
            </div>
        </>
    )
}