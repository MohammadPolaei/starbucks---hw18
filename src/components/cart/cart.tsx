import CartItem from "./cartItems";

function Cart() {
	return (
		<div className="grid grid-cols-5 gap-3">
			<CartItem />
			<CartItem />
			<CartItem />
			<CartItem />
			<CartItem />
		</div>
	);
}

export default Cart;
