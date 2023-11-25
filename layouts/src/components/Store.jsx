import { useState } from "react";
import CardsView from "./CardsView.js/CardsView";
import products from "../data-products/products";
import IconSwitch from "./IconSwitch/IconSwitch";
import ListView from "./ListView/ListView";

const Store = () => {
    const [icon, changeIcon] = useState('view_list');

    const onSwitch = () => {
        changeIcon(currentIcon =>
            currentIcon === 'view_list' ? 'view_module' : 'view_list'
        )
    }

    return(
        <div className="store">
            <header className="store-header-menu">
                <IconSwitch icon = {icon} onSwitch={onSwitch}/>
            </header>
            <div className="store-body">
                {icon === 'view_list' ? <CardsView products={products} /> : <ListView items={products} />}
            </div>
        </div>
    )
}

export default Store