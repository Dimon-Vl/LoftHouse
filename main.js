import './style.scss';
import header from './components/header.html';
import features from './components/features.html';
import apartments from './components/apartments.html';
import sectionCta from './components/sectionCta.html';

document.querySelector('#app').innerHTML = header + features + apartments + sectionCta;
