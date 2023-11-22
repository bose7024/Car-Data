"use client"
import React, { useState } from 'react'

const page = () => {
  const [car, setcar] = useState("")
  const [brand, setbrand] = useState("")
  const [date, setdate] = useState("")
  const [fule, setfule] = useState("")
  const [door, setdoor] = useState("")
  const [color, setcolor] = useState("")
  const [MainTask, setMainTask] = useState([])
  const submitHandler=(e)=>{
    e.preventDefault()
    setMainTask([...MainTask,{car,brand,date,fule,door,color}])
    setcar("")
    setbrand("")
    setdate("")
    setfule("")
    setdoor("")
    setcolor("")
  }
  const deleteHandler=(i)=>{
    let copytask = [...MainTask]
    copytask.splice(i,1)
    setMainTask(copytask)
  }
  let renderTask=<h2 className='text-black'>No task available</h2>
  renderTask= MainTask.map((t,i)=>{
    return <li key={i} className='flex items-center justify-between'>
  <div className='flex justify-between mb-5 w-2/3'>
    <h5 className='text-xl font-semibold'>{t.car}</h5>
    <h6 className='text-xl font-semibold'>{t.brand}</h6>
    <h6 className='text-xl font-semibold'>{t.date}</h6>
    <h6 className='text-xl font-semibold'>{t.fule}</h6>
    <h6 className='text-xl font-semibold'>{t.door}</h6>
    <h6 className='text-xl font-semibold'>{t.color}</h6>
  </div>
     <button onClick={()=>{
      deleteHandler(i)
     }}
      className='bg-red-400 text-white px-4 py-2 rounded font-bold m-5'>delete</button></li>
  })
  return (
    <>
    <p className='bg-white text-black p-2 text-2xl font-bold text-center '>My Car Data</p>
    <form onSubmit={submitHandler}>
      <div className='flex'>
        <div className='flex'>
        <p className='flex items-center'>Car Name</p>
        <input
      type='text' className='text-xl border-zinc-800 border-2 m-2 px-1 text-black font'
      placeholder='Enter Car Name here'
      value={car}
      onChange={(e)=>{
        setcar(e.target.value)
      }}
      />
      </div>
      <div className='flex'>
        <p className='flex items-center'>Brand</p>
        <input
      type='text' className=' border-zinc-800 text-xl border-2 m-2 px-1 text-black'
      placeholder='Enter Brand Name here'
      value={brand}
      onChange={(e)=>{
        setbrand(e.target.value)
      }}
      />
      </div>
      <div className='flex'>
        <p className='flex items-center'>Man.Date</p>
        <input
      type='date' className='text-xl border-zinc-800 border-2 m-2 px-1 text-black'
      placeholder='Enter Man.Date here'
      value={date}
      onChange={(e)=>{
        setdate(e.target.value)
      }}
      />
      </div>
      </div>
      <div className='flex'>
        <div className='flex'>
        <p className='flex items-center'>Fule Type</p>
        <input
      type='combo' className='text-xl border-zinc-800 border-2 m-2 px-1 text-black'
      placeholder='Enter Fuel Type here'
      value={fule}
      onChange={(e)=>{
        setfule(e.target.value)
      }}
      />
      </div>
      <div className='flex'>
        <p className='flex items-center'>Door Count</p>
        <input
      type='number' className='text-xl border-zinc-800 border-2 m-2 px-1 text-black'
      placeholder='Enter Door Count here'
      value={door}
      onChange={(e)=>{
        setdoor(e.target.value)
      }}
      />
      </div>
      <div className='flex'>
        <p className='flex items-center'>Color</p>
         <input
      type='text' className='text-xl border-zinc-800 border-2 m-2 px-1 text-black'
      placeholder='Enter Color here'
      value={color}
      onChange={(e)=>{
        setcolor(e.target.value)
      }}
      />
      </div>
      </div>
      
     
      <button className=' text-black bg-green-600 px-4 py-2 text-xl font-bold rounded m-5'>Add Car </button>
    </form>
    <hr/>
    <div className='p-8 bg-slate-200'>
      <ul>
        {renderTask}
      </ul>
    </div>
    </>
  )
}

export default page
