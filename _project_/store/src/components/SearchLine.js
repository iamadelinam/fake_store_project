// import { AudioOutlined } from '@ant-design/icons';
import { Input, Space } from 'antd';

const SearchLine = () => {
    const { Search } = Input;
  const onSearch = (value) => console.log(value); 
  return (
    <Search
      placeholder="input search text"
      allowClear
      enterButton="Search"
      size="large"
      onSearch={onSearch}
    />
  )
  
}

export default SearchLine