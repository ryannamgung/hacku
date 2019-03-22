import React, {Component} from 'react';
import Company from './Company.js';

class Companies extends Component{
  constructor(props){
    super(props);
    this.state = {loading: true, name: this.props.location.state.name, city: this.props.location.state.city, state: this.props.location.state.state, companies: ''};
  }

  componentWillMount(){
    let url = `http://localhost:5000/business?name=${this.state.name}&city=${this.state.city}&state=${this.state.state}`;
    fetch(url).then(res => res.json()).then(data => this.setState({loading: false, companies: data}));
    // then(data => this.setState({companies: data}))
    console.log(this.state.companies);
  }


  render(){
    if(this.state.loading){
      return (<h1>Loading Company Data</h1>)
    }else{
      // debugger
      return this.state.companies.map((company) => {
        return (<Company company={company}/>)
    })


      //debugger
      // return (<h1>{company.business_name}</h1>)

      // {companyList}
    }
  }
}

export default Companies

//this.props.history.state
