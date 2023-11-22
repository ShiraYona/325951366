import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { InputText } from 'primereact/inputtext';
// import { DataView, gridItem} from 'primereact/dataview';
import { Checkbox, } from 'primereact/checkbox';
import { Fieldset } from 'primereact/fieldset';


function GetCalnder() {


    const navigate = useNavigate()

    const [startData, setStartDate] = useState("2022-01-01") //"data" instead of  "date"  - i didnt have time to change
    const [endData, setEndtDate] = useState("2023-01-01")
    const [calander, setCalander] = useState([])
    const [onlyParsha, setOnlyParsha] = useState(false)
    let dataCal;
    //============================================


    
    async function fetchData() {

        try {
            const response = await fetch(`http://www.hebcal.com/hebcal?cfg=fc&v=1&i=off&maj=on&min=on&nx=on&mf=on&ss=on&mod=on&lg=he&s=on&start=${startData}&end=${endData}`)
            dataCal = await response.json()
            console.log("aaa", dataCal);
            setCalander(dataCal);
        }
        catch (err) {
            console.log("err", err);
        }
    }

    //=========================================

    const handleChange = () => {
        setOnlyParsha(!onlyParsha);
    };


    //==========================================

    useEffect(() => {
        fetchData()
    }, [endData])

    //========================================
    // const itemTemplate = () => {
    //     return gridItem(calander);
    // }

    //========================================

    return (<>


        <label >Start date:</label>
        <br></br>
        {/* <input type="date" id="start" name="trip-start"
       value="2022-07-25"
       min="0001-01-01" max="9999-12-31"></input> */}

        <input onBlur={(e) => setStartDate(e.target.value)}></input>
        {/* {==========================================} */}
        <br></br>
        <label >End date:</label>

        <br></br>
        <input onBlur={(e) => setEndtDate(e.target.value)}></input>
        <br></br>

        <label>הצג רק  פרשות</label>
        <input
            type="checkbox"

            checked={onlyParsha}
            onChange={handleChange}
        />
        <br></br>


        {/* ///////////////////////////////////////////////////////////////////////////////////// */}
        {/* /////////////////////                 primeReact     //////////////////////// */}
        {/* ///////////////////////////////////////////////////////////////////////////////////// */}
        <label >Start date:</label>
        <InputText value={""} onChange={(e) => setStartDate(e.target.value)} />
        <label >End date:</label>
        <InputText value={""} onChange={(e) => setEndtDate(e.target.value)} />
        <br></br>
        <label>הצג רק  פרשות</label>
        <Checkbox onChange={e => handleChange(e.checked)} checked={onlyParsha}></Checkbox>
        {/* <DataView value={calander} itemTemplate={itemTemplate} layout={'grid'} /> */}


       
        {/*======================================================================================= */}



        {endData !== " " && startData !== " " && onlyParsha &&
            navigate("/onlyParsha", { state: calander })//The nicer way  is to render here, but i whanted to use the navigate
        }

        {endData !== " " && startData !== " " && !onlyParsha &&
            calander.map((i, index) => {
                return (<>
                    
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
            })
        }







    </>)

}
export default GetCalnder