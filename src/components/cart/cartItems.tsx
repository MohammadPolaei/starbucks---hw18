function CartItem() {
	return (
		<div className="bg-[#1e3932] rounded-2xl py-2 px-3 flex flex-col justify-between gap-2 hover:shadow-2xl hover:shadow-[#1e3932] hover:bg-[#1e5050] transition-bg delay-50 duration-200 ease-in-out">
			<img
				src="../../../src/assets/images/Americano.png"
				className="w-4/5 self-center"
			/>
			<h2 className="font-semibold text-sm text-white">Cappo</h2>
			<p className="font-bold text-md text-[#e9c8a2]">$3.4</p>
			<div className="text-white">Qty:0</div>
		</div>
	);
}

export default CartItem;
