import "./style.css";
import DomMethods from "./modules/dom/Dom";
import attachListeners from "./modules/dom/Drag";

attachListeners();
DomMethods.attachRandomShipListener();
DomMethods.attachResetListener();
