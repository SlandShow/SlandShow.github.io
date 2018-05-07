VK.init({
apiId: 6463415
});

VK.Api.call('wall.get', {domain: 'homelike_peace', count: 3, v:"5.73"}, function(res) {

if(!res.response) {
console.error("Информация о группах не была получена");
return false;
}

// Text
var text = res.response.items[0].text + "\nКоличесто лайков: " + 
res.response.items[0].likes.count.toString() + "\nКоличество просмотров: " +
res.response.items[0].views.count.toString() + "\nКоличество репостов: " +
res.response.items[0].reposts.count.toString();
console.log(text);
document.getElementById("user_view").innerHTML = text;
});