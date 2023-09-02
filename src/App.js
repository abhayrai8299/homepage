import { Outlet, createBrowserRouter } from 'react-router-dom';
import './App.css';
import Body from './components/Body';
import Header from './components/Header';
import store from './components/store'
import { Provider } from 'react-redux';
import User from './components/User';
function App() {
  return (
    <Provider store={store}>
         <Header />
         <Outlet />
    </Provider>
  );
}
export const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path:'/',
        element:<Body />
      },
      {
        path:'/user',
        element:<User />
      },
     
    ],
  },
],
);
