import { BrowserRouter, Routes , Route } from 'react-router-dom';
import Home from './home/home'
import WebServices from './webServices/services'
import BizServices from './bizServices/services'
import OurTeam from './ourTeam/ourTeam'
function App(){
  return(
    <>

    <BrowserRouter>
    <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/home' element={<Home/>}></Route>
        <Route path='/team' element={<OurTeam/>}></Route>
        <Route path='/webservices' element={<WebServices/>}></Route>
        <Route path='bizservices' element={<BizServices/>}></Route>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App