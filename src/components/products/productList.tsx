import { data } from "../../assets/data/data.js";
import type { productData } from "../../types/allTypes.js";
import ProductCard from "./productCard";

function ProductList() {
	return (
		<div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-3">
			{data.map((item: productData) => (
				<ProductCard {...item} />
			))}
		</div>
	);
}

export default ProductList;
