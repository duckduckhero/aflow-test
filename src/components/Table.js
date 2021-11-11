import React, { useState, useEffect } from 'react'; 
import './Table.css'

function Table({ceramics, type}) {

    var elements = [];
    if(type=='carbides'){
        elements.push('C');
    } else if(type=='oxides'){
        elements.push('O');
    } else if(type=='nitrides'){
        elements.push('N');
    } else if(type=='borides'){
        elements.push('B');
    } else if(type=='carbo-nitrides'){
        elements.push('C');
        elements.push('N');
    }


    var obj = {};
    var rows = [];
    for (var key in ceramics) { 
        if (ceramics.hasOwnProperty(key)) {

            var cnt=0; 
            var formula = [];
            for(var element in ceramics[key].composition){
                
                if(elements.includes(element)){
                    cnt++; 
                }

                formula.push(element);
                formula.push(<sub>{ceramics[key].composition[element]}</sub>);
            }

            if(cnt==elements.length) {
                obj[key] = ceramics[key]; 
                rows.push(
                    <tr>
                        <th>{key}</th>
                        <th>{formula}</th>
                        <th>{ceramics[key].H_mix}</th>
                        <th>{ceramics[key].EFA}</th>
                        <th>{ceramics[key].chi}</th>
                    </tr>
                )
            }
            
        }
    }

    console.log(obj);

    if(rows.length==0) {
        return(
            <div>
                <h1>{type} table</h1>
                There is no ceramic that fits into this class.
                <br></br>
                <br></br>
            </div>
        )
    }

    return(
        <div>
            <h1>{type} table</h1>
            <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Chemical Formula (Composition)</th>
                    <th>&#916;H<sub>mix</sub> (eV/atom)</th>
                    <th>EFA (1/(eV/atom))</th>
                    <th>chi (meV/atom)</th>
                </tr>
            </thead>
            <tbody>
                {rows}
            </tbody>
            </table>
        </div> 
    )
}

export default Table; 