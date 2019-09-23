var chart = document.getElementById('myChart');
var chart1 = document.getElementById('myChart1');
var chart2 = document.getElementById('myChart2');
var chart3 = document.getElementById('myChart3');

var a=new Array();
setInterval(function(){
    for(i=0;i<12;i++){
        var randvalues=(Math.floor(Math.random() * 120)+1);
        a[i]=randvalues;
        update(a);
    }
},1500)
function update(a){
var myChart = new Chart(chart, {
    type: 'line',
    data: {
        labels: ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN','JUL','AUG','SEP','OCT','NOV','DEC'],
        datasets: [{
            label: 'MONTH',
            // data: [100, 70, 90, 70, 85, 60,75,60,90,80,110,100],
            data:a,
            fill:false,
            borderColor: [
                'rgba(255, 100, 63,1)',
                'rgba(255, 100, 63,1)',
                'rgba(255, 100, 63,1)',
                'rgba(255, 100, 63,1)',
                'rgba(255, 100, 63,1)',
                'rgba(255, 100, 63,1)',
                'rgba(255, 100, 63,1)',
                'rgba(255, 100, 63,1)',
                'rgba(255, 100, 63,1)',
                'rgba(255, 100, 63,1)',
                'rgba(255, 100, 63,1)',
                'rgba(255, 100, 63,1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        legend: {
            display: false,
        },
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            yAxes: [{
                gridLines: {
                    display:false
                },
                display: true,
                ticks: {
                    beginAtZero: true,
                 
                    min: 0,
                    max: 120,
                    stepSize: 20
                }
            }]
        }
    }
});
var myChart1 = new Chart(chart1, {
    type: 'line',
    data: {
        labels: ['USA', 'GER', 'AUS', 'UK', 'RO', 'BRS'],
        datasets: [{
            label: '# of Votes',
            // data: [80, 100, 70, 80, 120, 80],
            data:a,
            fill:false,
            borderColor: [
                'rgba(208, 72, 182,1)',
                'rgba(208, 72, 182,1)',
                'rgba(208, 72, 182,1)',
                'rgba(208, 72, 182,1)',
                'rgba(208, 72, 182,1)',
                'rgba(208, 72, 182,1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        legend: {
            display: false,
        },
        scales: {
            yAxes: [{
                gridLines: {
                    display:false
                },
                display: true,
                ticks: {
                    beginAtZero: true,
                    min: 0,
                    max: 120,
                    stepSize: 20
                }
            }]
        }
    }
});

var myChart2 = new Chart(chart2, {
    type: 'bar',
    
    data: {
        labels: ['JUL','AUG','SEP','OCT','NOV','DEC'],
        datasets: [{
            label: '# of Votes',
            // data: [53, 20, 10, 80, 100, 45],
            data:a,
            fill:false,
            borderColor: [
                'rgba(31, 142, 241,0.7)',
                'rgba(31, 142, 241,0.7)',
                'rgba(31, 142, 241,0.7)',
                'rgba(31, 142, 241,0.7)',
                'rgba(31, 142, 241,0.7)',
                'rgba(31, 142, 241,0.7)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        legend: {
            display: false,
        },
        scales: {
            yAxes: [{
              
                display: true,
                ticks: {
                    beginAtZero: true,
                    min: 0,
                    max: 120,
                    stepSize: 20
                    
                }
            }]
      
        }
  
        
    }
    
    });
}
var b=new Array();
setInterval(function(){
    for(i=0;i<6;i++){
        var randvalues=(Math.floor(Math.random() * 120)+1);
        b[i]=randvalues;
        updatevalue(b);
    }
},1500)

// chart3
function updatevalue(b){
var myChart3 = new Chart(chart3, {
    type: 'line',
    data: {
        labels: ['JUL','AUG','SEP','OCT','NOV'],
        datasets: [{
            label: '# of Votes',
            // data: [90, 27, 60, 12, 80],
            data:b,
            fill:false,
            borderColor: [
            'rgba(0, 214, 180,1)',
            'rgba(0, 214, 180,1)',
            'rgba(0, 214, 180,1)',
            'rgba(0, 214, 180,1)',
            'rgba(0, 214, 180,1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        legend: {
            display: false,
        },
        scales: {
            yAxes: [{
                gridLines: {
                    display:false
                },
                display: true,
                ticks: {
                    beginAtZero: true,
                    min: 0,
                    max: 120,
                    stepSize: 20
                }
            }]
        }
    }
});




//---------------------------------------echart-------------------------------------------------//
var myChart4 = echarts.init(document.getElementById('main'));
    

var option = {
    
    tooltip: {},
   
    xAxis: {
        data: ["Jul","Aug","Sep","Oct","Nov","Dec"],
        axisLine: {
            lineStyle: {
                color: '#6c757d'
            }
        },
        axisLabel: {
            textStyle: {
                color: '#6c757d'
            }
        }  
    },
    yAxis: {
        axisLine: {
            lineStyle: {
                color: '#6c757d'
            }
        },
        axisLabel: {
            textStyle: {
                color: '#6c757d'
            }
        }   
    },
    series: [{
        itemStyle: {normal: {color: '#ff7583'}},
        // data: [25, 20, 28,30,22,27],
        data:b,
        type: 'bar'
    }]
};


myChart4.setOption(option);
}

var dom=document.getElementById('container');
var mychart=echarts.init(dom);
var app={}
options=null;

option = {
    legend: {
        textStyle: {
            color: '#6c757d'
        }
    },
    tooltip: {},
    dataset: {
        source: [
            ['product', '2012', '2013', '2014', '2015'],
            ['Matcha Latte', 41.1, 30.4, 65.1, 53.3],
            ['Milk Tea', 86.5, 92.1, 85.7, 83.1],
            ['Cheese Cocoa', 24.1, 67.2, 79.5, 86.4]
        ]
    },
    label: {
        normal: {
            textStyle: {
                fontSize: 18,
                color: '#fff'
            }
        }
    },
    xAxis: [
        {type: 'category',
         gridIndex: 0,
         axisLine: {
            lineStyle: {
                color: '#6c757d'
            }
        },
        axisLabel: {
            textStyle: {
                color: '#6c757d'
            }
        }
        },
        {type: 'category',
         gridIndex: 1,
         axisLine: {
            lineStyle: {
                color: '#6c757d'
            }
        },
        axisLabel: {
            textStyle: {
                color: '#6c757d'
            }
        }
        }
    
        
       
    ],
    yAxis: [
        {gridIndex: 0,
            axisLine: {
                lineStyle: {
                    color: '#6c757d'
                }
            },
            axisLabel: {
                textStyle: {
                    color: '#6c757d'
                }
            } 
        },
        {gridIndex: 1,
            axisLine: {
                lineStyle: {
                    color: '#6c757d'
                }
            },
            axisLabel: {
                textStyle: {
                    color: '#6c757d'
                }
            } 
        }
       
    ],
    grid: [
        {bottom: '55%'},
        {top: '55%'}
    ],
    series: [
        // These series are in the first grid.
        {type: 'bar', seriesLayoutBy: 'row'},
        {type: 'bar', seriesLayoutBy: 'row'},
        {type: 'bar', seriesLayoutBy: 'row'},
        // These series are in the second grid.
        {type: 'bar', xAxisIndex: 1, yAxisIndex: 1},
        {type: 'bar', xAxisIndex: 1, yAxisIndex: 1},
        {type: 'bar', xAxisIndex: 1, yAxisIndex: 1},
        {type: 'bar', xAxisIndex: 1, yAxisIndex: 1}
    ]
};
if(option && typeof option ==='object'){
    mychart.setOption(option,true);
}

    // based ready dom, initialize echarts instance 
	var myChart5 = echarts.init(document.getElementById('main1'));

    // Specify configurations and data graphs 
    var option = {
    
    tooltip : {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)",
        
    },
    legend: {
        orient: 'vertical',
        left: 'left',
        data: ['Direct Interview','E-Mail Marketing','Advertising Alliance','Video Ads','Search Engine'],
        textStyle: {
            color: '#6c757d'
        }
    },
    series : [
        {
            name: 'Access Sources',
            type: 'pie',
            radius : '55%',
            center: ['50%', '60%'],
            data:[
                {value:335, name:'Direct Interview'},
                {value:310, name:'E-Mail Marketing'},
                {value:234, name:'Advertising Alliance'},
                {value:135, name:'Video Ads'},
                {value:1548, name:'Search Engine'}
            ],
            // data:a,
            itemStyle: {
                emphasis: {
                    shadowBlur: 0,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0)'
                }
            }
        }
    ]
};
myChart5.setOption(option);

var myChart6 = echarts.init(document.getElementById('main2'));


var data = [
    [[28604,77,17096869,'Australia',1990],[31163,77.4,27662440,'Canada',1990],[1516,68,1154605773,'China',1990],[13670,74.7,10582082,'Cuba',1990],[28599,75,4986705,'Finland',1990],[29476,77.1,56943299,'France',1990],[31476,75.4,78958237,'Germany',1990],[28666,78.1,254830,'Iceland',1990],[1777,57.7,870601776,'India',1990],[29550,79.1,122249285,'Japan',1990],[2076,67.9,20194354,'North Korea',1990],[12087,72,42972254,'South Korea',1990],[24021,75.4,3397534,'New Zealand',1990],[43296,76.8,4240375,'Norway',1990],[10088,70.8,38195258,'Poland',1990],[19349,69.6,147568552,'Russia',1990],[10670,67.3,53994605,'Turkey',1990],[26424,75.7,57110117,'United Kingdom',1990],[37062,75.4,252847810,'United States',1990]],
    [[44056,81.8,23968973,'Australia',2015],[43294,81.7,35939927,'Canada',2015],[13334,76.9,1376048943,'China',2015],[21291,78.5,11389562,'Cuba',2015],[38923,80.8,5503457,'Finland',2015],[37599,81.9,64395345,'France',2015],[44053,81.1,80688545,'Germany',2015],[42182,82.8,329425,'Iceland',2015],[5903,66.8,1311050527,'India',2015],[36162,83.5,126573481,'Japan',2015],[1390,71.4,25155317,'North Korea',2015],[34644,80.7,50293439,'South Korea',2015],[34186,80.6,4528526,'New Zealand',2015],[64304,81.6,5210967,'Norway',2015],[24787,77.3,38611794,'Poland',2015],[23038,73.13,143456918,'Russia',2015],[19360,76.5,78665830,'Turkey',2015],[38225,81.4,64715810,'United Kingdom',2015],[53354,79.1,321773631,'United States',2015]]
];

option = {
    title: {
        text: '1990 - 2015 GDP',
        textStyle: {
            color: '#6c757d'
        }
    },
    legend: {
        right: 10,
        data: ['1990', '2015']
    },
    xAxis: {
        splitLine: {
            lineStyle: {
                type: 'dashed'
            }
        },
        axisLine: {
            lineStyle: {
                color: '#6c757d'
            }
        },
        axisLabel: {
            textStyle: {
                color: '#6c757d'
            }
        } 
    },
    yAxis: {
        splitLine: {
            lineStyle: {
                type: 'dashed'
            }
        },
        axisLine: {
            lineStyle: {
                color: '#6c757d'
            }
        },
        axisLabel: {
            textStyle: {
                color: '#6c757d'
            }
        }, 
        scale: true
    },
    series: [{
        name: '1990',
        data: data[0],
        type: 'scatter',
        symbolSize: function (data) {
            return Math.sqrt(data[2]) / 5e2;
        },
        label: {
            emphasis: {
                show: true,
                formatter: function (param) {
                    return param.data[3];
                },
                position: 'top'
            }
        },
        itemStyle: {
            normal: {
                shadowBlur: 10,
                shadowColor: 'rgba(120, 36, 50, 0.5)',
                shadowOffsetY: 5,
                color: new echarts.graphic.RadialGradient(0.4, 0.3, 1, [{
                    offset: 0,
                    color: 'rgb(251, 118, 123)'
                }, {
                    offset: 1,
                    color: 'rgb(204, 46, 72)'
                }])
            }
        }
    }, {
        name: '2015',
        data: data[1],
        type: 'scatter',
        symbolSize: function (data) {
            return Math.sqrt(data[2]) / 5e2;
        },
        label: {
            emphasis: {
                show: true,
                formatter: function (param) {
                    return param.data[3];
                },
                position: 'top'
            }
        },
        itemStyle: {
            normal: {
                shadowBlur: 10,
                shadowColor: 'rgba(25, 100, 150, 0.5)',
                shadowOffsetY: 5,
                color: new echarts.graphic.RadialGradient(0.4, 0.3, 1, [{
                    offset: 0,
                    color: 'rgb(129, 227, 238)'
                }, {
                    offset: 1,
                    color: 'rgb(25, 183, 207)'
                }])
            }
        }
    }]
};
myChart6.setOption(option);

$(document).ready(function(){
    var flag=true; 
    function display(){  
        if(flag==true)  
        {  
            var ww = $(window).width();  
            if(ww <= 768)
            $('#sideicon').click(function(){
                $('.sidebar').addClass('sidebar_active')
                
            });
            flag = false;  
        }  
        else {  
            $('#sideicon').click(function(){
                $('.sidebar').removeClass('sidebar_active')
              
            }); 
            flag = true;
            }  
        }  
        window.setInterval(display,200);
    });
    
  

