import { isAuthenticated } from 'src/core/auth';
import App from './app';
import SignIn from './pages/sign-in';
import Tasks from './pages/tasks';


export const paths = {
  ROOT: '/',
  SIGN_IN: '/sign-in',
  OPEN: '/open',
  SHIFT: '/shift',
  SHIFT2: '/shift #2',
  SHIFT3: '/shift #3',
  PEPSI_FOUNTAIN: '/pepsi fountain',
  DISPLAY_COOLER: '/display cooler',
  REFRIGERATOR: '/refrigerator',
  BACK_COOLER: '/back cooler',
  ESPRESSO_MACHINE: '/espresso machine',
  MANAGEMENT: '/management',
  CLOSE: '/close'
};


const requireAuth = getState => {
  return (nextState, replace) => {
    if (!isAuthenticated(getState())) {
      replace(paths.SIGN_IN);
    }
  };
};

const requireUnauth = getState => {
  return (nextState, replace) => {
    if (isAuthenticated(getState())) {
      replace(paths.OPEN);
    }
  };
};


export const getRoutes = getState => {
  return {
    path: paths.ROOT,
    component: App,
    childRoutes: [
      {
        indexRoute: {
          component: Tasks,
          onEnter: requireAuth(getState)
        }
      },
      {
        name: 'OPEN',
        path: paths.OPEN,
        component: Tasks,
        onEnter: requireAuth(getState)
      },
      {
        name: 'SHIFT',
        path: paths.SHIFT,
        component: Tasks,
        onEnter: requireAuth(getState)
      },
      {
        name: 'SHIFT #2',
        path: paths.SHIFT2,
        component: Tasks,
        onEnter: requireAuth(getState)
      },
      {
        name: 'SHIFT #3',
        path: paths.SHIFT3,
        component: Tasks,
        onEnter: requireAuth(getState)
      },
      {
        name: 'PEPSI FOUNTAIN',
        path: paths.PEPSI_FOUNTAIN,
        component: Tasks,
        onEnter: requireAuth(getState)
      },
      {
        name: 'DISPLAY COOLER',
        path: paths.DISPLAY_COOLER,
        component: Tasks,
        onEnter: requireAuth(getState)
      },
      {
        name: 'REFRIGERATOR',
        path: paths.REFRIGERATOR,
        component: Tasks,
        onEnter: requireAuth(getState)
      },
      {
        name: 'BACK COOLER',
        path: paths.BACK_COOLER,
        component: Tasks,
        onEnter: requireAuth(getState)
      },
      {
        name: 'ESPRESSO MACHINE',
        path: paths.ESPRESSO_MACHINE,
        component: Tasks,
        onEnter: requireAuth(getState)
      },
      {
        name: 'MANAGEMENT',
        path: paths.MANAGEMENT,
        component: Tasks,
        onEnter: requireAuth(getState)
      },
      {
        name: 'CLOSE',
        path: paths.CLOSE,
        component: Tasks,
        onEnter: requireAuth(getState)
      },
      {
        path: paths.SIGN_IN,
        component: SignIn,
        onEnter: requireUnauth(getState)
      }
    ]
  };
};
