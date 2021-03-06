export const validateEmail = (email) => {
  const expression = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  return !expression.test(email);
};

export const validatePhone = (contactNumber) => {
  const expression = /^(\+\d{1,3}[- ]?)?\d{10}$/;
  return !expression.test(contactNumber);
};
