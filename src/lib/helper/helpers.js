export const apiErrorResponse = (error) => {
    if (error?.response?.data) {
        return { error: error.response.data.message };
    }
    return { error:"Something Went Wrong" };
};
