import Cart from "./cart/cart";
import Header from "./header";
import ProductList from "./products/productList";
import SubmitButton from "./submitButton";

function Home() {
	return (
		<div className="bg-[#ececec] w-full h-full flex flex-col gap-3 p-5 items-center">
			<Header />
			<ProductList />
			<div className="font-bold text-[#1e3932] text-md">Bill</div>
			<Cart />
			<div className="font-bold text-[#1e3932] text-xl">Total : $233.5</div>
			<SubmitButton />
		</div>
	);
}

export default Home;
