import {
  BrowserRouter,
  Switch,
  Route
} from 'react-router-dom';
import './App.css';
import NotFound from './pages/NotFound/NotFound';
import Home from './pages/Home/Home/Home';
import Booking from './pages/Booking/Booking';
import Login from './pages/Login/Login/Login';
import Header from './pages/Shared/Header/Header';
import AuthProvider from './context/AuthProvider';
import PrivetRoute from './pages/Login/PrivetRoute';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Header></Header>
          <Switch>
            <Route exact path="/"><Home></Home> </Route>
            <Route path="/home"><Home></Home> </Route>
            <PrivetRoute path="/booking/:serviceId"><Booking></Booking> </PrivetRoute>
            <Route path="/login"><Login></Login> </Route>
            <Route path="*"><NotFound></NotFound> </Route>
          </Switch>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}
export default App;
