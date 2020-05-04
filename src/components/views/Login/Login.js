import React from 'react';
import styles from '../Login/Login.module.scss';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';

const Login = () => (
  <Paper className={styles.component}>
    <TextField
      id="outlined-required"
      label="User Name"
      variant="outlined"
    />
    <TextField
      id="outlined-password-input"
      label="Password"
      type="password"
      autoComplete="current-password"
      variant="outlined"
    />
    <Button 
      variant='contained' 
      color='primary'
      className={styles.button}
      href='/panel'
    >
      Log In
    </Button>
  </Paper>
);

export default Login;