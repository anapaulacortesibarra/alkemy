export const formValidation = (e) => {
    let error = {};

    const message = "This field is not correct";
    const conceptValue = new RegExp(/^[a-zA-Z0-9ñÑáéíóúÁÉÍÓÚ ]+$/);
    const amountValue = new RegExp(/^[0-9]+$/);

    if (!conceptValue.test(e.concept)) error.concept = message;
    if (!amountValue.test(e.amount)) error.amount = message;

    if (Object.keys(error).length > 0) return error;
    else return null;
};
