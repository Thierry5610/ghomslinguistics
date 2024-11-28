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

  const validatePhone = (fieldName, value) => {
    const phoneRegex = /^\+?[\d\s-]{10,}$/;
    if (!phoneRegex.test(value)) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        [fieldName]: `Invalid phone format for ${fieldName}`,
      }));
      return false;
    }
    return true;
  };

  const validateImage = (fieldName, file, options = {}) => {
    const { allowedTypes = ['image/jpeg', 'image/png', 'image/gif'], maxSizeMB = 5 } = options;

    if (!file) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        [fieldName]: `${fieldName} is required`,
      }));
      return false;
    }

    if (!file.type.startsWith('image/')) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        [fieldName]: `${fieldName} must be an image`,
      }));
      return false;
    }

    if (allowedTypes.length > 0 && !allowedTypes.includes(file.type)) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        [fieldName]: `Invalid image type for ${fieldName}. Allowed types: ${allowedTypes.join(', ')}`,
      }));
      return false;
    }

    if (file.size > maxSizeMB * 1024 * 1024) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        [fieldName]: `${fieldName} exceeds the maximum size of ${maxSizeMB}MB`,
      }));
      return false;
    }

    // Clear the error if the image is valid
    clearError(fieldName);
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
    validatePhone,
    validateImage, // Added here
    clearError,
  };
};

export default useValidation;
