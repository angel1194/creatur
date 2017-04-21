// These are the pages you can go to.
// They are all wrapped in the App component, which should contain the navbar etc
// See http://blog.mxstbr.com/2016/01/react-apps-with-pages for more information
// about the code splitting business
import { getAsyncInjectors } from 'utils/asyncInjectors';

const errorLoading = (err) => {
  console.error('Dynamic page loading failed', err); // eslint-disable-line no-console
};

const loadModule = (cb) => (componentModule) => {
  cb(null, componentModule.default);
};

export default function createRoutes(store) {
  // Create reusable async injectors using getAsyncInjectors factory
  const { injectReducer, injectSagas } = getAsyncInjectors(store); // eslint-disable-line no-unused-vars

  return [
    {
      path: '/',
      name: 'homePage',
      getComponent(nextState, cb) {
        const importModules = Promise.all([
          import('containers/RentCar/HomePage/reducer'),
          import('containers/RentCar/HomePage/sagas'),
          import('containers/RentCar/HomePage'),
        ]);

        const renderRoute = loadModule(cb);

        importModules.then(([reducer, sagas, component]) => {
          injectReducer('homePage', reducer.default);
          injectSagas(sagas.default);
          renderRoute(component);
        });

        importModules.catch(errorLoading);
      },
    }, {
      path: '/available',
      name: 'available',
      getComponent(nextState, cb) {
        const importModules = Promise.all([
          import('containers/RentCar/Available/reducer'),
          import('containers/RentCar/Available/sagas'),
          import('containers/RentCar/Available'),
        ]);

        const renderRoute = loadModule(cb);

        importModules.then(([reducer, sagas, component]) => {
          injectReducer('available', reducer.default);
          injectSagas(sagas.default);
          renderRoute(component);
        });

        importModules.catch(errorLoading);
      },
    }, {
      path: '/quotation',
      name: 'quotation',
      getComponent(nextState, cb) {
        const importModules = Promise.all([
          import('containers/RentCar/Quotation/reducer'),
          import('containers/RentCar/Quotation/sagas'),
          import('containers/RentCar/Quotation'),
        ]);

        const renderRoute = loadModule(cb);

        importModules.then(([reducer, sagas, component]) => {
          injectReducer('quotation', reducer.default);
          injectSagas(sagas.default);
          renderRoute(component);
        });

        importModules.catch(errorLoading);
      },
    }, {
      path: '/reserve/:carId',
      name: 'reserve',
      getComponent(nextState, cb) {
        const importModules = Promise.all([
          import('containers/RentCar/Reserve/reducer'),
          import('containers/RentCar/Reserve/sagas'),
          import('containers/RentCar/Reserve'),
        ]);

        const renderRoute = loadModule(cb);

        importModules.then(([reducer, sagas, component]) => {
          injectReducer('reserve', reducer.default);
          injectSagas(sagas.default);
          renderRoute(component);
        });

        importModules.catch(errorLoading);
      },
    }, {
      path: '/reserve-list',
      name: 'reserveList',
      getComponent(nextState, cb) {
        const importModules = Promise.all([
          import('containers/RentCar/ReserveList/reducer'),
          import('containers/RentCar/ReserveList/sagas'),
          import('containers/RentCar/ReserveList'),
        ]);

        const renderRoute = loadModule(cb);

        importModules.then(([reducer, sagas, component]) => {
          injectReducer('reserveList', reducer.default);
          injectSagas(sagas.default);
          renderRoute(component);
        });

        importModules.catch(errorLoading);
      },
    }, {
      path: '*',
      name: 'notfound',
      getComponent(nextState, cb) {
        import('containers/NotFoundPage')
          .then(loadModule(cb))
          .catch(errorLoading);
      },
    },
  ];
}
