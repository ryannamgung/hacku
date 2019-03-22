import React, {Component} from 'react';
import '../stylesheets/Image.css';



class CompanyInfo extends Component{
  constructor(props){
    super(props);
    this.state = {analysis: '', loading: true}
  }

  componentWillMount(){
    let url = `http://localhost:5000/analysis?business_id=${this.props.history.location.state.businessId}`;

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
      var string3 = this.state.analysis.bar_plots[0];
      var string4 = this.state.analysis.bar_plots[1];
      return (
        <div>
        <h1>{this.props.history.location.state.name}</h1>
        <div id="image-banner">
          <img src={`data:image/jpeg;base64,${string1}`}/>
          <img src={`data:image/jpeg;base64,${string2}`}/>
          <img src={`data:image/jpeg;base64,${string3}`}/>
          <img src={`data:image/jpeg;base64,${string4}`}/>
        </div>
        </div>
      )
    }
  }
};

export default CompanyInfo;
