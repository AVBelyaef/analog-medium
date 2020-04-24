import Vue from 'vue';
import Buefy from 'buefy';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faAngleRight,
  faAngleLeft,
  faCheck,
  faExclamationCircle,
  faEye,
  faEyeSlash,
  faHandsWash,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import 'buefy/dist/buefy.css';

library.add(
  faAngleRight,
  faAngleLeft,
  faCheck,
  faExclamationCircle,
  faEye,
  faEyeSlash,
  faHandsWash
);

Vue.use(Buefy, {
  defaultIconComponent: 'vue-fontawesome',
  defaultIconPack: 'fas',
});

Vue.component('vue-fontawesome', FontAwesomeIcon);
