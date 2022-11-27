import {
  Container,
  Box,
  Button,
  TextField,
} from "@mui/material";
import { useState } from "react";
import { post } from "../../services";
import Swal from "sweetalert2";

export const Login = () => {
  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const handleInputChange = (e) =>{
    const {name,value} = e.target;
    setValues({
        ...values,
        [name]:value,
    });
  }

  const handleSubmit = async (e) =>{
    e.preventDefault();

    const response = await post("users/login",values);

    if(response.ok){
        Swal.fire({
            text:"Usuario logueado correctamente",
            icon:"succes"
        });
    }else{
        Swal.fire({
            text:"Error",
            icon:"error",
        });
    }
  };
  return (
    <Container>
      <Box p={3} component="form" onSubmit={handleSubmit} method="post">
        <h3>Login</h3>
        <TextField
          id="outlined-basic"
          name="email"
          value={values.email}
          onChange={handleInputChange}
          label="Email"
          size="small"
          variant="outlined"
        />
        <hr />
        <TextField
          name="password"
          value={values.password}
          onChange={handleInputChange}
          id="outlined-basic"
          label="password"
          size="small"
          variant="outlined"
        />
        <Box my={2}>
          <Button type="submit" size="large" variant="contained">
            Iniciar Sesion
          </Button>
        </Box>
      </Box>
    </Container>
  );
};
export default Login;
