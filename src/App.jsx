
import { SecondPage } from './components/SecondPage/SecondPage'
import { StartPage } from './components/StartPage/StartPage'
import { ThirdPage } from './components/ThirdPage/ThirdPage'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  

  return (
   <Router>
    <Routes>
    <Route path='/'  element={<StartPage/>}/>
      <Route path='/start'  element={<StartPage/>}/>
      <Route path='/second' element={<SecondPage/>}/>
      <Route path='/third' element={<ThirdPage/> }/>
    </Routes>
   </Router>
  )
}

export default App


 // <div className="App">
      
    //   <StartPage/> 

    //    <SecondPage/>

    //    <ThirdPage/> 

    // </div>