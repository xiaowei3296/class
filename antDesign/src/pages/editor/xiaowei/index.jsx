import React, { PureComponent } from 'react';
import { Row, Col } from 'antd';

export default class QualityUpload extends PureComponent {
  render() {
    return (
      <>
        <Row>
          <Col span={24}>col-100%</Col>
          <Col span={12}>col-50%</Col>
          <Col span={12}>col-50%</Col>
        </Row>
      </>
    );
  }
}
