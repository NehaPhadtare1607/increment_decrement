/* <input type="number" id="numberBox">

        <button><i class="fas fa-plus-circle" id="plus"></i>  Increment</button>
        <button><i class="fas fa-minus-circle" id="minus"></i>  Decrement</button>
        <button><i class="fas fa-sync-alt" id="Reset"></i>  Reset</button>
    </div>
     */
let numberBox=document.querySelector("#numberBox");
const plus=document.querySelector("#plus");
const minus=document.querySelector("#minus");
const Reset=document.querySelector("#Reset");

let my_number=0;
plus.addEventListener('click',function(){
  //  my_number=my_number+1;

  let existing_number=numberBox.value;
   my_number=existing_number;

    my_number++;
    numberBox.value=my_number;
})

//using arrow function
minus.addEventListener('click',()=>{
    //my_number=my_number-1;
    let existing_number=numberBox.value;
    my_number=existing_number;
    my_number--;
    numberBox.value=my_number;
})

Reset.addEventListener('click',function(){
    my_number=0;
    numberBox.value=my_number;
})