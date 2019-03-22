import React, {Component} from 'react';

class CompanyInfo extends Component{
  constructor(props){
    super(props);
    this.state = {analysis: '', loading: true}
  }

  componentWillMount(){
    let url = `http://localhost:5000/analysis?business_id=${this.props.history.location.state.businessId}`;
    debugger

    fetch(url).then(res => res.json()).then(data => this.setState({loading: false, analysis: data}));

    //.then(data => this.setState({loading: false, analysis: data}));
    // then(data => this.setState({companies: data}))
    console.log(this.state.companies);
  }

  render(){
    if(this.state.loading){
      return <h1>Loading</h1>
    }else{
      var string1 = this.state.analysis.images[0];
      var string2 = this.state.analysis.images[1];

      return (
        <div>
        <h1>{this.state.analysis.description}</h1>
        <img src={`data:image/jpeg;base64,${string1}`}/>
        <img src={`data:image/jpeg;base64,${string2}`}/>
        </div>
      )
    }
  }
};

export default CompanyInfo;
