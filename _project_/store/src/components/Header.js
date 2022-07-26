import {PageHeader} from 'antd'
// import { AudioOutlined } from '@ant-design/icons';
import { Input, Space } from 'antd';

const Header = () => {

  // const { Search } = Input;
  // const onSearch = (value) => console.log(value);
  return (
    <>
    <PageHeader title="FakeStore"/>
    {/* <Search
      placeholder="input search text"
      allowClear
      enterButton="Search"
      size="large"
      onSearch={onSearch}
    /> */}
    </>
    
  )
}


export default Header 
// import React from 'react';
// const { Search } = Input;
// const suffix = (
//   <AudioOutlined
//     style={{
//       fontSize: 16,
//       color: '#1890ff',
//     }}
//   />
// );

// const onSearch = (value) => console.log(value);

// const App = () => (
//   <Space direction="vertical">
//     <Search
//       placeholder="input search text"
//       onSearch={onSearch}
//       style={{
//         width: 200,
//       }}
//     />
//     <Search
//       placeholder="input search text"
//       allowClear
//       onSearch={onSearch}
//       style={{
//         width: 200,
//       }}
//     />
//     <Search
//       addonBefore="https://"
//       placeholder="input search text"
//       allowClear
//       onSearch={onSearch}
//       style={{
//         width: 304,
//       }}
//     />
//     <Search placeholder="input search text" onSearch={onSearch} enterButton />
//     <Search
//       placeholder="input search text"
//       allowClear
//       enterButton="Search"
//       size="large"
//       onSearch={onSearch}
//     />
//     <Search
//       placeholder="input search text"
//       enterButton="Search"
//       size="large"
//       suffix={suffix}
//       onSearch={onSearch}
//     />
//   </Space>
// );


