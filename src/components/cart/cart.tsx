import type { productData } from "../../types/allTypes";
import CartItem from "./cartItems";
type Props = {
	products: productData[];
};
function Cart({ products }: Props) {
	return (
		<div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-3">
			{products.map((item: productData) => (
				<CartItem {...item} />
			))}
		</div>
	);
}

export default Cart;
