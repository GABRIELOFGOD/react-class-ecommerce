import React from 'react'

const Home = () => {
  return (
    <div>
      <div className='bg-neutral-100 flex flex-col gap-5 h-fit px-32 py-40'>
        <p className='text-neutral-700 text-xl '>Buy all clothes and gadget at</p>
        <p className='text-neutral-900 font-bold text-6xl'>Lowest Price Ever!</p>
        <button className='text-white bg bg-neutral-800 w-fit rounded-md py-3 px-8 hover:bg-neutral-900'>Shop now!</button>
      </div>
    </div>
  )
}

export default Home