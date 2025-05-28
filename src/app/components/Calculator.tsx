import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/app/components/ui/button';
import { Input } from '@/app/components/ui/input';
import { Card } from '@/app/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/app/components/ui/select';
import { Label } from '@/app/components/ui/label';

const Calculator = () =>
{
    const [hashRate, setHashRate] = useState('');
    const [unit, setUnit] = useState('TH/s');
    const [powerCost, setPowerCost] = useState('0.10');
    const [poolFee, setPoolFee] = useState('1');
    const [results, setResults] = useState({
        dailyRevenue: 0,
        dailyCost: 0,
        dailyProfit: 0,
        monthlyProfit: 0,
        yearlyProfit: 0
    });

    const calculateEarnings = () =>
    {
        if (!hashRate || isNaN(Number(hashRate))) return;

        const hashRateInTH = Number(hashRate) * (unit === 'GH/s' ? 0.001 : unit === 'TH/s' ? 1 : 1000);

        // Simplified calculation based on current mining difficulty and block rewards
        const btcPerTH = 0.00000863; // Approximate BTC per TH/s per day
        const btcPrice = 50000; // Current BTC price in USD
        const powerConsumption = hashRateInTH * 100; // Watts per TH/s
        const hoursPerDay = 24;

        const dailyBTC = hashRateInTH * btcPerTH;
        const dailyRevenueUSD = dailyBTC * btcPrice;
        const dailyCostUSD = (powerConsumption * hoursPerDay * Number(powerCost)) / 1000;
        const poolFeeAmount = dailyRevenueUSD * (Number(poolFee) / 100);
        const dailyProfitUSD = dailyRevenueUSD - dailyCostUSD - poolFeeAmount;

        setResults({
            dailyRevenue: dailyRevenueUSD,
            dailyCost: dailyCostUSD + poolFeeAmount,
            dailyProfit: dailyProfitUSD,
            monthlyProfit: dailyProfitUSD * 30,
            yearlyProfit: dailyProfitUSD * 365
        });
    };

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl mx-auto"
        >
            <Card className="bg-white/10 border-white/20 p-8 backdrop-blur-lg">
                <div className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                        <div>
                            <Label className="text-white">Hash Rate</Label>
                            <div className="flex gap-2 mt-2">
                                <Input
                                    value={hashRate}
                                    onChange={(e) => setHashRate(e.target.value)}
                                    placeholder="Enter hash rate"
                                    className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                                />
                                <Select value={unit} onValueChange={setUnit}>
                                    <SelectTrigger className="w-24 bg-white/10 border-white/20 text-white">
                                        <SelectValue />
                                    </SelectTrigger>
                                    <SelectContent className="bg-crypto-dark border-white/20">
                                        <SelectItem value="GH/s" className="text-white hover:bg-white/10">GH/s</SelectItem>
                                        <SelectItem value="TH/s" className="text-white hover:bg-white/10">TH/s</SelectItem>
                                        <SelectItem value="PH/s" className="text-white hover:bg-white/10">PH/s</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                        </div>

                        <div>
                            <Label className="text-white">Power Cost ($/kWh)</Label>
                            <Input
                                value={powerCost}
                                onChange={(e) => setPowerCost(e.target.value)}
                                placeholder="0.10"
                                className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 mt-2"
                            />
                        </div>
                    </div>

                    <div>
                        <Label className="text-white">Pool Fee (%)</Label>
                        <Input
                            value={poolFee}
                            onChange={(e) => setPoolFee(e.target.value)}
                            placeholder="1"
                            className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 mt-2"
                        />
                    </div>

                    <Button
                        onClick={calculateEarnings}
                        className="w-full bg-gradient-purple hover:opacity-90 text-white py-3"
                    >
                        Calculate Earnings
                    </Button>

                    {results.dailyRevenue > 0 && (
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="space-y-4 pt-6 border-t border-white/20"
                        >
                            <div className="grid grid-cols-2 gap-4">
                                <div className="text-center">
                                    <p className="text-sm text-gray-400 mb-1">Daily Revenue</p>
                                    <p className="text-xl font-bold text-green-400">${results.dailyRevenue.toFixed(2)}</p>
                                </div>
                                <div className="text-center">
                                    <p className="text-sm text-gray-400 mb-1">Daily Cost</p>
                                    <p className="text-xl font-bold text-red-400">${results.dailyCost.toFixed(2)}</p>
                                </div>
                            </div>

                            <div className="text-center">
                                <p className="text-sm text-gray-400 mb-2">ESTIMATED DAILY PROFIT:</p>
                                <p className="text-3xl font-bold text-crypto-blue">
                                    ${results.dailyProfit.toFixed(2)}
                                </p>
                            </div>

                            <div className="grid grid-cols-2 gap-4 pt-4">
                                <div className="text-center">
                                    <p className="text-sm text-gray-400 mb-1">Monthly Profit</p>
                                    <p className="text-lg font-bold text-white">${results.monthlyProfit.toFixed(2)}</p>
                                </div>
                                <div className="text-center">
                                    <p className="text-sm text-gray-400 mb-1">Yearly Profit</p>
                                    <p className="text-lg font-bold text-white">${results.yearlyProfit.toFixed(2)}</p>
                                </div>
                            </div>

                            <p className="text-xs text-gray-400 text-center mt-4">
                                * Calculations are estimates based on current network difficulty and may vary with market conditions.
                            </p>
                        </motion.div>
                    )}
                </div>
            </Card>
        </motion.div>
    );
};

export default Calculator;