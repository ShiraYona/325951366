import {Route,Routes} from 'react-router-dom'
import GetCalnder from './GetCalnder'
import ShowCalder from './ShowCalder'



function AppRotes(){

    return(
        <Routes>
         
            <Route path="/" element={<GetCalnder/>}></Route>
            <Route path="/onlyParsha" element={<ShowCalder/>}></Route>
           
        </Routes>
    )

}
export default AppRotes

