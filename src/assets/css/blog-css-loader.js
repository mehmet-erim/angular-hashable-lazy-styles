import blogStyles from './blog.css';

const styleElement = document.createElement('style');
styleElement.textContent = blogStyles;
document.head.appendChild(styleElement);
