import { useState, useEffect } from 'react'

type Product = {
  _id: string,
  productName: string,
  productDesc: string,
  isSale: boolean
}

const ProductList = () => {
  const [products, setProducts] = useState<Product[]>()

  useEffect(() => {
    const getProducts = async () => {
      const response = await fetch(`http://localhost:4000/products`)
      const data = await response.json()
      setProducts(data)
    }

    getProducts()
  }, [])

  return (
    <div>
      <h2>Products</h2>
      <ul>
        {products?.map(product => (
          <li key={product._id}>
            <strong>{product.productName}</strong> - <em>{product.isSale ? 'FOR SALE' : 'NOT FOR SALE'}</em>
            <p>{product.productDesc}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default ProductList