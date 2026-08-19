const cleanObject = (obj) => {
    if (obj && typeof obj === 'object') {
        for (const key in obj) {
            if (key.startsWith('$') || key.includes('.')) {
                delete obj[key];
            } else if (typeof obj[key] === 'object') {
                cleanObject(obj[key]);
            }
        }
    }
};

export const nosqlSanitizer = (req, res, next) => {
    if (req.body) cleanObject(req.body);
    if (req.query) cleanObject(req.query);
    if (req.params) cleanObject(req.params);
    next();
};
