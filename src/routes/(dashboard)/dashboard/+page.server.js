import { apiErrorResponse } from "$lib/helper/helpers";
import { httpGet, httpPost } from "$lib/helper/https";
import { fail, redirect } from "@sveltejs/kit";

export const load = async ({ cookies }) => {
    let data = {
        category: {},
        dashboard:{}
    };
    const token = cookies.get("token");
    try {
        const category = await httpGet("api/categories", {
            headers: {
                authorization: token,
            },
        });

        const dashboard = await httpGet("api/dashboard", {
            headers: {
                authorization: token,
            },
        });
        data.dashboard=dashboard.data.data
        if (category) {
            data.category = category.data.data.map((category) => {
                return { value: category.id, label: category.name };
            });
        } else {
            data.category = {};
        }
    } catch (error) {
        return { error: "Something went wrong" };
    }
    return { data };
};
