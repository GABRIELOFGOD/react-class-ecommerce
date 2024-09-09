import React, { useContext } from 'react'
import { BiArrowBack } from 'react-icons/bi'
import { GlobalProduct } from './Context'
import CartCard from './CartCard';

const Cart = ({cartShow, setCartShow}) => {
  const { cartItems } = useContext(GlobalProduct);
  
  return (
    <div className={` right-0 h-screen fixed duration-500 w-[400px] bg-neutral-200 ${cartShow ? "top-0" : "top-[-1000px]"}`}>
      <div className='flex gap-5 bg-white py-2 px-6 my-auto'>
        <button onClick={() => setCartShow(false)} className='flex gap-3'>
          <div className='text-black text-2xl my-auto'><BiArrowBack /></div>
          <p className='text-black font-extrabold text-xl'>Cart</p>
          <span className='rounded-full h-6 font-bold w-6 bg-black text-white'>{cartItems.length}</span>
        </button>
      </div>
      <div className='flex flex-col px-3 overflow-auto py-6 gap-3'>
        {cartItems.map((product) => (
          <CartCard product={product} key={product.id} />
        ))}
      </div>
    </div>
  )
}

export default Cart