import t1 from './../view/t1'
import t2 from './../view/t2'

export const routes = [
  { path: '/t1',
    component: t1
  },
  { path: '/t2',
    component: t2
  },
//   { path: '/t2',
//     component: t2,
//     routes: [
//       { path: '/tacos/bus',
//         component: Bus
//       },
//       { path: '/tacos/cart',
//         component: Cart
//       }
//     ]
//   }
]
export default routes