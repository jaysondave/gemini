import {combineReducers} from 'redux';
import {connectRouter} from 'connected-react-router'
import Settings from './Settings';
import Auth from './Auth';
import Category from "./Category";
import Alert from "./Alert";
import User from "./User";
import BuildingType from "./BuildingType";
import BodyType from "./BodyType";
import Component from "./Component";
import SubComponent from "./SubComponent";
import Building from "./Building";
import Body from './Body';
import Outdoor from './Outdoor';
import Target from './Target';
import Floor from './Floor';

export default (history) => combineReducers({
  router: connectRouter(history),
  settings: Settings,
  auth: Auth,
  alert: Alert,
  users: User,
  category: Category,
  buildingType: BuildingType,
  bodyType: BodyType,
  component: Component,
  subComponent: SubComponent,
  building: Building,
  body: Body,
  outdoor: Outdoor,
  floor: Floor,
  target: Target
});
