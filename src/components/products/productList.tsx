import ProductCard from "./productCard";

function ProductList() {
	return (
		<div className="grid grid-cols-5 gap-3">
			<ProductCard />
			<ProductCard />
			<ProductCard />
			<ProductCard />
			<ProductCard />
		</div>
	);
}

export default ProductList;
