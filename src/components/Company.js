import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { BrowserRouter, Link } from 'react-router-dom';
//
// const Company = (props) => {
//
//   return(
//     <div>
//     <td>{props.name}</td>
//     <td>2</td>
//     <td>Toyota</td>
//     <td>Camry</td>
//     </div>
//   )
// }
//
// export default Company
//



const styles = {
  card: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
};

function Company(props) {
  const { classes } = props;
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography variant="h5" component="h2">
          {props.company.business_name}
        </Typography>
        <Typography color="textSecondary">
          Business ID: {props.company.business_id}
        </Typography>
        <Typography component="p">
          City: {props.company.city}
        </Typography>
        <Typography component="p">
          State: {props.company.state}
        </Typography>
      </CardContent>
      <CardActions>
        <Link to={{pathname:`/company-info`, state: {businessId: props.company.business_id}}} style={{ textDecoration: 'none' }}>
          <Button size="small" >Analyze</Button>
        </Link>
      </CardActions>
    </Card>
  );
}

Company.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Company);
