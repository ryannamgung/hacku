import React, {Component} from 'react';

class CompanyInfo extends Component{
  constructor(props){
    super(props);
    this.state = {companyInfo: '', loading: true}
  }

  componentWillMount(){
    let url = `http://localhost:5000/analysis?business_id=${this.props.history.location.state.business_id}`;
    fetch(url).then(res => res.json()).then(data => this.setState({loading: false, companyInfo: data}));
    // then(data => this.setState({companies: data}))
    console.log(this.state.companies);
  }

  render(){
    if(this.state.loading){
      return <h1>Loading</h1>
    }else{
      return <h1>Hellllooooo its working</h1>
    }
  }
};

export default CompanyInfo;
