import Header from "./header";
import ProductCard from "./products/productCard";

function Home() {
	return (
		<div className="bg-[#ececec] w-full h-screen flex flex-col gap-3 p-5">
			<Header />
			<ProductCard />
			{/* <ProductList />
			<Cart />
			<SubmitButton /> */}
		</div>
	);
}

export default Home;
