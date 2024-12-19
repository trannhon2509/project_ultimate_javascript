// Public routes
export const PUBLIC_ROUTES = {
    HOME: '/',
    ABOUT: '/about',
    CONTACT: '/contact',
    LOGIN: '/login',
    REGISTER: '/register',
    // ...other public routes
};

// Private routes
export const PRIVATE_ROUTES = {
    USER: {
        DASHBOARD: '/user/dashboard',
        PROFILE: '/user/profile',
        SETTINGS: '/user/settings',
        // ...other user routes
    },
    ADMIN: {
        DASHBOARD: '/admin/dashboard',
        USERS: '/admin/users',
        SETTINGS: '/admin/settings',
        // ...other admin routes
    },
    // ...other roles
};
