import { AnimatePresence, motion } from "framer-motion";

const MobileMenu = ({
	isOpen,
	onClose,
}: {
	isOpen: boolean;
	onClose: () => void;
}) => (
	<AnimatePresence>
		{isOpen && (
			<motion.div
				initial={{ opacity: 0, x: "100%" }}
				animate={{ opacity: 1, x: 0 }}
				exit={{ opacity: 0, x: "100%" }}
				className="fixed inset-0 z-50 lg:hidden"
			>
				<div className="absolute inset-0 bg-black/50" onClick={onClose} />
				<div className="absolute right-0 top-0 h-full w-80 bg-white shadow-xl">
					<div className="flex justify-end p-4">
						<button
							onClick={onClose}
							className="text-gray-500 hover:text-gray-700"
						>
							<svg
								className="w-6 h-6"
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth={2}
									d="M6 18L18 6M6 6l12 12"
								/>
							</svg>
						</button>
					</div>
					<nav className="px-6 py-4">
						<div className="space-y-4">
							<a
								href="#home"
								className="block text-gray-700 hover:text-blue-600 transition-colors font-medium py-2"
								onClick={onClose}
							>
								Home
							</a>
							<a
								href="#about"
								className="block text-gray-700 hover:text-blue-600 transition-colors font-medium py-2"
								onClick={onClose}
							>
								How It Works
							</a>
							<a
								href="#testimonials"
								className="block text-gray-700 hover:text-blue-600 transition-colors font-medium py-2"
								onClick={onClose}
							>
								Testimonials
							</a>
							{/* <a
								href="#pricing"
								className="block text-gray-700 hover:text-blue-600 transition-colors font-medium py-2"
								onClick={onClose}
							>
								Pricing
							</a> */}
						</div>
						<div className="mt-8 space-y-3">
							{/* <button className="w-full text-blue-900 hover:text-blue-700 font-medium px-4 py-2 text-left">
								Login
							</button> */}
							<button className="w-full bg-gradient-to-r from-gold-300 to-gold-500 text-blue-900 font-medium px-6 py-3 rounded-full hover:shadow-lg transition-shadow">
								Join Waitlist
							</button>
						</div>
					</nav>
				</div>
			</motion.div>
		)}
	</AnimatePresence>
);

export default MobileMenu;