import { useContext, useEffect } from 'react'
import { GlobalProduct } from "../components/Context";
import ProductCard from "../components/ProductCard";

const Product = () => {
  const { productsGetter, allProducts } = useContext(GlobalProduct);

  useEffect(() => {
    productsGetter();
  },[])

  return (
    <div>
      <div className='bg-gradient-to-r from-slate-600 to-neutral-900 py-12'>
        <p className="text-8xl text-white text-center">Products</p>
      </div>
      <div className='px-10 justify-between flex flex-wrap gap-5 py-10'>
        {allProducts.map((product) => (
          <ProductCard item={product} key={product.id} />
        ))}
      </div>
    </div>
  )
}

export default Product