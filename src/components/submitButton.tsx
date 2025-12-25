import type { productData } from "../types/allTypes";

type buttonProps = {
	products: productData[];
};

function SubmitButton({ products }: buttonProps) {
	return (
		<div className="w-full">
			<button
				onClick={() =>
					alert(
						`You can pay $${products
							.map((item) => item.quantity * item.price)
							.reduce(
								(total, current) => total + current,
								0
							)} to pay for your Cart Items ✔`
					)
				}
				className={
					products
						.map((item) => item.quantity * item.price)
						.reduce((total, current) => total + current, 0)
						? "text-white font-bold text-xl py-2 bg-[#e9c8a2] w-full rounded-md box-border hover:bg-[#99c899] hover:shadow-md hover:text-[#1e3932] transition-all delay-50 duration-200 ease-in-out cursor-pointer"
						: "text-white font-bold text-xl py-2 bg-[#000a] w-full rounded-md box-border cursor-not-allowed"
				}
			>
				Submit Order
			</button>
		</div>
	);
}

export default SubmitButton;
