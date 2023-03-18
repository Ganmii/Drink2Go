/* в этот файл добавляет скрипты*/
import { initiateBurgerButton, initiateMenu } from './modules/burger-menu.js';
import { initMap, createMap, InitLocation } from './modules/map.js';
import './modules/slider.js';

initiateMenu();
initiateBurgerButton();
initMap();
createMap(InitLocation);
