import React, {useState, useEffect} from 'react'

const FormAmount = ({data, onChange}) => {
  const [text, setText] = useState("");

  return(
    <div className="p-4">
        <label>Amount</label>
        <input type="number" className="bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" onChange={(e) => onChange(e)}></input>
    </div>
  )
}

export default FormAmount
