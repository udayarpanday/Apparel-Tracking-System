import { apiErrorResponse } from "$lib/helper/helpers";
import { httpDelete, httpGet, httpPost } from "$lib/helper/https";
import { fail, redirect } from "@sveltejs/kit";

export const load = async ({ cookies }) => {
    const token = cookies.get("token");
    try {
        const { data } = await httpGet("api/worker", {
            headers: {
                authorization: token,
            },
        });
        return { data: data.data };
    } catch (error) {
        return { error: "Something went wrong" };
    }
};

const registerUser = async ({ cookies, request }) => {
    const token = cookies.get("token");
    const formData = await request.formData();
    try {
        const response = await httpPost("api/worker-register", formData, {
            headers: {
                "Content-Type": "multipart/form-data",
                authorization: token,
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
    throw redirect(302, "/worker-list");
};

const updateUser = async ({ cookies, request }) => {
    const token = cookies.get("token");
    const formData = await request.formData();
    const id = formData.get(`id`);
    formData.delete("id");
    try {
        const response = await httpPost(
            `api/users/${id}?_method=PUT`,
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
    throw redirect(302, "/worker-list");
};

const deleteUser = async ({ cookies, request }) => {
    const token = cookies.get("token");
    const formData = await request.formData();
    const id = formData.get(`id`);
    formData.delete("id");
    try {
        const response = await httpDelete(`api/users/${id}`, {
            headers: {
                "Content-Type": "multipart/form-data",
                authorization: token,
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
    throw redirect(302, "/worker-list");
};

export const actions = { registerUser, deleteUser, updateUser };
