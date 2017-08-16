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
},  {
      path: '/hotel',
      name: 'hotelHome',
      getComponent(nextState, cb) {
        const importModules = Promise.all([
          import('containers/ReserHotel/HotelHome/reducer'),
          import('containers/ReserHotel/HotelHome/sagas'),
          import('containers/ReserHotel/HotelHome'),
        ]);

        const renderRoute = loadModule(cb);

        importModules.then(([reducer, sagas, component]) => {
          injectReducer('hotelHome', reducer.default);
          injectSagas(sagas.default);
          renderRoute(component);
        });

        importModules.catch(errorLoading);
      },
    }, {
      path: '/hotel/available',
      name: 'hotelResult',
      getComponent(nextState, cb) {
        const importModules = Promise.all([
          import('containers/ReserHotel/HotelResult/reducer'),
          import('containers/ReserHotel/HotelResult/sagas'),
          import('containers/ReserHotel/HotelResult'),
        ]);

        const renderRoute = loadModule(cb);

        importModules.then(([reducer, sagas, component]) => {
          injectReducer('hotelResult', reducer.default);
          injectSagas(sagas.default);
          renderRoute(component);
        });

        importModules.catch(errorLoading);
      },
    },

    {
     path: '/login',
     name: 'login',
     getComponent(nextState, cb) {
       const importModules = Promise.all([
         import('containers/Login/reducer'),
         import('containers/Login/sagas'),
         import('containers/Login'),
       ]);        const renderRoute = loadModule(cb);        importModules.then(([reducer, sagas, component]) => {
         injectReducer('login', reducer.default);
         injectSagas(sagas.default);
         renderRoute(component);
       });        importModules.catch(errorLoading);
     },
   },

     {



      path: '/hotel/pasarela',
      name: 'pasarela',
      getComponent(nextState, cb) {
        const importModules = Promise.all([
          import('containers/ReserHotel/Pasarela/reducer'),
          import('containers/ReserHotel/Pasarela/sagas'),
          import('containers/ReserHotel/Pasarela'),

        ]);

        const renderRoute = loadModule(cb);
        importModules.then(([reducer, sagas, component]) => {
          injectReducer('pasarela', reducer.default);
          injectSagas(sagas.default);
          renderRoute(component);
        });

        importModules.catch(errorLoading);
      },
    }, {
      path: '/hotel/quotation',
      name: 'hotelQuotation',
      getComponent(nextState, cb) {
        const importModules = Promise.all([
          import('containers/ReserHotel/HotelQuotation/reducer'),
          import('containers/ReserHotel/HotelQuotation/sagas'),
          import('containers/ReserHotel/HotelQuotation'),
        ]);

        const renderRoute = loadModule(cb);

        importModules.then(([reducer, sagas, component]) => {
          injectReducer('hotelQuotation', reducer.default);

          injectSagas(sagas.default);
          renderRoute(component);
        });

        importModules.catch(errorLoading);
      },
    }, {
      path: '/hotel/roomer',
      name: 'roomer',
      getComponent(nextState, cb) {
        const importModules = Promise.all([
          import('containers/ReserHotel/Roomer/reducer'),
          import('containers/ReserHotel/Roomer/sagas'),
          import('containers/ReserHotel/Roomer'),
        ]);

        const renderRoute = loadModule(cb);

        importModules.then(([reducer, sagas, component]) => {
          injectReducer('roomer', reducer.default);
          injectSagas(sagas.default);
          renderRoute(component);
        });

        importModules.catch(errorLoading);
      },
    }, {
      path: '/hotel/compare',
      name: 'compare',
      getComponent(nextState, cb) {
        const importModules = Promise.all([
          import('containers/ReserHotel/Compare/reducer'),
          import('containers/ReserHotel/Compare/sagas'),
          import('containers/ReserHotel/Compare'),
        ]);

        const renderRoute = loadModule(cb);

        importModules.then(([reducer, sagas, component]) => {
          injectReducer('compare', reducer.default);
          injectSagas(sagas.default);
          renderRoute(component);
        });

        importModules.catch(errorLoading);
      },
    }, {
      path: '/manzanero',
      name: 'home',
      getComponent(nextState, cb) {
        const importModules = Promise.all([
          import('containers/Events/Home/reducer'),
          import('containers/Events/Home/sagas'),
          import('containers/Events/Home'),
        ]);

        const renderRoute = loadModule(cb);

        importModules.then(([reducer, sagas, component]) => {
          injectReducer('home', reducer.default);
          injectSagas(sagas.default);
          renderRoute(component);
        });

        importModules.catch(errorLoading);
      },
    },
    {
      path: '/manzanero/admin',
      name: 'admin',
      getComponent(nextState, cb) {
        const importModules = Promise.all([
          import('containers/Events/Home/reducer'),
          import('containers/Events/Home/sagas'),
          import('containers/Events/Admin'),
        ]);

        const renderRoute = loadModule(cb);

        importModules.then(([reducer, sagas, component]) => {
          injectReducer('admin', reducer.default);
          injectSagas(sagas.default);
          renderRoute(component);
        });

        importModules.catch(errorLoading);
      },
    },
{
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
