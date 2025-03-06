
function generateRandomColor() {
    var r = Math.floor(Math.random() * 256); // 随机生成0-255之间的红色分量
    var g = Math.floor(Math.random() * 256); // 随机生成0-255之间的绿色分量
    var b = Math.floor(Math.random() * 256); // 随机生成0-255之间的蓝色分量
    var a = 0.2; // 设置透明度
    return `rgba(${r}, ${g}, ${b}, ${a})`; // 返回生成的颜色字符串
}

if (document.getElementById('myBarChart')){
    var bar = document.getElementById('myBarChart').getContext('2d');
    var tagList = document.querySelector('.tagclouddata .tag-list');
    var tagListItems = tagList.querySelectorAll('.tag-list-item');

    var myColors = [];
    var mylabels = [];
    var mydata = [];

    tagListItems.forEach(function(item) {
        // 获取每个 tag-list-item 下的 tag-list-link
        var link = item.querySelector('.tag-list-link');
        var linkText = link ? link.textContent : ''; // 检查 link 是否存在

        // 获取每个 tag-list-item 下的 tag-list-count
        var countSpan = item.querySelector('.tag-list-count');
        var countText = countSpan ? countSpan.textContent : ''; // 检查 countSpan 是否存在

        mylabels.push(linkText);
        mydata.push(countText);
        myColors.push(generateRandomColor());
    });

    var myBarChart = new Chart(bar, {
        type: 'bar', // 指定图表类型
        data: {
            labels: mylabels, // X轴标签
            datasets: [{
                label: '',
                data: mydata, // 数据点
                backgroundColor: myColors,
                borderColor: myColors.map(color => color.replace('0.2', '1')), // 边框颜色
                pointBackgroundColor: myColors.map(color => color.replace('0.2', '1')), // 数据点颜色
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true, // Y轴的起点从0开始
                    ticks: {
                        fontSize: 14 // 调整Y轴刻度文字的大小
                    },
                    grid: {
                        display: false
                    },
                },
                x: {
                    beginAtZero: true, // Y轴的起点从0开始
                    ticks: {
                        fontSize: 14 // 调整X轴刻度文字的大小
                    },
                    grid: {
                        display: false
                    },
                    
                }
            },
            legend: false,
            title:{
                display: false
            }
        }
    });

}


