import { Col, Input, Radio, Row, Select, Typography } from 'antd';
import React from 'react';

const { Search } = Input;

function Filters(props) {
    return (
        <div>
            <Row justify='center'>
                <Col span={24}>
                    <Typography.Paragraph
                        style={{ fontWeight: 'bold', marginBottom: 3, marginTop: 10 }}
                    >
                        Search
                    </Typography.Paragraph>
                    <Search placeholder='input search text' />
                </Col>
                <Col sm={24}>
                    <Typography.Paragraph
                        style={{ fontWeight: 'bold', marginBottom: 3, marginTop: 10 }}
                    >
                        Filter By Status
                    </Typography.Paragraph>
                    <Radio.Group>
                        <Radio value='All'>All</Radio>
                        <Radio value='Completed'>Completed</Radio>
                        <Radio value='Todo'>To do</Radio>
                    </Radio.Group>
                </Col>
                <Col sm={24}>
                    <Typography.Paragraph
                        style={{ fontWeight: 'bold', marginBottom: 3, marginTop: 10 }}
                    >
                        Filter By Name
                    </Typography.Paragraph>
                    <Select
                        mode='multiple'
                        allowClear
                        placeholder='Please select'
                        style={{ width: '100%' }}
                    >
                        <Select.Option value='High' label='High'>
                            Jonh
                        </Select.Option>
                        <Select.Option value='Medium' label='Medium'>
                            Petter
                        </Select.Option>
                        <Select.Option value='Low' label='Low'>
                            KyPhan
                        </Select.Option>
                    </Select>
                </Col>
            </Row>
        </div>
    );
}

export default Filters;