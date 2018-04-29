VK.init({
    apiId: 	6463415
  });



VK.Api.call('wall.get', {domain: 'homelike_peace', count: 3, v:"5.73"}, function(res) {

	if(!res.response) {
			console.error("Информация о группах не была получена");
			return false;
		}

	// Text
	var text = res.response.items[0].text;
	console.log(text);
	document.getElementById("view").innerHTML = text;
});