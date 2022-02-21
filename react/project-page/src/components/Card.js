import React from 'react';

function Card (props) {
    return (
        <div class="flex justify-center">
            <div class="rounded-lg shadow-lg bg-white max-w-sm">
                <a href={props.demoLink} data-mdb-ripple="true" data-mdb-ripple-color="light">
                <img class="rounded-t-lg" src={props.img} alt=""/>
                </a>
            <div class="p-6">
            <h5 class="text-gray-900 text-xl font-medium mb-2">{props.title}</h5>
            <p class="text-gray-700 text-base mb-4">{props.description}
            </p>
            <a href={props.demoLink}>
            <button type="button" onClick="" class=" inline-block px-6 py-2.5 bg-violet-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-violet-700 hover:shadow-lg focus:bg-violet-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-violet-800 active:shadow-lg transition duration-150 ease-in-out">See Demo</button>
            </a>
            </div>
        </div>
    </div>
    )
};
export default Card;