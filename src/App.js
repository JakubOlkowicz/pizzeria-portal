import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {Provider} from 'react-redux';
import store from './redux/store.js';

import MainLayout from './components/layout/MainLayout/MainLayout';
import Homepage from './components/views/Homepage/Homepage';
import Kitchen from './components/views/Kitchen/Kitchen';
import Login from './components/views/Login/Login';
import Tables from './components/views/Tables/Tables';
import Waiter from './components/views/Waiter/WaiterContainer';
import NewOrder from './components/views/NewOrder/NewOrder';
import Order from './components/views/Order/Order';
import NewBooking from './components/views/NewBooking/NewBooking';
import Booking from './components/views/Booking/Booking';
import NewEvents from './components/views/NewEvents/NewEvents';
import Events from './components/views/Events/Events';
import { StylesProvider, ThemeProvider } from '@material-ui/styles';
import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#2b4c6f',
    },
    // secondary: {
    //   main: '#11cb5f',
    // },
  },
});

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <BrowserRouter>
          <StylesProvider injectFirst>
            <ThemeProvider theme={theme}>
              <MainLayout>
                <Switch>
                  <Route exact path={`${process.env.PUBLIC_URL}/`} component={Homepage} />
                  <Route exact path={process.env.PUBLIC_URL + '/login'} component={Login} />
                  <Route exact path={process.env.PUBLIC_URL + '/kitchen'} component={Kitchen} />
                  <Route exact path={process.env.PUBLIC_URL + '/tables'} component={Tables} />
                  <Route exact path={process.env.PUBLIC_URL + '/tables/booking/new'} component = {NewBooking}/>  
                  <Route exact path={process.env.PUBLIC_URL + '/tables/booking/123'} component = {Booking}/>
                  <Route exact path={process.env.PUBLIC_URL + '/tables/events/new'} component = {NewEvents}/>  
                  <Route exact path={process.env.PUBLIC_URL + '/tables/events/123'} component = {Events}/>
                  <Route exact path={process.env.PUBLIC_URL + '/waiter'} component={Waiter} />
                  <Route exact path={process.env.PUBLIC_URL + '/waiter/order/new'} component = {NewOrder}/>  
                  <Route exact path={process.env.PUBLIC_URL + '/waiter/order/123'} component = {Order}/>
                </Switch>
              </MainLayout>
            </ThemeProvider>
          </StylesProvider>
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
