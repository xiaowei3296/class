import React, { PureComponent } from 'react';
import { Row, Col, Input, Button } from 'antd';
import TableList from './Components/TableList';
export default class Xiaowei extends PureComponent {
  state = {
    xiao: 'hao',
  };
  hanler = (e, val, val2) => {
    console.log('val', val, this.state.xiao);
  };
  hanlerInput = (e) => {
    console.log('input', e.target.value);
    this.setState({
      xiao: e.target.value,
    });
  };
  render() {
    const { xiao } = this.state;
    return (
      <div>
        <Row>
          <Col span={6}>
            <Input placeholder="请输入xxxx" value={xiao} onChange={this.hanlerInput} />
          </Col>
        </Row>
        <Row>
          <Col span={12}>
            <Button onClick={this.hanler.bind(this, '提交', '1111')}>提交</Button>
          </Col>
          <Col span={12}>col-12</Col>
        </Row>
        <Row>
          <Col span={24}>
            <TableList />
          </Col>
        </Row>
      </div>
    );
  }
}
