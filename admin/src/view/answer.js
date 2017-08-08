import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  withRouter
} from 'react-router-dom'
import { Table, Icon, Switch, Radio, Form } from 'antd';
const FormItem = Form.Item;

// const t1 = () => 
// <div>
//   <h2>回答问题</h2>
// </div>

const columns = [{
  title: 'ID',
  dataIndex: 'key',
  key: 'key',
  width: 150,
  // render: text => <a href="#">{text}</a>,
}, {
  title: '年级',
  dataIndex: 'age',
  key: 'age',
  width: 70,
}, {
  title: '学科',
  dataIndex: 'address',
  key: 'address',
  width: 70,
}, {
  title: '问题名称',
  key: 'action',
  width: 360,
  render: (text, record) => (
    <span>
      <a href="#">Action 一 {record.name}</a>
      <span className="ant-divider" />
      <a href="#">Delete</a>
      <span className="ant-divider" />
      <a href="#" className="ant-dropdown-link">
        More actions <Icon type="down" />
      </a>
    </span>
  ),
}];

const data = [];
for (let i = 1; i <= 100; i++) {
  data.push({
    key: i,
    name: 'John Brown',
    age: i%6+1,
    address: `语文`,
    description: `问题${i}`,
  });
}
const expandedRowRender = record => <p>{record.description}</p>;
const title = () => '问题列表';
const showHeader = true;
const footer = () => 'Here is footer';

class answer extends React.Component {
  state = {
    bordered: false,
    loading: false,
    pagination: true,
    size: 'default',
    expandedRowRender,
    title,
    showHeader,
    footer,
    rowSelection: {},
    scroll: undefined,
  }

  render() {
    const state = this.state;
    return (
      <div style={{padding:20}}>
        <Table {...this.state} columns={columns} dataSource={data} />
      </div>
    )
  }
}

export default answer