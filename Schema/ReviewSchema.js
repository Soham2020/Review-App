import * as yup from 'yup';

const ReviewSchema = yup.object({
    title: yup.string()
        .required()
        .min(4),
    body: yup.string()
        .required()
        .min(8),
    rating: yup.string()
        .required()
        .test( 'is-num-1 - 5', 'rating must be less than 6', (val) => {
            return parseInt(val) > 0 && parseInt(val) < 6
        })
});

export default ReviewSchema;