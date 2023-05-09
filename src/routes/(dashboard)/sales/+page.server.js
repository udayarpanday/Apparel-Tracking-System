import { apiErrorResponse } from "$lib/helper/helpers";
import { httpGet, httpPost } from "$lib/helper/https";
import { fail, redirect } from "@sveltejs/kit";

export const load = async ({ cookies }) => {
    let data={
        category:{},
        user:{}
    };
    const token = cookies.get("token");
    try {
        const category = await httpGet("api/categories", {
            headers: {
                authorization: token,
            },
        });
        data.category=category.data.data.map((category) => {
            return { value: category.id, label: category.name };
        });
    } catch (error) {

        return { error: "Something went wrong" };
    }
    return {data};
};


const addSalesDetails=async({cookies,request})=>{
    const token = cookies.get("token");
    const formData = await request.formData();
    try {
        const response = await httpPost("api/categorySales", formData, {
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
    throw redirect(302, "/dashboard");
}

export const actions={addSalesDetails}
