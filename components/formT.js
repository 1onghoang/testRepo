import React, {useState, useEffect} from 'react'

const FormT = ({data, onChange}) => {
  const [text, setText] = useState("");

  return(

      <div className="w-1/3">

      <h2 className="text-3xl p-4">Add Trasaction</h2>
      <div className="p-4">
          <label className="block">Type</label>
          <input type="text" className="bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"onChange={(e) => onChange(e)}></input>
      </div>


      </div>
  )
}

export default FormT
