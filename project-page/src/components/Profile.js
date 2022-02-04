import React from 'react';

function Profile (props) {
    return (
        <div className="bg-white rounded-lg border border-gray-200 shadow-md ">
            <div className="flex justify-end px-4 pt-4">
        </div>
            <div className="flex flex-col items-center pb-10">
                <img className="mb-3 w-24 h-24 rounded-full shadow-lg" src="/img/shreyash.png" alt="ShreYash" />
                <h3 className="mb-1 text-xl font-medium text-gray-900">Shre Yash</h3>
                <span className="text-sm text-gray-500">Developer & Deginer</span>
                <div className="flex mt-4 space-x-3 lg:mt-6">
                    <a href="https://github.com/iamshre-yash" className="inline-flex items-center py-2 px-4 text-sm font-medium text-center text-white bg-violet-700 rounded-lg hover:bg-violet-800 focus:ring-violet-300 ">
                    GitHub
                    </a>
                    
                    <a href="mailto:iamshreyash.in@gmail.com" className="inline-flex items-center py-2 px-4 text-sm font-medium text-center text-gray-900 bg-white rounded-lg border border-gray-300 hover:bg-gray-100 focus:bg-violet-700 focus:text-white">Message</a>
            </div>
        </div>
        </div>
    )
};
export default Profile;