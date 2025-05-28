import { motion } from 'framer-motion';

export const FloatingCube = ({ className = "", delay = 0 }) => (
    <motion.div
        className={`absolute ${className}`}
        initial={{ y: 0, rotateX: 0, rotateY: 0 }}
        animate={{
            y: [-10, 10, -10],
            rotateX: [0, 360],
            rotateY: [0, 180]
        }}
        transition={{
            duration: 6,
            delay,
            repeat: Infinity,
            ease: "easeInOut"
        }}
    >
        <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
            <defs>
                <linearGradient id={`cubeGradient${delay}`} x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#6366F1" stopOpacity="0.8" />
                    <stop offset="100%" stopColor="#8B5CF6" stopOpacity="0.4" />
                </linearGradient>
            </defs>
            <path d="M30 5 L50 15 L50 35 L30 45 L10 35 L10 15 Z" fill={`url(#cubeGradient${delay})`} stroke="#A78BFA" strokeWidth="1" />
            <path d="M30 5 L30 25 L50 35 L50 15 Z" fill="rgba(99, 102, 241, 0.6)" stroke="#A78BFA" strokeWidth="1" />
            <path d="M30 25 L10 35 L30 45 L50 35 Z" fill="rgba(139, 92, 246, 0.4)" stroke="#A78BFA" strokeWidth="1" />
        </svg>
    </motion.div>
);

export const FloatingDiamond = ({ className = "", delay = 0 }) => (
    <motion.div
        className={`absolute ${className}`}
        initial={{ scale: 0.8, rotate: 0 }}
        animate={{
            scale: [0.8, 1.2, 0.8],
            rotate: [0, 180, 360]
        }}
        transition={{
            duration: 4,
            delay,
            repeat: Infinity,
            ease: "easeInOut"
        }}
    >
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
            <defs>
                <linearGradient id={`diamondGradient${delay}`} x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.8" />
                    <stop offset="100%" stopColor="#1D4ED8" stopOpacity="0.6" />
                </linearGradient>
            </defs>
            <path d="M20 2 L35 20 L20 38 L5 20 Z" fill={`url(#diamondGradient${delay})`} stroke="#60A5FA" strokeWidth="1" />
        </svg>
    </motion.div>
);

export const FloatingCircle = ({ className = "", delay = 0 }) => (
    <motion.div
        className={`absolute ${className}`}
        initial={{ opacity: 0.6 }}
        animate={{
            opacity: [0.6, 1, 0.6],
            scale: [1, 1.1, 1]
        }}
        transition={{
            duration: 3,
            delay,
            repeat: Infinity,
            ease: "easeInOut"
        }}
    >
        <svg width="30" height="30" viewBox="0 0 30 30" fill="none">
            <defs>
                <radialGradient id={`circleGradient${delay}`}>
                    <stop offset="0%" stopColor="#10B981" stopOpacity="0.8" />
                    <stop offset="100%" stopColor="#059669" stopOpacity="0.4" />
                </radialGradient>
            </defs>
            <circle cx="15" cy="15" r="12" fill={`url(#circleGradient${delay})`} stroke="#34D399" strokeWidth="1" />
        </svg>
    </motion.div>
);

export const CryptoCoin = ({ className = "", delay = 0, size = 80 }) => (
    <motion.div
        className={`absolute ${className}`}
        initial={{ rotateY: 0 }}
        animate={{
            rotateY: [0, 180, 360],
            y: [-5, 5, -5]
        }}
        transition={{
            duration: 4,
            delay,
            repeat: Infinity,
            ease: "easeInOut"
        }}
    >
        <svg width={size} height={size} viewBox="0 0 80 80" fill="none">
            <defs>
                <linearGradient id={`coinGradient${delay}`} x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#F59E0B" />
                    <stop offset="100%" stopColor="#D97706" />
                </linearGradient>
                <filter id="coinShadow">
                    <feDropShadow dx="0" dy="4" stdDeviation="4" floodOpacity="0.3" />
                </filter>
            </defs>
            <circle cx="40" cy="40" r="35" fill="url(#coinGradient)" filter="url(#coinShadow)" />
            <circle cx="40" cy="40" r="30" fill="none" stroke="#FCD34D" strokeWidth="2" />
            <text x="40" y="48" textAnchor="middle" fill="#FBBF24" fontSize="24" fontWeight="bold">₿</text>
        </svg>
    </motion.div>
);
