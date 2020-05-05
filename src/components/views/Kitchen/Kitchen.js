import React from 'react';
import styles from '../Kitchen/Kitchen.module.scss';

import Paper from '@material-ui/core/Paper';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';

const demoContent = [
  {id: '1', table: 1, order: 1},
  {id: '2', table: 2, order: 2},
  {id: '3', table: 'remote', order: 1},
  {id: '4', table: 3, order: 5},
  {id: '5', table: 'remote', order: 3},
  {id: '6', table: 4, order: 4},
];

const Kitchen = () => (
  <Paper className={styles.component}>
    <List dense>
      {demoContent.map(row => {
        return (
          <ListItem key={row.id} button>
            <ListItemText id={row.id} primary={`${row.id}`} />
            <ListItemText id={row.id} primary={`Table no. ${row.table}`} />
            <ListItemText id={row.id} primary={`Lunch no. ${row.order}`} />
            <ListItemSecondaryAction>
              <Checkbox
                edge="end"
              />
            </ListItemSecondaryAction>
          </ListItem>
        );
      })}
    </List>
  </Paper>
);

export default Kitchen;