'use client'

import { LineChart, Line, XAxis, YAxis, ResponsiveContainer, AreaChart, Area, BarChart, Bar } from 'recharts';
import { motion } from 'framer-motion';

const bitcoinData = [
    { time: '00:00', price: 45000, volume: 120 },
    { time: '04:00', price: 46200, volume: 140 },
    { time: '08:00', price: 44800, volume: 110 },
    { time: '12:00', price: 47500, volume: 160 },
    { time: '16:00', price: 48200, volume: 180 },
    { time: '20:00', price: 49100, volume: 150 },
    { time: '24:00', price: 50000, volume: 200 },
];

const portfolioData = [
    { name: 'Jan', value: 4000, growth: 400 },
    { name: 'Feb', value: 3000, growth: 300 },
    { name: 'Mar', value: 5000, growth: 500 },
    { name: 'Apr', value: 4500, growth: 450 },
    { name: 'May', value: 6000, growth: 600 },
    { name: 'Jun', value: 5500, growth: 550 },
];

export const BitcoinChart = () => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="h-48 w-full"
    >
        <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={bitcoinData}>
                <defs>
                    <linearGradient id="bitcoinGradient" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#F59E0B" stopOpacity={0.8} />
                        <stop offset="95%" stopColor="#F59E0B" stopOpacity={0.1} />
                    </linearGradient>
                </defs>
                <XAxis
                    dataKey="time"
                    axisLine={false}
                    tickLine={false}
                    tick={{ fill: '#94A3B8', fontSize: 12 }}
                />
                <YAxis hide />
                <Area
                    type="monotone"
                    dataKey="price"
                    stroke="#F59E0B"
                    strokeWidth={2}
                    fillOpacity={1}
                    fill="url(#bitcoinGradient)"
                />
            </AreaChart>
        </ResponsiveContainer>
    </motion.div>
);

export const EthereumChart = () => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="h-48 w-full"
    >
        <ResponsiveContainer width="100%" height="100%">
            <LineChart data={bitcoinData}>
                <XAxis
                    dataKey="time"
                    axisLine={false}
                    tickLine={false}
                    tick={{ fill: '#94A3B8', fontSize: 12 }}
                />
                <YAxis hide />
                <Line
                    type="monotone"
                    dataKey="price"
                    stroke="#3B82F6"
                    strokeWidth={3}
                    dot={false}
                />
            </LineChart>
        </ResponsiveContainer>
    </motion.div>
);

export const LitecoinChart = () => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="h-48 w-full"
    >
        <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={bitcoinData}>
                <defs>
                    <linearGradient id="litecoinGradient" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#10B981" stopOpacity={0.8} />
                        <stop offset="95%" stopColor="#10B981" stopOpacity={0.1} />
                    </linearGradient>
                </defs>
                <XAxis
                    dataKey="time"
                    axisLine={false}
                    tickLine={false}
                    tick={{ fill: '#94A3B8', fontSize: 12 }}
                />
                <YAxis hide />
                <Area
                    type="monotone"
                    dataKey="price"
                    stroke="#10B981"
                    strokeWidth={2}
                    fillOpacity={1}
                    fill="url(#litecoinGradient)"
                />
            </AreaChart>
        </ResponsiveContainer>
    </motion.div>
);

export const PortfolioChart = () => (
    <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="h-64 w-full"
    >
        <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={portfolioData}>
                <defs>
                    <linearGradient id="portfolioGradient" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#6366F1" stopOpacity={0.8} />
                        <stop offset="95%" stopColor="#6366F1" stopOpacity={0.1} />
                    </linearGradient>
                </defs>
                <XAxis
                    dataKey="name"
                    axisLine={false}
                    tickLine={false}
                    tick={{ fill: '#94A3B8', fontSize: 12 }}
                />
                <YAxis hide />
                <Area
                    type="monotone"
                    dataKey="value"
                    stroke="#6366F1"
                    strokeWidth={3}
                    fillOpacity={1}
                    fill="url(#portfolioGradient)"
                />
            </AreaChart>
        </ResponsiveContainer>
    </motion.div>
);

export const TradingChart = () => (
    <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="h-80 w-full"
    >
        <ResponsiveContainer width="100%" height="100%">
            <BarChart data={bitcoinData}>
                <XAxis
                    dataKey="time"
                    axisLine={false}
                    tickLine={false}
                    tick={{ fill: '#94A3B8', fontSize: 12 }}
                />
                <YAxis hide />
                <Bar dataKey="volume" fill="#6366F1" radius={[2, 2, 0, 0]} />
            </BarChart>
        </ResponsiveContainer>
    </motion.div>
);
