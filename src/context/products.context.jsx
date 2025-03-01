import {createContext, useEffect, useState} from "react";

import DEFAULT_PRODUCTS from '../shop-data.json';

export const ProductsContext = createContext({
	products: [],
})

export const ProductsContextProvider = ({children}) => {
	const [products, setProducts] = useState(DEFAULT_PRODUCTS);
	const value = {
		products,
		setProducts,
	}

	return (
		<ProductsContext.Provider
			value={value}>{children}</ProductsContext.Provider>
	)
}
