import * as echarts from 'echarts'

const dom = document.getElementById('container')
const myChart = echarts.init(dom!)

const mysql = [
    278.99,
    682.89,
    970.53,
    1319.91,
    1411.67,
    1090.9,
    1560.37,
    1604.75,
    1645.07,
    1156.61
]
const mariadb = [
    420.25,
    522.24,
    591.65,
    719.26,
    554.41,
    736.8,
    597.16,
    543.22,
    673.43,
    750.76
]

const max = Math.max(Math.max(...mysql), Math.max(...mariadb))

const option: echarts.EChartsOption = {
    backgroundColor: '#323a5e',
    title: {
        text: '8 线程压测下 MySQL 和 MariaDB 的 TPS 对比',
        left: 'center',
        top: '5%',
        textStyle: {
            color: '#fff'
        }
    },
    toolbox: {
        feature: {
            saveAsImage: {}
        }
    },
    grid: {
        top: '15%'
    },
    legend: {
        data: ['MySQL', 'MariaDB'],
        right: 10,
        top: 12,
        textStyle: {
            color: '#fff'
        }
    },
    xAxis: {
        type: 'category',
        axisLabel: {
            formatter: (_: string, index: number) => {
                return `第 ${index + 1} 次`
            }
        }
    },
    yAxis: {
        type: 'value',
        max: Math.floor(max),
        axisLabel: {
            color: '#fff'
        },
        axisLine: {
            show: false
        },
        splitLine: {
            show: true,
            lineStyle: {
                color: 'rgba(255,255,255,0.3)'
            }
        }
    },
    series: [
        {
            name: 'MySQL',
            type: 'bar',
            barWidth: 13,
            itemStyle: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                    {
                        offset: 0,
                        color: '#fccb05'
                    },
                    {
                        offset: 1,
                        color: '#f5804d'
                    }
                ]),
                borderRadius: 12
            },
            data: mysql
        },
        {
            name: 'MariaDB',
            type: 'bar',
            barWidth: 13,
            itemStyle: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                    {
                        offset: 0,
                        color: '#8bd46e'
                    },
                    {
                        offset: 1,
                        color: '#09bcb7'
                    }
                ]),
                borderRadius: 12
            },
            data: mariadb
        }
    ]
}

myChart.setOption(option)
