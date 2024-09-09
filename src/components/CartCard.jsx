import React, { useContext, useState } from 'react'
import { BiTrash } from 'react-icons/bi';
import { GlobalProduct } from './Context';

const CartCard = ({product}) => {
  const [quantity, setQuantity] = useState(1);

  const { deleteProductFromCart } = useContext(GlobalProduct);

  const increaseQuantity = () => {
    setQuantity(quantity+1);
  }

  const decreaseQuantity = () => {
    if(quantity <= 1){
      setQuantity(1)
    } else {
      setQuantity(quantity-1);
    }
    
  }
  
  const { category, image, price, title, description } = product;
  return (
    <div className='flex bg-neutral-500 overflow-hidden h-[100px] rounded-lg border'>
      <div className='h-full overflow-hidden flex-1'><img  src={image} alt="" /></div>
      <div className='flex-[3] flex-col flex gap-2 px-6 py-2'>
        <p className='text-neutral-800 text-xs font-semibold'>{title}</p>
        <div className="flex gap-2 text-white">
          <p className="text-xs my-auto">Quantity:</p>
          <div className="flex gap-2">
            <button onClick={decreaseQuantity} className='rounded-full h-5 w-5 text-xs bg-neutral-800'>-</button>
            <p className='text-xs'>{quantity}</p>
            <button onClick={increaseQuantity} className='rounded-full h-5 w-5 text-xs bg-neutral-800'>+</button>
          </div>
        </div>
      </div>
      <button onClick={() => deleteProductFromCart(product)} className='text-white mr-3 hover:text-neutral-200'>
        <BiTrash size={20} />
      </button>
    </div>
  )
}

export default CartCard