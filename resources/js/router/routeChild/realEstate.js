import auth from "../../middleware/auth";
import checkAuth from "../../middleware/auth-check";

export default [
    {
        path: '/dashboard/realEstate/unitstatus',
        name: 'realEstate-unitstatus',
        meta: {
            middleware: [auth,checkAuth]
        },
        component: () => import('../../views/pages/realEstate/unit-status'),
    },
    {
        path: '/dashboard/realEstate/admin-report',
        name: 'admin-report',
        meta: {
            middleware: [auth,checkAuth]
        },
        component: () => import('../../views/pages/realEstate/admin-report'),
    },
    {
        path: '/dashboard/realEstate/unsold-unit-report',
        name: 'unsold-unit-report',
        meta: {
            middleware: [auth,checkAuth]
        },
        component: () => import('../../views/pages/realEstate/unsold-unit-report'),
    },
    
    {
        path: '/dashboard/realEstate/contract',
        name: 'realEstate-contract',
        meta: {
            middleware: [auth,checkAuth]
        },
        component: () => import('../../views/pages/realEstate/contract'),
    },
    {
        path: '/dashboard/realEstate/invoice',
        name: 'realEstate-invoice',
        meta: {
            middleware: [auth,checkAuth]
        },
        component: () => import('../../views/pages/realEstate/invoice'),
    },
    {
        path: '/dashboard/realEstate/building-wallet',
        name: 'realEstate-building-wallet',
        meta: {
            middleware: [auth,checkAuth]
        },
        component: () => import('../../views/pages/realEstate/building-wallet'),
    },
    {
        path: '/dashboard/realEstate/contractunit',
        name: 'realEstate-contractunit',
        meta: {
            middleware: [auth,checkAuth]
        },
        component: () => import('../../views/pages/realEstate/contractunit'),
    },
    {
        path: '/dashboard/realEstate/owner',
        name: 'realEstate-owner',
        meta: {
            middleware: [auth,checkAuth]
        },
        component: () => import('../../views/pages/realEstate/owner'),
    },
    {
        path: '/dashboard/realEstate/building',
        name: 'realEstate-building',
        meta: {
            middleware: [auth,checkAuth]
        },
        component: () => import('../../views/pages/realEstate/building'),
    },
    {
        path: '/dashboard/realEstate/wallet',
        name: 'realEstate-wallet',
        meta: {
            middleware: [auth,checkAuth]
        },
        component: () => import('../../views/pages/realEstate/wallet'),
    },
    {
        path: '/dashboard/realEstate/wallet-owner',
        name: 'realEstate-wallet-owner',
        meta: {
            middleware: [auth,checkAuth]
        },
        component: () => import('../../views/pages/realEstate/walletOwner'),
    },
    {
        path: '/dashboard/realEstate/unit',
        name: 'realEstate-wallet-owner',
        meta: {
            middleware: [auth,checkAuth]
        },
        component: () => import('../../views/pages/realEstate/unit'),
    },
    {
        path: '/dashboard/realEstate/reservation',
        name: 'realEstate-reservation',
        meta: {
            middleware: [auth,checkAuth]
        },
        component: () => import('../../views/pages/realEstate/reservation'),
    },
    {
        path: '/dashboard/realEstate/category',
        name: 'realEstate-category',
        meta: {
            middleware: [auth,checkAuth]
        },
        component: () => import('../../views/pages/realEstate/item-category'),
    },
    {
        path: '/dashboard/realEstate/item',
        name: 'realEstate-item',
        meta: {
            middleware: [auth,checkAuth]
        },
        component: () => import('../../views/pages/realEstate/item'),
    },
    {
        path: '/dashboard/realEstate/invoice',
        name: 'realEstate-invoice',
        meta: {
            middleware: [auth,checkAuth]
        },
        component: () => import('../../views/pages/realEstate/invoice'),
    },
];
