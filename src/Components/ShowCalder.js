import { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import GetCalnder from './GetCalnder'
import { Fieldset } from 'primereact/fieldset';


function ShowCalder() {

const data= useLocation()
const arr=data.state
const tmp=[];



function findOnlyParsha(){
    tmp=arr.find((i)=> {i.className==="parashat"}) 
}
//=====================

useEffect(()=>{
    findOnlyParsha()
},[])
  




    return (<>
    
 {
 
 tmp.map((i,ind)=>{
    return(<>
        <div style={{ backgroundColor: "yellow", border: "black", height: "150px", width: "250px", display: "inline-block" }}>
            {i.title}
            <br></br>
            
            {i.description}
            <br></br>
            {i.start}
            {/* {index} */}
            <br></br>
            <br></br>
            </div>
             {/* =======    primereact  ======*/}
             <Fieldset legend={i.title}>
                    <div style={{ backgroundColor: "yellow", border: "black", height: "150px", width: "250px", display: "inline-block" }}>
                        {i.title}
                        <br></br>
                        {i.description}
                        <br></br>
                        {i.start}
                        {/* {index} */}
                        <br></br>
                        <br></br>
                    </div>
        </Fieldset>
            </>
    )

 })}





    </>)

}
export default ShowCalder