import { useState } from 'react';

const useValidation = () => {
  const [errors, setErrors] = useState({});

  const validateEmpty = (fieldName, value) => {
    if (!value.trim()) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        [fieldName]: `${fieldName} is required`,
      }));
      return false;
    }
    return true;
  };

  const validateNumber = (fieldName, value) => {
    if (!value || value <= 0) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        [fieldName]: `Please enter a valid number for ${fieldName}`,
      }));
      return false;
    }
    return true;
  };

  const validateEmail = (fieldName, value) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(value)) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        [fieldName]: `Please enter a valid email for ${fieldName}`,
      }));
      return false;
    }
    return true;
  };

  const clearError = (fieldName) => {
    setErrors((prevErrors) => {
      const newErrors = { ...prevErrors };
      delete newErrors[fieldName];
      return newErrors;
    });
  };

  return {
    errors,
    validateEmpty,
    validateNumber,
    validateEmail,
    clearError,
  };
};

export default useValidation;
