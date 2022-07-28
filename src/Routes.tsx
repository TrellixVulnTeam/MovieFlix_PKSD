import { Switch, Route, BrowserRouter} from 'react-router-dom';
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Movies from './pages/Movies';

const Routes = () => {
    return(
        <BrowserRouter>
            <Navbar/>
            <Switch>
                <Route path="/" exact>
                    <Home />
                </Route>
                <Route path="/movies">
                    <Movies />
                </Route>
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;