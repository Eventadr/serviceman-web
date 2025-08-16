import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Assets
import phoneFrame from "./assets/photo_2025-08-16_12-28-08.jpg";
import appScreenshot from "./assets/photo_2025-08-16_12-28-08.jpg";
import eventImage1 from "./assets/african-wedding.png";
import eventImage2 from "./assets/camera.png";
import eventImage3 from "./assets/food.png";
import vendorApp from "./assets/photo_2025-08-16_12-28-08.jpg";
import userApp from "./assets/photo_2025-08-16_12-28-08.jpg";

// Data
const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Wedding Planner",
    text: "Eventador cut my planning time by 60%. The vendor coordination is seamless!",
    rating: 5
  },
  {
    id: 2,
    name: "Michael Rodriguez",
    role: "Tech Conference Organizer",
    text: "From venue to catering, everything was handled perfectly. Our attendees loved it!",
    rating: 5
  },
  {
    id: 3,
    name: "Emily Chen",
    role: "Corporate Event Manager",
    text: "The real-time tracking feature saved us during a last-minute venue change. Lifesaver!",
    rating: 4
  }
];

const goals = [
  {
    icon: "🎯",
    title: "Democratize Excellence",
    description: "Make premium event services accessible to anyone.",
    bgColor: "bg-blue-100"
  },
  {
    icon: "✅",
    title: "Eliminate Uncertainty",
    description: "Guarantee seamless execution, every time.",
    bgColor: "bg-green-100"
  },
  {
    icon: "🤝",
    title: "Fuel Collaboration",
    description: "Connect visionary hosts with exceptional partners.",
    bgColor: "bg-yellow-100"
  }
];

const values = [
  {
    icon: "🔒",
    title: "Reliability",
    description: "Your event happens exactly as promised. On time. On point.",
    bgColor: "bg-purple-100"
  },
  {
    icon: "💪",
    title: "Empowerment",
    description: "Tools that make hosts feel capable, vendors feel valued.",
    bgColor: "bg-indigo-100"
  },
  {
    icon: "🔍",
    title: "Transparency",
    description: "No hidden fees. No vague promises. Just clarity.",
    bgColor: "bg-teal-100"
  },
  {
    icon: "😊",
    title: "Joy",
    description: "We measure success in laughter, connections, and \"wow\" moments.",
    bgColor: "bg-pink-100"
  }
];

const events = [
  {
    image: eventImage1,
    title: "Tech Summit",
    category: "Conference",
    categoryColor: "bg-blue-100 text-blue-800",
    description: "1,200 attendees. 15 vendors. One seamless flow.",
    location: "San Francisco",
    details: "3 days"
  },
  {
    image: eventImage2,
    title: "Intimate Wedding",
    category: "Wedding",
    categoryColor: "bg-pink-100 text-pink-800",
    description: "From floral sketches to last dance – flawless.",
    location: "Napa Valley",
    details: "120 guests"
  },
  {
    image: eventImage3,
    title: "Community Meetup",
    category: "Networking",
    categoryColor: "bg-green-100 text-green-800",
    description: "Local bites, global connections. Zero stress.",
    location: "Brooklyn",
    details: "250+ attendees"
  }
];

// Components
const StarRating = ({ rating }: { rating: number }) => (
  <div className="flex">
    {[...Array(5)].map((_, i) => (
      <span key={i} className={i < rating ? "text-yellow-400" : "text-gray-300"}>★</span>
    ))}
  </div>
);

const MobileMenu = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => (
  <AnimatePresence>
    {isOpen && (
      <motion.div
        initial={{ opacity: 0, x: '100%' }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: '100%' }}
        className="fixed inset-0 z-50 lg:hidden"
      >
        <div className="absolute inset-0 bg-black/50" onClick={onClose} />
        <div className="absolute right-0 top-0 h-full w-80 bg-white shadow-xl">
          <div className="flex justify-end p-4">
            <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <nav className="px-6 py-4">
            <div className="space-y-4">
              <a href="#home" className="block text-gray-700 hover:text-blue-600 transition-colors font-medium py-2" onClick={onClose}>Home</a>
              <a href="#about" className="block text-gray-700 hover:text-blue-600 transition-colors font-medium py-2" onClick={onClose}>How It Works</a>
              <a href="#testimonials" className="block text-gray-700 hover:text-blue-600 transition-colors font-medium py-2" onClick={onClose}>Testimonials</a>
              <a href="#pricing" className="block text-gray-700 hover:text-blue-600 transition-colors font-medium py-2" onClick={onClose}>Pricing</a>
            </div>
            <div className="mt-8 space-y-3">
              <button className="w-full text-blue-900 hover:text-blue-700 font-medium px-4 py-2 text-left">Login</button>
              <button className="w-full bg-gradient-to-r from-blue-600 to-blue-800 text-white font-medium px-6 py-3 rounded-full hover:shadow-lg transition-shadow">
                Get Started
              </button>
            </div>
          </nav>
        </div>
      </motion.div>
    )}
  </AnimatePresence>
);

function App() {
  const [activeTab, setActiveTab] = useState('host');
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
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
		<div className="min-h-screen bg-white font-sans">
			{/* Navigation */}
			<nav
				className={`fixed w-full z-40 transition-all duration-300 ${
					scrolled ? "bg-white shadow-md py-2" : "bg-transparent py-4"
				}`}
			>
				<div className="container-custom px-4">
					<div className="flex justify-between items-center">
						<div className="text-xl sm:text-2xl font-bold text-blue-900 flex items-center">
							<span className="bg-gradient-to-r from-blue-600 to-blue-800 text-white px-2 sm:px-3 py-1 rounded-lg mr-2 text-sm sm:text-base">
								E
							</span>
							Eventador
						</div>

						{/* Desktop Navigation */}
						<div className="hidden lg:flex space-x-8">
							<a
								href="#home"
								className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
							>
								Home
							</a>
							<a
								href="#about"
								className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
							>
								How It Works
							</a>
							<a
								href="#testimonials"
								className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
							>
								Testimonials
							</a>
							<a
								href="#pricing"
								className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
							>
								Pricing
							</a>
						</div>

						{/* Desktop CTA Buttons */}
						<div className="hidden lg:flex space-x-4">
							<button className="text-blue-900 hover:text-blue-700 font-medium px-4 py-2">
								Login
							</button>
							<button className="bg-gradient-to-r from-blue-600 to-blue-800 text-white font-medium px-6 py-2 rounded-full hover:shadow-lg transition-shadow">
								Get Started
							</button>
						</div>

						{/* Mobile Menu Button */}
						<button
							className="lg:hidden text-blue-900 hover:text-blue-700"
							onClick={() => setMobileMenuOpen(true)}
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
									d="M4 6h16M4 12h16M4 18h16"
								/>
							</svg>
						</button>
					</div>
				</div>
			</nav>

			{/* Mobile Menu */}
			<MobileMenu
				isOpen={mobileMenuOpen}
				onClose={() => setMobileMenuOpen(false)}
			/>

			{/* Hero Section */}
			<section
				id="home"
				className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-900 to-blue-800 pt-16"
			>
				<div className="absolute inset-0 z-0">
					{/* Dynamic particles background */}
					<div className="absolute inset-0 opacity-20">
						{[...Array(20)].map((_, i) => (
							<motion.div
								key={i}
								className="absolute rounded-full bg-white"
								initial={{
									top: `${Math.random() * 100}%`,
									left: `${Math.random() * 100}%`,
									width: `${Math.random() * 10 + 5}px`,
									height: `${Math.random() * 10 + 5}px`,
									opacity: Math.random() * 0.3 + 0.1,
								}}
								animate={{
									y: [0, Math.random() * 30 - 15],
									x: [0, Math.random() * 30 - 15],
								}}
								transition={{
									duration: Math.random() * 5 + 3,
									repeat: Infinity,
									repeatType: "reverse",
								}}
							/>
						))}
					</div>
				</div>

				<div className="container-custom relative z-10 px-4 py-12 sm:py-16 lg:py-24">
					<div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
						<div className="text-white text-center lg:text-left">
							<motion.div
								initial={{ y: 20, opacity: 0 }}
								animate={{ y: 0, opacity: 1 }}
								transition={{ duration: 0.5 }}
								className="inline-block px-3 sm:px-4 py-2 bg-blue-700/30 backdrop-blur rounded-full border border-blue-500/30 mb-6 sm:mb-8"
							>
								<span className="font-medium text-sm sm:text-base">
									LIFE HAPPENS LIVE
								</span>
							</motion.div>

							<motion.h1
								initial={{ y: 20, opacity: 0 }}
								animate={{ y: 0, opacity: 1 }}
								transition={{ duration: 0.5, delay: 0.1 }}
								className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 leading-tight"
							>
								Life Happens Live.
								<br />
								<span className="bg-gradient-to-r from-yellow-300 to-yellow-400 bg-clip-text text-transparent">
									Let's Make It Remarkable.
								</span>
							</motion.h1>

							<motion.p
								initial={{ y: 20, opacity: 0 }}
								animate={{ y: 0, opacity: 1 }}
								transition={{ duration: 0.5, delay: 0.2 }}
								className="text-lg sm:text-xl text-blue-100 mb-4 sm:mb-6 max-w-2xl mx-auto lg:mx-0"
							>
								Eventador: Where Visionary Hosts Meet Trusted Curators.
							</motion.p>

							<motion.p
								initial={{ y: 20, opacity: 0 }}
								animate={{ y: 0, opacity: 1 }}
								transition={{ duration: 0.5, delay: 0.25 }}
								className="text-base sm:text-lg text-blue-200 mb-6 sm:mb-10 max-w-3xl mx-auto lg:mx-0"
							>
								Plan, Book, and Celebrate — All Without the Headache.
							</motion.p>

							<motion.div
								initial={{ y: 20, opacity: 0 }}
								animate={{ y: 0, opacity: 1 }}
								transition={{ duration: 0.5, delay: 0.3 }}
								className="text-blue-100 mb-6 sm:mb-10 max-w-3xl mx-auto lg:mx-0 text-sm sm:text-base"
							>
								<p className="mb-3 sm:mb-4">
									Imagine this: You dream of an unforgettable moment. A wedding
									that feels like magic. A conference that sparks revolutions. A
									birthday that echoes with joy. Now imagine bringing it to life
									without endless calls, vendor vetting, or sleepless nights.
								</p>
								<p className="mb-3 sm:mb-4 font-semibold text-yellow-300">
									That's Eventador.
								</p>
								<p>
									We orchestrate your vision with a network of rigorously vetted
									partners. One platform. Two intuitive apps. Zero compromises.
								</p>
								<p className="mt-3 sm:mt-4 font-semibold text-yellow-300">
									Your moment. Our mastery.
								</p>
							</motion.div>

							<motion.div
								initial={{ y: 20, opacity: 0 }}
								animate={{ y: 0, opacity: 1 }}
								transition={{ duration: 0.5, delay: 0.4 }}
								className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center lg:justify-start"
							>
								<button className="bg-gradient-to-r from-yellow-500 to-yellow-400 text-blue-900 font-bold px-6 sm:px-8 py-3 sm:py-4 rounded-full hover:shadow-lg hover:shadow-yellow-500/30 transition-all flex items-center justify-center group">
									Explore Services
									<span className="ml-2 group-hover:translate-x-1 transition-transform">
										→
									</span>
								</button>

								<button className="bg-white/10 backdrop-blur-sm text-white font-bold px-6 sm:px-8 py-3 sm:py-4 rounded-full border border-white/30 hover:bg-white/20 transition-colors">
									Join as Vendor
								</button>
							</motion.div>

							<motion.div
								initial={{ y: 20, opacity: 0 }}
								animate={{ y: 0, opacity: 1 }}
								transition={{ duration: 0.5, delay: 0.4 }}
								className="mt-8 sm:mt-12 flex flex-wrap items-center justify-center lg:justify-start gap-4 sm:gap-6"
							>
								<div className="flex -space-x-2 sm:-space-x-4">
									{[...Array(4)].map((_, i) => (
										<div
											key={i}
											className="w-8 h-8 sm:w-12 sm:h-12 rounded-full bg-blue-700 border-2 border-blue-900 flex items-center justify-center"
										>
											<span className="text-xs sm:text-lg font-bold">
												{i + 1}
											</span>
										</div>
									))}
								</div>
								<p className="text-blue-200 font-medium text-sm sm:text-base">
									Trusted by thousands of event planners
								</p>
							</motion.div>
						</div>

						<motion.div
							initial={{ scale: 0.9, opacity: 0 }}
							animate={{ scale: 1, opacity: 1 }}
							transition={{ duration: 0.5, delay: 0.3 }}
							className="relative flex justify-center lg:justify-end"
						>
							<div className="relative z-10 w-[240px] sm:w-[280px] md:w-[320px] transform transition duration-500 hover:scale-105">
								<div className="relative h-[500px] sm:h-[580px]">
									<img
										src={phoneFrame}
										alt="Mobile mockup frame"
										className="absolute inset-0 w-full h-full object-contain pointer-events-none"
										draggable="false"
									/>

									<div className="absolute inset-0 flex items-center justify-center p-[12%]">
										<div className="w-full h-full overflow-hidden rounded-[40px]">
											<img
												src={appScreenshot}
												alt="Eventador App Preview"
												className="w-full h-full object-cover object-top"
												loading="lazy"
											/>
										</div>
									</div>
								</div>

								<div className="absolute inset-x-0 bottom-0 h-10 bg-blue-900/30 blur-2xl rounded-full z-0"></div>
							</div>

							<div className="absolute -top-6 -right-6 w-16 h-16 sm:w-24 sm:h-24 rounded-full bg-purple-600/20 backdrop-blur border border-purple-500/30 animate-pulse"></div>
							<div className="absolute -bottom-8 -left-6 w-12 h-12 sm:w-20 sm:h-20 rounded-lg bg-yellow-500/20 backdrop-blur border border-yellow-400/30 rotate-12"></div>
						</motion.div>
					</div>
				</div>

				{/* Scroll indicator */}
				<div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
					<div className="w-8 h-12 sm:w-10 sm:h-16 rounded-full border-2 border-white/30 flex justify-center">
						<div className="w-1 h-3 sm:h-4 bg-white rounded-full mt-2 sm:mt-3 animate-pulse"></div>
					</div>
				</div>
			</section>

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
										? "bg-blue-600 text-white"
										: "text-gray-700"
								}`}
								onClick={() => setActiveTab("host")}
							>
								For Hosts
							</button>
							<button
								className={`px-4 sm:px-6 py-2 sm:py-3 rounded-full transition-colors text-sm sm:text-base ${
									activeTab === "vendor"
										? "bg-blue-600 text-white"
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
												"Eventador isn't an app; it's my secret weapon. I tap,
												book, and breathe. They handle the rest."
											</p>
											<div className="flex items-center">
												<div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold mr-3 text-sm sm:text-base">
													U
												</div>
												<div>
													<p className="font-semibold text-blue-900 text-sm sm:text-base">
														User App Screenshot
													</p>
													<p className="text-xs sm:text-sm text-blue-700">
														Clean interface showing "Booking Confirmed:
														Catering, Lighting, Venue Secured"
													</p>
												</div>
											</div>
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
														app with "Vendor En Route!" notifications.
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
											<div className="flex items-center">
												<div className="w-10 h-10 sm:w-12 sm:h-12 bg-green-600 rounded-full flex items-center justify-center text-white font-bold mr-3 text-sm sm:text-base">
													V
												</div>
												<div>
													<p className="font-semibold text-green-900 text-sm sm:text-base">
														Vendor App Screenshot
													</p>
													<p className="text-xs sm:text-sm text-green-700">
														Calendar view with "Confirmed Bookings" and
														"Real-Time Earnings" dashboard
													</p>
												</div>
											</div>
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

					{/* App Spotlight Section */}
					<div className="mt-16 sm:mt-20">
						<div className="text-center mb-12 sm:mb-16">
							<h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-900 mb-4">
								Your Vision, Digitally Perfected
							</h3>
							<p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
								Side-by-side mockups of User App & Vendor App
							</p>
						</div>

						<div className="grid lg:grid-cols-2 gap-8 sm:gap-12">
							<div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 sm:p-8 rounded-2xl">
								<h4 className="text-xl sm:text-2xl font-bold text-blue-900 mb-4">
									User App
								</h4>
								<p className="text-gray-700 mb-6 text-sm sm:text-base">
									Browse, book, track, chat – all in your pocket. See real-time
									vendor arrival updates.
								</p>
								<div className="relative">
									<img
										src={userApp}
										alt="User App Screenshot"
										className="rounded-xl shadow-lg w-full"
									/>
									<div className="absolute -bottom-3 -right-3 sm:-bottom-4 sm:-right-4 bg-blue-600 text-white px-3 sm:px-4 py-1 sm:py-2 rounded-lg text-xs sm:text-sm font-medium">
										Service Journey Tracker
									</div>
								</div>
								<p className="text-xs sm:text-sm text-blue-700 mt-3 sm:mt-4 italic">
									Screenshot: "Service Journey" tracker showing "Vendor En
									Route!"
								</p>
							</div>

							<div className="bg-gradient-to-br from-green-50 to-green-100 p-6 sm:p-8 rounded-2xl">
								<h4 className="text-xl sm:text-2xl font-bold text-green-900 mb-4">
									Vendor App
								</h4>
								<p className="text-gray-700 mb-6 text-sm sm:text-base">
									Manage bookings, payments, and client chats in one hub. Your
									business, simplified.
								</p>
								<div className="relative">
									<img
										src={vendorApp}
										alt="Vendor App Screenshot"
										className="rounded-xl shadow-lg w-full"
									/>
									<div className="absolute -bottom-3 -right-3 sm:-bottom-4 sm:-right-4 bg-green-600 text-white px-3 sm:px-4 py-1 sm:py-2 rounded-lg text-xs sm:text-sm font-medium">
										Today's Events
									</div>
								</div>
								<p className="text-xs sm:text-sm text-green-700 mt-3 sm:mt-4 italic">
									Screenshot: "Today's Events" map with optimized travel routes
								</p>
							</div>
						</div>
					</div>

					<div className="text-center mt-12 sm:mt-16">
						<button className="bg-gradient-to-r from-blue-600 to-blue-800 text-white font-bold px-6 sm:px-8 py-3 sm:py-4 rounded-full hover:shadow-lg transition-all">
							Explore More Events
						</button>
					</div>
				</div>
			</section>

			{/* Pricing Section */}
			<section id="pricing" className="py-16 sm:py-20 bg-gray-50">
				<div className="container-custom px-4">
					<div className="text-center mb-12 sm:mb-16">
						<h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-blue-900 mb-4">
							Simple, Transparent Pricing
						</h2>
						<p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
							Only pay when your event succeeds. No hidden fees, no surprises.
						</p>
					</div>

					<div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
						<div className="bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden">
							<div className="bg-blue-50 p-6 sm:p-8 text-center">
								<h3 className="text-xl sm:text-2xl font-bold text-blue-900 mb-2">
									For Hosts
								</h3>
								<div className="text-3xl sm:text-4xl font-bold text-blue-800 mb-2">
									Free
								</div>
								<p className="text-gray-600 text-sm sm:text-base">
									No upfront costs
								</p>
							</div>
							<div className="p-6 sm:p-8">
								<ul className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
									<li className="flex items-center">
										<div className="text-green-500 mr-3">✓</div>
										<span className="text-sm sm:text-base">
											Access to all vendors
										</span>
									</li>
									<li className="flex items-center">
										<div className="text-green-500 mr-3">✓</div>
										<span className="text-sm sm:text-base">
											Event planning tools
										</span>
									</li>
									<li className="flex items-center">
										<div className="text-green-500 mr-3">✓</div>
										<span className="text-sm sm:text-base">
											Real-time tracking
										</span>
									</li>
									<li className="flex items-center">
										<div className="text-green-500 mr-3">✓</div>
										<span className="text-sm sm:text-base">
											Payment protection
										</span>
									</li>
								</ul>
								<p className="text-center text-gray-600 mb-6 text-sm sm:text-base">
									<span className="font-semibold">5% service fee</span> on
									successful bookings
								</p>
								<button className="w-full bg-gradient-to-r from-blue-600 to-blue-800 text-white font-bold py-3 rounded-lg hover:shadow-lg transition-all">
									Start Planning
								</button>
							</div>
						</div>

						<div className="bg-white rounded-2xl shadow-xl border-2 border-blue-500 overflow-hidden transform scale-105 relative">
							<div className="absolute top-3 sm:top-4 right-3 sm:right-4 bg-yellow-400 text-blue-900 font-bold px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm">
								MOST POPULAR
							</div>
							<div className="bg-blue-500 p-6 sm:p-8 text-center">
								<h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
									For Vendors
								</h3>
								<div className="text-3xl sm:text-4xl font-bold text-white mb-2">
									15%
								</div>
								<p className="text-blue-100 text-sm sm:text-base">
									Per completed booking
								</p>
							</div>
							<div className="p-6 sm:p-8">
								<ul className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
									<li className="flex items-center">
										<div className="text-green-500 mr-3">✓</div>
										<span className="text-sm sm:text-base">
											All Free features
										</span>
									</li>
									<li className="flex items-center">
										<div className="text-green-500 mr-3">✓</div>
										<span className="text-sm sm:text-base">
											Premium placement
										</span>
									</li>
									<li className="flex items-center">
										<div className="text-green-500 mr-3">✓</div>
										<span className="text-sm sm:text-base">
											Business dashboard
										</span>
									</li>
									<li className="flex items-center">
										<div className="text-green-500 mr-3">✓</div>
										<span className="text-sm sm:text-base">
											Direct client messaging
										</span>
									</li>
									<li className="flex items-center">
										<div className="text-green-500 mr-3">✓</div>
										<span className="text-sm sm:text-base">
											Analytics & insights
										</span>
									</li>
								</ul>
								<button className="w-full bg-gradient-to-r from-yellow-500 to-yellow-400 text-blue-900 font-bold py-3 rounded-lg hover:shadow-lg transition-all">
									Join as Vendor
								</button>
							</div>
						</div>

						<div className="bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden sm:col-span-2 lg:col-span-1">
							<div className="bg-blue-50 p-6 sm:p-8 text-center">
								<h3 className="text-xl sm:text-2xl font-bold text-blue-900 mb-2">
									Enterprise
								</h3>
								<div className="text-3xl sm:text-4xl font-bold text-blue-800 mb-2">
									Custom
								</div>
								<p className="text-gray-600 text-sm sm:text-base">
									For large organizations
								</p>
							</div>
							<div className="p-6 sm:p-8">
								<ul className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
									<li className="flex items-center">
										<div className="text-green-500 mr-3">✓</div>
										<span className="text-sm sm:text-base">
											All Pro features
										</span>
									</li>
									<li className="flex items-center">
										<div className="text-green-500 mr-3">✓</div>
										<span className="text-sm sm:text-base">
											Dedicated account manager
										</span>
									</li>
									<li className="flex items-center">
										<div className="text-green-500 mr-3">✓</div>
										<span className="text-sm sm:text-base">
											Custom integrations
										</span>
									</li>
									<li className="flex items-center">
										<div className="text-green-500 mr-3">✓</div>
										<span className="text-sm sm:text-base">
											Priority support
										</span>
									</li>
									<li className="flex items-center">
										<div className="text-green-500 mr-3">✓</div>
										<span className="text-sm sm:text-base">
											Volume discounts
										</span>
									</li>
								</ul>
								<button className="w-full bg-gradient-to-r from-blue-600 to-blue-800 text-white font-bold py-3 rounded-lg hover:shadow-lg transition-all">
									Contact Sales
								</button>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* The Promise Section */}
			<section className="py-16 sm:py-20 bg-gradient-to-r from-blue-900 to-blue-800 relative overflow-hidden">
				<div className="absolute inset-0 bg-black/20"></div>
				<div className="container-custom relative z-10 text-center px-4">
					<div className="max-w-4xl mx-auto">
						<h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 sm:mb-8">
							We take the weight off your shoulders, so you can carry the moment
							in your heart.
						</h2>
						<p className="text-lg sm:text-xl text-blue-200 max-w-2xl mx-auto">
							The Promise: Why We Exist
						</p>
					</div>
				</div>
			</section>

			{/* Final CTA */}
			<section className="py-16 sm:py-20 bg-gradient-to-r from-blue-900 to-blue-800">
				<div className="container-custom text-center px-4">
					<h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6 max-w-3xl mx-auto">
						Ready to Transform Chaos into Celebration?
					</h2>
					<p className="text-lg sm:text-xl text-blue-200 mb-8 sm:mb-10 max-w-2xl mx-auto">
						Join thousands of event professionals who trust Eventador to make
						their vision a reality.
					</p>
					<div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6">
						<button className="bg-white text-blue-900 font-bold px-6 sm:px-8 py-3 sm:py-4 rounded-full hover:shadow-lg hover:bg-blue-50 transition-all">
							Host an Event: Start Your Journey
						</button>
						<button className="bg-transparent border-2 border-white text-white font-bold px-6 sm:px-8 py-3 sm:py-4 rounded-full hover:bg-white/10 transition-colors">
							Vendor Application: Grow Your Reach
						</button>
					</div>
				</div>
			</section>

			{/* Footer */}
			<footer className="bg-blue-950 text-white py-12 sm:py-16">
				<div className="container-custom px-4">
					<div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-8 sm:gap-10">
						<div className="sm:col-span-2">
							<div className="text-xl sm:text-2xl font-bold mb-4 flex items-center">
								<span className="bg-gradient-to-r from-blue-500 to-blue-700 text-white px-2 sm:px-3 py-1 rounded-lg mr-2 text-sm sm:text-base">
									E
								</span>
								Eventador
							</div>
							<p className="text-blue-300 mb-6 max-w-md text-sm sm:text-base">
								Where visionary hosts meet trusted curators. Making event
								planning effortless since 2023.
							</p>
							<div className="flex space-x-3 sm:space-x-4">
								<a
									href="#"
									className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-blue-900 flex items-center justify-center hover:bg-blue-800 transition-colors text-xs sm:text-sm"
								>
									<span className="sr-only">Facebook</span>f
								</a>
								<a
									href="#"
									className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-blue-900 flex items-center justify-center hover:bg-blue-800 transition-colors text-xs sm:text-sm"
								>
									<span className="sr-only">Twitter</span>t
								</a>
								<a
									href="#"
									className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-blue-900 flex items-center justify-center hover:bg-blue-800 transition-colors text-xs sm:text-sm"
								>
									<span className="sr-only">Instagram</span>i
								</a>
								<a
									href="#"
									className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-blue-900 flex items-center justify-center hover:bg-blue-800 transition-colors text-xs sm:text-sm"
								>
									<span className="sr-only">LinkedIn</span>in
								</a>
							</div>
						</div>

						<div>
							<h4 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">
								For Hosts
							</h4>
							<ul className="space-y-2 text-blue-300">
								<li>
									<a
										href="#"
										className="hover:text-white transition-colors text-sm sm:text-base"
									>
										How It Works
									</a>
								</li>
								<li>
									<a
										href="#"
										className="hover:text-white transition-colors text-sm sm:text-base"
									>
										Event Services
									</a>
								</li>
								<li>
									<a
										href="#"
										className="hover:text-white transition-colors text-sm sm:text-base"
									>
										Pricing
									</a>
								</li>
								<li>
									<a
										href="#"
										className="hover:text-white transition-colors text-sm sm:text-base"
									>
										Success Stories
									</a>
								</li>
							</ul>
						</div>

						<div>
							<h4 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">
								For Vendors
							</h4>
							<ul className="space-y-2 text-blue-300">
								<li>
									<a
										href="#"
										className="hover:text-white transition-colors text-sm sm:text-base"
									>
										Become a Partner
									</a>
								</li>
								<li>
									<a
										href="#"
										className="hover:text-white transition-colors text-sm sm:text-base"
									>
										Vendor Resources
									</a>
								</li>
								<li>
									<a
										href="#"
										className="hover:text-white transition-colors text-sm sm:text-base"
									>
										Community
									</a>
								</li>
								<li>
									<a
										href="#"
										className="hover:text-white transition-colors text-sm sm:text-base"
									>
										Success Stories
									</a>
								</li>
							</ul>
						</div>

						<div>
							<h4 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">
								Company
							</h4>
							<ul className="space-y-2 text-blue-300">
								<li>
									<a
										href="#"
										className="hover:text-white transition-colors text-sm sm:text-base"
									>
										About Us
									</a>
								</li>
								<li>
									<a
										href="#"
										className="hover:text-white transition-colors text-sm sm:text-base"
									>
										Careers
									</a>
								</li>
								<li>
									<a
										href="#"
										className="hover:text-white transition-colors text-sm sm:text-base"
									>
										Contact
									</a>
								</li>
								<li>
									<a
										href="#"
										className="hover:text-white transition-colors text-sm sm:text-base"
									>
										Blog
									</a>
								</li>
							</ul>
						</div>
					</div>

					<div className="border-t border-blue-900 mt-8 sm:mt-12 pt-6 sm:pt-8 flex flex-col sm:flex-row justify-between items-center">
						<p className="text-blue-400 mb-4 sm:mb-0 text-sm sm:text-base">
							&copy; 2024 Eventador. All rights reserved.
						</p>
						<div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-6">
							<a
								href="#"
								className="text-blue-400 hover:text-white transition-colors text-sm sm:text-base"
							>
								Privacy Policy
							</a>
							<a
								href="#"
								className="text-blue-400 hover:text-white transition-colors text-sm sm:text-base"
							>
								Terms of Service
							</a>
							<a
								href="#"
								className="text-blue-400 hover:text-white transition-colors text-sm sm:text-base"
							>
								Cookie Policy
							</a>
						</div>
					</div>
				</div>
			</footer>
		</div>
	);
}

export default App;