import * as echarts from 'echarts'

const dom = document.getElementById('container')
const myChart = echarts.init(dom!)

const mysql = [
    2329.74,
    3415.19,
    3437.91,
    3655.44,
    3857.04,
    4175.87,
    3771.53,
    3822.0,
    3647.21,
    3796.72
]
const mariadb = [
    699.95,
    804.48,
    812.06,
    835.41,
    903.69,
    845.18,
    841.12,
    846.01,
    799.26,
    903.16
]

const max = Math.max(Math.max(...mysql), Math.max(...mariadb))

const option: echarts.EChartsOption = {
    backgroundColor: '#323a5e',
    title: {
        text: '128 线程压测下 MySQL 和 MariaDB 的 TPS 对比',
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
