/** @format */

const AboutSection = () => {
  return (
    <div>
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
    </div>
  );
};

export default AboutSection;
