import { useState } from "react";
import { data } from "../assets/data/data";
import Cart from "./cart/cart";
import Header from "./header";
import ProductList from "./products/productList";
import SubmitButton from "./submitButton";

function Home() {
	const [products, setCount] = useState(data);

	function increase(name: string) {
		setCount((prev) =>
			prev.map((p) =>
				p.name === name ? { ...p, quantity: p.quantity + 1 } : p
			)
		);
	}

	function decrease(name: string) {
		setCount((prev) =>
			prev.map((p) =>
				p.name === name && p.quantity > 0
					? { ...p, quantity: p.quantity - 1 }
					: p
			)
		);
	}

	const sumOfCart = products.map((item) => item.quantity * item.price);
	return (
		<div className="bg-[#ececec] w-full h-full flex flex-col gap-3 p-5 items-center">
			<Header />
			<ProductList
				products={products}
				onIncrease={increase}
				onDecrease={decrease}
			/>
			<div className="font-bold text-[#1e3932] text-md">Bill</div>
			<Cart products={products} />
			<div className="font-bold text-[#1e3932] text-xl">
				Total : ${sumOfCart.reduce((total, current) => total + current, 0)}
			</div>
			<SubmitButton products={products} />
		</div>
	);
}

export default Home;
