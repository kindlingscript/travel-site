import MobileMenu from './modules/mobile-menu';
import RevealOnScroll from './modules/reveal-on-scroll';
import $ from 'jquery';
import StickyHeader from './modules/sticky-header';
import Modal from './modules/modal';

var mobileMenu = new MobileMenu();
new RevealOnScroll($('.feature-item'), "85%");
new RevealOnScroll($('.testimonial'), "60%");
var modal = new Modal();
var stickyHeader = new StickyHeader();
