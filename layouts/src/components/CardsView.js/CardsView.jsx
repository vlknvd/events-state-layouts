import './cardsView.css'

function CardsView({ products }) {
    return (
        <div className="product-cards">
            {products.map(product =>
                     <div className='product-card'>
                     <div className='product-card-head'>
                         <h1 className="product-title">{product.name}</h1>
                         <p className="product-color">{product.color}</p>
                     </div>
                     <div className="product-card-body">
                         <img className="product-card-img" src={product.img} alt="" />
                     </div>  
                     <div className="product-card-footer">
                         <p className="product-price">${product.price}</p>
                         <button className="product-button">Add to card</button>
                     </div>
                 </div>
            )}
        </div>
    )
}

export default CardsView