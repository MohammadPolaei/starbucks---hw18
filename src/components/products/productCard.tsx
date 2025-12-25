import type { productData } from "../../types/allTypes";

type prodCardProps = {
	products: productData;
	onIncrease: (name: string) => void;
	onDecrease: (name: string) => void;
};

function ProductCard({ products, onIncrease, onDecrease }: prodCardProps) {
	return (
		<div className="bg-[#1e3932] rounded-2xl py-2 px-3 flex flex-col justify-between gap-2 hover:shadow-2xl hover:shadow-[#1e3932] hover:bg-[#1e5032] transition-bg delay-50 duration-200 ease-in-out">
			<img
				src={"../../../src/assets/images" + products.img}
				className="w-4/5 self-center"
			/>
			<h2 className="font-semibold text-sm text-white">{products.name}</h2>
			<p className="font-bold text-md text-[#e9c8a2]">{"$" + products.price}</p>
			<div className="bg-white flex flex-row justify-between gap-2 items-center mx-10">
				<button
					className="bg-[#e9c8a2] p-2 flex-1 text-lg hover:cursor-pointer"
					onClick={() => onIncrease(products.name)}
				>
					+
				</button>
				<span className="flex-1 text-center text-md">{products.quantity}</span>
				<button
					className="bg-[#e9c8a2] p-2 flex-1 text-lg hover:cursor-pointer"
					onClick={() => {
						if (products.quantity > 0) {
							onDecrease(products.name);
						} else {
							return;
						}
					}}
				>
					-
				</button>
			</div>
		</div>
	);
}

export default ProductCard;
