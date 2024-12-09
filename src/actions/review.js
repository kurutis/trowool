export const addReview = (review) => {
    return {
        type: 'ADD_REVIEW',
        payload: review,
    };
};