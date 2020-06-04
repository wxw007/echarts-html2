$(document).ready(function () {
    init()
});

function init() {
    tabClick1()
    tabClick2()
    setTimeout(chartInit, 300)
    setTimeout(datePickerInit, 100)
}

// 点击切换tab1
function tabClick1() {
    $('.js-tab1').click(function () {
        $(this).addClass('active').siblings().removeClass('active')
        alert('切换了111111')
    })
}

// 点击切换tab2
function tabClick2() {
    $('.js-tab2').click(function () {
        $(this).addClass('active').siblings().removeClass('active')
        alert('切换了22222')
    })
}

// 时间选择器初始化
function datePickerInit() {
    var datepicker = $(".ys-datetimepicker").find("input[name=certDate]").datetimepicker({
        format: "yyyy-mm-dd",
        todayBtn: "linked",
        startView: 2,
        minView: 2,
        autoclose: true,
        language: "zh-CN",
    }).on('changeDate', function (e) {});
}

// 开业率/签约率 图表
function makeChart1() {
    let optionData = {
        grid: {
            x: 50,
            y: 20,
            x2: 0,
            y2: 20
        },

        xAxis: [{
            axisTick: { //刻度线
                show: false
            },
            splitLine: { //网格线
                show: false
            },
            axisLine: {
                show: false
            },
            axisLabel: {
                show: true,
                textStyle: {
                    color: '#7D7E80', //更改坐标轴文字颜色
                    fontSize: 12, //更改坐标轴文字大小
                    fontFamily: 'oswald-regular'
                }
            },
            type: 'category',
            data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月']
        }],

        yAxis: [{
            axisTick: { //刻度线
                show: false
            },

            splitLine: {
                show: true,
                lineStyle: {
                    color: '#13294E',
                    width: 1,
                    type: 'solid'
                }
            },
            axisLine: {
                show: false
            },
            axisLabel: {
                show: true,
                textStyle: {
                    color: '#7D7E80', //更改坐标轴文字颜色
                    fontSize: 14, //更改坐标轴文字大小
                    fontFamily: 'oswald-regular'
                },
                formatter: '{value}%'
            },
            axisLine: {
                show: false,

            },

            type: 'value',
        }],
        series: [{
                symbol: "none",
                type: 'line',
                data: [50,30,60,66,90,50,77,50,40,55,33,22],
                lineStyle: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: '#FAD961'
                    }, {
                        offset: 1,
                        color: '#F76B1C'
                    }]), //改变折线颜色
                },
                smooth: true,
            },
            {
                symbol: "none",
                type: 'line',
                data: [88,33,55,41,66,55,44,99,88,78,66,88],
                lineStyle: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: '#00FFC7'
                    }, {
                        offset: 1,
                        color: '#4930EF'
                    }]), //改变折线颜色
                },
                smooth: true,
            },
            {
                symbol: "none",
                type: 'line',
                data: [99,88,55,77,33,55,44,33,77,66,99,11],
                lineStyle: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: '#7BD43C'
                    }, {
                        offset: 1,
                        color: '#D2FE2E'
                    }]), //改变折线颜色
                },
                smooth: true,
            },
        ]
    };

    // 基于准备好的dom，初始化echarts实例
    var chart = echarts.init(document.getElementById('chart1'));
    // 绘制图表
    chart.setOption(optionData)
}

// 客流 图表
function makeChart2() {
    let optionData = {
        grid: {
            x: 50,
            y: 20,
            x2: 0,
            y2: 20
        },

        xAxis: [{
            "axisTick": { //y轴刻度线
                "show": false
            },
            "splitLine": { //网格线
                "show": false
            },
            "axisLine": {
                "show": false

            },
            axisLabel: {
                show: true,
                textStyle: {
                    color: '#7D7E80', //更改坐标轴文字颜色
                    fontSize: 12, //更改坐标轴文字大小
                    fontFamily: 'oswald-regular'
                }
            },
            type: 'category',
            data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月']
        }],

        yAxis: [{
            axisTick: { //刻度线
                show: false
            },

            splitLine: {
                show: true,
                lineStyle: {
                    color: '#13294E',
                    width: 1,
                    type: 'solid'
                }
            },
            axisLine: {
                show: false
            },
            axisLabel: {
                show: true,
                textStyle: {
                    color: '#7D7E80', //更改坐标轴文字颜色
                    fontSize: 12, //更改坐标轴文字大小
                    fontFamily: 'oswald-regular'
                }
            },
            axisLine: {
                show: false,

            },

            type: 'value',
            data: ['20', '40', '60', '80', '100']
        }],
        series: [{
                symbol: "none",
                type: 'line',
                data: [10, 20, 30, 40, 50, 60, 70, 80, 10, 20, 30, 40],
                lineStyle: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: '#7BD43C'
                    }, {
                        offset: 1,
                        color: '#D2FE2E'
                    }]), //改变折线颜色
                },
                smooth: true,
            },
            {
                data: [60, 30, 50, 70, 80, 30, 70, 50, 90, 20, 30, 50],
                type: 'bar',
                itemStyle: {
                    normal: {
                        //柱形图圆角，初始化效果
                        barBorderRadius: [50, 50, 0, 0],
                        color: new echarts.graphic.LinearGradient(
                            0, 0, 0, 1,
                            [{
                                    offset: 0,
                                    color: '#2597db'
                                }, //柱图渐变色
                                {
                                    offset: 1,
                                    color: '#00fdc7'
                                },
                            ]
                        )
                    },
                    emphasis: {
                        color: new echarts.graphic.LinearGradient(
                            0, 0, 0, 1,
                            [{
                                    offset: 0,
                                    color: '#4930EF'
                                }, //柱图渐变色
                                {
                                    offset: 0.5,
                                    color: '#00FFC7'
                                },
                                {
                                    offset: 1,
                                    color: '#00FFC7'
                                },
                            ]
                        )
                    }
                },
                barWidth: 5,
                barGap: '0%'
            }

        ]
    };

    // 基于准备好的dom，初始化echarts实例
    var chart = echarts.init(document.getElementById('chart2'));
    // 绘制图表
    chart.setOption(optionData)
}

// 预算达成率 图表
function makeChart3() {
    let optionData = {
        grid: {
            x: 50,
            y: 20,
            x2: 0,
            y2: 20
        },

        xAxis: [{
            "axisTick": { //y轴刻度线
                "show": false
            },
            "splitLine": { //网格线
                "show": false
            },
            "axisLine": {
                "show": false

            },
            axisLabel: {
                show: true,
                textStyle: {
                    color: '#7D7E80', //更改坐标轴文字颜色
                    fontSize: 12, //更改坐标轴文字大小
                    fontFamily: 'oswald-regular'
                }
            },
            type: 'category',
            data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月']
        }],

        yAxis: [{
            axisTick: { //刻度线
                show: false
            },

            splitLine: {
                show: true,
                lineStyle: {
                    color: '#13294E',
                    width: 1,
                    type: 'solid'
                }
            },
            axisLine: {
                show: false
            },
            axisLabel: {
                show: true,
                textStyle: {
                    color: '#7D7E80', //更改坐标轴文字颜色
                    fontSize: 12, //更改坐标轴文字大小
                    fontFamily: 'oswald-regular'
                },
                formatter: '{value}%'

            },
            axisLine: {
                show: false,

            },

            type: 'value',
        }],
        series: [{
                data: [55,77,33,77,99,88,33,22,55,77,44,88],
                type: 'bar',
                stack: '柱状图',
                itemStyle: {
                    normal: {
                        //柱形图圆角，初始化效果
                        barBorderRadius: [0, 0, 0, 0],
                        color: 'rgba(210,254,46,1)'
                    },
                },
                barWidth: 5,
                barGap: '0%'
            },
            {
                data: [0.4, 0.2, 0.6, 0.4, 0.9, 0.3, 0.5, 0.6, 0.4, 0.9, 0.3, 0.5],
                type: 'bar',
                stack: '柱状图',
                itemStyle: {
                    normal: {
                        //柱形图圆角，初始化效果
                        barBorderRadius: [50, 50, 0, 0],
                        color: function (params) {
                            var color1 = '#67b031', //绿色
                                color2 = '#db394b'; //红色
                            var colorList = [];
                            for (var i = 0; i < 12; i++) {
                                if (i === 7) {

                                    colorList.push(color2)
                                } else {
                                    colorList.push(color1)
                                }
                            }
                            return colorList[params.dataIndex];
                        }

                    },
                },
                barWidth: 5,
                barGap: '0%'
            }

        ]
    };

    // 基于准备好的dom，初始化echarts实例
    var chart = echarts.init(document.getElementById('chart3'));
    // 绘制图表
    chart.setOption(optionData)
}

// 收缴率 图表
function makeChart4() {
    let optionData = {
        grid: {
            x: 50,
            y: 20,
            x2: 0,
            y2: 20
        },

        xAxis: [{
            "axisTick": { //y轴刻度线
                "show": false
            },
            "splitLine": { //网格线
                "show": false
            },
            "axisLine": {
                "show": false

            },
            axisLabel: {
                show: true,
                textStyle: {
                    color: '#7D7E80', //更改坐标轴文字颜色
                    fontSize: 12, //更改坐标轴文字大小
                    fontFamily: 'oswald-regular'
                }
            },
            type: 'category',
            data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月']
        }],

        yAxis: [{
            axisTick: { //刻度线
                show: false
            },

            splitLine: {
                show: true,
                lineStyle: {
                    color: '#13294E',
                    width: 1,
                    type: 'solid'
                }
            },
            axisLine: {
                show: false
            },
            axisLabel: {
                show: true,
                textStyle: {
                    color: '#7D7E80', //更改坐标轴文字颜色
                    fontSize: 12, //更改坐标轴文字大小
                    fontFamily: 'oswald-regular'
                },
                formatter: '{value}%'

            },
            axisLine: {
                show: false,

            },

            type: 'value',
        }],
        series: [{
                data: [66,55,88,33,44,88,99,44,77,22,88,55],
                type: 'bar',
                itemStyle: {
                    normal: {
                        //柱形图圆角，初始化效果
                        barBorderRadius: [50, 50, 0, 0],
                        color: new echarts.graphic.LinearGradient(
                            0, 0, 0, 1,
                            [{
                                    offset: 0,
                                    color: '#2597db'
                                }, //柱图渐变色
                                {
                                    offset: 1,
                                    color: '#00fdc7'
                                },
                            ]
                        )
                    },
                },

                barWidth: 5,
                barGap: '50%'
            },
            {
                data: [0.4, 0.2, 0.6, 0.4, 0.9, 0.3, 0.5, 0.6, 0.4, 0.9, 0.3, 0.5],
                type: 'bar',
                itemStyle: {
                    normal: {
                        //柱形图圆角，初始化效果
                        barBorderRadius: [50, 50, 0, 0],

                        color: new echarts.graphic.LinearGradient(
                            0, 0, 0, 1,
                            [{
                                    offset: 0,
                                    color: '#95e038'
                                }, //柱图渐变色

                                {
                                    offset: 1,
                                    color: '#cffd2e'
                                },
                            ]
                        )

                    },
                },
                barWidth: 5,
                barGap: '50%'
            }

        ]
    };

    // 基于准备好的dom，初始化echarts实例
    var chart = echarts.init(document.getElementById('chart4'));
    // 绘制图表
    chart.setOption(optionData)
}

// 押不抵租 图表
function makeChart5() {
    var chart5 = echarts.init(document.getElementById('chart5'));

    var ringOptions = {
        graphic: [{ //环形图中间添加文字
            type: 'text', //通过不同top值可以设置上下显示
            left: 'center',
            top: '42%',
            style: {
                text: '180%',
                textAlign: 'center',
                fill: '#fff', //文字的颜色
                width: 30,
                height: 30,
                fontSize: 18,
                fontFamily: "Microsoft YaHei"
            }
        }],
        series: [{
            hoverAnimation: false,
            clickable: false,
            name: '访问来源',
            type: 'pie',
            radius: ['90%', '100%'],
            avoidLabelOverlap: false,
            label: {
                normal: {
                    show: false,
                    position: 'center'
                },
                emphasis: {
                    show: true,
                    textStyle: {
                        fontSize: '18',
                    }
                }
            },
            labelLine: {
                normal: {
                    show: false
                }
            },
            data: [{
                value: 335,
                name: ''
            }, ]
        }]
    };
    chart5.setOption(ringOptions);
}

// 图表初始化
function chartInit() {
    makeChart1()
    makeChart2()
    makeChart3()
    makeChart4()
    makeChart5()
}