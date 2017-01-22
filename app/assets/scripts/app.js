import MobileMenu from './modules/mobile-menu';
import RevealOnScroll from './modules/reveal-on-scroll';
import $ from 'jquery';
import StickyHeader from './modules/sticky-header';

var mobileMenu = new MobileMenu();
new RevealOnScroll($('.feature-item'), "85%");
new RevealOnScroll($('.testimonial'), "60%");
var stickyHeader = new StickyHeader();
