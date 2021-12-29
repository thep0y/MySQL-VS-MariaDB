import * as echarts from 'echarts'

const dom = document.getElementById('container')
const myChart = echarts.init(dom!)

const mysql = [
    1293.95,
    2418.23,
    2875.5,
    2999.85,
    3358.84,
    3504.49,
    3543.95,
    3697.42,
    3686.91,
    3675.89
]
const mariadb = [
    582.3,
    738.4,
    849.27,
    810.84,
    932.02,
    573.09,
    886.98,
    761.17,
    845.13,
    700.6
]

const max = Math.max(Math.max(...mysql), Math.max(...mariadb))

const option: echarts.EChartsOption = {
    backgroundColor: '#323a5e',
    title: {
        text: '64 线程压测下 MySQL 和 MariaDB 的 TPS 对比',
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
