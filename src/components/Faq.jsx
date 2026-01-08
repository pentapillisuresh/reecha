import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Headphones, MessageCircle, Globe } from 'lucide-react';

const FAQ = () => {
    const faqs = [
        {
            question: "How do I start using Reecha?",
            answer: "Download the app from App Store or Google Play, sign up with your phone number or social account, create your profile, and start connecting instantly with people worldwide!"
        },
        {
            question: "Is Reecha available globally?",
            answer: "Yes! Reecha is available in 30+ countries worldwide. Our platform connects users across different time zones for 24/7 social interaction."
        },
        {
            question: "How does live streaming work on Reecha?",
            answer: "Simply tap the 'Go Live' button, set up your stream, and start broadcasting to your followers. Interact with viewers through real-time chat and receive virtual gifts."
        },
        {
            question: "What safety features does Reecha offer?",
            answer: "We provide AI-powered content moderation, report/block features, privacy controls, and 24/7 community support to ensure a safe and positive environment."
        },
        {
            question: "How can I earn through Reecha?",
            answer: "You can earn income by live streaming and receiving virtual gifts from viewers. Build your following, engage your audience, and monetize your content."
        },
        {
            question: "What makes Reecha different from other social apps?",
            answer: "Reecha combines AI-powered connections, high-quality video chat, global live streaming, and a focus on positive community building in one seamless platform."
        }
    ];

    const [openIndex, setOpenIndex] = useState(0);

    return (
        <section id="faq" className="py-16 bg-white">
            <div className="container mx-auto px-6 max-w-4xl">
                {/* Header */}
                <div className="text-center mb-12">
                    <div className="inline-flex items-center space-x-2 mb-4">
                        <Globe className="w-6 h-6 text-purple-600" />
                        <span className="text-sm font-medium text-purple-600 bg-purple-50 px-3 py-1 rounded-full">
                            Global Support
                        </span>
                    </div>
                    <h2 className="text-3xl font-bold text-gray-900 mb-3">
                        Frequently Asked Questions
                    </h2>
                    <div className="w-16 h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto mb-4"></div>
                    <p className="text-gray-600">
                        Everything you need to know about Reecha social platform
                    </p>
                </div>

                {/* FAQ Items */}
                <div className="space-y-4 mb-12">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className="bg-white border border-gray-200 rounded-xl hover:border-purple-200 transition-all duration-200 hover:shadow-sm"
                        >
                            <button
                                className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-gray-50 rounded-xl transition-colors duration-200"
                                onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                            >
                                <div className="flex items-start space-x-4">
                                    <div className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-100 to-pink-100 flex items-center justify-center flex-shrink-0">
                                        <span className="text-sm font-bold text-gradient bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                                            {index + 1}
                                        </span>
                                    </div>
                                    <div className="text-left">
                                        <h3 className="text-base font-semibold text-gray-900 pr-4">
                                            {faq.question}
                                        </h3>
                                    </div>
                                </div>
                                {openIndex === index ? (
                                    <ChevronUp className="w-4 h-4 text-purple-600 flex-shrink-0" />
                                ) : (
                                    <ChevronDown className="w-4 h-4 text-gray-500 flex-shrink-0" />
                                )}
                            </button>

                            {openIndex === index && (
                                <div className="px-6 pb-5 ml-12">
                                    <div className="w-8 h-0.5 bg-gradient-to-r from-purple-600 to-pink-600 mb-4"></div>
                                    <p className="text-gray-600 text-sm leading-relaxed">
                                        {faq.answer}
                                    </p>
                                </div>
                            )}
                        </div>
                    ))}
                </div>

                {/* Support Options */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    <div className="bg-gradient-to-r from-purple-50 to-pink-50 border border-purple-100 rounded-xl p-5">
                        <div className="flex items-start space-x-3">
                            <div className="w-10 h-10 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 flex items-center justify-center flex-shrink-0">
                                <Headphones className="w-5 h-5 text-white" />
                            </div>
                            <div>
                                <h4 className="font-semibold text-gray-900 mb-1">24/7 Support</h4>
                                <p className="text-sm text-gray-600">Get help anytime with our global support team</p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-gradient-to-r from-purple-50 to-pink-50 border border-purple-100 rounded-xl p-5">
                        <div className="flex items-start space-x-3">
                            <div className="w-10 h-10 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 flex items-center justify-center flex-shrink-0">
                                <MessageCircle className="w-5 h-5 text-white" />
                            </div>
                            <div>
                                <h4 className="font-semibold text-gray-900 mb-1">Community Help</h4>
                                <p className="text-sm text-gray-600">Connect with other users for tips and guidance</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Section */}
                <div className="text-center">
                    <div className="inline-flex items-center justify-center space-x-2 text-gray-500 text-sm mb-4">
                        <Globe className="w-4 h-4" />
                        <span>Available in 30+ countries worldwide</span>
                    </div>
                    <p className="text-gray-500 text-sm mb-6">
                        Still have questions? We're here to help you connect.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button className="px-6 py-2.5 bg-gradient-to-r from-purple-600 to-pink-600 text-white text-sm font-medium rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300 shadow-sm hover:shadow">
                            Contact Support
                        </button>
                        <button className="px-6 py-2.5 bg-white text-gray-700 text-sm font-medium rounded-lg border border-gray-300 hover:bg-gray-50 transition-colors duration-300">
                            Join Community
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FAQ;