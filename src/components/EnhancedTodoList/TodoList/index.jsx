import React, { useState } from 'react';
import { Col, Row, Input, Button, Select, Tag, TimePicker, DatePicker, Space, } from 'antd';
import Todo from '../Todo';
const TodoList = () => {

    const [type, setType] = useState('time');

    const PickerWithType = ({ type, onChange }) => {
        if (type === 'time') return <TimePicker onChange={onChange} />;
        if (type === 'date') return <DatePicker onChange={onChange} />;
        return <DatePicker picker={type} onChange={onChange} />;
    }

    return (
        <Row style={{ height: 'calc(100% - 40px)' }}>
            <Col span={24} style={{ height: 'calc(100% - 80px)', overflowY: 'auto' }}>
                <Todo name='Learn React Learn React Learn React Learn React Learn React Learn React ' prioriry='High' />
                <Todo name='Learn Redux' prioriry='Medium' />
                <Todo name='Learn JavaScript' prioriry='Low' />
            </Col>
            <Col span={24}>
                <Input.Group style={{ display: 'flex' }} compact>
                    <Input />
                    <Select defaultValue="Medium">
                        <Select.Option value='High' label='High'>
                            <Tag color='red'>High</Tag>
                        </Select.Option>
                        <Select.Option value='Medium' label='Medium'>
                            <Tag color='blue'>Medium</Tag>
                        </Select.Option>
                        <Select.Option value='Low' label='Low'>
                            <Tag color='gray'>Low</Tag>
                        </Select.Option>
                    </Select>
                </Input.Group>
            </Col>
            <Col span={24}>
                <Row>
                    <Col span={12} style={{ display: 'flex' }}>
                        <Select defaultValue="time" value={type} onChange={setType}>
                            <Select.Option value="time">Time</Select.Option>
                            <Select.Option value="date">Date</Select.Option>
                            <Select.Option value="week">Week</Select.Option>
                            <Select.Option value="month">Month</Select.Option>
                        </Select>
                        <PickerWithType type={type} onChange={value => console.log(value)} />
                    </Col>
                    <Col flex="auto">
                        <Button type='primary' style={{ width: '100%' }}>
                            Add
                        </Button>

                    </Col>
                </Row>
            </Col>
        </Row>
    );
};

export default TodoList;