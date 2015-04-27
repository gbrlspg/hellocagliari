var d;
d=Titanium.API.obj;
console.log(d.response.result.item.attributes.attribute[10].htmlValue);

var desc = d.response.result.item.attributes.attribute[10].htmlValue;
console.log(d.response.result.item.attributes.attribute[9]);
var costi = d.response.result.item.attributes.attribute[9].value.$;

var orari = d.response.result.item.attributes.attribute[8].value.$;
$.orari.setText(orari);
$.costi.setText(costi);
$.desc.setValue(desc);
$.monument.open();
