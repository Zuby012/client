'use server'

import { redirect } from "next/navigation";
import { auth } from "../auth";
import { headers } from 'next/headers'

export const signUp = async (name:string, email:string, password:string) => {
    try{
        const result = await auth.api.signUpEmail({
            body: {
                name,
                email,
                password,
                callbackURL:" /home"
            }
        });
        return result;
    }catch(err){
        console.log(err)
        throw err
    }
}

export const signIn = async (email:string, password:string) => {
    try{
        const result = await auth.api.signInEmail({
            body: {
                email,
                password,
                callbackURL:" /home"
            }
        })

        return result;
    }catch(err){
        console.log(err)
        throw err
    }
} 

export const signInSocial = async (provider: 'github'|'google') => {
    try{
        const {url} = await auth.api.signInSocial({
            body: {
                provider,
                callbackURL:" /home"
            }
        })

        if (url) {
            redirect(url)
        }
    }catch(err){
        console.log(err)
        throw err
    }
} 

export const signOut = async () => {
    const result = await auth.api.signOut({headers: await headers() })

    return result;
} 