import React, { Component } from 'react';
import ReactDom, { render } from 'react-dom';
import { Row, Col, Input, DatePicker, Button, Table } from 'antd';

import $ from 'jquery';

// let data = [
// 	{
// 		number: '1',
// 		incomeTime: 'John Brown',
// 		serialNumber: '￥300,000.00',
// 		incomeBank: 'New York No. 1 Lake Park',
// 		incomeAccount: 'New York No. 1 Lake Park',
// 		amount: 'New York No. 1 Lake Park',
// 		balance: 'New York No. 1 Lake Park',
// 		paymentBank: 'New York No. 1 Lake Park',
// 		paymentAccount: 'New York No. 1 Lake Park',
// 		paymentAccountName: 'New York No. 1 Lake Park',
// 		remittanceType: 'New York No. 1 Lake Park',
// 		summary: 'New York No. 1 Lake Park',
// 		branch: 'New York No. 1 Lake Park',
// 		status: 'New York No. 1 Lake Park'
// 	},
// ];

const columns = [
	{
		title: '序号',
		dataIndex: 'number'
	},
	{
		title: '收款时间',
		className: 'column-money',
		dataIndex: 'incomeTime'
	},
	{
		title: '支付交易序号',
		dataIndex: 'serialNumber'
	},
	{
		title: '收款银行',
		dataIndex: 'incomeBank'
	},
	{
		title: '收款账户',
		dataIndex: 'balance'
	},
	{
		title: '收入金额',
		dataIndex: 'amount'
	},
	{
		title: '银行余额',
		dataIndex: 'paymentAccount'
	},
	{
		title: '付款银行',
		dataIndex: 'paymentBank'
	},
	{
		title: '操作',
		dataIndex: 'status'
	}
];

class Remittance extends Component {

	constructor(props){
		super(props);
		this.state = {
			data: []
		}
	}

	componentDidMount(){
		var that = this;

		$.ajax({
			url: '/remittanceDetail/findAllRemittanceDetails',
			type: 'post',
			dataType:'json',
			success: function(res){
				if(res.status == 0){
					that.setState({data: res.data.list})
					// data = res.data.list;

					that.state.data;
				}
			},
			error: function(err){

			}
		})
	}

	render(){
		return (
			<Table
				columns={columns}
				dataSource={this.state.data}
				bordered 
				size="small" />
		)
	}
}

export default Remittance;
