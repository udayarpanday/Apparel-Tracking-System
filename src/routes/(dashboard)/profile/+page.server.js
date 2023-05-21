import { apiErrorResponse } from "$lib/helper/helpers";
import { httpPost } from "$lib/helper/https";
import { fail, redirect } from "@sveltejs/kit";

const updatePassword = async ({ cookies, request }) => {
    const token = cookies.get("token");
    const formData = await request.formData();
    const id = formData.get(`id`);
    formData.delete("id");
    try {
        const response = await httpPost(
            `api/users/${id}/password?_method=PUT`,
            formData,
            {
                headers: {
                    "Content-Type": "multipart/form-data",
                    authorization: token,
                },
            }
        );
    } catch (error) {
        const apiErrors = apiErrorResponse(error);

        if (apiErrors) {
            if (error.response.data) {
                return fail(error.response.success, apiErrors);
            }
            return fail(500, apiErrors);
        }
    }
    cookies.delete('token')
    throw redirect(302, "/login");
};

export const actions = { updatePassword };
