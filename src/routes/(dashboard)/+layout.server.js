import { redirect } from "@sveltejs/kit"

export const load = async ({cookies,locals}) => {
    const token=cookies.get('token')
    if (!token) {
        throw redirect(302, '/login')
    }
    if(locals.user){
        return {user:locals.user}
    }
}
