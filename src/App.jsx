import React from "react"
import Navbar from "./like"
import Form from "./Form"
import ReviwList from "./ReviwList"
function App(){
  return(
    <div className='row my-4'>
      <div className="col-md-8 mx-auto">
        <div className="card">
          <div className="card-header bg-secondary">
            <Navbar/>

          </div>
          

          <Form/>
          <ReviwList/>

        </div>

      </div>
      
    </div>

  )
}
export default App