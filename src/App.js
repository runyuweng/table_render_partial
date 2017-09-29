import React, { Component } from 'react';
import { Table } from 'antd';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);

    this.columns = [
      { title: 'Full Name', width: 150, dataIndex: 'name', key: 'name' },
      { title: 'Age', width: 150, dataIndex: 'age', key: 'age' },
      { title: 'Column 1', dataIndex: 'address', key: '1', width: 150 },
      { title: 'Column 2', dataIndex: 'address', key: '2', width: 150 },
      { title: 'Column 3', dataIndex: 'address', key: '3', width: 150 },
      { title: 'Column 4', dataIndex: 'address', key: '4', width: 150 },
      { title: 'Column 5', dataIndex: 'address', key: '5', width: 150 },
      { title: 'Column 6', dataIndex: 'address', key: '6', width: 150 },
      { title: 'Column 7', dataIndex: 'address', key: '7', width: 150 },
      { title: 'Column 8', dataIndex: 'address', key: '8', width: 150 },
      { title: 'Column 9', dataIndex: 'address', key: '9', width: 150 },
      { title: 'Column 10', dataIndex: 'address', key: '10', width: 150 },
      { title: 'Column 11', dataIndex: 'address', key: '11', width: 150 },
    ];
    
    const data = [];
    for (let i = 0; i < 1000; i++) {
      data.push({
        key: i,
        name: `Edrward ${i}`,
        age: 32,
        address: `London. ${i}`,
      });
    }

    this.state = {
      data: data
    }
  }
  render() {
    return (
      <div className="App">
        <Table
          columns={this.columns}
          rowKey={(record, index) => index}
          bordered
          scroll={{ x: this.columns.length * 150 }}
          pagination={false}
          dataSource={this.state.data}
        />
      </div>
    );
  }
}

export default App;
