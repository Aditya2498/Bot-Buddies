var button = document.getElementById('enter');
var input = document.getElementById('userinput');
var ul = document.querySelector("ul");

function InputLength(){
	return input.value.length;
}

function createlistElement() {
    var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
	input.value = ""
}

function addListAfterClick(){
	 if (InputLength() > 0 ){
	 	createlistElement();
	 }
     }

function addListafterkeypress(event){
	if(InputLength() > 0 && event.keyCode===13) {
		createlistElement();
	}
}	

	


button.addEventListener("click", addListAfterClick );
    
input.addEventListener("keypress",addListafterkeypress); 
 