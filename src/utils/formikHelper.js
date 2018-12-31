export default {
  setErrors(formik, errorMessages) {
    formik.setErrors(this.convertMessagesToErrors(errorMessages));
  },

  convertMessagesToErrors(errorMessages) {
    const errors = {};
    errorMessages.forEach(errorMessage => {
      errors[errorMessage.field] = errorMessage.message;
    });
    return errors;
  },
};
