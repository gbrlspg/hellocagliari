Ti.App.addEventListener("prova", function(e){
	
	var xhr2 = Titanium.Network.createHTTPClient();
	var url2 = "http://www.comune.cagliari.it/portale/api/rs/it/jacms/content.json?id=SIT488";
	xhr2.onload = function(){
		Titanium.API.obj = JSON.parse(this.responseText);
		
		Alloy.createController('monument').getView().open();
	};
		
	xhr2.open("GET",url2);
	xhr2.send();
});

$.tourist_main.open();
