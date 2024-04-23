import React from 'react';

function SignUpForm() {
    return (
        <div className="bg-gray-100 min-h-screen flex items-center justify-center">
            <div className="bg-white p-8 rounded shadow-md w-full sm:w-96">
                <h2 className="text-2xl font-semibold mb-4 text-center">Sign Up</h2>
                <form>
                    <div className="mb-4">
                        <label htmlFor="name" className="block text-gray-600 font-semibold mb-2">Name</label>
                        <input type="text" id="name" name="name" className="w-full px-4 py-2 rounded border focus:outline-none focus:border-blue-400 transition duration-300" />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-gray-600 font-semibold mb-2">Email</label>
                        <input type="email" id="email" name="email" className="w-full px-4 py-2 rounded border focus:outline-none focus:border-blue-400 transition duration-300" />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="password" className="block text-gray-600 font-semibold mb-2">Password</label>
                        <input type="password" id="password" name="password" className="w-full px-4 py-2 rounded border focus:outline-none focus:border-blue-400 transition duration-300" />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="confirm-password" className="block text-gray-600 font-semibold mb-2">Confirm Password</label>
                        <input type="password" id="confirm-password" name="confirm-password" className="w-full px-4 py-2 rounded border focus:outline-none focus:border-blue-400 transition duration-300" />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="phone" className="block text-gray-600 font-semibold mb-2">Phone</label>
                        <input type="tel" id="phone" name="phone" className="w-full px-4 py-2 rounded border focus:outline-none focus:border-blue-400 transition duration-300" />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="address" className="block text-gray-600 font-semibold mb-2">Address</label>
                        <textarea id="address" name="address" className="w-full px-4 py-2 rounded border resize-none focus:outline-none focus:border-blue-400 transition duration-300"></textarea>
                    </div>
                    <div className="mb-4">
                        <label htmlFor="city" className="block text-gray-600 font-semibold mb-2">City</label>
                        <input type="text" id="city" name="city" className="w-full px-4 py-2 rounded border focus:outline-none focus:border-blue-400 transition duration-300" />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="country" className="block text-gray-600 font-semibold mb-2">Country</label>
                        <input type="text" id="country" name="country" className="w-full px-4 py-2 rounded border focus:outline-none focus:border-blue-400 transition duration-300" />
                    </div>
                    <div className="text-center">
                        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300">Sign Up</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default SignUpForm;