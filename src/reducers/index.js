import {combineReducers} from 'redux';
import {connectRouter} from 'connected-react-router'
import Settings from './Settings';
import Auth from './Auth';
import Category from "./Category";
import Alert from "./Alert";
import User from "./User";


export default (history) => combineReducers({
  router: connectRouter(history),
  settings: Settings,
  auth: Auth,
  category: Category,
  alert: Alert,
  users: User
});
