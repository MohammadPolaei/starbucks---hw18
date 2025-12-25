import type { productData } from "../../types/allTypes.js";
import ProductCard from "./productCard";

type ProductListTypes = {
	products: productData[];
	onIncrease: (name: string) => void;
	onDecrease: (name: string) => void;
};

function ProductList({ products, onIncrease, onDecrease }: ProductListTypes) {
	return (
		<div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-3">
			{products.map((item: productData, index: number) => (
				<ProductCard
					products={products[index]}
					onIncrease={() => onIncrease(item.name)}
					onDecrease={() => onDecrease(item.name)}
				/>
			))}
		</div>
	);
}

export default ProductList;
