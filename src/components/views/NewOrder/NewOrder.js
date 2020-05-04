import React from 'react';
import styles from '../NewOrder/NewOrder.module.scss';

import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import AddIcon from '@material-ui/icons/Add';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

const NewOrder = () => (
  <Card>
    <CardContent align='center'>
      <Typography color='primary' gutterBottom>
      Add New Order
      </Typography>
      <CardActions >
        <Button className={styles.btn} size='small'><AddIcon /></Button>
      </CardActions>
      <Table className={styles.margin}>
        <TableHead>
          <TableRow>
            <TableCell align='center'>
              <Typography color='primary' gutterBottom>Table no.</Typography>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell align='center'>
              <FormControl>
                <Select
                >
                  <MenuItem value={1}>One</MenuItem>
                  <MenuItem value={2}>Two</MenuItem>
                  <MenuItem value={3}>Three</MenuItem>
                </Select>
              </FormControl>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell align='center' colSpan={3}>Order</TableCell>
          </TableRow>
          <TableRow>
            <TableCell align='center' colSpan={3}>
              <form noValidate>
                <TextField
                  id='standard-multiline-static'
                  label='Meal'
                  multiline
                  rows={4}
                />
              </form>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
      <form noValidate className={styles.margin}>
        <TextField
          id='standard-multiline-static'
          label='Additional information'
          multiline
          rows={4}
        />
      </form>
      <Typography color='primary' variant='body2' component='p'>
        Amount:
      </Typography>
      <Typography color='primary' variant='body2' component='p'>
        $0.0
      </Typography>
    </CardContent>
  </Card>
);

export default NewOrder;