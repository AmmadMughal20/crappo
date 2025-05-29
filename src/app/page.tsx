'use client'
import { BitcoinChart, EthereumChart, LitecoinChart, PortfolioChart, TradingChart } from '@/app/components/CryptoCharts';
import { FloatingCircle, FloatingCube, FloatingDiamond } from '@/app/components/GeometricShapes';
import Navigation from '@/app/components/Navigation';
import { Button } from '@/app/components/ui/button';
import { Card } from '@/app/components/ui/card';
import { Input } from '@/app/components/ui/input';
import { motion } from 'framer-motion';
import Image from 'next/image';
import heroimage from '../../public/hero-image.png';
import whyimage from '../../public/why-image.png';
import Calculator from './components/Calculator';
import Link from 'next/link';
import { useState } from 'react';

const Index = () =>
{
  const [email, setEmail] = useState('');

  const handleSubscribe = async () =>
  {
    if (!email) return alert('Please enter your email');

    try
    {
      const res = await fetch('/api/subscription', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();
      if (!res.ok)
      {
        alert(data.error);
      } else
      {
        alert('Subscribed successfully!');
        setEmail('');
      }
    } catch (err)
    {
      console.error(err);
      alert('Failed to subscribe');
    }
  };
  return (
    <div className="min-h-screen bg-background text-white overflow-hidden">
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-30 pb-15 px-4 sm:px-6 lg:px-8 min-h-screen flex items-center" id='hero' >
        <div className="mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="lg:pr-8"
            >
              <div className="inline-block bg-white/10 rounded-full pr-4 py-2 mb-6">
                <span className="text-sm text-black/80 bg-white px-5 py-3 rounded-full font-bold">75% SAVE</span>
                <span className="text-sm text-white ml-2">For the next year</span>
              </div>

              <motion.h1
                initial={{ x: -50, y: 0, opacity: 0 }}
                whileInView={{ x: 0, y: 0, opacity: 1 }}
                transition={{ duration: 0.8 }}
                className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
                Fastest & secure
                <br />
                platform to invest
                <br />
                in crypto
              </motion.h1>

              <p className="text-lg text-gray-300 mb-8 max-w-md">
                Buy and sell cryptocurrencies, trusted by 10M wallets with over $30 billion in transactions.
              </p>

              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link href='/register'>
                  <Button className="bg-accent cursor-pointer hover:opacity-90 text-white px-8 py-8 text-lg rounded-full">
                    Try for FREE
                    <motion.span
                      className="ml-2 bg-white text-accent px-1.5 rounded-full inline-block"
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      →
                    </motion.span>
                  </Button>
                </Link>
              </motion.div>
            </motion.div>

            {/* Hero Illustration */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, x: -50, y: 50 }}
              whileInView={{ opacity: 1, scale: 1, x: 0, y: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="relative lg:h-96 flex items-center justify-center"
            >

              {/* Central 3D Coin */}
              <motion.div
                className="relative z-10"
                animate={{
                  x: [-50, 0],  // Move left
                  y: [50, 0],   // Move down
                }}
                transition={{
                  duration: 2,
                  ease: "easeInOut",
                }}
              >
                <Image src={heroimage} alt="Crypto Coin" width={400} height={64} />
              </motion.div>
            </motion.div>
          </div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16"
          >
            <div className="text-center">
              <div className="w-12 h-12 bg-crypto-blue rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">$</span>
              </div>
              <h3 className="text-3xl font-bold mb-2">$30B</h3>
              <p className="text-gray-400">Digital Currency Exchanged</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-crypto-purple rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">👥</span>
              </div>
              <h3 className="text-3xl font-bold mb-2">10M+</h3>
              <p className="text-gray-400">Trusted Wallets Investor</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-crypto-green rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🏆</span>
              </div>
              <h3 className="text-3xl font-bold mb-2">195</h3>
              <p className="text-gray-400">Countries Supported</p>
            </div>
          </motion.div>
        </div>

        {/* Background Floating Elements */}
        <FloatingCube className="top-32 left-10 opacity-20" delay={2} />
        <FloatingDiamond className="top-40 right-32 opacity-30" delay={2.5} />
        <FloatingCircle className="bottom-32 left-32 opacity-25" delay={3} />
      </section>

      {/* Why Choose Section */}
      <section className="min-h-[90vh] py-30 px-4 sm:px-6 lg:px-32" id='inquire'>
        <div className="mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Why Illustration */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative lg:h-96 flex items-center justify-center"
            >

              {/* Central 3D Coin */}
              <motion.div
                className="relative z-10"
                animate={{
                  x: [-100, 0],  // Move left
                  y: [100, 0],   // Move down
                }}
                transition={{
                  duration: 2,
                  ease: "easeInOut",
                }}
              >
                <Image src={whyimage} alt="Crypto Coin" width={400} height={64} />
              </motion.div>
            </motion.div>

            {/* <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="relative">
                <motion.div
                  animate={{ rotateY: [0, 10, 0], rotateX: [0, 5, 0] }}
                  transition={{ duration: 4, repeat: Infinity }}
                  className="w-80 h-48 bg-gradient-blue rounded-2xl p-6 shadow-2xl relative overflow-hidden"
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16"></div>
                  <div className="relative z-10">
                    <div className="flex justify-between items-start mb-8">
                      <span className="text-white/80 text-sm">CRAPPO</span>
                      <div className="w-8 h-8 bg-white/20 rounded-full"></div>
                    </div>
                    <div className="space-y-2">
                      <div className="w-24 h-3 bg-white/60 rounded"></div>
                      <div className="w-16 h-3 bg-white/40 rounded"></div>
                    </div>
                  </div>
                </motion.div>
                <FloatingCube className="-top-5 -right-5" delay={0} />
                <FloatingCircle className="-bottom-5 -left-5" delay={1} />
              </div>
            </motion.div> */}

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Why you should choose
                <br />
                <span className="text-crypto-purple">CRAPPO</span>
              </h2>
              <p className="text-gray-300 text-lg mb-8">
                Experience the next generation cryptocurrency platform. No financial borders, extra fees, and fake reviews.
              </p>
              <Link href='/learn-more'>
                <Button className="bg-accent cursor-pointer hover:opacity-90 text-white px-8 py-4 rounded-full">
                  Learn More
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Calculator Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5" id="features">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Check how much you can earn
            </h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Calculate your potential mining earnings with our advanced calculator. Enter your hash rate and see real-time profit estimates.
            </p>
          </motion.div>

          <Calculator />
        </div>
      </section>

      {/* Crypto Cards Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8" id='about'>
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Trade securely and market the high
              <br />
              growth cryptocurrencies.
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Bitcoin Card */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              whileHover={{ y: -10 }}
            >
              <Card className="bg-gradient-to-br from-orange-500 to-orange-600 border-0 p-6 text-white">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                      <span className="text-2xl">₿</span>
                    </div>
                    <div>
                      <h3 className="font-bold text-xl">Bitcoin</h3>
                      <p className="text-white/80">BTC</p>
                    </div>
                  </div>
                  <span className="text-green-300">+2.5%</span>
                </div>
                <BitcoinChart />
                <div className="mt-4 flex justify-between items-center">
                  <Button className="bg-white/20 hover:bg-white/30 text-white border-0">
                    Buy Now
                  </Button>
                  <span className="font-bold text-lg">$50,000</span>
                </div>
              </Card>
            </motion.div>

            {/* Ethereum Card */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              whileHover={{ y: -10 }}
            >
              <Card className="bg-white/10 border-white/20 p-6 backdrop-blur-lg">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-crypto-blue rounded-full flex items-center justify-center">
                      <span className="text-2xl">Ξ</span>
                    </div>
                    <div>
                      <h3 className="font-bold text-xl text-white">Ethereum</h3>
                      <p className="text-gray-400">ETH</p>
                    </div>
                  </div>
                  <span className="text-green-400">+5.2%</span>
                </div>
                <EthereumChart />
                <div className="mt-4 flex justify-between items-center">
                  <Button className="bg-crypto-blue hover:bg-crypto-blue/80 text-white">
                    Buy Now
                  </Button>
                  <span className="font-bold text-lg text-white">$3,200</span>
                </div>
              </Card>
            </motion.div>

            {/* Litecoin Card */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              whileHover={{ y: -10 }}
            >
              <Card className="bg-white/10 border-white/20 p-6 backdrop-blur-lg">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-crypto-green rounded-full flex items-center justify-center">
                      <span className="text-2xl">Ł</span>
                    </div>
                    <div>
                      <h3 className="font-bold text-xl text-white">Litecoin</h3>
                      <p className="text-gray-400">LTC</p>
                    </div>
                  </div>
                  <span className="text-green-400">+1.8%</span>
                </div>
                <LitecoinChart />
                <div className="mt-4 flex justify-between items-center">
                  <Button className="bg-crypto-green hover:bg-crypto-green/80 text-white">
                    Buy Now
                  </Button>
                  <span className="font-bold text-lg text-white">$180</span>
                </div>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Investment Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-purple-900 to-blue-900">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Market sentiments, portfolio, and run the infrastructure of your choice
              </h2>

              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-crypto-purple rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-xl">📊</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-xl mb-2">Invest Smart</h3>
                    <p className="text-gray-300">Get full statistic information about the behavior of buyers and sellers will help you to make the decision.</p>
                  </div>
                </div>

                <Button className="bg-accent hover:opacity-90 text-white px-8 py-4 rounded-full">
                  Learn More
                </Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <Card className="bg-white/10 border-white/20 p-6 backdrop-blur-lg">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="font-bold text-xl">Bitcoin</h3>
                  <div className="flex items-center space-x-2">
                    <span className="w-3 h-3 bg-orange-500 rounded-full"></span>
                    <span className="text-orange-500 font-bold">BTC</span>
                  </div>
                </div>
                <PortfolioChart />
                <div className="grid grid-cols-2 gap-4 mt-6">
                  <div className="text-center">
                    <p className="text-2xl font-bold">$15.32</p>
                    <p className="text-sm text-gray-400">Current Price</p>
                  </div>
                  <div className="text-center">
                    <p className="text-2xl font-bold text-green-400">+24.5%</p>
                    <p className="text-sm text-gray-400">24h Change</p>
                  </div>
                </div>
              </Card>

              <FloatingCircle className="top-5 -right-5" delay={0} />
              <FloatingDiamond className="-bottom-5 -left-5" delay={1} />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Detailed Statistics Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Grow your profit and track
              <br />
              your investments
            </h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Use advanced analytical tools. Clear TradingView charts let you track current and historical profit investments.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Card className="bg-white/10 border-white/20 p-8 backdrop-blur-lg">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="font-bold text-2xl">Detailed Statistics</h3>
                  <Button variant="ghost" className="text-crypto-purple">
                    View Report
                  </Button>
                </div>
                <TradingChart />
                <div className="grid grid-cols-3 gap-4 mt-8">
                  <div className="text-center">
                    <div className="flex items-center justify-center space-x-2 mb-2">
                      <span className="w-3 h-3 bg-green-500 rounded-full"></span>
                      <span className="text-sm text-gray-400">Completed</span>
                    </div>
                    <p className="text-xl font-bold">20</p>
                  </div>
                  <div className="text-center">
                    <div className="flex items-center justify-center space-x-2 mb-2">
                      <span className="w-3 h-3 bg-red-500 rounded-full"></span>
                      <span className="text-sm text-gray-400">Cancelled</span>
                    </div>
                    <p className="text-xl font-bold">5</p>
                  </div>
                  <div className="text-center">
                    <div className="flex items-center justify-center space-x-2 mb-2">
                      <span className="w-3 h-3 bg-blue-500 rounded-full"></span>
                      <span className="text-sm text-gray-400">In Progress</span>
                    </div>
                    <p className="text-xl font-bold">12</p>
                  </div>
                </div>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div className="grid grid-cols-2 gap-6">
                <Card className="bg-white/10 border-white/20 p-6 backdrop-blur-lg">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-10 h-10 bg-crypto-purple rounded-full flex items-center justify-center">
                      <span className="text-white">💰</span>
                    </div>
                    <div>
                      <p className="text-2xl font-bold">$1.5M</p>
                      <p className="text-sm text-gray-400">Total Revenue</p>
                    </div>
                  </div>
                </Card>

                <Card className="bg-white/10 border-white/20 p-6 backdrop-blur-lg">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-10 h-10 bg-crypto-blue rounded-full flex items-center justify-center">
                      <span className="text-white">📈</span>
                    </div>
                    <div>
                      <p className="text-2xl font-bold">25%</p>
                      <p className="text-sm text-gray-400">Growth Rate</p>
                    </div>
                  </div>
                </Card>
              </div>

              <Button className="w-full bg-accent hover:opacity-90 text-white py-4 text-lg rounded-full">
                Start Trading
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-blue" id='contact'>
        <div className="container mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Start mining now
            </h2>
            <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
              Join now with CRAPPO to get the latest news and start mining now
            </p>

            <div className="max-w-md mx-auto flex gap-4">
              <Input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="bg-white/20 border-white/30 text-white placeholder:text-white/60 flex-1"
              />
              <Button onClick={handleSubscribe} className="bg-accent text-crypto-blue hover:bg-white/90 px-8">
                Subscribe
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 px-4 sm:px-6 lg:px-8 bg-crypto-dark border-t border-white/10">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center space-x-2 mb-6">
                <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg">C</span>
                </div>
                <span className="text-white font-bold text-xl">CRAPPO</span>
              </div>
              <p className="text-gray-400 mb-6">
                We&apos;re committed to providing our users with the best cryptocurrency trading experience.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors">
                  <span className="text-white">f</span>
                </a>
                <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors">
                  <span className="text-white">t</span>
                </a>
                <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors">
                  <span className="text-white">in</span>
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h3 className="font-bold text-lg mb-6">Quick Link</h3>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Home</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Products</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">About</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Features</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Contact</a></li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h3 className="font-bold text-lg mb-6">Resources</h3>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Download Whitepaper</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Smart Token</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Blockchain Explorer</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Crypto API</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Interest</a></li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <h3 className="font-bold text-lg mb-6">We accept following payment systems</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="w-16 h-10 bg-white/10 rounded flex items-center justify-center">
                  <span className="text-xs font-bold">VISA</span>
                </div>
                <div className="w-16 h-10 bg-white/10 rounded flex items-center justify-center">
                  <span className="text-xs font-bold">MC</span>
                </div>
                <div className="w-16 h-10 bg-white/10 rounded flex items-center justify-center">
                  <span className="text-xs font-bold">BTC</span>
                </div>
                <div className="w-16 h-10 bg-white/10 rounded flex items-center justify-center">
                  <span className="text-xs font-bold">ETH</span>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="border-t border-white/10 mt-12 pt-8 text-center">
            <p className="text-gray-400">©2025 CRAPPO. All rights reserved</p>
          </div>
        </div>

        {/* Background floating elements */}
        <FloatingCube className="top-10 left-10 opacity-10" delay={0} />
        <FloatingDiamond className="bottom-10 right-10 opacity-10" delay={1} />
        <FloatingCircle className="top-32 right-32 opacity-10" delay={2} />
      </footer>
    </div>
  );
};

export default Index;
