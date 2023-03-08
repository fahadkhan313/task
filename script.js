
//everything working

//global variable to keep track of newly added label and button id's in need block
var needlabnbutpointer = 5;//since we are already having 5 elements in the list

//global variable to keep track of newly added label and button id's in have block
var havelabnbutpointer = 3;//since we are already having 3 elements in the list


//handling buttons via input fields content
function somethingcameup() {
    if(document.getElementById("item").value==="") { 
           document.getElementById('needbtn').disabled = true; 
           document.getElementById('havebtn').disabled = true; 
       } else { 
           document.getElementById('needbtn').disabled = false;
           document.getElementById('havebtn').disabled = false;
       }
}


//need buttons working
function need(form) {
    var inputValue = form.item.value;
    // alert ("You typed: " + inputValue);

    //label
    const newlabel = document.createElement("label");
    newlabel.className="list-group-item";
    newlabel.id=`needlab${needlabnbutpointer+1}`;

    // <input class="form-check-input me-1" type="checkbox" value=""></input>
    var newinput = document.createElement("input");
    newinput.classList="form-check-input me-1";
    newinput.type="checkbox";
    newinput.value="";
    newinput.id=`needinp${needlabnbutpointer+1}`;
    newinput.addEventListener("click",function(){
        putitemtohavelist(this.id);
    })

    // <p style="color:blue; display:inline">1 kg Sugar</p>
    var newp = document.createElement("p");
    newp.style.color="blue";
    newp.style.display="inline";
    const txt1 = document.createTextNode(inputValue);
    newp.appendChild(txt1);

    // <button type="button" class="btn" style=" color:red ; float: right">Remove</button>
    var newbutton = document.createElement("button");
    newbutton.id=`needbut${needlabnbutpointer+1}`;
    newbutton.type="button";
    newbutton.className="btn";
    newbutton.style.color="red";
    newbutton.style.float="right";
    newbutton.addEventListener("click",function(){
        removeelementfrmneed(this.id);
    });
    const txt2 = document.createTextNode("Remove");
    newbutton.appendChild(txt2);

    newlabel.appendChild(newinput);
    newlabel.appendChild(newp);
    newlabel.appendChild(newbutton);

    const labels = document.getElementById("needs");
    labels.appendChild(newlabel);
    needlabnbutpointer++;
    var temp =document.getElementById("item");
    temp.value="";
    // console.log("labid",newlabel.id);
    // console.log("butid",newbutton.id);
}


//have buttons working
function have(form) {
    var inputValue = form.item.value;
    // alert ("You typed: " + inputValue);

    //label
    const newlabel = document.createElement("label");
    newlabel.className="list-group-item";
    newlabel.id=`havelab${havelabnbutpointer+1}`;

    // <input class="form-check-input me-1" type="checkbox" value=""></input>
    var newinput = document.createElement("input");
    newinput.classList="form-check-input me-1";
    newinput.type="checkbox";
    newinput.value="";
    newinput.checked="true";
    newinput.id=`haveinp${havelabnbutpointer+1}`;
    newinput.addEventListener("click",function(){
        putitemtoneedlist(this.id);
    })

    // <p style="color:blue; display:inline">1 kg Sugar</p>
    var newp = document.createElement("p");
    newp.style.color="blue";
    newp.style.display="inline";
    const txt1 = document.createTextNode(inputValue);
    newp.appendChild(txt1);

    // <button type="button" class="btn" style=" color:red ; float: right">Remove</button>
    var newbutton = document.createElement("button");
    newbutton.id=`havebut${havelabnbutpointer+1}`;
    // newbutton.onclick="removeelementfrmhave(this.id)";
    newbutton.type="button";
    newbutton.className="btn";
    newbutton.style.color="red";
    newbutton.style.float="right";
    newbutton.addEventListener("click",function(){
        removeelementfrmhave(this.id);
    });
    const txt2 = document.createTextNode("Remove");
    newbutton.appendChild(txt2);

    newlabel.appendChild(newinput);
    newlabel.appendChild(newp);
    newlabel.appendChild(newbutton);

    const labels = document.getElementById("haves");
    labels.appendChild(newlabel);
    havelabnbutpointer++;
    var temp =document.getElementById("item");
    temp.value="";
    // console.log("have list newly added label id is : ",newlabel.id);
    // console.log("have list newly added checkbox id is : ",newinput.id);
    // console.log("succes");
}

//remove buttons working for need block
function removeelementfrmneed(id){
    var tmp = id.charAt(id.length-1);
    document.getElementById(`needlab${tmp}`).remove();
    //edge case : items greater than 9
}


//remove buttons working for have block
function removeelementfrmhave(id){
    var tmp = id.charAt(id.length-1);
    document.getElementById(`havelab${tmp}`).remove();
    //edge case : items greater than 9
}

function putitemtoneedlist(id){
    //extracting text from have list
    // console.log("id is :",id);
    var tmp = id.charAt(id.length-1);
    // console.log("tmp is : ",tmp);
    const coll = document.getElementById(`havelab${tmp}`).children;
    // console.log(coll);
    var txt3=coll[1].innerText;

    //label
    const newlabel = document.createElement("label");
    newlabel.className="list-group-item";
    newlabel.id=`needlab${needlabnbutpointer+1}`;

    // <input class="form-check-input me-1" type="checkbox" value=""></input>
    var newinput = document.createElement("input");
    newinput.classList="form-check-input me-1";
    newinput.type="checkbox";
    newinput.value="";
    newinput.id=`needinp${needlabnbutpointer+1}`;
    newinput.addEventListener("click",function(){
        putitemtohavelist(this.id);
    })

    // <p style="color:blue; display:inline">1 kg Sugar</p>
    var newp = document.createElement("p");
    newp.style.color="blue";
    newp.style.display="inline";
    const txt1 = document.createTextNode(txt3);
    newp.appendChild(txt1);

    // <button type="button" class="btn" style=" color:red ; float: right">Remove</button>
    var newbutton = document.createElement("button");
    newbutton.id=`needbut${needlabnbutpointer+1}`;
    newbutton.type="button";
    newbutton.className="btn";
    newbutton.style.color="red";
    newbutton.style.float="right";
    newbutton.addEventListener("click",function(){
        removeelementfrmneed(this.id);
    });
    const txt2 = document.createTextNode("Remove");
    newbutton.appendChild(txt2);

    newlabel.appendChild(newinput);
    newlabel.appendChild(newp);
    newlabel.appendChild(newbutton);

    const labels = document.getElementById("needs");
    labels.appendChild(newlabel);
    needlabnbutpointer++;

    // var tmp = id.charAt(id.length-1);
    document.getElementById(`havelab${tmp}`).remove();
}

function putitemtohavelist(id){
    //extracting text from have list
    var tmp = id.charAt(id.length-1);
    const coll = document.getElementById(`needlab${tmp}`).children;
    // console.log(coll);
    var txt4=coll[1].innerText;
    //label
    const newlabel = document.createElement("label");
    newlabel.className="list-group-item";
    newlabel.id=`havelab${havelabnbutpointer+1}`;

    // <input class="form-check-input me-1" type="checkbox" value=""></input>
    var newinput = document.createElement("input");
    newinput.classList="form-check-input me-1";
    newinput.type="checkbox";
    newinput.value="";
    newinput.checked="true";
    newinput.id=`haveinp${havelabnbutpointer+1}`;
    newinput.addEventListener("click",function(){
        putitemtoneedlist(this.id);
    })

    // <p style="color:blue; display:inline">1 kg Sugar</p>
    var newp = document.createElement("p");
    newp.style.color="blue";
    newp.style.display="inline";
    const txt1 = document.createTextNode(txt4);
    newp.appendChild(txt1);

    // <button type="button" class="btn" style=" color:red ; float: right">Remove</button>
    var newbutton = document.createElement("button");
    newbutton.id=`haebut${havelabnbutpointer+1}`;
    newbutton.type="button";
    newbutton.className="btn";
    newbutton.style.color="red";
    newbutton.style.float="right";
    newbutton.addEventListener("click",function(){
        removeelementfrmhave(this.id);
    });
    const txt2 = document.createTextNode("Remove");
    newbutton.appendChild(txt2);

    newlabel.appendChild(newinput);
    newlabel.appendChild(newp);
    newlabel.appendChild(newbutton);

    const labels = document.getElementById("haves");
    labels.appendChild(newlabel);
    havelabnbutpointer++;

    document.getElementById(`needlab${tmp}`).remove();
}
