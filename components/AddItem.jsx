import React, { useState } from 'react'

function Form({ setTasks, tasks }) {
  const [value, SetValue] = useState('')
  const addItem = () => {
    event.preventDefault()
    setTasks([...tasks, value])
    SetValue('')
  }
  return (
    <div>
      <form className="space-x-5 py-10">
        <input
          className="text-grey-darker mr-4 w-1/3 appearance-none rounded border px-3 py-2 shadow"
          type="text"
          value={value}
          onChange={(little) => SetValue(little.target.value)}
        />
        <button className="rounded-full bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700" type="submit" onClick={() => addItem()}>
          Submit
        </button>
      </form>
    </div>
  )
}

export default Form
