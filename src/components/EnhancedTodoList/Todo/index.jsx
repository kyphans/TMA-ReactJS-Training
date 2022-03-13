import React, { useState } from 'react';
import { Row, Tag, Checkbox, Col, Typography } from 'antd';


const priorityColorMapping = {
    High: 'red',
    Medium: 'blue',
    Low: 'gray',
};

const Todo = (props) => {
    const [checked, setChecked] = useState(false);
    const { name, prioriry } = props
    const { Text } = Typography;

    const toggleCheckbox = () => {
        setChecked(!checked);
    };
    return (
        <Row
            justify='space-between'
            style={{
                marginBottom: 3,
                ...(checked ? { opacity: 0.5, textDecoration: 'line-through' } : {}),
            }}
        >
            <Col span={16}>
                <Checkbox checked={checked} onChange={toggleCheckbox}>
                    <Text strong>{name}</Text>

                </Checkbox>

            </Col>
            <Col span={4}>
                <Text italic>14:00:00</Text>
            </Col>
            <Col span={4}>
                <Tag color={priorityColorMapping[prioriry]} style={{ margin: 0 }}>
                    {prioriry}
                </Tag>
            </Col>
        </Row>
    );
};

export default Todo;