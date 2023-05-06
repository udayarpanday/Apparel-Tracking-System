import { apiErrorResponse } from "$lib/helper/helpers";
import { httpGet, httpPost } from "$lib/helper/https";
import { fail, redirect } from "@sveltejs/kit";

export const load = async ({ cookies }) => {
    let data={
        category:{},
    };
    const token = cookies.get("token");
    try {
        const category = await httpGet("api/categories", {
            headers: {
                authorization: token,
            },
        });
        data.category=category.data.data
    } catch (error) {
        return { error: "Something went wrong" };
    }
    return {data};
};

