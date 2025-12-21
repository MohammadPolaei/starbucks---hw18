import { useState } from "react";
import type { productData } from "../../types/allTypes";

function ProductCard(prodData: productData) {
	const [counter, setCounter] = useState(0);

	return (
		<div className="bg-[#1e3932] rounded-2xl py-2 px-3 flex flex-col justify-between gap-2 hover:shadow-2xl hover:shadow-[#1e3932] hover:bg-[#1e5032] transition-bg delay-50 duration-200 ease-in-out">
			<img
				src={"../../../src/assets/images" + prodData.img}
				className="w-4/5 self-center"
			/>
			<h2 className="font-semibold text-sm text-white">{prodData.name}</h2>
			<p className="font-bold text-md text-[#e9c8a2]">{"$" + prodData.price}</p>
			<div className="bg-white flex flex-row justify-between gap-2 items-center mx-10">
				<button
					className="bg-[#e9c8a2] p-2 flex-1 text-lg hover:cursor-pointer"
					onClick={() => setCounter(counter + 1)}
				>
					+
				</button>
				<span className="flex-1 text-center text-md">{counter}</span>
				<button
					className="bg-[#e9c8a2] p-2 flex-1 text-lg hover:cursor-pointer"
					onClick={() => {
						if (counter > 0) {
							setCounter(counter - 1);
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
