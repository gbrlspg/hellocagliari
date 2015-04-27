function doMaperti(e) {
	var xhr1 = Titanium.Network.createHTTPClient();
	
	var nome = "Pancrazio";
	var url1 = "http://www.comune.cagliari.it/portale/api/rs/it/jacms/contents.json?contentType=SIT&filters=(order=DESC;attributeFilter=true;key=Nome;value="+nome+";likeOption=true)"; 
	
	xhr1.onload = function(){
		Titanium.API.res = JSON.parse(this.responseText);
		console.log(Titanium.API.res)
		Alloy.createController('tourist_main').getView().open();
	};
		
	xhr1.open("GET",url1);
	xhr1.send();

	Ti.App.fireEvent('app:fromTitanium', { 
		d: 'ciao'
		});
	
}

$.tourist_choice.open();