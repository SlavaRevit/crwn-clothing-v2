import React from 'react';
import './index.scss';
import App from './App';
import {createRoot} from "react-dom/client";
import {BrowserRouter} from "react-router";
import {UserProvider} from "./context/user.context";
import {CategoriesContextProvider} from "./context/categories.context";
import {CartContext, CartContextProvider} from "./context/cart.context";


const container = document.getElementById('root');
const root = createRoot(container)

root.render(
	// <React.StrictMode>
	<BrowserRouter>

		<UserProvider>
			<CategoriesContextProvider>
				<CartContextProvider>
					<App/>
				</CartContextProvider>
			</CategoriesContextProvider>
		</UserProvider>

	</BrowserRouter>
	// </React.StrictMode>
);
