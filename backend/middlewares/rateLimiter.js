const ipRequests = new Map();
const WINDOW_MS = 15 * 60 * 1000; // 15 minutes
const MAX_LIMIT = 100; // Max 100 requests per window

export const rateLimiter = (req, res, next) => {
    const ip = req.ip || req.headers['x-forwarded-for'] || req.socket.remoteAddress;
    const now = Date.now();

    if (!ipRequests.has(ip)) {
        ipRequests.set(ip, { count: 1, resetTime: now + WINDOW_MS });
        return next();
    }

    const record = ipRequests.get(ip);

    // If the window has expired, reset the window count and reset time
    if (now > record.resetTime) {
        record.count = 1;
        record.resetTime = now + WINDOW_MS;
        return next();
    }

    // If limit is exceeded, return 429 status code
    if (record.count >= MAX_LIMIT) {
        return res.status(429).json({
            message: "Too many requests from this IP. Please try again in 15 minutes.",
            success: false
        });
    }

    // Increment the request count for this window
    record.count++;
    next();
};
