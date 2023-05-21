export const apiErrorResponse = (error) => {
    if (Array.isArray(error?.response?.data.data)) {
        return { error: error?.response?.data.message };
    }
    if (error?.response?.data.data) {
        const allErrors = error.response.data.data;
        const firstError = Object.values(allErrors)[0][0];
        return { error: firstError };
    }
    return { error: error?.response?.data.message };
};
