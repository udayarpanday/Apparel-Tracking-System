
import { invalidate, invalidateAll } from "$app/navigation";
import { apiErrorResponse } from "$lib/helper/helpers";
import { httpDelete, httpGet, httpPost, httpPut } from "$lib/helper/https";
import { fail, redirect } from "@sveltejs/kit";

let data = {
    board: {},
    task: {},
    worker: {},
};
export const load = async ({ cookies, locals }) => {
    const token = cookies.get("token");

    try {
        const board = await httpGet("api/board-categories", {
            headers: {
                authorization: token,
            },
        });
        data.worker = [];
        if(locals.user.role[0] !== 'worker'){
            const worker = await httpGet("api/worker", {
                headers: {
                    authorization: token,
                },
            });
            data.worker = worker.data.data;
        }
        data.board = board.data.data;

    } catch (error) {
        return { error: "Something went wrong" };
    }
    return { data };
};

const updateTask = async ({ cookies, request }) => {
    const token = cookies.get("token");
    const formData = await request.formData();
    const id = formData.get(`id`);
    formData.delete("id");
    try {
        const response = await httpPost(
            `api/tasks/${id}?_method=PUT`,
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
};

const createTask = async ({ cookies, request }) => {
    const token = cookies.get("token");
    const formData = await request.formData();
    try {
        const response = await httpPost("api/tasks", formData, {
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
    throw redirect(302, "/board");
};

const deleteTask = async ({ cookies, request }) => {
    const token = cookies.get("token");
    const formData = await request.formData();
    const id = formData.get(`id`);
    formData.delete("id");
    try {
        const board = await httpDelete(`api/tasks/${id}`, {
            headers: {
                authorization: token,
            },
        });
    } catch (error) {
        return { error: "Something went wrong" };
    }
    throw redirect(302, "/board");
};

const postComments = async ({ cookies,request }) => {
    const token = cookies.get("token");
    const formData = await request.formData();
    const id = formData.get(`task_id`);
    formData.delete("id");
    try {
        const comments = await httpPost(`api/tasks/${id}/comments`, formData,{
            headers: {
                authorization: token,
            },
        });
    } catch (error) {
        return { error: "Something went wrong" };
    }
    throw redirect(302, "/board");
};


const updateComment = async ({ cookies, request }) => {
    const token = cookies.get("token");
    const formData = await request.formData();
    const taskId = formData.get(`task_id`);
    const commentId = formData.get(`comment_id`);
    formData.delete("comment_id");
    try {
        const response = await httpPost(
            `api/tasks/${taskId}/comments/${commentId}?_method=PUT`,
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
};


const deleteComment = async ({ cookies, request }) => {
    const token = cookies.get("token");
    const formData = await request.formData();
    const taskId = formData.get(`task_id`);
    const commentId = formData.get(`comment_id`);
    formData.delete("task_id");
    formData.delete("comment_id");

    try {
        const deleteComment = await httpDelete(`api/tasks/${taskId}/comments/${commentId}`, {
            headers: {
                authorization: token,
            },
        });
    } catch (error) {
        return { error: "Something went wrong" };
    }
    throw redirect(302, "/board");
};



export const actions = { updateTask, deleteTask, createTask, postComments,deleteComment,updateComment };
