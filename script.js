
//menu bar items variables
var allItems = document.getElementById("allItems");
var phones = document.getElementById("phones");
var accesories = document.getElementById("accesories");


//item display area variables
var phonesDisplay=document.getElementById("mobileArea");

var accesoriesDisplay=document.getElementById("accesoriesArea");




allItems.style.backgroundColor="#3A3A3A";
allItems.style.color="white";

function allClicked(){

	//active button
	allItems.style.backgroundColor="#3A3A3A";
	allItems.style.color="white";

	//inactive btns
	phones.style.backgroundColor="white";
	phones.style.color="black";

	accesories.style.backgroundColor="white";
	accesories.style.color="black";

	//setting display area
	mobileArea.style.display="block";
	accesoriesArea.style.display="block";

}

function phonesClicked(){
	//active button
	phones.style.backgroundColor="#3A3A3A";
	phones.style.color="white";

	//inactive btns
	allItems.style.backgroundColor="white";
	allItems.style.color="black";

	accesories.style.backgroundColor="white";
	accesories.style.color="black";

	//setting display area
	mobileArea.style.display="block";
	accesoriesArea.style.display="none";
}

function accesoriesClicked(){
	//active button
	accesories.style.backgroundColor="#3A3A3A";
	accesories.style.color="white";

	//inactive btns
	allItems.style.backgroundColor="white";
	allItems.style.color="black";

	phones.style.backgroundColor="white";
	phones.style.color="black";

	//setting display area
	mobileArea.style.display="none";
	accesoriesArea.style.display="block";
}

//json variable declaration for mobile

/* test
//v1
var students=[
				{"name":"dineth","age":"22"},
				{"name":"prasa","age":"12"}
]

//v2
var students={
				"products":"values";
}

//v3
var students={
				"products":[
					{"name":"samsung s10","price":"$230"},
					{"name":"apple iphone 10","price":"$360"}
				]
}
*/

const mobilePhone='{"phones":['+
								'{"image":"pics/1.JPG","name":"Samsung Note 8","price":"$400"},'+
								'{"image":"pics/2.JPG","name":"Apple Iphone 10","price":"$620"},'+
								'{"image":"pics/3.JPG","name":"Samsung A3","price":"$350"},'+
								'{"image":"pics/4.JPG","name":"Samsung J5","price":"$190"},'+
								'{"image":"pics/5.JPG","name":"Samsung Galaxy s12","price":"$695"},'+
								'{"image":"pics/6.JPG","name":"Apple Iphone 7s","price":"$455"}'+
					']}';

//console.log("json string print --- ",mobilePhone);

//creating real json variable for mobilephones

var jsonMobilePhones=JSON.parse(mobilePhone);


/*console.log("real json variable print --- ",jsonMobilePhones);

console.log("real json var with clear print --- ",jsonMobilePhones.phones);
*/

var phonesList=jsonMobilePhones.phones;
var cards=document.getElementById("mobileListCards");

function getPhones(){

	for(var i=0;i<phonesList.length;i++){
		var singleCard=document.createElement("div");
		singleCard.className="card";
		singleCard.Id="card_"+i;
		singleCard.innerHTML='<div id="name"><h3>'+phonesList[i].name+'</h3>'+
							'<div id="image"><img src='+phonesList[i].image+' alt="image-here" width="85%"></div>'+
							'<div id="price"><p>'+phonesList[i].price+'</p>'+
							'<div id="button"><p><button onclick="AddPhonesToCart('+i+')">Add to cart </button></p> </div> ';
		cards.append(singleCard);
	}
}


const accesoriesItems='{"accesories":['+
								'{"image":"pics/a.JPG","name":"Air pods","price":"$75"},'+
								'{"image":"pics/b.JPG","name":"Headphone","price":"$110"},'+
								'{"image":"pics/c.JPG","name":"samsung s12 BackCover","price":"$53"},'+
								'{"image":"pics/d.JPG","name":"PowerBank 20MAH","price":"$270"},'+
								'{"image":"pics/e.JPG","name":"Bluetooth Earphone","price":"$99"},'+
								'{"image":"pics/f.JPG","name":"Wireless Charger","price":"$315"}'+
					']}';

var jsonAccesories=JSON.parse(accesoriesItems);

var accesoriesList=jsonAccesories.accesories;
var cards1=document.getElementById("accesoriesListCards");

function getAccesories(){

	for(var i=0;i<accesoriesList.length;i++){
		var singleCard=document.createElement("div");
		singleCard.className="card";
		singleCard.Id="card_"+i;
		singleCard.innerHTML='<div id="name"><h3>'+accesoriesList[i].name+'</h3>'+
							'<div id="image"><img src='+accesoriesList[i].image+' alt="image-here" width="85%"></div>'+
							'<div id="price"><p>'+accesoriesList[i].price+'</p>'+
							'<div id="button"><p><button onclick="AddAccesoriesToCart('+i+')">Add to cart </button></p> </div> ';
		cards1.append(singleCard);
	}
}

var total=0;

function AddAccesoriesToCart(element){
	var item=accesoriesList[element];
	var cart=document.querySelector('.cartSection');
	var cart_item=document.createElement("div");
	total+=parseFloat((item.price).replace("$",""));
	cart_item.innerHTML='<h4>'+item.name+'</h4> <h4>'+item.price+'</h4> '+
	'<button onclick="ClearItem(this)">Clear Item</button> <p>Total =$ '+total +'</p>';

	cart.append(cart_item);

}

function AddPhonesToCart(element){
	var item=phonesList[element];
	var cart=document.querySelector('.cartSection');
	var cart_item=document.createElement("div");
	total+=parseFloat((item.price).replace("$",""));
	cart_item.innerHTML='<h4>'+item.name+'</h4> <h4>'+item.price+'</h4> '+
	'<button onclick="ClearItem(this,total)">Clear Item</button> <p>Total =$ '+total+'</p>';

	cart.append(cart_item);

}

function ClearItem(item,total){
	var RemoveItem=item.parentElement;
	RemoveItem.remove();
}

window.onload=function(){
	getPhones();
	getAccesories();
}