import * as Yup from 'yup';

export const handleErrorsYup = (err, setError) => {
  const validationErrors = {};
  if (err instanceof Yup.ValidationError) {
    err.inner.forEach((error) => {
      validationErrors[error.path] = error.message;
    });
    setError(validationErrors);
  } else {
    console.info("Error desconocido");
    console.error(err.message);
    console.error(err);
  }
}