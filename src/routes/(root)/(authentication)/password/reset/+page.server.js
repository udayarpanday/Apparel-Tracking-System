import { apiErrorResponse } from "$lib/helper/helpers";
import { httpPost } from "$lib/helper/https";
import { fail, redirect } from "@sveltejs/kit";

let email = "";
let token = "";
export const load = async ({ url }) => {
    token = url.searchParams.get("token");
    email = url.searchParams.get("email");
};

const resetPassword = async ({ url, request }) => {
    const formData = await request.formData();
    formData.set("email", email);
    formData.set("token", token);
    try {
        const response = await httpPost("api/reset-password", formData, {
            headers: {
                "Content-Type": "multipart/form-data",
            },
        });
    } catch (error) {
        const apiErrors = apiErrorResponse(error);
        if (apiErrors) {
            if (error.response.data) {
                return fail(error.response.success, apiErrors);
            }
            return fail(500, apiErrors);
        }
    }
    throw redirect(302, "/login");
};

export const actions = { resetPassword };
