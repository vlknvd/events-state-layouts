import './listView.css'

function ListView({ items }) {
    return (
        <div className="product-cards-list">
            {items.map(product =>
                <div className='product-card-list'>
                    <div className="product-card-img-list">
                        <img src={product.img} alt="" />
                    </div>     
                    <h1 className="product-title-list">{product.name}</h1>
                    <p className="product-color-list">{product.color}</p>
                    <p className="product-price-list">${product.price}</p>
                    <div className="product-card-button-list">
                        <button className="button-list">Add to card</button>
                    </div>
                </div>
            )}
        </div>
    )
}

export default ListView