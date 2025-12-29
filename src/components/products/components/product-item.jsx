function ProductItem({index,product}){
  return (
    <div className="productItem" key={index}>
      <p>{product}</p>
    </div>
  )
}

export default ProductItem