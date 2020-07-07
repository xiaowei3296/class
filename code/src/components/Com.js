import React, { PureComponent } from 'react';
export default class Cee extends PureComponent {
  state = {
    value: 1,
  };
  
  xxxx = () => {
    var a = 1;
    a = 2;
    console.log('xxxx', this.state.value);
    this.setState({
      value: 1 + this.state.value + 1,
    });
    console.log('after', this.state.value, a);
  };
  getList(){

  }
  componentDidMount(){
    this.getList()
  }
  render() {
    console.log('render', this.state.value);
    return (
      <div>
        <p>{this.state.value}</p>
        <button onClick={this.xxxx}>{this.state.value}====点击加</button>
      </div>
    );
  }
}


