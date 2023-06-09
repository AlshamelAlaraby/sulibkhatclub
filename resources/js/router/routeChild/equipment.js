import auth from "../../middleware/auth";
import checkAuth from "../../middleware/auth-check";

export default [
    {
        path: '/dashboard/equipment',
        name: 'equipment',
        meta: {
            middleware: [auth,checkAuth]
        },
        component: () => import('../../views/pages/equipment/index'),
    },
];
