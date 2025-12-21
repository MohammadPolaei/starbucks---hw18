function ProductCard() {
	return (
		<div className="bg-[#1e3932] rounded-2xl p-2 flex flex-col justify-between gap-2">
			<img src="../../../src/assets/images/Americano.png" className="w-20" />
			<h2 className="font-semibold text-sm text-white">Cappo</h2>
			<p className="font-bold text-md text-[#e9c8a2]">$3.4</p>
			<div className="bg-white flex flex-row justify-between gap-2 items-center">
				<button className="bg-[#e9c8a2] p-2 flex-1">+</button>
				<span className="flex-1 text-center">0</span>
				<button className="bg-[#e9c8a2] p-2 flex-1">-</button>
			</div>
		</div>
	);
}

export default ProductCard;
