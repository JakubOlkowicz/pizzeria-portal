import React from 'react';
import styles from '../Homepage/Homepage.module.scss';

import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Typography from '@material-ui/core/Typography';

const Homepage = () => (
  <Paper className={styles.component}>
    <Table className={styles.margin}>
      <TableHead>
        <TableRow>
          <TableCell colSpan={3} align="center">
            <Typography color='primary' gutterBottom>Orders</Typography>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell></TableCell>
          <TableCell align="center">Amount</TableCell>
          <TableCell align="center">Revenue</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        <TableRow>
          <TableCell align="center">Restaurant</TableCell>
          <TableCell align="center">
            <Typography color='secondary' gutterBottom>50</Typography>
          </TableCell>
          <TableCell align="center">
            <Typography color='secondary' gutterBottom>$1234.56</Typography>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell align="center">Delivery</TableCell>
          <TableCell align="center">
            <Typography color='secondary' gutterBottom>25</Typography>
          </TableCell>
          <TableCell align="center">
            <Typography color='secondary' gutterBottom>$405.99</Typography>
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
    <Table>
      <TableHead>
        <TableRow>
          <TableCell colSpan={2} align="center">
            <Typography color='primary' gutterBottom>Reservation and Events</Typography>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell align="center">Reservation</TableCell>
          <TableCell align="center">Events</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        <TableRow>
          <TableCell align="center">
            <Typography color='secondary' gutterBottom>3</Typography>
          </TableCell>
          <TableCell align="center">
            <Typography color='secondary' gutterBottom>1</Typography>
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>

  </Paper>
);

export default Homepage;