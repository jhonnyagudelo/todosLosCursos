import { React } from "react";
import { useForm } from '../../hooks'
import { Button, Grid, Link, TextField, Typography } from "@mui/material";
import { AuthLayout } from "../layout/AuthLayout";
import { Link as RouterLink } from "react-router-dom";
import { Google } from "@mui/icons-material";

const LoginPage = ({}) => {

  const { email, password, onInputChange } = useForm({ email:'admin@gmail.com', password:'123456'})
  
  const onSubmit = (e) => {
    e.preventDefault();
    console.log({ email, password});
  }

  const onGoogleSignIn = () => {
      console.log('onGoogle')
  }

  return (
    <>
      <AuthLayout title="login">
        <form onSubmit={ onSubmit}>
          <Grid container>
            <Grid item xs={12} sx={{ mt: 2 }}>
              <TextField
                label="Correo"
                type="text"
                placeholder="correo"
                fullWidth
                name="email"
                value={ email}
                onChange={onInputChange}
              />
            </Grid>
            <Grid item xs={12} sx={{ mt: 2 }}>
              <TextField
                label="Password"
                type="password"
                placeholder="contraseña"
                fullWidth
                name="password"
                value={ password }
                onChange={onInputChange}
              />
            </Grid>
            <Grid container spacing={2} sx={{ mb: 2, mt: 1 }}>
              <Grid item xs={12} sm={6}>
                <Button type="submit" variant="contained" fullWidth>
                  Login
                </Button>
              </Grid>

              <Grid item xs={12} sm={6}>
                <Button onClick={onGoogleSignIn} variant="contained" fullWidth>
                  <Google />
                  <Typography sx={{ ml: 1 }}>Google</Typography>
                </Button>
              </Grid>
            </Grid>
            <Grid container direction="row" justifyContent="end">
              <Link component={RouterLink} color="inherit" to="/auth/register">
                Crear cuenta
              </Link>
            </Grid>
          </Grid>
        </form>
      </AuthLayout>
    </>
  );
};

export { LoginPage };
