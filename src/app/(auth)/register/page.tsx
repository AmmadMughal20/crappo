'use client'
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/app/components/ui/button';
import { Input } from '@/app/components/ui/input';
import { Card } from '@/app/components/ui/card';
import { Label } from '@/app/components/ui/label';
import { Mail, Lock, User, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

const Register = () =>
{
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: ''
    });
    const [showOTP, setShowOTP] = useState(false);
    const [otp, setOtp] = useState('');

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    {
        setFormData(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }));
    };

    const handleEmailRegister = (e: React.FormEvent) =>
    {
        e.preventDefault();
        if (formData.password !== formData.confirmPassword)
        {
            alert('Passwords do not match');
            return;
        }
        // TODO: Implement registration logic
        console.log('Register with:', formData);
        setShowOTP(true);
    };

    const handleOTPVerification = (e: React.FormEvent) =>
    {
        e.preventDefault();
        // TODO: Implement OTP verification
        console.log('Verify OTP:', otp);
    };

    const handleGoogleRegister = () =>
    {
        // TODO: Implement Google registration
        console.log('Register with Google');
    };

    const resendOTP = () =>
    {
        // TODO: Implement resend OTP
        console.log('Resend OTP');
    };

    if (showOTP)
    {
        return (
            <div className="min-h-screen bg-background flex items-center justify-center px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="w-full max-w-md"
                >
                    <Card className="bg-white/10 border-white/20 backdrop-blur-lg p-8">
                        <div className="text-center mb-8">
                            <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                                <Mail className="w-8 h-8 text-white" />
                            </div>
                            <h1 className="text-2xl font-bold text-white mb-2">Verify Your Email</h1>
                            <p className="text-gray-300">We&apos;ve sent a verification code to</p>
                            <p className="text-white font-medium">{formData.email}</p>
                        </div>

                        <form onSubmit={handleOTPVerification} className="space-y-6">
                            <div>
                                <Label htmlFor="otp" className="text-white">Verification Code</Label>
                                <Input
                                    id="otp"
                                    type="text"
                                    value={otp}
                                    onChange={(e) => setOtp(e.target.value)}
                                    placeholder="Enter 6-digit code"
                                    className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 text-center text-lg tracking-widest"
                                    maxLength={6}
                                    required
                                />
                            </div>

                            <Button
                                type="submit"
                                className="w-full bg-accent hover:opacity-90 text-white py-3"
                            >
                                Verify Email
                            </Button>
                        </form>

                        <div className="text-center mt-6">
                            <p className="text-gray-300 mb-2">Didn&apos;t receive the code?</p>
                            <Button
                                onClick={resendOTP}
                                variant="ghost"
                                className="text-crypto-purple hover:text-crypto-purple-light"
                            >
                                Resend Code
                            </Button>
                        </div>
                    </Card>
                </motion.div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-background flex items-center justify-center px-4">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="w-full max-w-md"
            >
                <Link
                    href="/"
                    className="inline-flex items-center text-white/80 hover:text-white mb-8 transition-colors"
                >
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    Back to Home
                </Link>

                <Card className="bg-white/10 border-white/20 backdrop-blur-lg p-8">
                    <div className="text-center mb-8">
                        <div className="flex items-center justify-center space-x-2 mb-4">
                            <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center">
                                <span className="text-white font-bold text-lg">C</span>
                            </div>
                            <span className="text-white font-bold text-2xl">CRAPPO</span>
                        </div>
                        <h1 className="text-2xl font-bold text-white mb-2">Create Account</h1>
                        <p className="text-gray-300">Start your crypto journey today</p>
                    </div>

                    <form onSubmit={handleEmailRegister} className="space-y-6">
                        <div>
                            <Label htmlFor="name" className="text-white">Full Name</Label>
                            <div className="relative mt-2">
                                <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                                <Input
                                    id="name"
                                    name="name"
                                    type="text"
                                    value={formData.name}
                                    onChange={handleInputChange}
                                    placeholder="Enter your full name"
                                    className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 pl-10"
                                    required
                                />
                            </div>
                        </div>

                        <div>
                            <Label htmlFor="email" className="text-white">Email</Label>
                            <div className="relative mt-2">
                                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                                <Input
                                    id="email"
                                    name="email"
                                    type="email"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    placeholder="Enter your email"
                                    className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 pl-10"
                                    required
                                />
                            </div>
                        </div>

                        <div>
                            <Label htmlFor="password" className="text-white">Password</Label>
                            <div className="relative mt-2">
                                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                                <Input
                                    id="password"
                                    name="password"
                                    type="password"
                                    value={formData.password}
                                    onChange={handleInputChange}
                                    placeholder="Enter your password"
                                    className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 pl-10"
                                    required
                                />
                            </div>
                        </div>

                        <div>
                            <Label htmlFor="confirmPassword" className="text-white">Confirm Password</Label>
                            <div className="relative mt-2">
                                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                                <Input
                                    id="confirmPassword"
                                    name="confirmPassword"
                                    type="password"
                                    value={formData.confirmPassword}
                                    onChange={handleInputChange}
                                    placeholder="Confirm your password"
                                    className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 pl-10"
                                    required
                                />
                            </div>
                        </div>

                        <Button
                            type="submit"
                            className="w-full bg-accent hover:opacity-90 text-white py-3"
                        >
                            Create Account
                        </Button>
                    </form>

                    <div className="mt-6">
                        <div className="relative">
                            <div className="absolute inset-0 flex items-center">
                                <div className="w-full border-t border-white/20" />
                            </div>
                            <div className="relative flex justify-center text-sm">
                                <span className="px-2 bg-transparent text-gray-300">Or continue with</span>
                            </div>
                        </div>

                        <Button
                            onClick={handleGoogleRegister}
                            variant="outline"
                            className="w-full mt-4 bg-white/10 border-white/20 text-white hover:bg-white/20"
                        >
                            <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
                                <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                                <path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                                <path fill="currentColor" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                                <path fill="currentColor" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                            </svg>
                            Continue with Google
                        </Button>
                    </div>
                    787878
                    <p className="mt-6 text-center text-gray-300">
                        Already have an account?{' '}
                        <Link href="/login" className="text-crypto-purple hover:text-crypto-purple-light">
                            Sign in
                        </Link>
                    </p>
                </Card>
            </motion.div>
        </div>
    );
};

export default Register;