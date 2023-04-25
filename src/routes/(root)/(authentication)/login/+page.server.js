import { apiErrorResponse } from "$lib/helper/helpers";
import { httpPost } from "$lib/helper/https";
import {fail, redirect} from "@sveltejs/kit"

export const load = async ({cookies}) => {
    const token=cookies.get('token')
    if (token) {
        throw redirect(302, '/dashboard')
    }
}

const login = async ({cookies,request}) => {
    const formData = await request.formData();
    const email = formData.get('email');
    const password = formData.get('password');

    try {
        const response = await httpPost('api/login', formData, {
            headers: {
                'Content-Type':'multipart/form-data',
            }
        });
        
        if (response.data.data) {
            const token = response.data.data.token;
            if (token) {
                cookies.set('token', `Bearer ${token}`, {
                    path: '/',
                    httpOnly: true,
                    sameSite: 'lax',
                    maxAge: 60 * 60 * 24 * 30,
                });
            }
        }
    } catch (error) {
        const apiErrors = apiErrorResponse(error);
        if (apiErrors) {
            if (error.response.data) {
                return fail(error.response.success, apiErrors)
            }
            return fail(500, apiErrors)
        }
    }
    throw redirect(302, '/dashboard')
};

const logout=async ({cookies})=>{
    const token=cookies.get('token')
    try {
        const response = await httpPost('api/logout', {},{
            headers: {
                authorization:token
            }
        });
    } catch (error) {
        const apiErrors = apiErrorResponse(error);
        if (apiErrors) {
            if (error.response.data) {
                return fail(error.response.success, apiErrors)
            }
            return fail(500, apiErrors)
        }
    }
    throw redirect(302, '/login')
}
export const actions = {login,logout}