import React from 'react';

const About = () => {
    return (
        <section id="about" className="py-16 bg-white">
            <div className="container mx-auto px-6 max-w-6xl">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Left Content */}
                    <div className="space-y-8">
                        <div>
                            <h2 className="text-4xl font-bold text-gray-900 mb-3">
                                About Reecha
                            </h2>
                            <div className="w-16 h-1 bg-gradient-to-r from-purple-600 to-pink-600"></div>
                        </div>

                        {/* Our Vision */}
                        <div>
                            <h3 className="text-xl font-bold text-gray-800 mb-2 flex items-center">
                                <span className="w-2 h-2 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full mr-3"></span>
                                Our Vision
                            </h3>
                            <p className="text-gray-600 leading-relaxed">
                                To be a content platform that inspires one billion people's lives by connecting the world and enabling everyone to share their beautiful moments.
                            </p>
                        </div>

                        {/* Our Story */}
                        <div>
                            <h3 className="text-xl font-bold text-gray-800 mb-2 flex items-center">
                                <span className="w-2 h-2 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full mr-3"></span>
                                Our Story
                            </h3>
                            <p className="text-gray-600 leading-relaxed">
                                Reecha is one of the fastest-growing technology companies, with more than 4 offices and R&D centres around the world. Powered by Artificial Intelligence technology, our video-based products have gained immense popularity across 30+ countries.
                            </p>
                        </div>

                        {/* Our Mission */}
                        <div>
                            <h3 className="text-xl font-bold text-gray-800 mb-2 flex items-center">
                                <span className="w-2 h-2 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full mr-3"></span>
                                Our Mission
                            </h3>
                            <p className="text-gray-600 leading-relaxed mb-4">
                                Empower a new generation of users with an exciting new social language where they can showcase, discover and stay connected in a positive and creative online environment.
                            </p>

                            {/* Contact Info */}
                            <div className="space-y-3">
                                <div className="flex items-center space-x-3 text-gray-600">
                                    <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center flex-shrink-0">
                                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                        </svg>
                                    </div>
                                    <span>Global Offices in 4+ Countries</span>
                                </div>
                                <div className="flex items-center space-x-3 text-gray-600">
                                    <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center flex-shrink-0">
                                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                        </svg>
                                    </div>
                                    <span>support@Reecha.com</span>
                                </div>
                                <div className="flex items-center space-x-3 text-gray-600">
                                    <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center flex-shrink-0">
                                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                        </svg>
                                    </div>
                                    <span>Global Support Center</span>
                                </div>
                            </div>
                        </div>

                      
                    </div>

                    {/* Right Image */}
                    <div className="relative">
                        <div className="rounded-xl overflow-hidden shadow-lg">
                            <img
                                src="/images/about4.jpg"
                                alt="Reecha social platform connecting people worldwide"
                                className="w-full h-full object-cover"
                            />
                        </div>

                     
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;