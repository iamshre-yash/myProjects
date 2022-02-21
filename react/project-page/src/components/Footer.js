import React from 'react';

function Footer (props) {
    return (
        <footer class="p-4 bg-white rounded-lg shadow md:flex mb:items-center md:justify-between md:p-6">
        <span class="text-sm text-gray-500 sm:text-center">© {new Date().getFullYear()} <a href="/" class="hover:underline" target="_blank">ShreYash</a>
        </span>
        </footer>
        )
};
export default Footer;

