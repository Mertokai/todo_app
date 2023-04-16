import Image from 'next/image'
import { Inter } from 'next/font/google'
import AddItem from '../../components/AddItem'
import { useState } from 'react'

export default function Home() {
  const [tasks, setTasks] = useState([])
  function deleteItem(index) {
    const bekle = tasks
    bekle.splice(index, 1)
    setTasks([...bekle])
  }
  return (
    <main className="text-center ">
      <AddItem setTasks={setTasks} tasks={tasks} />
      <div className="">
        {tasks.map((item, index) => (
          <div key={index} className="h-100 bg-teal-lightest flex w-full items-center justify-center  space-x-5 py-5 text-center font-sans ">
            <ul className="text-grey-darkest w-1/3  rounded-full bg-violet-100 py-5 text-center font-serif">
              <li className="">{item}</li>
            </ul>
            <button
              className="mb-2 rounded-full border border-red-500 bg-red-500 px-5 py-2 text-sm font-medium tracking-wider text-white shadow-sm hover:bg-red-600 hover:shadow-lg md:mb-0"
              onClick={() => deleteItem(index)}
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </main>
  )
}
