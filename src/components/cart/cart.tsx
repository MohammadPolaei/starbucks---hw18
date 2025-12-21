import { data } from "../../assets/data/data.js";
import type { productData } from "../../types/allTypes";
import CartItem from "./cartItems";

function Cart() {
	return (
		<div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-3">
			{data.map((item: productData) =>
				item.quantity ? <CartItem {...item} /> : <></>
			)}
		</div>
	);
}

export default Cart;
