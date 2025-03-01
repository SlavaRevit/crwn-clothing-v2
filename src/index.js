import React from 'react';
import './index.scss';
import App from './App';
import {createRoot} from "react-dom/client";
import {BrowserRouter} from "react-router";
import {UserProvider} from "./context/user.context";
import {ProductsContextProvider} from "./context/products.context";
import {CartContext, CartContextProvider} from "./context/cart-context";


const container = document.getElementById('root');
const root = createRoot(container)

root.render(
	<React.StrictMode>
		<BrowserRouter>

			<UserProvider>
				<ProductsContextProvider>
					<CartContextProvider>
						<App/>
					</CartContextProvider>
				</ProductsContextProvider>
			</UserProvider>

		</BrowserRouter>
	</React.StrictMode>
);
