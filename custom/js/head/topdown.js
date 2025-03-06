// 获取按钮元素
var scrollToTopButton = document.getElementById('scroll-to-top');
var scrollToBottomButton = document.getElementById('scroll-to-bottom');

// 添加点击事件处理程序
scrollToTopButton.addEventListener('click', function() {
  scrollTo(0, 0);
});

scrollToBottomButton.addEventListener('click', function() {
  var maxHeight = document.documentElement.scrollHeight - window.innerHeight;
  scrollTo(0, maxHeight);
});


// 添加鼠标悬停事件处理程序
scrollToTopButton.addEventListener('mouseover', function() {
  // 获取当前页面滚动位置并计算百分比
  var scrollTop = window.scrollY || document.documentElement.scrollTop;
  var scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
  var percentage = ((scrollTop / scrollHeight) * 100).toFixed(1);

  // 将按钮内的内容替换为格式化后的百分比
  scrollToTopButton.innerText = percentage + '%';
});

// 添加鼠标离开事件处理程序
scrollToTopButton.addEventListener('mouseout', function() {
  // 恢复按钮内的内容
  scrollToTopButton.innerText = '↑';
});



// 添加鼠标悬停事件处理程序
scrollToBottomButton.addEventListener('mouseover', function() {
  // 获取当前页面滚动位置并计算百分比
  var scrollTop = window.scrollY || document.documentElement.scrollTop;
  var scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
  var percentage = ((1-scrollTop / scrollHeight) * 100).toFixed(1);
  
  // 将按钮内的内容替换为格式化后的百分比
  scrollToBottomButton.innerText = percentage + '%';
});

// 添加鼠标离开事件处理程序
scrollToBottomButton.addEventListener('mouseout', function() {
  // 恢复按钮内的内容
  scrollToBottomButton.innerText = '↓';
});