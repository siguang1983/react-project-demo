import React, { Component } from 'react';
import ReactDom, { render } from 'react-dom';
import echarts from 'echarts';

class AccountManagement extends Component {

    constructor(props) {
        super(props);
        this.state = {

        }
    }

    componentDidMount(){
        this.chartsRender();
    }

    chartsRender(){
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('chartData'));

        // 指定图表的配置项和数据
        var option = {
            title: {
                text: 'Echarts可视化数据图表'
            },
            tooltip: {},
            legend: {
                data:['销量']
            },
            xAxis: {
                data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
            },
            yAxis: {},
            series: [{
                name: '销量',
                type: 'bar',
                data: [5, 20, 36, 10, 10, 20]
            }]
        };

        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
    }

    render() {
        return (
            <div>
                <h2 style={{paddingBottom: '30px'}}>展示数据列表</h2>
                <div id="chartData" style={{dipslay: 'flex', height: '500px'}} ></div>
            </div>
        );
    }
}

export default AccountManagement;