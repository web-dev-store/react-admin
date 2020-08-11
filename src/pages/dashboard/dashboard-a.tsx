/*
 * Author: ssy <286506460@qq.com>
 * Repository: https://github.com/web-dev-store/react-admin.git
 * License: MIT
 * react and antd4 template
 */

import React from 'react'
import EchartsWidget from '../../components/Echarts/EchartsWidget'
import { Col, Row, Card } from 'antd'

const DashBoardA: React.FC = () => {
	return (
		<div>
			<Row gutter={[16, 16]}>
				<Col span={8}>
					<Card hoverable>
						<EchartsWidget
							option={{
								title: {
									text: '折线图'
								},
								xAxis: {
									type: 'category',
									data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
								},
								yAxis: {
									type: 'value'
								},
								series: [
									{
										data: [820, 932, 901, 934, 1290, 1330, 1320],
										type: 'line'
									}
								]
							}}
						/>
					</Card>
				</Col>
				<Col span={8}>
					<Card hoverable>
						<EchartsWidget
							option={{
								title: {
									text: '柱形图'
								},
								xAxis: {
									type: 'category',
									data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
								},
								yAxis: {
									type: 'value'
								},
								series: [
									{
										data: [120, 200, 150, 80, 70, 110, 130],
										type: 'bar',
										showBackground: true,
										backgroundStyle: {
											color: 'rgba(220, 220, 220, 0.8)'
										}
									}
								]
							}}
						/>
					</Card>
				</Col>
				<Col span={8}>
					<Card hoverable>
						<EchartsWidget
							option={{
								title: {
									text: '饼图'
								},
								tooltip: {
									trigger: 'item',
									formatter: '{a} <br/>{b}: {c} ({d}%)'
								},
								series: [
									{
										name: '访问来源',
										type: 'pie',
										radius: ['50%', '70%'],
										avoidLabelOverlap: false,
										label: {
											show: false,
											position: 'center'
										},
										emphasis: {
											label: {
												show: true,
												fontSize: '30',
												fontWeight: 'bold'
											}
										},
										labelLine: {
											show: false
										},
										data: [
											{ value: 335, name: '直接访问' },
											{ value: 310, name: '邮件营销' },
											{ value: 234, name: '联盟广告' },
											{ value: 135, name: '视频广告' },
											{ value: 1548, name: '搜索引擎' }
										]
									}
								]
							}}
						/>
					</Card>
				</Col>
			</Row>
			<Row gutter={[16, 16]}>
				<Col span={24}>
					<Card hoverable>
						<EchartsWidget
							option={{
								title: {
									text: 'K线图'
								},
								xAxis: {
									data: ['2017-10-24', '2017-10-25', '2017-10-26', '2017-10-27']
								},
								yAxis: {},
								series: [
									{
										type: 'k',
										data: [
											[20, 30, 10, 35],
											[40, 35, 30, 55],
											[33, 38, 33, 40],
											[40, 40, 32, 42]
										]
									}
								]
							}}
						/>
					</Card>
				</Col>
			</Row>
		</div>
	)
}

export default DashBoardA
