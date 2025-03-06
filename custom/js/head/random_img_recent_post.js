// 使用 JavaScript 获取具有类名 "recent-post-cover" 的元素
var recentPostCovers = document.querySelectorAll('.recent-post-cover');
var numberOfCovers = recentPostCovers.length;

// 初始化一个空的随机图片URL数组
var randomImageUrls = [];
function getRandomNonRepeatingNumbers(min, max, count) {
    if (count > max - min + 1 || max < min) {
        return null;
    }

    var numbers = [];
    while (numbers.length < count) {
        var randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
        if (!numbers.includes(randomNumber)) {
            numbers.push(randomNumber);
        }
    }

    return numbers;
}
var minNumber = 1; // 最小数字
var maxNumber = 52; // 最大数字
var numberOfNumbersToPick = numberOfCovers; // 需要挑选的不重复数字数量

var randomNumbers = getRandomNonRepeatingNumbers(minNumber, maxNumber, numberOfNumbersToPick);





// 遍历所有匹配的元素
recentPostCovers.forEach(function(recentPostCover, index) {

    // 随机选择一个图片URL
    // 在每个匹配的元素中查找 <img> 元素
    var imgElement = recentPostCover.querySelector('img');
    // 检查是否找到了 <img> 元素
    if (imgElement) {
        // 找到了 <img> 元素，可以在这里对其进行操作
        // 获取需要替换的新 src，假设你有一个新的图片 URL 存储在 newImageUrl 变量中
        var newImageUrl = "https://raw.githubusercontent.com/YueSangShuai/upload_imgs/master/kuluo_index_" + randomNumbers[index] + ".png";
        // 替换 <img> 元素的 src 属性
        imgElement.src = newImageUrl;
    }
});