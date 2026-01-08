import React from 'react';
import { Mail, Phone, MessageCircle, Globe, Video, Users } from 'lucide-react';

const Contact = () => {
    return (
        <section id="contact" className="py-16 bg-gradient-to-b from-gray-50 to-white">
            <div className="container mx-auto px-6 max-w-4xl">
                {/* Header */}
                <div className="text-center mb-12">
                    <div className="inline-flex items-center space-x-2 mb-4">
                        <Globe className="w-5 h-5 text-purple-600" />
                        <span className="text-sm font-medium text-purple-600 bg-purple-50 px-3 py-1 rounded-full">
                            Global Community
                        </span>
                    </div>
                    <h2 className="text-3xl font-bold text-gray-900 mb-3">
                        Connect With Our Community
                    </h2>
                    <div className="w-16 h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto mb-4"></div>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Join millions of users worldwide in our vibrant social platform. We're here to help you connect, share, and grow!
                    </p>
                </div>

                {/* Contact Options */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                    {/* Email Support */}
                    <div className="bg-white p-6 rounded-xl border border-gray-200 text-center hover:shadow-lg transition-all duration-300 hover:border-purple-200 hover:scale-105 transform">
                        <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                            <Mail className="w-5 h-5 text-white" />
                        </div>
                        <h3 className="font-bold text-gray-900 mb-2">
                            Email Support
                        </h3>
                        <p className="text-gray-600 text-sm">
                            support@Reecha.com
                        </p>
                        <div className="mt-3">
                            <span className="text-xs text-purple-600 bg-purple-50 px-2 py-1 rounded-full">
                                24/7 Response
                            </span>
                        </div>
                    </div>

                    {/* Community Chat */}
                    <div className="bg-white p-6 rounded-xl border border-gray-200 text-center hover:shadow-lg transition-all duration-300 hover:border-purple-200 hover:scale-105 transform">
                        <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                            <MessageCircle className="w-5 h-5 text-white" />
                        </div>
                        <h3 className="font-bold text-gray-900 mb-2">
                            Live Community Chat
                        </h3>
                        <p className="text-gray-600 text-sm">
                            Connect with users worldwide
                        </p>
                        <div className="mt-3">
                            <span className="text-xs text-purple-600 bg-purple-50 px-2 py-1 rounded-full">
                                Real-time
                            </span>
                        </div>
                    </div>

                    {/* Live Stream Support */}
                    <div className="bg-white p-6 rounded-xl border border-gray-200 text-center hover:shadow-lg transition-all duration-300 hover:border-purple-200 hover:scale-105 transform">
                        <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                            <Video className="w-5 h-5 text-white" />
                        </div>
                        <h3 className="font-bold text-gray-900 mb-2">
                            Stream Support
                        </h3>
                        <p className="text-gray-600 text-sm">
                            Help with live streaming
                        </p>
                        <div className="mt-3">
                            <span className="text-xs text-purple-600 bg-purple-50 px-2 py-1 rounded-full">
                                Creator Support
                            </span>
                        </div>
                    </div>

                    {/* Global Help */}
                    <div className="bg-white p-6 rounded-xl border border-gray-200 text-center hover:shadow-lg transition-all duration-300 hover:border-purple-200 hover:scale-105 transform">
                        <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                            <Users className="w-5 h-5 text-white" />
                        </div>
                        <h3 className="font-bold text-gray-900 mb-2">
                            Community Help
                        </h3>
                        <p className="text-gray-600 text-sm">
                            Get help from community
                        </p>
                        <div className="mt-3">
                            <span className="text-xs text-purple-600 bg-purple-50 px-2 py-1 rounded-full">
                                Global Network
                            </span>
                        </div>
                    </div>
                </div>




            </div>
        </section>
    );
};

export default Contact;