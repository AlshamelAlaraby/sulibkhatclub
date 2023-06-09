import auth from "../../middleware/auth";
import checkAuth from "../../middleware/auth-check";

export default [
    {
        path: '/dashboard/statuses',
        name: 'statuses',
        meta: {
            middleware: [auth,checkAuth]
        },
        component: () => import('../../views/pages/statuses/index'),
    }
];
