import Link from "next/link";
import React from 'react'
import Button from '../_components/Button';

const SignIn = () => {
    return (
        <div className="flex flex-col items-center justify-center h-full">
            <div className="my-4 md:w-3xl border-t border-gray-300 rounded-2xl md:rounded-4xl shadow-2xl px-5  py-5 flex flex-col items-center justify-center bg-gray-100">
                <div id="signIn-form" className="w-full">
                    <div id="form-header" className="text-center flex flex-col items-center justify-center gap-y-2">
                        <h1 className="text-2xl font-bold text-gray-800">Welcome Back to Shaine!</h1>
                        <p className="text-gray-600">Please sign in to your account to connect and trade.</p>
                    </div>
                    <form className="w-full">
                        <fieldset className="w-full p-5 flex flex-col md:flex-row items-center justify-center gap-y-5 md:gap-x-5">
                            <input
                                type="text"
                                placeholder="Username or Email"
                                className="p-2 w-full border-3 rounded-lg border-gray-500"
                            />
                            <input
                                type="password"
                                name="password"
                                id="password"
                                placeholder="Password"
                                className="p-2 w-full border-3 rounded-lg border-gray-500"
                            />
                        </fieldset>
                        <div className="w-full flex items-center justify-end gap-x-5 mt-5">
                            <Link
                                href={"#"}
                                className="text-indigo-800 hover:text-blue-500 active:text-indigo-400">
                                Forgotten Password?
                            </Link>
                        </div>
                        <Button content="Sign In" colour="bg-indigo-800" text="text-white" hoverColor="bg-indigo-700" responsiveWidth="w-full" />
                    </form>
                </div>
                <div className="w-full text-gray-500 flex flex-row items-center justify-center">
                    <p>or continue with</p>
                </div>
                <div id="otherSignIn-options" className="w-full">
                    <div id="social-sign-in" className="w-full flex flex-col md:flex-row items-center justify-center md:gap-x-5">
                        <Button content="Sign In with Google" colour="bg-red-600" text="text-white" hoverColor="bg-red-700" />
                        <Button content="Sign In with Apple" colour="bg-gray-400" text="text-black" hoverColor="bg-gray-500" />
                    </div>
                    <div id="signUp"></div>
                </div>
            </div>
        </div>
    )
}

export default SignIn   