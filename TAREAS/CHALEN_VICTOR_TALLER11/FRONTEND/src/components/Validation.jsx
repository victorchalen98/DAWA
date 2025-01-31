function Validation(values) {
  let error = {};

  const email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const password_pattern = /^(?=.\d)(?=.[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,}$/;

  if (values.name === "") {
    error.name = "Nombre no debe estár vacio";
  } else {
    error.name = "";
  }
  
  if (values.email === "") {
    error.email = "Correo no debe estár vacio";
  }  else {
    error.email = "";
  }

  if (values.password === "") {
    error.password = "Contraseña no debe estár vacio";
  }  else {
    error.password = "";
  }
  return error;
}
export default Validation;
