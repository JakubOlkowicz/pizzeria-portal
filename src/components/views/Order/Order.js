import React from 'react';
import styles from '../Order/Order.module.scss';

import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import EditIcon from '@material-ui/icons/Edit';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

const Order = () => (
  <Card className={styles.component}>
    <CardContent align='center'>
      <Typography component='p' color='primary' gutterBottom>
        Edit Order
        <CardActions>
          <Button className={styles.btn} size='small'>
            <EditIcon />
          </Button>
        </CardActions>
      </Typography>
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
              <Typography color='secondary' gutterBottom>2</Typography>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell align='center' colSpan={3}>Order</TableCell>
          </TableRow>
          <TableRow>
            <TableCell align='center' colSpan={3}>
              <Typography color='secondary' gutterBottom>Nonna Albas Pizza, Nonno Albertos Salad</Typography>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
      <Typography  color='primary'>
        Additional information
      </Typography>
      <Typography className={styles.margin} color='textSecondary' variant='body2' component='p'>
        well meaning and kindly.
      </Typography>
      <Typography color='primary' variant='body2' component='p'>
        Amount:
      </Typography>
      <Typography color='primary' variant='body2' component='p'>
        $1253,35
      </Typography>
    </CardContent>
  </Card>
);

export default Order;