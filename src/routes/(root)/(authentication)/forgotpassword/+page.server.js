import { apiErrorResponse } from "$lib/helper/helpers";
import { httpPost } from "$lib/helper/https";
import { fail } from "@sveltejs/kit";

const forgotPassword = async ({ cookies, request }) => {
    const formData = await request.formData();
    try {
        const response = await httpPost("api/forgot-password", formData, {
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
};

export const actions = { forgotPassword };
