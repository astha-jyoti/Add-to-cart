var cartItems=[];
var hidden=true;
class Items {
	constructor(item,value) {
		this.item=item;
		this.value=value;
    }
    present() {
        return this.value;
    }
}
var item1 = new Items("backpack",500);
var item2 = new Items("camera",400);

function addToCart(stuff) {
	cartItems.push(stuff);
	document.getElementById("counter").innerHTML=cartItems.length;
    total();
}
var orderTotal;
var sum;
function total() {
     orderTotal=document.getElementById("orderTotal");
    if(hidden===false) {
		 sum=0;
		for(var i=0;i<cartItems.length;i++)
		{
            sum+=cartItems[i].present();

		}
        orderTotal.innerHTML="Total: $"+sum;
    }
        else
        orderTotal.innerHTML="";
    
    
}
function show() {
    hidden=!hidden;
    total();
}
function remove(stuff) {
    for (var i = 0; i < cartItems.length; i++) {
        if(cartItems[i]===stuff)
        {
            cartItems.splice(i,1);
            break;
        }
        
    }
    document.getElementById("counter").innerHTML=cartItems.length;
    total();
}
