'use client'
import { motion } from 'framer-motion';
import { Button } from '@/app/components/ui/button';
import { Card } from '@/app/components/ui/card';
import Navigation from '@/app/components/Navigation';
import { ArrowRight, Shield, TrendingUp, Users, Globe, Clock, Award } from 'lucide-react';
import Link from 'next/link';


const LearnMore = () =>
{
    const features = [
        {
            icon: Shield,
            title: "Advanced Security",
            description: "Bank-level security with multi-factor authentication and cold storage for your digital assets."
        },
        {
            icon: TrendingUp,
            title: "Real-time Analytics",
            description: "Advanced trading tools and charts powered by TradingView for professional analysis."
        },
        {
            icon: Users,
            title: "Expert Support",
            description: "24/7 customer support from cryptocurrency experts to guide your trading journey."
        },
        {
            icon: Globe,
            title: "Global Access",
            description: "Trade from anywhere in the world with support for 195+ countries and multiple languages."
        },
        {
            icon: Clock,
            title: "Instant Transactions",
            description: "Lightning-fast order execution and instant deposits/withdrawals for seamless trading."
        },
        {
            icon: Award,
            title: "Industry Leading",
            description: "Trusted by over 10 million users worldwide with $30B+ in total trading volume."
        }
    ];

    const benefits = [
        {
            title: "Low Fees",
            description: "Industry-leading low trading fees starting from 0.1%",
            highlight: "0.1%"
        },
        {
            title: "High Liquidity",
            description: "Access to deep liquidity pools for better pricing",
            highlight: "$30B+"
        },
        {
            title: "Fast Execution",
            description: "Orders executed in milliseconds for optimal trading",
            highlight: "<100ms"
        },
        {
            title: "Multiple Currencies",
            description: "Support for 100+ cryptocurrencies and trading pairs",
            highlight: "100+"
        }
    ];

    return (
        <div className="min-h-screen bg-background text-white">
            <Navigation />

            {/* Hero Section */}
            <section className="pt-55 pb-16 px-4 sm:px-6 lg:px-8">
                <div className="container mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h1 className="text-4xl md:text-6xl font-bold mb-6">
                            Why Choose
                            <br />
                            <span className="text-crypto-purple">CRAPPO</span>
                        </h1>
                        <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                            Experience the future of cryptocurrency trading with our advanced platform designed for both beginners and professional traders.
                        </p>
                        <Link href="/register">
                            <Button className="bg-accent hover:opacity-90 text-white px-8 py-4 text-lg rounded-full">
                                Get Started Now
                                <ArrowRight className="ml-2 w-5 h-5" />
                            </Button>
                        </Link>
                    </motion.div>
                </div>
            </section>

            {/* Features Grid */}
            <section className="py-20 px-4 sm:px-6 lg:px-8">
                <div className="container mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-3xl md:text-5xl font-bold mb-6">
                            Powerful Features for Modern Trading
                        </h2>
                        <p className="text-gray-300 text-lg max-w-2xl mx-auto">
                            Our platform combines cutting-edge technology with user-friendly design to provide the ultimate trading experience.
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {features.map((feature, index) => (
                            <motion.div
                                key={feature.title}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                whileHover={{ y: -5 }}
                            >
                                <Card className="bg-white/10 border-white/20 p-6 backdrop-blur-lg h-full">
                                    <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center mb-4">
                                        <feature.icon className="w-6 h-6 text-white" />
                                    </div>
                                    <h3 className="text-xl font-bold mb-3 text-white">{feature.title}</h3>
                                    <p className="text-gray-300">{feature.description}</p>
                                </Card>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Benefits Section */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
                <div className="container mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-3xl md:text-5xl font-bold mb-6">
                            Unmatched Trading Advantages
                        </h2>
                    </motion.div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {benefits.map((benefit, index) => (
                            <motion.div
                                key={benefit.title}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                className="text-center"
                            >
                                <div className="text-4xl font-bold text-crypto-purple mb-2">
                                    {benefit.highlight}
                                </div>
                                <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
                                <p className="text-gray-300">{benefit.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* How It Works */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/7">
                <div className="container mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-3xl md:text-5xl font-bold mb-6">
                            Get Started in 3 Simple Steps
                        </h2>
                    </motion.div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            {
                                step: "01",
                                title: "Create Account",
                                description: "Sign up with your email or Google account in less than 2 minutes."
                            },
                            {
                                step: "02",
                                title: "Verify Identity",
                                description: "Complete our quick verification process to secure your account."
                            },
                            {
                                step: "03",
                                title: "Start Trading",
                                description: "Deposit funds and start trading with our intuitive platform."
                            }
                        ].map((step, index) => (
                            <motion.div
                                key={step.step}
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.2 }}
                                className="text-center"
                            >
                                <div className="text-6xl font-bold text-crypto-purple/30 mb-4">
                                    {step.step}
                                </div>
                                <h3 className="text-2xl font-bold mb-4">{step.title}</h3>
                                <p className="text-gray-300 text-lg">{step.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 px-4 sm:px-6 lg:px-8">
                <div className="container mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-3xl md:text-5xl font-bold mb-6">
                            Ready to Start Your Crypto Journey?
                        </h2>
                        <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
                            Join millions of users who trust CRAPPO for their cryptocurrency trading needs.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link href="/register">
                                <Button className="bg-accent text-crypto-purple hover:bg-white/90 px-8 py-4 text-lg rounded-full">
                                    Create Free Account
                                </Button>
                            </Link>
                            <Link href="/login">
                                <Button variant="outline" className="border-white text-white hover:bg-white/10 px-8 py-4 text-lg rounded-full">
                                    Sign In
                                </Button>
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default LearnMore;