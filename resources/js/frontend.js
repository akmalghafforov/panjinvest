import {registerConcepts} from './concepts';
import {boot} from './common';
import {registerFrontend} from './frontend/pages';
boot(Alpine => {registerFrontend(Alpine);registerConcepts(Alpine);});
