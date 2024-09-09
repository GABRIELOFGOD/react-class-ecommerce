import React, { useState } from 'react'
import { BsCart } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import Cart from './Cart';

const Header = () => {
  const [cartShow, setCartShow] = useState(false);
  
  return (
    <div className='flex justify-between sticky top-0 w-full overflow-hidden bg-black py-3 px-28 text-white '>
      <Link to='/'><p className='text-3xl font-bold'>Logo</p></Link>
      <ul className='my-auto flex gap-5'>
        <Link to='/products'>Products</Link>
        <Link>About</Link>
        <Link>Contact</Link>
      </ul>
      <div className="flex gap-3">
        <button className='bg-white py-2 px-6 rounded-md font-semibold text-neutral-900'>Login</button>
        <button onClick={()=>setCartShow(true)} className='text-neutral-600 bg-neutral-300 flex items-center justify-center rounded-full h-10 w-10'><BsCart /></button>
      </div>
      <Cart
        cartShow={cartShow}
        setCartShow={setCartShow}
      />
    </div>
  )
}

export default Header