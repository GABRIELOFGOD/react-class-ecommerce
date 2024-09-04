import React from 'react'

const CartCard = ({item}) => {
  return (
    <div className='flex bg-neutral-500 overflow-hidden h-[100px] rounded-lg border'>
      <div className='h-full overflow-hidden flex-1'><img  src={item.image} alt="" /></div>
      <div className='flex-[3] px-6 py-2'>
        <p className='text-neutral-800 font-semibold'>{item.title}</p>
      </div>
    </div>
  )
}

export default CartCard