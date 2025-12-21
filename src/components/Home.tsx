import Header from "./header";
import ProductList from "./products/productList";

function Home() {
	return (
		<div className="bg-[#ececec] w-full h-screen flex flex-col gap-3 p-5">
			<Header />
			<ProductList />
			{/* <ProductList />
			<Cart />
			<SubmitButton /> */}
		</div>
	);
}

export default Home;
