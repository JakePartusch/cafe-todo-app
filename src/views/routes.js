import { isAuthenticated } from 'src/core/auth';
import App from './app';
import SignIn from './pages/sign-in';
import Tasks from './pages/tasks';


export const paths = {
  ROOT: '/',
  SIGN_IN: '/sign-in',
  OPEN: '/open',
  SHIFT: '/shift',
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
