export const formValidation = (e) => {
    let error = {};

    const message = "This field is not correct";
    const conceptValue = new RegExp(/^[a-zA-Z0-9ñÑáéíóúÁÉÍÓÚ ]+$/);
    const amountValue = new RegExp(/^[0-9]+$/);
    const categoryValue = new RegExp(/^[a-zA-Z0-9ñÑáéíóúÁÉÍÓÚ ]+$/);

    if (!conceptValue.test(e.concept)) error.concept = message;
    if (!amountValue.test(e.amount)) error.amount = message;
    if (!categoryValue.test(e.category)) error.category = message;

    return error;
};
