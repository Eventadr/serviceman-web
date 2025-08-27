import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const HeroSection = () => {
	const [rotation, setRotation] = useState(0);
	const [activeImage, setActiveImage] = useState(0);

	const images = [
		{
			src: "https://i0.wp.com/thebigday.co.in/wp-content/uploads/2021/01/Corporate-Events.jpg?fit=1500%2C700&ssl=1",
			alt: "Corporate Events",
			title: "Corporate Excellence",
		},
		{
			src: "https://clingevents.com/wp-content/uploads/2022/11/clingevents-decor-scaled.jpeg",
			alt: "Event Decor",
			title: "Elegant Decor",
		},
		{
			src: "https://www.ghanayello.com/img/gh/g/1643966789-84-mostlove-rent-a-car-company.jpg",
			alt: "Luxury Transport",
			title: "Premium Transport",
		},
		{
			src: "https://image.made-in-china.com/2f0j00yzJRDnLskeqP/20X20feet-Frame-Tent-for-Funeral-Event-in-Ghana.webp",
			alt: "Event Tents",
			title: "Professional Setup",
		},
	];

	useEffect(() => {
		const interval = setInterval(() => {
			setRotation((prev) => prev + 0.2);
		}, 50);

		const imageInterval = setInterval(() => {
			setActiveImage((prev) => (prev + 1) % images.length);
		}, 4000);

		return () => {
			clearInterval(interval);
			clearInterval(imageInterval);
		};
	}, [images.length]);

	const hudisangLetters = ["E", "V", "E", "N", "T", "A", "D", "O", "R"];

	return (
		<section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-rose-50 via-orange-50 to-rose-100">
			{/* Background layers */}
			<div className="absolute inset-0">
				<div className="absolute inset-0 bg-gradient-to-br from-rose-600/5 via-orange-700/8 to-rose-800/10"></div>
				<div className="absolute top-0 left-0 w-2/5 h-full bg-gradient-to-br from-slate-900/12 via-rose-900/8 to-transparent"></div>
				<div className="absolute bottom-0 right-0 w-1/3 h-2/3 bg-gradient-to-tl from-slate-800/8 via-transparent to-transparent"></div>

				<motion.div
					className="absolute top-16 sm:top-32 right-1/4 w-48 h-48 sm:w-64 sm:h-64 lg:w-96 lg:h-96 bg-gradient-to-br from-rose-200/10 to-orange-300/5 rounded-full blur-2xl sm:blur-3xl"
					animate={{
						scale: [1, 1.1, 1],
						opacity: [0.3, 0.6, 0.3],
					}}
					transition={{
						duration: 4,
						repeat: Infinity,
						ease: "easeInOut",
					}}
				/>
				<motion.div
					className="absolute bottom-16 sm:bottom-32 left-1/5 w-32 h-32 sm:w-48 sm:h-48 lg:w-64 lg:h-64 bg-gradient-to-tr from-slate-700/8 to-slate-600/5 rounded-full blur-xl sm:blur-2xl"
					animate={{
						scale: [1, 1.2, 1],
						opacity: [0.2, 0.5, 0.2],
					}}
					transition={{
						duration: 5,
						repeat: Infinity,
						ease: "easeInOut",
						delay: 1,
					}}
				/>

				{/* Floating particles */}
				<div className="hidden sm:block">
					{[...Array(6)].map((_, i) => (
						<motion.div
							key={i}
							className="absolute w-1 h-1 bg-rose-400/20 rounded-full"
							style={{
								top: `${15 + i * 12}%`,
								left: `${20 + (i % 3) * 30}%`,
							}}
							animate={{
								y: [0, -10, 0],
								opacity: [0.2, 0.8, 0.2],
							}}
							transition={{
								duration: 2 + i * 0.5,
								repeat: Infinity,
								delay: i * 0.3,
							}}
						/>
					))}
				</div>
			</div>

			<div className="container mx-auto relative z-10 px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 max-w-7xl">
				<div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 xl:gap-24 items-center">
					{/* Left Content */}
					<motion.div
						className="text-center lg:text-left space-y-6 sm:space-y-8 lg:space-y-10 order-2 lg:order-1"
						initial={{ opacity: 0, x: -50 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.8, delay: 0.2 }}
					>
						{/* Badge */}
						<motion.div
							className="inline-flex items-center px-4 sm:px-6 py-2 sm:py-3 bg-slate-900/90 backdrop-blur-xl rounded-full border border-slate-700/50 shadow-lg"
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.6, delay: 0.4 }}
						>
							<span className="text-rose-200 font-medium text-xs sm:text-sm tracking-wider uppercase">
								CRAFTING EXCEPTIONAL EXPERIENCES
							</span>
						</motion.div>

						{/* Headline */}
						<motion.div className="space-y-4 sm:space-y-6">
							<h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-light leading-[0.9] tracking-tight">
								<motion.span
									className="text-slate-900 font-extralight block"
									initial={{ opacity: 0, y: 30 }}
									animate={{ opacity: 1, y: 0 }}
									transition={{ duration: 0.6, delay: 0.6 }}
								>
									Life Happens
								</motion.span>
								<motion.span
									className="text-slate-900 font-light block"
									initial={{ opacity: 0, y: 30 }}
									animate={{ opacity: 1, y: 0 }}
									transition={{ duration: 0.6, delay: 0.8 }}
								>
									Live.
								</motion.span>
								<motion.span
									className="bg-gradient-to-r from-rose-600 via-orange-600 to-rose-700 bg-clip-text text-transparent font-normal block"
									initial={{ opacity: 0, y: 30 }}
									animate={{ opacity: 1, y: 0 }}
									transition={{ duration: 0.6, delay: 1.0 }}
								>
									Make It Remarkable.
								</motion.span>
							</h1>
						</motion.div>

						{/* Taglines */}
						<motion.p
							className="text-lg sm:text-xl lg:text-2xl text-slate-700 font-light max-w-2xl mx-auto lg:mx-0 leading-relaxed"
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.6, delay: 1.2 }}
						>
							Where Visionary Hosts Meet Trusted Curators
						</motion.p>

						<motion.p
							className="text-base sm:text-lg lg:text-xl text-slate-600 font-light max-w-2xl mx-auto lg:mx-0"
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.6, delay: 1.4 }}
						>
							Plan, Book, and Celebrate — Without the Complexity
						</motion.p>

						{/* Description */}
						<motion.div
							className="text-slate-600 max-w-3xl mx-auto lg:mx-0 space-y-4 sm:space-y-6 text-sm sm:text-base lg:text-lg leading-relaxed font-light"
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.6, delay: 1.6 }}
						>
							<p className="text-base sm:text-lg lg:text-xl">
								Imagine orchestrating an unforgettable moment — a wedding that
								resonates with elegance, a conference that ignites innovation,
								celebrations that echo with authentic joy. Now imagine achieving
								this without the traditional complexities.
							</p>
							<p className="text-slate-700 font-normal text-xl sm:text-2xl lg:text-3xl">
								This is Eventador.
							</p>
							<p className="text-base sm:text-lg lg:text-xl">
								We curate exceptional experiences through our network of
								meticulously vetted partners. One sophisticated platform.
								Seamless execution. Uncompromising quality.
							</p>
							<p className="text-rose-700 font-medium text-base sm:text-lg lg:text-xl italic">
								Your vision. Our expertise.
							</p>
						</motion.div>

						{/* CTA Buttons */}
						<motion.div
							className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center lg:justify-start pt-4 sm:pt-6"
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.6, delay: 1.8 }}
						>
							<motion.button
								className="relative bg-rose-50/80 backdrop-blur-sm text-slate-800 font-medium px-6 sm:px-8 lg:px-10 py-3 sm:py-4 rounded-full border border-rose-200/60 hover:bg-rose-100/80 hover:border-rose-300/80 transition-all duration-300 group"
								whileHover={{ scale: 1.05 }}
								whileTap={{ scale: 0.95 }}
							>
								<span className="text-base sm:text-lg">Partner With Us</span>
								<div className="absolute inset-0 bg-gradient-to-r from-rose-200/0 via-rose-200/20 to-rose-200/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full"></div>
							</motion.button>
							<motion.button
								className="relative bg-transparent backdrop-blur-sm text-slate-700 font-medium px-6 sm:px-8 lg:px-10 py-3 sm:py-4 rounded-full border border-slate-300/60 hover:bg-slate-50/40 hover:border-slate-400/80 transition-all duration-300"
								whileHover={{ scale: 1.05 }}
								whileTap={{ scale: 0.95 }}
							>
								<span className="text-base sm:text-lg">View Portfolio</span>
							</motion.button>
						</motion.div>

						{/* Trust indicators */}
						<motion.div
							className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 sm:gap-6 lg:gap-8 pt-6 sm:pt-8 lg:pt-10"
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.6, delay: 2.0 }}
						>
							<div className="flex -space-x-1 sm:-space-x-2">
								{hudisangLetters.map((letter, index) => (
									<motion.div
										key={letter}
										className={`w-8 h-8 sm:w-10 sm:h-10 lg:w-14 lg:h-14 rounded-full bg-gradient-to-br ${
											index % 2 === 0
												? "from-rose-400 to-orange-500 border-2 border-rose-600"
												: "from-orange-400 to-rose-500 border-2 border-orange-600"
										} flex items-center justify-center shadow-lg`}
										initial={{ opacity: 0, scale: 0 }}
										animate={{ opacity: 1, scale: 1 }}
										transition={{ duration: 0.4, delay: 2.2 + index * 0.1 }}
										whileHover={{ scale: 1.2 }}
									>
										<span className="text-white font-bold text-xs sm:text-sm lg:text-base">
											{letter}
										</span>
									</motion.div>
								))}
							</div>
							<div className="text-slate-600 font-light text-sm sm:text-base lg:text-lg text-center sm:text-left">
								Trusted by clients across Ghana for unforgettable events
							</div>
						</motion.div>
					</motion.div>

					{/* Right Content - Circular Image Carousel */}
					<motion.div
						className="relative flex justify-center lg:justify-end order-1 lg:order-2"
						initial={{ opacity: 0, scale: 0.8 }}
						animate={{ opacity: 1, scale: 1 }}
						transition={{ duration: 0.8, delay: 0.4 }}
					>
						<div className="relative w-80 h-80 sm:w-96 sm:h-96 lg:w-[40rem] lg:h-[40rem]">
							{/* Central Hub */}
							<motion.div
								className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 sm:w-28 sm:h-28 lg:w-40 lg:h-40 bg-gradient-to-br from-rose-100 to-orange-100 rounded-full border-4 border-rose-200/60 shadow-2xl backdrop-blur-sm flex items-center justify-center z-20"
								animate={{
									scale: [1, 1.05, 1],
									rotate: 360,
								}}
								transition={{
									scale: { duration: 4, repeat: Infinity, ease: "easeInOut" },
									rotate: { duration: 30, repeat: Infinity, ease: "linear" },
								}}
							>
								<motion.div
									className="text-3xl sm:text-4xl lg:text-5xl"
									animate={{ rotate: -360 }}
									transition={{
										duration: 30,
										repeat: Infinity,
										ease: "linear",
									}}
								>
									✨
								</motion.div>
							</motion.div>

							{/* Connecting Lines SVG */}
							<motion.svg
								className="absolute inset-0 w-full h-full z-10"
								viewBox="0 0 400 400"
								initial={{ opacity: 0 }}
								animate={{ opacity: 1 }}
								transition={{ duration: 1, delay: 0.8 }}
							>
								{/* Circular connecting lines */}
								<motion.circle
									cx="200"
									cy="200"
									r="170"
									fill="none"
									stroke="url(#gradient)"
									strokeWidth="2"
									opacity="0.3"
									initial={{ pathLength: 0 }}
									animate={{ pathLength: 1 }}
									transition={{ duration: 3, delay: 1, ease: "easeInOut" }}
								/>
								<motion.circle
									cx="200"
									cy="200"
									r="150"
									fill="none"
									stroke="url(#gradient2)"
									strokeWidth="1"
									opacity="0.2"
									initial={{ pathLength: 0 }}
									animate={{ pathLength: 1 }}
									transition={{ duration: 3, delay: 1.5, ease: "easeInOut" }}
								/>

								{/* Radial lines to images */}
								<g>
									{[
										{ x1: 200, y1: 200, x2: 200, y2: 30 },
										{ x1: 200, y1: 200, x2: 370, y2: 200 },
										{ x1: 200, y1: 200, x2: 200, y2: 370 },
										{ x1: 200, y1: 200, x2: 30, y2: 200 },
									].map((line, index) => (
										<motion.line
											key={index}
											x1={line.x1}
											y1={line.y1}
											x2={line.x2}
											y2={line.y2}
											stroke="url(#gradient)"
											strokeWidth="2"
											opacity="0.4"
											initial={{ pathLength: 0 }}
											animate={{
												pathLength: 1,
												opacity: [0.4, 0.8, 0.4],
											}}
											transition={{
												pathLength: {
													duration: 1.5,
													delay: 2 + index * 0.3,
													ease: "easeInOut",
												},
												opacity: {
													duration: 3,
													repeat: Infinity,
													delay: index * 0.8,
													ease: "easeInOut",
												},
											}}
										/>
									))}
								</g>

								{/* Gradient definitions */}
								<defs>
									<linearGradient
										id="gradient"
										x1="0%"
										y1="0%"
										x2="100%"
										y2="100%"
									>
										<stop offset="0%" stopColor="#f43f5e" stopOpacity="1" />
										<stop offset="100%" stopColor="#ea580c" stopOpacity="1" />
									</linearGradient>
									<linearGradient
										id="gradient2"
										x1="0%"
										y1="0%"
										x2="100%"
										y2="100%"
									>
										<stop offset="0%" stopColor="#ea580c" stopOpacity="1" />
										<stop offset="100%" stopColor="#f43f5e" stopOpacity="1" />
									</linearGradient>
								</defs>
							</motion.svg>

							{/* Images positioned around the circle */}
							<div className="absolute inset-0">
								{images.map((image, index) => {
									const angle = (rotation + index * 90) * (Math.PI / 180);
									const radius = 170;
									const centerX = 200;
									const centerY = 200;

									const x = centerX + radius * Math.cos(angle);
									const y = centerY + radius * Math.sin(angle);

									return (
										<motion.div
											key={index}
											className={`absolute w-28 h-28 sm:w-32 sm:h-32 lg:w-40 lg:h-40 rounded-full overflow-hidden border-4 ${
												index % 2 === 0
													? "border-rose-300/60"
													: "border-orange-300/60"
											} shadow-2xl cursor-pointer z-30`}
											style={{
												left: `${x}px`,
												top: `${y}px`,
												transform: "translate(-50%, -50%)",
											}}
											whileHover={{
												scale: 1.15,
												zIndex: 40,
												boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.4)",
												transition: { duration: 0.3, ease: "easeOut" },
											}}
											whileTap={{ scale: 0.95, transition: { duration: 0.1 } }}
											initial={{ opacity: 0, scale: 0 }}
											animate={{
												opacity: 1,
												scale: 1,
												rotate: [0, 5, 0],
											}}
											transition={{
												opacity: { duration: 0.8, delay: 2.5 + index * 0.2 },
												scale: {
													duration: 0.8,
													delay: 2.5 + index * 0.2,
													type: "spring",
													stiffness: 200,
												},
												rotate: {
													duration: 4,
													repeat: Infinity,
													delay: index * 1.5,
													ease: "easeInOut",
												},
											}}
											onClick={() => setActiveImage(index)}
										>
											<img
												src={image.src}
												alt={image.alt}
												className="w-full h-full object-cover"
											/>
											<div
												className={`absolute inset-0 bg-gradient-to-t ${
													index % 2 === 0
														? "from-rose-900/40"
														: "from-orange-900/40"
												} to-transparent`}
											></div>

											{/* Active indicator */}
											<AnimatePresence>
												{activeImage === index && (
													<motion.div
														className="absolute inset-0 bg-white/20 rounded-full border-2 border-white/40"
														initial={{ scale: 0, opacity: 0 }}
														animate={{ scale: 1, opacity: 1 }}
														exit={{ scale: 0, opacity: 0 }}
														transition={{ duration: 0.4, ease: "easeOut" }}
													/>
												)}
											</AnimatePresence>
										</motion.div>
									);
								})}
							</div>

							{/* Floating particles */}
							{[...Array(4)].map((_, i) => (
								<motion.div
									key={i}
									className={`absolute w-2 h-2 sm:w-3 sm:h-3 ${
										i % 2 === 0 ? "bg-rose-400/30" : "bg-orange-400/30"
									} rounded-full`}
									style={{
										top:
											i < 2
												? i === 0
													? "-1rem"
													: "25%"
												: i === 2
												? "calc(100% + 1rem)"
												: "75%",
										left:
											i % 2 === 0
												? i === 0
													? "calc(100% + 1rem)"
													: "-1.5rem"
												: i === 1
												? "-1.5rem"
												: "calc(100% + 1rem)",
									}}
									animate={{
										y: [0, -10, 0],
										x: [0, Math.sin(i) * 5, 0],
										opacity: [0.3, 0.8, 0.3],
									}}
									transition={{
										duration: 3 + i,
										repeat: Infinity,
										delay: i * 0.5,
									}}
								/>
							))}
						</div>

						{/* Background glow */}
						<motion.div
							className="absolute inset-0 bg-gradient-to-r from-rose-200/10 via-orange-300/10 to-rose-400/10 blur-3xl rounded-full transform scale-150 -z-10"
							animate={{
								scale: [1.5, 1.7, 1.5],
								opacity: [0.1, 0.2, 0.1],
							}}
							transition={{
								duration: 4,
								repeat: Infinity,
								ease: "easeInOut",
							}}
						/>
					</motion.div>
				</div>
			</div>

			{/* Scroll indicator */}
			<motion.div
				className="absolute bottom-6 sm:bottom-8 lg:bottom-12 left-1/2 transform -translate-x-1/2"
				initial={{ opacity: 0 }}
				animate={{
					opacity: 1,
					y: [0, -10, 0],
				}}
				transition={{
					opacity: { duration: 0.6, delay: 2.5 },
					y: { duration: 2, repeat: Infinity },
				}}
			>
				<div className="w-6 h-10 sm:w-8 sm:h-14 rounded-full border border-slate-400/30 bg-rose-50/20 backdrop-blur-sm flex justify-center">
					<motion.div
						className="w-0.5 h-2 sm:h-3 bg-slate-600 rounded-full mt-2 sm:mt-3"
						animate={{ opacity: [1, 0.3, 1] }}
						transition={{ duration: 1.5, repeat: Infinity }}
					/>
				</div>
			</motion.div>
		</section>
	);
};

export default HeroSection;
