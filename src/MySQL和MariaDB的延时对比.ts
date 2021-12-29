import * as echarts from 'echarts'

const dom = document.getElementById('container')
const myChart = echarts.init(dom!)

const mysql = [
    [278.99, 28.67],
    [682.89, 11.71],
    [970.53, 8.24],
    [1090.9, 7.33],
    [1156.61, 6.91],
    [1293.95, 49.46],
    [1319.91, 6.06],
    [1411.67, 5.66],
    [1560.37, 5.12],
    [1604.75, 4.98],
    [1645.07, 4.86],
    [2329.74, 54.89],
    [2418.23, 26.46],
    [2875.5, 22.25],
    [2999.85, 21.33],
    [3358.84, 19.05],
    [3415.19, 37.47],
    [3437.91, 37.23],
    [3504.49, 18.26],
    [3543.95, 18.06],
    [3647.21, 35.04],
    [3655.44, 35.01],
    [3675.89, 17.41],
    [3686.91, 17.36],
    [3697.42, 17.3],
    [3771.53, 33.9],
    [3796.72, 33.71],
    [3822.0, 33.48],
    [3857.04, 33.18],
    [4175.87, 30.65]
]

const mariadb = [
    [420.25, 19.03],
    [522.24, 15.31],
    [543.22, 14.72],
    [554.41, 14.43],
    [573.09, 111.65],
    [582.3, 109.9],
    [591.65, 13.52],
    [597.16, 13.39],
    [673.43, 11.88],
    [699.95, 182.84],
    [700.6, 91.28],
    [719.26, 11.12],
    [736.8, 10.86],
    [738.4, 86.66],
    [750.76, 10.65],
    [761.17, 84.06],
    [799.26, 160.1],
    [804.48, 158.77],
    [810.84, 78.92],
    [812.06, 157.53],
    [835.41, 153.17],
    [841.12, 152.11],
    [845.13, 75.71],
    [845.18, 151.4],
    [846.01, 151.25],
    [849.27, 75.35],
    [886.98, 72.12],
    [903.16, 141.65],
    [903.69, 141.62],
    [932.02, 68.65]
]

const option: echarts.EChartsOption = {
    backgroundColor: '#0e1c47',
    legend: {
        data: ['MySQL', 'MariaDB'],
        right: 10,
        top: 12,
        textStyle: {
            color: '#fff'
        }
    },
    toolbox: {
        feature: {
            saveAsImage: {}
        }
    },
    title: {
        text: 'MySQL和MariaDB的延时对比',
        left: 'center',
        top: '5%',
        textStyle: {
            color: '#fff'
        }
    },
    grid: {
        top: '15%'
    },
    tooltip: {
        trigger: 'axis'
    },
    xAxis: {
        type: 'value',
        boundaryGap: false,
        min: 278.99,
        max: 4175.87,
        axisLine: {
            show: true,
            lineStyle: {
                color: '#233653'
            }
        },
        axisLabel: {
            color: '#7ec7ff',
            padding: 16,
            fontSize: 14
        },
        splitLine: {
            show: true,
            lineStyle: {
                color: '#192a44'
            }
        }
    },
    yAxis: {
        type: 'value',
        min: 0,
        max: 182.84,
        splitLine: {
            show: true,
            lineStyle: {
                color: '#192a44'
            }
        },
        axisLine: {
            show: true,
            lineStyle: {
                color: '#233653'
            }
        },
        axisLabel: {
            show: true,
            color: '#7ec7ff',
            padding: 16
        }
    },
    series: [
        {
            name: 'MySQL',
            type: 'line',
            symbol: 'circle',
            showAllSymbol: true,
            symbolSize: 0,
            smooth: true,
            lineStyle: {
                width: 5,
                color: 'rgba(25,163,223,1)'
            },
            itemStyle: {
                color: 'rgba(25,163,223,1)',
                borderColor: '#646ace',
                borderWidth: 2
            },
            areaStyle: {
                //区域填充样式
                //线性渐变，前4个参数分别是x0,y0,x2,y2(范围0~1);相当于图形包围盒中的百分比。如果最后一个参数是‘true’，则该四个值是绝对像素位置。
                color: new echarts.graphic.LinearGradient(
                    0,
                    0,
                    0,
                    1,
                    [
                        {
                            offset: 0,
                            color: 'rgba(25,163,223,.3)'
                        },
                        {
                            offset: 1,
                            color: 'rgba(25,163,223, 0)'
                        }
                    ],
                    false
                ),
                shadowColor: 'rgba(25,163,223, 0.5)', //阴影颜色
                shadowBlur: 20 //shadowBlur设图形阴影的模糊大小。配合shadowColor,shadowOffsetX/Y, 设置图形的阴影效果。
            },
            data: mysql
        },
        {
            name: 'MariaDB',
            type: 'line',
            symbol: 'circle',
            showAllSymbol: true,
            symbolSize: 0,
            smooth: true,
            lineStyle: {
                width: 5,
                color: 'rgba(10,219,250,1)'
            },
            itemStyle: {
                color: 'rgba(10,219,250,1)',
                borderColor: '#646ace',
                borderWidth: 2
            },
            areaStyle: {
                //区域填充样式
                //线性渐变，前4个参数分别是x0,y0,x2,y2(范围0~1);相当于图形包围盒中的百分比。如果最后一个参数是‘true’，则该四个值是绝对像素位置。
                color: new echarts.graphic.LinearGradient(
                    0,
                    0,
                    0,
                    1,
                    [
                        {
                            offset: 0,
                            color: 'rgba(10,219,250,.3)'
                        },
                        {
                            offset: 1,
                            color: 'rgba(10,219,250, 0)'
                        }
                    ],
                    false
                ),
                shadowColor: 'rgba(10,219,250, 0.5)', //阴影颜色
                shadowBlur: 20 //shadowBlur设图形阴影的模糊大小。配合shadowColor,shadowOffsetX/Y, 设置图形的阴影效果。
            },
            data: mariadb
        }
    ]
}

myChart.setOption(option)
