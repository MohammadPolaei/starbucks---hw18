function Header() {
	return (
		<div className="flex flex-col justify-between items-center gap-2">
			<div className="flex flex-row justify-between items-center gap-2">
				<img
					src="../../public/starbucks-logo.png"
					width="50px"
					height="50px"
				></img>
				<h1 className="text-3xl font-extrabold">Starbucks</h1>
			</div>
			<p className="font-medium">starbucks Online Coffee Order</p>
		</div>
	);
}

export default Header;
