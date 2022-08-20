import React from 'react'
import { useRouter } from 'next/router'

const ProductItem = () => {
  const router = useRouter()

  return <div>Esta la pagina de prueba del producto: {router.query.id}</div>
}

export default ProductItem
