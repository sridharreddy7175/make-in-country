import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './modules/layout/Home';
import Navbar from './modules/layout/Navbar';
import About from './modules/layout/About';
import Signup from './modules/users/Signup';
import Signin from './modules/users/Signin';
import Apps from './modules/apps/Apps';
import UserDashboard from './modules/users/UserDashboard';
import AdminDashboard from './modules/admin/AdminDashboard';
import CreateApps from './modules/admin/CreateApps';
import CreateCategory from './modules/admin/CreateCategory';
import ManageCategories from './modules/admin/ManageCategories';
import UpdateCategory from './modules/admin/UpdateCategory';
import ManageApps from './modules/admin/ManageApps';
import UpdateApps from './modules/admin/UpdateApps';
import EditUserProfile from './modules/users/EditUserProfile';

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/signup">
            <Signup />
          </Route>
          <Route path="/signin">
            <Signin />
          </Route>
          <Route path="/apps">
            <Apps />
          </Route>
          <Route path="/user/dashboard">
            <UserDashboard />
          </Route>
          <Route path="/user/edit-profile">
            <EditUserProfile />
          </Route>
          <Route path="/admin/dashboard">
            <AdminDashboard />
          </Route>
          <Route path="/admin/create/app">
            <CreateApps />
          </Route>
          <Route exact path="/admin/app/update/:id">
            <UpdateApps />
          </Route>
          <Route path="/admin/create/category">
            <CreateCategory />
          </Route>
          <Route path="/admin/categories">
            <ManageCategories />
          </Route>
          <Route exact path="/admin/category/update/:id">
            <UpdateCategory />
          </Route>
          <Route exact path="/admin/apps">
            <ManageApps />
          </Route>
        </Switch>
      </Router>

    </div>
  );
}

export default App;
