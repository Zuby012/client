'use client'
import Link from "next/link";
import Button from '../_components/Button';
import React, { useState } from 'react';
import { emitter } from "next/client";
import { signInSocial, signUp } from "@/lib/actions/auth-actions";
import { useRouter } from "next/navigation";

const ClientPage = () => {

    const router = useRouter()

    const [username, setUsername] = useState("");
    const [usernameError, setUsernameError] = useState("")

    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [firstnameError, setFirstnameError] = useState("");
    const [lastnameError, setLastnameError] = useState("");

    const [email, setEmail] = useState("");
    const [emailError, setEmailError] = useState("");

    const [password, setPassword] = useState("");
    const [conPassword, setConPassword] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [conPasswordError, setConPasswordError] = useState("");

    const [isLoading, setIsLoading] = useState<boolean>(false)

    const [submitError, setSubmitError] = useState("")

    //username validation
    const validateUsername = (e: React.ChangeEvent<HTMLInputElement>): void => {

        const value = e.target.value;
        setUsername(value);

        const validate = (value: string) => {
            const trimmed = value.trim();

            if (!trimmed) {
                return 'Username is required';
            }

            if (trimmed.length < 3) {
                return 'Username must be at least 3 characters';
            }

            if (trimmed.length > 20) {
                return 'Username must be at most 20 characters';
            }

            if (!/^[a-zA-Z0-9_]+$/.test(trimmed)) {
                return 'Only letters, numbers, and underscores are allowed';
            }

            return '';
        }

        setUsernameError(validate(value));
    }

    //first and last name validation
    const validateFirstLastName = (e: React.ChangeEvent<HTMLInputElement>): void => {
        const { name, value } = e.target;

        const validate = (value: string) => {
            const trimmed = value.trim();

            if (!trimmed) {
                return 'This name is required';
            }

            if (trimmed.length < 3) {
                return 'Name must be at least 3 characters';
            }

            if (trimmed.length > 20) {
                return 'Name must be at most 15 characters';
            }

            if (!/^[a-zA-Z]+$/.test(trimmed)) {
                return 'Only letters are allowed';
            }

            return '';
        }

        if (name === "firstName") {
            setFirstname(value)
            setFirstnameError(validate(value))
        } else if (name === 'lastName') {
            setLastname(value)
            setLastnameError(validate(value))
        }
    }

    //validate email
    const validateEmail = (e: React.ChangeEvent<HTMLInputElement>): void => {
        const { value } = e.target;
        setEmail(value)

        const validate = (value: string) => {
            const trimmed = value.trim();

            if (!trimmed) {
                return 'Email is required';
            }

            if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(trimmed)) {
                return 'Invalid Email';
            }

            return '';
        }

        setEmailError(validate(value));
    }

    //validate passwords
    const validatePassword = (e: React.ChangeEvent<HTMLInputElement>): void => {
        const { name, value } = e.target;

        const validate = (value: string) => {
            const trimmed = value.trim();

            if (name === 'confirmPassword') {
                if (trimmed !== password) {
                    return 'Passwords do not match'
                }
            }

            if (!trimmed) {
                return 'password is required';
            }

            if (trimmed.length < 6) {
                return 'password must be at least 6 characters';
            }

            if (trimmed.length > 15) {
                return 'Username must be at most 15 characters';
            }

            if (!/^(?=.*[a-zA-Z])(?=.*\d)(?=.*[^a-zA-Z\d\s]).+$/.test(trimmed)) {
                return 'must contain atleast an alphabet, a number and a symbol';
            }

            return '';
        }

        if (name === 'confirmPassword') {
            setConPassword(value);
            setConPasswordError(validate(value))
        } else if (name === 'password') {
            setPassword(value)
            setPasswordError(validate(value))
        }
    }
    //handle social auth
    const handleSocialAuth = async (provider: 'github' | 'google', e?: React.MouseEventHandler) => {
        setIsLoading(true)
        setSubmitError('')

        try {
            await signInSocial(provider)
        } catch (err) {
            if (err instanceof Error) {
                if (err.message === 'NEXT_REDIRECT') {
                    setSubmitError('')
                } else {
                    setSubmitError(
                        `Failed to login account: ${err.message}`
                    )
                }
            }
        } finally {
            setIsLoading(false)
        }
        return
    }

    //general validation
    const formSubmit = async (e: React.SubmitEvent) => {
        e.preventDefault()
        setIsLoading(true)

        if (usernameError || firstnameError || lastnameError || emailError || passwordError || conPasswordError) {
            setSubmitError("Every fieid has to be valid!")
            return
        }

        try {
            const result = await signUp(username, email, password)

            if (!result.user) {
                setSubmitError('Failed to create account')
            } else {
                router.push('/home')
            }
        } catch (err) {
            if (err instanceof Error) {
                setSubmitError(
                    `Failed to create account: ${err.message}`
                )
            } else {
                setSubmitError(
                    `Failed to create account: Try again later`
                )
            }
            console.log(err)
        } finally {
            setIsLoading(false)
        }
    }

    return (
        <div className="flex justify-center">
            <div className="my-4 md:w-3xl border-t border-gray-300 rounded-2xl md:rounded-4xl shadow-2xl px-5  py-5 flex flex-col items-center justify-center bg-gray-100">
                <div id="signIn-form" className="w-full flex flex-col items-center justify-center gap-y-5">
                    <div id="form-header" className="text-center flex flex-col items-center justify-center gap-y-2">
                        <h1 className="text-2xl font-bold text-gray-800">Create an Account</h1>
                    </div>
                    <form onSubmit={formSubmit} className="w-full flex flex-col items-center justify-center">
                        <fieldset className="w-full p-5 flex flex-col md:flex-row md:flex-wrap items-center justify-center gap-y-5 md:gap-x-5">
                            <div className="w-full md:w-60 flex flex-col items-center justify-center">
                                <input
                                    type="text"
                                    placeholder="Username"
                                    name="username"
                                    required
                                    className="p-2 w-full md:w-60 border-3 rounded-lg border-gray-500"
                                    onChange={validateUsername}
                                />
                                <p className="text-red-500">{usernameError}</p>
                            </div>
                            <div className="w-full md:w-60 flex flex-col items-center justify-center">
                                <input
                                    type="text"
                                    placeholder="First Name"
                                    name="firstName"
                                    required
                                    className="p-2 w-full md:w-60 border-3 rounded-lg border-gray-500"
                                    onChange={validateFirstLastName}
                                />
                                <p className="text-red-500">{firstnameError}</p>
                            </div>
                            <div className="w-full md:w-60 flex flex-col items-center justify-center">
                                <input
                                    type="text"
                                    placeholder="Last Name"
                                    name="lastName"
                                    required
                                    className="p-2 w-full md:w-60 border-3 rounded-lg border-gray-500"
                                    onChange={validateFirstLastName}
                                />
                                <p className="text-red-500">{lastnameError}</p>
                            </div>
                            <div className="w-full md:w-60 flex flex-col items-center justify-center">
                                <input
                                    type="email"
                                    placeholder="Email"
                                    name="email"
                                    required
                                    className="p-2 w-full md:w-60 border-3 rounded-lg border-gray-500"
                                    onChange={validateEmail}
                                />
                                <p className="text-red-500">{emailError}</p>
                            </div>
                            <div className="w-full md:w-60 flex flex-col items-center justify-center">
                                <input
                                    type="password"
                                    placeholder="Password"
                                    name="password"
                                    required
                                    className="p-2 w-full md:w-60 border-3 rounded-lg border-gray-500"
                                    onChange={validatePassword}
                                />
                                <p className="text-red-500">{passwordError}</p>
                            </div>
                            <div className="w-full md:w-60 flex flex-col items-center justify-center">
                                <input
                                    type="password"
                                    placeholder="Confirm Password"
                                    name="confirmPassword"
                                    required
                                    className="p-2 w-full md:w-60 border-3 rounded-lg border-gray-500"
                                    onChange={validatePassword}
                                />
                                <p className="text-red-500">{conPasswordError}</p>
                            </div>
                        </fieldset>
                        {submitError && (<p className="text-red-500 font-bold">{submitError}</p>)}
                        <div className="w-full flex items-center justify-end gap-x-5 mt-5">
                            <Link
                                href={"/v1/sign-in"}
                                className="text-indigo-800 hover:text-blue-500 active:text-indigo-400">
                                Already have an account? Sign In
                            </Link>
                        </div>
                        <Button content="Sign Up" colour="bg-indigo-800" text="text-white" hoverColor="bg-indigo-700" responsiveWidth="w-full" />
                    </form>
                </div>
                <div className="w-full text-gray-500 flex flex-row items-center justify-center">
                    <p>or continue with</p>
                </div>
                <div id="otherSignIn-options" className="w-full">
                    <div id="social-sign-in" className="w-full flex flex-col md:flex-row items-center justify-center md:gap-x-5">
                        <Button content="Sign Up with Google" colour="bg-red-600" text="text-white" hoverColor="bg-red-700" />
                        <button onClick={() => { void handleSocialAuth('github') }} className={`w-full p-2 rounded-md bg-gray-400 text-black hover:bg-gray-600 active:bg-indigo-400`}>
                            Sign Up with GitHub
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default ClientPage