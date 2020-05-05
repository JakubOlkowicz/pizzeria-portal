import React from 'react';
import styles from '../Events/Events.module.scss';

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

const Events = () => (
  <Card className={styles.component}>
    <CardContent align='center'>
      <Typography component='p' color='primary' gutterBottom>
      Edit Event
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
              <Typography color='secondary' gutterBottom>2</Typography>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell align='center' colSpan={3}>
              <Typography color='primary' gutterBottom>Date Events</Typography>
              <Typography color='secondary' gutterBottom>7.03.2020</Typography>
              <Typography color='secondary' gutterBottom>10:30 - 18:30</Typography>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell align='center' colSpan={3}>
              <Typography color='primary' gutterBottom>Contact</Typography>
              <Typography color='secondary' gutterBottom>+4854368443</Typography>
              <Typography color='secondary' gutterBottom>emial@email.com</Typography>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
      <Typography  color='primary'>
      Additional information
      </Typography>
      <Typography className={styles.margin} color='secondary' variant='body2' component='p'>
       Birthday 7 years old boy
      </Typography>
    </CardContent>
  </Card>
);

export default Events;