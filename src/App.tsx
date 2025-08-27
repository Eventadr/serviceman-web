import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Assets
// import phoneFrame from "./assets/photo_2025-08-16_12-28-08.jpg";
// import appScreenshot from "./assets/photo_2025-08-16_12-28-08.jpg";
import logo from "./assets/Untitled design.jpg";
import eventImage1 from "./assets/african-wedding.png";
import eventImage2 from "./assets/camera.png";
import eventImage3 from "./assets/food.png";
import vendorApp from "./assets/photo_2025-08-16_12-28-08.jpg";
import userApp from "./assets/photo_2025-08-16_12-28-08.jpg";
import HeroSection from "./components/HeroSection";
import MobileMenu from "./components/MobileMenu";
import Navbar from "./components/Navbar";

// Data
const testimonials = [
	{
		id: 1,
		name: "Sarah Johnson",
		role: "Wedding Planner",
		text: "Eventador cut my planning time by 60%. The vendor coordination is seamless!",
		rating: 5,
	},
	{
		id: 2,
		name: "Michael Rodriguez",
		role: "Tech Conference Organizer",
		text: "From venue to catering, everything was handled perfectly. Our attendees loved it!",
		rating: 5,
	},
	{
		id: 3,
		name: "Emily Chen",
		role: "Corporate Event Manager",
		text: "The real-time tracking feature saved us during a last-minute venue change. Lifesaver!",
		rating: 4,
	},
];

const goals = [
	{
		icon: "🎯",
		title: "Democratize Excellence",
		description: "Make premium event services accessible to anyone.",
		bgColor: "bg-blue-100",
	},
	{
		icon: "✅",
		title: "Eliminate Uncertainty",
		description: "Guarantee seamless execution, every time.",
		bgColor: "bg-green-100",
	},
	{
		icon: "🤝",
		title: "Fuel Collaboration",
		description: "Connect visionary hosts with exceptional partners.",
		bgColor: "bg-yellow-100",
	},
];

const values = [
	{
		icon: "🔒",
		title: "Reliability",
		description: "Your event happens exactly as promised. On time. On point.",
		bgColor: "bg-purple-100",
	},
	{
		icon: "💪",
		title: "Empowerment",
		description: "Tools that make hosts feel capable, vendors feel valued.",
		bgColor: "bg-indigo-100",
	},
	{
		icon: "🔍",
		title: "Transparency",
		description: "No hidden fees. No vague promises. Just clarity.",
		bgColor: "bg-teal-100",
	},
	{
		icon: "😊",
		title: "Joy",
		description:
			'We measure success in laughter, connections, and "wow" moments.',
		bgColor: "bg-pink-100",
	},
];

const events = [
	{
		image: eventImage1,
		title: "Tech Summit",
		category: "Conference",
		categoryColor: "bg-blue-100 text-blue-800",
		description: "1,200 attendees. 15 vendors. One seamless flow.",
		location: "San Francisco",
		details: "3 days",
	},
	{
		image: eventImage2,
		title: "Intimate Wedding",
		category: "Wedding",
		categoryColor: "bg-pink-100 text-pink-800",
		description: "From floral sketches to last dance – flawless.",
		location: "Napa Valley",
		details: "120 guests",
	},
	{
		image: eventImage3,
		title: "Community Meetup",
		category: "Networking",
		categoryColor: "bg-green-100 text-green-800",
		description: "Local bites, global connections. Zero stress.",
		location: "Brooklyn",
		details: "250+ attendees",
	},
];

// Components
const StarRating = ({ rating }: { rating: number }) => (
	<div className="flex">
		{[...Array(5)].map((_, i) => (
			<span
				key={i}
				className={i < rating ? "text-yellow-400" : "text-gray-300"}
			>
				★
			</span>
		))}
	</div>
);

function App() {
	const [activeTab, setActiveTab] = useState("host");
	const [currentTestimonial, setCurrentTestimonial] = useState(0);
	const [scrolled, setScrolled] = useState(false);
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

	// Auto-rotate testimonials
	useEffect(() => {
		const interval = setInterval(() => {
			setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
		}, 5000);
		return () => clearInterval(interval);
	}, []);

	// Navbar scroll effect
	useEffect(() => {
		const handleScroll = () => {
			setScrolled(window.scrollY > 50);
		};
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	return (
		<div className="min-h-screen bg-white font-sans">
			{/* Navigation */}
			<Navbar logo={logo} scrolled={scrolled} />

			{/* Mobile Menu */}
			<MobileMenu
				isOpen={mobileMenuOpen}
				onClose={() => setMobileMenuOpen(false)}
			/>

			{/* Hero Section */}
			<HeroSection />

			{/* About Section */}
			<section id="about" className="py-16 sm:py-20 bg-gray-50">
				<div className="container-custom px-4">
					<div className="text-center mb-12 sm:mb-16">
						<h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-blue-900 mb-4">
							We're Not Just a Platform. We're Your Co-Creators.
						</h2>
						<p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
							Eventador was born from a simple truth: Great events change lives
							— but planning them shouldn't drain yours.
						</p>
						<p className="text-base sm:text-lg text-gray-600 max-w-4xl mx-auto mt-4">
							Our founders watched brilliant ideas crumble under logistics. They
							saw talented vendors buried in administrative chaos. So we built a
							bridge.
						</p>
					</div>

					{/* Tab navigation */}
					<div className="flex justify-center mb-8 sm:mb-12">
						<div className="bg-white p-1 rounded-full inline-flex border border-gray-200">
							<button
								className={`px-4 sm:px-6 py-2 sm:py-3 rounded-full transition-colors text-sm sm:text-base ${
									activeTab === "host"
										? "bg-blue-800 text-gold-400"
										: "text-gray-700"
								}`}
								onClick={() => setActiveTab("host")}
							>
								For Hosts
							</button>
							<button
								className={`px-4 sm:px-6 py-2 sm:py-3 rounded-full transition-colors text-sm sm:text-base ${
									activeTab === "vendor"
										? "bg-blue-800 text-gold-400"
										: "text-gray-700"
								}`}
								onClick={() => setActiveTab("vendor")}
							>
								For Vendors
							</button>
						</div>
					</div>

					{/* Tab content */}
					<AnimatePresence mode="wait">
						<motion.div
							key={activeTab}
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							exit={{ opacity: 0, y: -20 }}
							transition={{ duration: 0.3 }}
							className="bg-white rounded-2xl shadow-xl overflow-hidden"
						>
							{activeTab === "host" ? (
								<div className="grid lg:grid-cols-2 gap-6 lg:gap-8 items-center">
									<div className="p-6 sm:p-8 lg:p-12">
										<div className="bg-blue-50 p-4 sm:p-6 rounded-xl mb-6 sm:mb-8">
											<p className="text-base sm:text-lg italic text-blue-900 mb-4">
												"Eventador isn't just an app; it's my secret weapon. I
												tap, book, and breathe. They handle the rest."
											</p>
										</div>

										<h3 className="text-xl sm:text-2xl font-bold text-blue-900 mb-4 sm:mb-6">
											Your Vision, Digitally Perfected
										</h3>

										<div className="space-y-4 sm:space-y-6">
											<div className="flex items-start">
												<div className="bg-blue-100 text-blue-800 font-bold w-6 h-6 sm:w-8 sm:h-8 rounded-full flex items-center justify-center mr-3 sm:mr-4 mt-1 text-xs sm:text-sm">
													1
												</div>
												<div>
													<h4 className="font-semibold text-blue-900 mb-1 sm:mb-2 text-sm sm:text-base">
														Browse & Book
													</h4>
													<p className="text-gray-600 text-sm sm:text-base">
														Browse, book, track, chat – all in your pocket. See
														real-time vendor arrival updates.
													</p>
												</div>
											</div>

											<div className="flex items-start">
												<div className="bg-blue-100 text-blue-800 font-bold w-6 h-6 sm:w-8 sm:h-8 rounded-full flex items-center justify-center mr-3 sm:mr-4 mt-1 text-xs sm:text-sm">
													2
												</div>
												<div>
													<h4 className="font-semibold text-blue-900 mb-1 sm:mb-2 text-sm sm:text-base">
														Service Journey Tracker
													</h4>
													<p className="text-gray-600 text-sm sm:text-base">
														Track all vendor progress in real-time through our
														app notifications.
													</p>
												</div>
											</div>

											<div className="flex items-start">
												<div className="bg-blue-100 text-blue-800 font-bold w-6 h-6 sm:w-8 sm:h-8 rounded-full flex items-center justify-center mr-3 sm:mr-4 mt-1 text-xs sm:text-sm">
													3
												</div>
												<div>
													<h4 className="font-semibold text-blue-900 mb-1 sm:mb-2 text-sm sm:text-base">
														Zero Headache
													</h4>
													<p className="text-gray-600 text-sm sm:text-base">
														We orchestrate your vision with a network of
														rigorously vetted partners. One platform. Zero
														compromises.
													</p>
												</div>
											</div>
										</div>
									</div>

									<div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 sm:p-8 h-full flex items-center justify-center">
										<div className="relative w-full max-w-sm sm:max-w-md mx-auto">
											<img
												src={userApp}
												alt="User app interface"
												className="rounded-2xl shadow-lg w-full"
											/>
											<div className="absolute -bottom-4 -left-4 sm:-bottom-6 sm:-left-6 w-16 h-16 sm:w-24 sm:h-24 bg-yellow-400/10 rounded-full backdrop-blur border border-yellow-300/30"></div>
											<div className="absolute -top-4 -right-4 sm:-top-6 sm:-right-6 w-12 h-12 sm:w-20 sm:h-20 bg-blue-400/10 rounded-full backdrop-blur border border-blue-300/30"></div>
										</div>
									</div>
								</div>
							) : (
								<div className="grid lg:grid-cols-2 gap-6 lg:gap-8 items-center">
									<div className="p-6 sm:p-8 lg:p-12">
										<div className="bg-green-50 p-4 sm:p-6 rounded-xl mb-6 sm:mb-8">
											<p className="text-base sm:text-lg italic text-green-900 mb-4">
												"This is where serious partners thrive. We focus on
												craft; Eventador handles the crowd."
											</p>
										</div>

										<h3 className="text-xl sm:text-2xl font-bold text-blue-900 mb-4 sm:mb-6">
											Your Business, Simplified
										</h3>

										<div className="space-y-4 sm:space-y-6">
											<div className="flex items-start">
												<div className="bg-green-100 text-green-800 font-bold w-6 h-6 sm:w-8 sm:h-8 rounded-full flex items-center justify-center mr-3 sm:mr-4 mt-1 text-xs sm:text-sm">
													1
												</div>
												<div>
													<h4 className="font-semibold text-blue-900 mb-1 sm:mb-2 text-sm sm:text-base">
														Manage Everything
													</h4>
													<p className="text-gray-600 text-sm sm:text-base">
														Manage bookings, payments, and client chats in one
														hub. Your business, simplified.
													</p>
												</div>
											</div>

											<div className="flex items-start">
												<div className="bg-green-100 text-green-800 font-bold w-6 h-6 sm:w-8 sm:h-8 rounded-full flex items-center justify-center mr-3 sm:mr-4 mt-1 text-xs sm:text-sm">
													2
												</div>
												<div>
													<h4 className="font-semibold text-blue-900 mb-1 sm:mb-2 text-sm sm:text-base">
														Today's Events Map
													</h4>
													<p className="text-gray-600 text-sm sm:text-base">
														Optimized travel routes and real-time earnings
														dashboard with "Today's Events" tracking.
													</p>
												</div>
											</div>

											<div className="flex items-start">
												<div className="bg-green-100 text-green-800 font-bold w-6 h-6 sm:w-8 sm:h-8 rounded-full flex items-center justify-center mr-3 sm:mr-4 mt-1 text-xs sm:text-sm">
													3
												</div>
												<div>
													<h4 className="font-semibold text-blue-900 mb-1 sm:mb-2 text-sm sm:text-base">
														Focus on Craft
													</h4>
													<p className="text-gray-600 text-sm sm:text-base">
														We handle the crowd while you focus on delivering
														exceptional experiences.
													</p>
												</div>
											</div>
										</div>
									</div>

									<div className="bg-gradient-to-br from-green-50 to-green-100 p-6 sm:p-8 h-full flex items-center justify-center">
										<div className="relative w-full max-w-sm sm:max-w-md mx-auto">
											<img
												src={vendorApp}
												alt="Vendor app interface"
												className="rounded-2xl shadow-lg w-full"
											/>
											<div className="absolute -bottom-4 -left-4 sm:-bottom-6 sm:-left-6 w-16 h-16 sm:w-24 sm:h-24 bg-green-400/10 rounded-full backdrop-blur border border-green-300/30"></div>
											<div className="absolute -top-4 -right-4 sm:-top-6 sm:-right-6 w-12 h-12 sm:w-20 sm:h-20 bg-purple-400/10 rounded-full backdrop-blur border border-purple-300/30"></div>
										</div>
									</div>
								</div>
							)}
						</motion.div>
					</AnimatePresence>

					{/* Values Section */}
					<div className="mt-12 sm:mt-16 text-center">
						<h3 className="text-2xl sm:text-3xl font-bold text-blue-900 mb-6 sm:mb-8">
							We believe in:
						</h3>
						<div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
							{values.map((value, index) => (
								<div
									key={index}
									className="bg-white p-4 sm:p-6 rounded-xl shadow-lg"
								>
									<div
										className={`w-12 h-12 sm:w-16 sm:h-16 ${value.bgColor} rounded-full flex items-center justify-center mx-auto mb-4`}
									>
										<span className="text-xl sm:text-2xl">{value.icon}</span>
									</div>
									<h4 className="text-lg sm:text-xl font-bold text-blue-900 mb-2">
										{value.title}
									</h4>
									<p className="text-gray-600 text-sm sm:text-base">
										{value.description}
									</p>
								</div>
							))}
						</div>
					</div>
				</div>
			</section>

			{/* Goals & Values Section */}
			<section className="py-16 sm:py-20 bg-white">
				<div className="container-custom px-4">
					<div className="text-center mb-12 sm:mb-16">
						<h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-blue-900 mb-4">
							Building a World Where Every Event Feels Effortless
						</h2>
					</div>

					<div className="grid lg:grid-cols-2 gap-12 lg:gap-16 mb-12 sm:mb-16">
						{/* Goals */}
						<div>
							<h3 className="text-2xl sm:text-3xl font-bold text-blue-900 mb-6 sm:mb-8">
								Our Goals
							</h3>
							<div className="space-y-6 sm:space-y-8">
								{goals.map((goal, index) => (
									<div key={index} className="flex items-start">
										<div
											className={`w-10 h-10 sm:w-12 sm:h-12 ${goal.bgColor} rounded-full flex items-center justify-center mr-4 sm:mr-6 mt-1`}
										>
											<span className="text-xl sm:text-2xl">{goal.icon}</span>
										</div>
										<div>
											<h4 className="text-lg sm:text-xl font-bold text-blue-900 mb-1 sm:mb-2">
												{goal.title}
											</h4>
											<p className="text-gray-600 text-sm sm:text-base">
												{goal.description}
											</p>
										</div>
									</div>
								))}
							</div>
						</div>

						{/* Values */}
						<div>
							<h3 className="text-2xl sm:text-3xl font-bold text-blue-900 mb-6 sm:mb-8">
								Our Values
							</h3>
							<div className="space-y-6 sm:space-y-8">
								{values.map((value, index) => (
									<div key={index} className="flex items-start">
										<div
											className={`w-10 h-10 sm:w-12 sm:h-12 ${value.bgColor} rounded-full flex items-center justify-center mr-4 sm:mr-6 mt-1`}
										>
											<span className="text-xl sm:text-2xl">{value.icon}</span>
										</div>
										<div>
											<h4 className="text-lg sm:text-xl font-bold text-blue-900 mb-1 sm:mb-2">
												{value.title}
											</h4>
											<p className="text-gray-600 text-sm sm:text-base">
												{value.description}
											</p>
										</div>
									</div>
								))}
							</div>
						</div>
					</div>

					{/* Abstract icons circular motif */}
					<div className="text-center">
						<div className="relative w-48 h-48 sm:w-64 sm:h-64 mx-auto mb-8">
							<div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-100 to-purple-100 animate-pulse"></div>
							<div className="absolute top-2 sm:top-4 left-1/2 transform -translate-x-1/2 w-12 h-12 sm:w-16 sm:h-16 bg-blue-200 rounded-full flex items-center justify-center">
								<span className="text-lg sm:text-2xl">🎯</span>
							</div>
							<div className="absolute top-1/2 right-2 sm:right-4 transform -translate-y-1/2 w-8 h-8 sm:w-12 sm:h-12 bg-green-200 rounded-full flex items-center justify-center">
								<span className="text-sm sm:text-xl">✅</span>
							</div>
							<div className="absolute bottom-2 sm:bottom-4 left-1/2 transform -translate-x-1/2 w-10 h-10 sm:w-14 sm:h-14 bg-yellow-200 rounded-full flex items-center justify-center">
								<span className="text-sm sm:text-xl">🤝</span>
							</div>
							<div className="absolute top-1/2 left-2 sm:left-4 transform -translate-y-1/2 w-6 h-6 sm:w-10 sm:h-10 bg-purple-200 rounded-full flex items-center justify-center">
								<span className="text-xs sm:text-lg">🔒</span>
							</div>
							<div className="absolute top-1/4 right-1/4 w-5 h-5 sm:w-8 sm:h-8 bg-indigo-200 rounded-full flex items-center justify-center">
								<span className="text-xs sm:text-sm">💪</span>
							</div>
							<div className="absolute bottom-1/4 right-1/4 w-6 h-6 sm:w-9 sm:h-9 bg-teal-200 rounded-full flex items-center justify-center">
								<span className="text-xs sm:text-sm">🔍</span>
							</div>
							<div className="absolute bottom-1/4 left-1/4 w-4 h-4 sm:w-7 sm:h-7 bg-pink-200 rounded-full flex items-center justify-center">
								<span className="text-xs">😊</span>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Testimonials Section */}
			<section
				id="testimonials"
				className="py-16 sm:py-20 bg-gradient-to-br from-blue-900 to-blue-800 text-white"
			>
				<div className="container-custom px-4">
					<div className="text-center mb-12 sm:mb-16">
						<h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
							Trusted by Event Professionals
						</h2>
						<p className="text-lg sm:text-xl text-blue-200 max-w-3xl mx-auto">
							Don't just take our word for it. Here's what our community says.
						</p>
					</div>

					<div className="max-w-4xl mx-auto relative">
						<AnimatePresence mode="wait">
							<motion.div
								key={currentTestimonial}
								initial={{ opacity: 0, x: 50 }}
								animate={{ opacity: 1, x: 0 }}
								exit={{ opacity: 0, x: -50 }}
								transition={{ duration: 0.5 }}
								className="bg-white/10 backdrop-blur-sm p-6 sm:p-8 rounded-2xl border border-white/20"
							>
								<div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-8">
									<div className="flex-1">
										<div className="text-yellow-400 text-lg sm:text-xl mb-4">
											<StarRating
												rating={testimonials[currentTestimonial].rating}
											/>
										</div>
										<p className="text-lg sm:text-xl italic mb-4 sm:mb-6">
											"{testimonials[currentTestimonial].text}"
										</p>
										<div>
											<h4 className="font-bold text-base sm:text-lg">
												{testimonials[currentTestimonial].name}
											</h4>
											<p className="text-blue-200 text-sm sm:text-base">
												{testimonials[currentTestimonial].role}
											</p>
										</div>
									</div>
									<div className="sm:ml-8">
										<div className="bg-gray-200 border-2 border-dashed rounded-xl w-12 h-12 sm:w-16 sm:h-16" />
									</div>
								</div>
							</motion.div>
						</AnimatePresence>

						<div className="flex justify-center mt-6 sm:mt-8 space-x-2">
							{testimonials.map((_, index) => (
								<button
									key={index}
									onClick={() => setCurrentTestimonial(index)}
									className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full ${
										currentTestimonial === index ? "bg-white" : "bg-white/30"
									}`}
									aria-label={`Go to testimonial ${index + 1}`}
								/>
							))}
						</div>
					</div>
				</div>
			</section>

			{/* Event Showcase */}
			<section id="showcase" className="py-16 sm:py-20 bg-white">
				<div className="container-custom px-4">
					<div className="text-center mb-12 sm:mb-16">
						<h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-blue-900 mb-4">
							Events Perfected, Pixel by Pixel
						</h2>
						<p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
							Gallery Curation: High-res event photos with captions highlighting
							Eventador's role
						</p>
					</div>

					<div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
						{events.map((event, index) => (
							<motion.div
								key={index}
								whileHover={{ y: -10 }}
								className="bg-gray-50 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all"
							>
								<div className="h-48 sm:h-64 overflow-hidden">
									<img
										src={event.image}
										alt={event.title}
										className="w-full h-full object-cover"
									/>
								</div>
								<div className="p-4 sm:p-6">
									<div className="flex justify-between items-start mb-3 sm:mb-4">
										<h3 className="text-lg sm:text-xl font-bold text-blue-900">
											{event.title}
										</h3>
										<span
											className={`text-xs sm:text-sm font-medium px-2 sm:px-3 py-1 rounded-full ${event.categoryColor}`}
										>
											{event.category}
										</span>
									</div>
									<p className="text-gray-600 mb-3 sm:mb-4 text-sm sm:text-base">
										{event.description}
									</p>
									<div className="flex items-center text-xs sm:text-sm text-gray-500">
										<span>{event.location}</span>
										<span className="mx-2">•</span>
										<span>{event.details}</span>
									</div>
								</div>
							</motion.div>
						))}
					</div>
				</div>
			</section>

			{/* The Promise Section */}
			<section className="relative py-24 sm:py-32 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden">
				{/* Sophisticated background elements */}
				<div className="absolute inset-0">
					<div className="absolute inset-0 bg-gradient-to-r from-amber-600/5 via-transparent to-amber-700/5"></div>
					<div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-br from-amber-400/8 to-yellow-500/5 rounded-full blur-3xl"></div>
					<div className="absolute bottom-0 right-1/3 w-80 h-80 bg-gradient-to-tl from-slate-700/15 to-transparent rounded-full blur-2xl"></div>

					{/* Elegant particles */}
					{[...Array(15)].map((_, i) => (
						<div
							key={i}
							className="absolute w-1 h-1 bg-amber-300/20 rounded-full animate-pulse"
							style={{
								top: `${Math.random() * 80 + 10}%`,
								left: `${Math.random() * 80 + 10}%`,
								animationDelay: `${Math.random() * 3}s`,
								animationDuration: `${Math.random() * 4 + 2}s`,
							}}
						/>
					))}
				</div>

				<div className="container mx-auto relative z-10 text-center px-8 max-w-6xl">
					<div className="max-w-5xl mx-auto space-y-8">
						<h2 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-light text-white leading-tight tracking-tight">
							We take the weight off your shoulders,
							<br />
							<span className="bg-gradient-to-r from-amber-300 via-yellow-400 to-amber-500 bg-clip-text text-transparent font-normal">
								so you can carry the moment in your heart.
							</span>
						</h2>
						<div className="pt-6">
							<p className="text-2xl text-amber-200 font-light tracking-wide">
								The Promise: Why We Exist
							</p>
							<div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-amber-400 to-transparent mx-auto mt-6"></div>
						</div>
					</div>
				</div>
			</section>

			<section className="relative py-24 sm:py-32 bg-gradient-to-br from-slate-800 via-slate-900 to-black overflow-hidden">
				{/* Sophisticated background */}
				<div className="absolute inset-0">
					<div className="absolute inset-0 bg-gradient-to-b from-amber-600/8 via-transparent to-amber-700/8"></div>
					<div className="absolute top-1/4 left-0 w-1/2 h-1/2 bg-gradient-to-br from-amber-500/5 via-transparent to-transparent"></div>
					<div className="absolute bottom-0 right-0 w-2/3 h-2/3 bg-gradient-to-tl from-slate-700/10 via-transparent to-transparent"></div>
				</div>

				<div className="container mx-auto text-center px-8 relative z-10 max-w-6xl">
					<div className="space-y-12">
						<div className="space-y-8">
							<h2 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-light text-white leading-tight tracking-tight max-w-5xl mx-auto">
								Ready to Transform
								<br />
								<span className="bg-gradient-to-r from-amber-300 via-yellow-400 to-amber-500 bg-clip-text text-transparent font-normal">
									Chaos into Celebration?
								</span>
							</h2>
							<p className="text-xl sm:text-2xl text-slate-300 font-light max-w-3xl mx-auto leading-relaxed">
								Join discerning event professionals who trust Eventador to
								transform their vision into reality.
							</p>
						</div>

						<div className="flex flex-col sm:flex-row justify-center gap-6 pt-8">
							<button className="group relative bg-gradient-to-r from-amber-100 to-yellow-200 text-slate-900 font-medium px-12 py-5 rounded-full transition-all duration-500 hover:shadow-2xl hover:shadow-amber-500/20 overflow-hidden">
								<div className="absolute inset-0 bg-gradient-to-r from-amber-200/30 via-transparent to-yellow-300/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
								<span className="relative text-lg font-medium">
									Host an Event: Begin Your Journey
								</span>
							</button>

							<button className="group relative bg-slate-800/60 backdrop-blur-xl border-2 border-amber-300/40 text-amber-100 font-medium px-12 py-5 rounded-full hover:bg-slate-700/60 hover:border-amber-300/60 transition-all duration-300">
								<div className="absolute inset-0 bg-gradient-to-r from-amber-200/5 via-transparent to-amber-300/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full"></div>
								<span className="relative text-lg">
									Partner With Us: Expand Your Reach
								</span>
							</button>
						</div>
					</div>
				</div>
			</section>

			{/* Premium Footer */}
			<footer className="relative bg-gradient-to-b from-black to-slate-950 text-white overflow-hidden">
				{/* Subtle background elements */}
				<div className="absolute inset-0">
					<div className="absolute bottom-0 left-1/4 w-96 h-48 bg-gradient-to-t from-amber-600/3 to-transparent blur-2xl"></div>
					<div className="absolute top-0 right-1/4 w-80 h-40 bg-gradient-to-b from-slate-700/8 to-transparent blur-xl"></div>
				</div>

				<div className="container mx-auto px-8 relative z-10 py-20 sm:py-24">
					<div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-16">
						{/* Brand Section */}
						<div className="sm:col-span-2 space-y-8">
							<div className="space-y-6">
								<div className="flex items-center space-x-4">
									<div className="w-12 h-12 bg-gradient-to-br from-amber-200 to-yellow-300 rounded-xl flex items-center justify-center shadow-lg">
										<span className="text-slate-900 text-xl font-bold">E</span>
									</div>
									<span className="text-3xl font-light tracking-wide">
										Eventador
									</span>
								</div>
								<p className="text-slate-300 font-light text-lg leading-relaxed max-w-md">
									Where visionary hosts meet trusted curators. Crafting
									exceptional experiences.
								</p>
							</div>

							{/* Social Links */}
							<div className="flex space-x-4">
								{[
									{ name: "Facebook", symbol: "f", href: "#" },
									{ name: "Twitter", symbol: "𝕏", href: "#" },
									{
										name: "Instagram",
										symbol: "📷",
										href: "https://www.instagram.com/eventadorgh/",
									},
									{ name: "LinkedIn", symbol: "in", href: "#" },
								].map((social, i) => (
									<a
										key={i}
										href={social.href}
										className="group w-12 h-12 rounded-full bg-slate-800/60 backdrop-blur-sm border border-slate-700/50 flex items-center justify-center hover:bg-slate-700/60 hover:border-amber-300/30 transition-all duration-300"
									>
										<span className="text-slate-300 group-hover:text-amber-200 transition-colors text-sm">
											{social.symbol}
										</span>
										<span className="sr-only">{social.name}</span>
									</a>
								))}
							</div>
						</div>

						{/* Navigation Columns */}
						<div className="space-y-6">
							<h4 className="text-xl font-medium text-amber-200 tracking-wide">
								For Hosts
							</h4>
							<ul className="space-y-4">
								{[
									"How It Works",
									"Event Services",
									// "Pricing",
									"Success Stories",
								].map((item, i) => (
									<li key={i}>
										<a
											href="#"
											className="text-slate-300 hover:text-amber-200 transition-colors duration-300 font-light text-lg"
										>
											{item}
										</a>
									</li>
								))}
							</ul>
						</div>

						<div className="space-y-6">
							<h4 className="text-xl font-medium text-amber-200 tracking-wide">
								For Partners
							</h4>
							<ul className="space-y-4">
								{[
									"Become a Partner",
									"Partner Resources",
									"Community",
									"Success Stories",
								].map((item, i) => (
									<li key={i}>
										<a
											href="#"
											className="text-slate-300 hover:text-amber-200 transition-colors duration-300 font-light text-lg"
										>
											{item}
										</a>
									</li>
								))}
							</ul>
						</div>

						<div className="space-y-6">
							<h4 className="text-xl font-medium text-amber-200 tracking-wide">
								Company
							</h4>
							<ul className="space-y-4">
								{["About Us", "Careers", "Contact", "Blog"].map((item, i) => (
									<li key={i}>
										<a
											href="#"
											className="text-slate-300 hover:text-amber-200 transition-colors duration-300 font-light text-lg"
										>
											{item}
										</a>
									</li>
								))}
							</ul>
						</div>
					</div>

					{/* Footer Bottom */}
					<div className="border-t border-slate-800/60 mt-16 pt-12 flex flex-col sm:flex-row justify-between items-center space-y-6 sm:space-y-0">
						<p className="text-slate-400 font-light text-lg">
							© 2024 Eventador. All rights reserved.
						</p>
						<div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-8">
							{["Privacy Policy", "Terms of Service", "Cookie Policy"].map(
								(item, i) => (
									<a
										key={i}
										href="#"
										className="text-slate-400 hover:text-amber-200 transition-colors duration-300 font-light text-lg"
									>
										{item}
									</a>
								)
							)}
						</div>
					</div>
				</div>
			</footer>
		</div>
	);
}

export default App;
