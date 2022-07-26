
import { Tooltip } from 'antd';
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import { Avatar, Card } from 'antd';
import React from 'react';
const { Meta } = Card;

const Item = (props) => {
  let desk = props.id.description 
  if (desk.length >= 100) {
   desk = desk.slice(0, 100) 
   desk += "..."
  }

  const Tooltip = () => (
    <Tooltip title="prompt text">
      <span>{props.id.description}</span>
    </Tooltip>
  ); 


return (
<Card
  style={{
    width: 300,
  }}
  cover={
    <img
      alt="example"
      src={props.id.image}
    />
  }
  actions={[
    <SettingOutlined key="setting" />,
    <EditOutlined key="edit" />,
    <EllipsisOutlined key="ellipsis" />,
  ]}
>
  <Meta
    // avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
    title={props.id.title}
    description={<Tooltip />}
    // onMouseEnter={}
  />
</Card>
)
  
}

export default Item;