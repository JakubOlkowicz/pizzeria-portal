import React from 'react';
import styles from '../NewBooking/NewBooking.module.scss';

import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import AddIcon from '@material-ui/icons/Add';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

const NewBooking = () => (
  <Card className={styles.component}>
    <CardContent align='center'>
      <Typography component='p' color='primary' gutterBottom>
      Add New Booking
        <CardActions >
          <Button className={styles.btn} size='small'>
            <AddIcon />
          </Button>
        </CardActions>
      </Typography>
      <Table className={styles.margin}>
        <TableBody>
          <TableRow>
            <TableCell align='center'>
              <Typography className={styles.typography} color='secondary' gutterBottom>Table no.</Typography>
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
            <TableCell align='center'>
              <Typography className={styles.typography} color='secondary' gutterBottom>Day and Time</Typography>
              <form noValidate>
                <TextField
                  id="date"
                  label="Chose date"
                  type="date"
                  defaultValue="2020-03-07"
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </form>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell align='center' colSpan={3}>Information</TableCell>
          </TableRow>
          <TableRow>
            <TableCell align='center' colSpan={3}>
              <form noValidate>
                <TextField
                  id='standard-multiline-static'
                  label='Details'
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
    </CardContent>
  </Card>);

export default NewBooking;