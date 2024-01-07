
import { IconDefinition } from '@fortawesome/fontawesome-common-types';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';


// Initialize Font Awesome library with the necessary icons
library.add(fas);


type AmenityIcons = Record<string, IconDefinition>;

export const amenityIcons: AmenityIcons = {
  'Queen bed': fas.faBed,
  'King bed': fas.faBed,
  'Jacuzzi': fas.faHotTub,
  'Balcony': fas.faSun,
  'Private bathroom': fas.faShower,
  'Wi-Fi' : fas.faWifi,
  'Work desk': fas.faBriefcase,
  'Spa bath' : fas.faSpa,
  'Sea view' : fas.faEye,
  'TV' : fas.faTv,
  'Shared bathroom' : fas.faShareNodes,
  'Single bed' :fas.faBed,
  'Double bed' : fas.faCheckDouble,
  'Mini fridge' : fas.faIcicles,
};