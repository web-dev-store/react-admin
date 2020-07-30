/*
 * Author: ssy <286506460@qq.com>
 * Repository: https://github.com/web-dev-store/react-admin.git
 * License: MIT
 * react and antd4 template
 */

import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {
	Row,
	Col,
	Form,
	Input,
	Button,
	Cascader,
	Select,
	Divider,
	Table,
	DatePicker,
	Dropdown,
	Menu
} from 'antd'
import { DownOutlined } from '@ant-design/icons'
import './index.css'

import { query } from './actions'
import gridPageReducer from './reducer'
import { useInjectReducer } from '../../utils/injectReducer'

const Grid: React.FC = () => {
	useInjectReducer({
		key: 'gridPage',
		reducer: gridPageReducer
	})

	const [form] = Form.useForm()
	const dispatch = useDispatch()
	const gridPage = useSelector(({ gridPage }: any) => gridPage) || {}

	useEffect(() => {
		dispatch(
			query({
				queryParams: form.getFieldsValue(),
				pagination: { current: 1, pageSize: 2 }
			})
		) // eslint-disable-next-line
	}, [])

	const handleTableChange = (pagination: any) => {
		dispatch(
			query({
				queryParams: gridPage.queryParams,
				pagination: { ...pagination }
			})
		)
	}

	const handleSearch = (values: any) => {
		dispatch(
			query({
				queryParams: form.getFieldsValue(),
				pagination: { current: 1, pageSize: 2 }
			})
		)
	}

	const onReset = () => {
		form.resetFields()
	}

	const columns = [
		{
			title: 'Name',
			dataIndex: 'name'
		},
		{
			title: 'Type',
			dataIndex: 'type'
		},
		{
			title: 'Count',
			dataIndex: 'count'
		},
		{
			title: 'Country',
			dataIndex: 'country'
		},
		{
			title: 'IsHot',
			dataIndex: 'isHot'
		},
		{
			title: 'CreateTime',
			dataIndex: 'createTime'
		},
		{
			title: 'User',
			dataIndex: 'user'
		}
	]

	return (
		<div>
			<h3>Query Condition</h3>
			<Divider />
			<Row>
				<Col span={24}>
					<Form
						form={form}
						layout="inline"
						labelCol={{ flex: '80px' }}
						wrapperCol={{ flex: 'auto' }}
						onFinish={handleSearch}
					>
						<Row gutter={[0, 24]}>
							<Col span={6}>
								<Form.Item label="Name" name="name">
									<Input placeholder="input Name" />
								</Form.Item>
							</Col>
							<Col span={6}>
								<Form.Item label="Type" name="type">
									<Select placeholder="select Type">
										<Select.Option value="iPhone">iPhone</Select.Option>
										<Select.Option value="Macbook">Macbook</Select.Option>
										<Select.Option value="iWatch">iWatch</Select.Option>
									</Select>
								</Form.Item>
							</Col>
							<Col span={6}>
								<Form.Item label="Count" name="count">
									<Input placeholder="input Count" />
								</Form.Item>
							</Col>
							<Col span={6}>
								<Form.Item label="Country" name="country">
									<Cascader options={[]} placeholder="Please select" />
								</Form.Item>
							</Col>
							<Col span={6}>
								<Form.Item label="IsHot" name="isHot">
									<Select placeholder="select isHot">
										<Select.Option value="true">True</Select.Option>
										<Select.Option value="false">False</Select.Option>
									</Select>
								</Form.Item>
							</Col>
							<Col span={6}>
								<Form.Item label="User" name="user">
									<Input placeholder="input User" />
								</Form.Item>
							</Col>
							<Col span={12}>
								<Form.Item label="Time" name="time">
									<DatePicker.RangePicker />
								</Form.Item>
							</Col>
						</Row>
						<Form.Item style={{ width: '100%', textAlign: 'right' }}>
							<Button
								type="primary"
								htmlType="submit"
								style={{ marginRight: 20 }}
							>
								Search
							</Button>
							<Button htmlType="button" onClick={onReset}>
								Reset
							</Button>
						</Form.Item>
					</Form>
				</Col>
			</Row>
			<Divider />
			<Row gutter={[0, 24]} justify="end">
				<Col span={12} style={{ textAlign: 'right' }}>
					<Button type="primary" style={{ marginRight: 20 }}>
						Add
					</Button>
					<Dropdown
						overlay={
							<Menu>
								<Menu.Item key="1">Delect</Menu.Item>
								<Menu.Item key="2">Approve</Menu.Item>
							</Menu>
						}
					>
						<Button>
							Batch Actions <DownOutlined />
						</Button>
					</Dropdown>
				</Col>
			</Row>
			<Row>
				<Col span={24}>
					<Table
						columns={columns}
						dataSource={gridPage.products}
						rowKey="id"
						pagination={{
							...gridPage.pagination
						}}
						onChange={handleTableChange}
						loading={gridPage.loading}
					/>
				</Col>
			</Row>
		</div>
	)
}

export default Grid
