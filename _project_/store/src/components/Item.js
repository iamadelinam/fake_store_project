import React from "react";
// import { DatePicker } from 'antd';
// import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'



// function Item() {
//     // const {title, price, category, description, image} = this.props;
//     return(
        

//         <article>
            
//             <div>Картинка</div>
//         </article>
//     )
// }

// export default Item;


import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import { Avatar, Card } from 'antd';
// import React from 'react';
const { Meta } = Card;

const Item = () => (
  <Card
    style={{
      width: 300,
    }}
    cover={
      <img
        alt="example"
        src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
      />
    }
    actions={[
      <SettingOutlined key="setting" />,
      <EditOutlined key="edit" />,
      <EllipsisOutlined key="ellipsis" />,
    ]}
  >
    <Meta
      avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
      title="Card title"
      description="This is the description"
    />
  </Card>
);

export default Item;