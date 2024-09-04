import React, { useContext } from 'react'
import { GlobalProduct } from './Context'

const ProductCard = ({item}) => {
  const { addProductToCart } = useContext(GlobalProduct);
  
  return (
    <div className='w-[300px] bg-neutral-300 border overflow-hidden rounded-md flex flex-col'>
      <div className='w-full h-[200px] overflow-hidden'><img src={item.image} alt="product image" /></div>
      <div className='flex flex-col gap-3 px-3 py-2'>
        <p className="text-xl text-neutral-700 font-semibold">{item.title}</p>
        <div className="flex justify-between ">
          <div className="flex gap-2">
            <p className='text-xs'>Category:</p>
            <p className='text-xs text-gray-600'>{item.category}</p>
          </div>
          <p className='text-sm text-red-500 font-semibold'>${item.price}</p>
        </div>
        <div className="flex">
          <button onClick={() => addProductToCart(item)} className='w-full rounded-md text-white py-2 bg-neutral-800 hover:bg-neutral-900'>Add to Cart</button>
        </div>
      </div>
    </div>
  )
}

export default ProductCard