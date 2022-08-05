import React from 'react'
import FileUpload from '../Components/FileUpload'

const dashboard = () => {
  return (
    <div className='grid grid-rows-3 w-[100vw] h-[100vh]'>
      <div className='grid grid-cols-3 bg-white h-1/4 text-center justify-center'>
       <div> home </div>
       <div> manage</div>
       <div> setting</div>
      </div>

      <div className=' justify-center  '>
       
        <FileUpload />
      </div>
      </div>
  )
}

export default dashboard