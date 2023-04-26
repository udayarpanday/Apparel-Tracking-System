import { httpGet } from "$lib/helper/https";

export const handle = async ({ event, resolve }) => {
    const token = event.cookies.get("token");

    if (!token) {
        return resolve(event);
    }
    if (!event.locals.user) {
        try {
            const user = await httpGet("api/user", {
                headers: {
                    Authorization: token,
                },
            });
            if (user.data.data) {
                event.locals.user = user.data.data;
            }
        } catch (e) {
            if (e?.response?.data?.message === "Unauthenticated.") {
                if (token) {
                    event.cookies.delete("token", { path: "/" });
                }
            }
        }

        return resolve(event);
    }
    return resolve(event);
};
