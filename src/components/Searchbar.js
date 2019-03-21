import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import { MuiThemeProvider, createMuiTheme, withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing.unit*11,
    marginRight: theme.spacing.unit*11,
  },
  dense: {
    marginTop: 16,
  },
  menu: {
    width: 200,
  },
});

const theme = createMuiTheme({
  typography: {
    useNextVariants: true,
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    body1: {
      fontStyle: 'italic'
    },
  },
});

class Searchbar extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      name: '',
      city: '',
      state: '',
      companies: '',
    };

    this.serverIP = "10.67.28.180:5000";
  }


  handleChange = name => event => {
    if(event.target.id == "company-name"){
      this.setState({
        name: event.target.value,
      });
    }else if(event.target.id == "city"){
      this.setState({
        city: event.target.value,
      });
    }else{
      this.setState({
        state: event.target.value,
      });
    }
    console.log(this.state.name)
  };

  handleClick = (e) => {
    let url = {serverIP} + "/" + {this.state.name} + "/" + {this.state.city} + "/" + {this.state.state};
    fetch(url).then(res => res.json()).then(data => this.setState({companies: data}))
    debugger

    console.log(this.state.companies)

    e.preventDefault();
  }

  render() {
    const { classes } = this.props;
    // debugger
    return (
      <div>
      <br/>
      <Typography variant="subtitle1">Fill out the search fields for a list of companies and their reviews.</Typography>

      <form className={classes.container} noValidate autoComplete="on">
        <TextField
          id="company-name"
          label="Company Name"
          className={classes.textField}
          value={this.state.name}
          onChange={this.handleChange('name')}
          helperText="ex. ToysRUs"
        />

        <TextField
          id="city"
          label="City"
          className={classes.textField}
          onChange={this.handleChange('name')}
          helperText="ex. Richmond"
        />

        <TextField
          id="state"
          label="State"
          className={classes.textField}
          onChange={this.handleChange('name')}
          helperText="ex. Virginia"
        />
        <Button variant="outlined" color="primary" className={classes.button} onClick={this.handleClick}>
          Find Companies
        </Button>
      </form>
      </div>
    );
  }
}

Searchbar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Searchbar);
