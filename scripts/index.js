//store the products array in localstorage as "products"

var arr=JSON.parse(localStorage.getItem("products"))||[];
function data(){
    event.preventDefault();
    let form=document.getElementById("form");
    let type=form.type.value;
    let desc=form.desc.value;
    let price=form.price.value;
    let url=form.url.value

    if(type==""||desc==""||price==""||url==""){
        alert("Please fill all data cearfully!!")

       
    }else{
        // let p=url.slice(-3);

        // if(p!='png'||p!=='jpg'||p!='peg'){
        //     alert("Image should jpg , png, jpeg only!")
        // }else{
        var obj={
            type:type,
            desc:desc,
            price:price,
            url:url,
        };
        // type="";
        // desc="";
       
            arr.push(obj);
            console.log(arr)
            localStorage.setItem("products",JSON.stringify(arr));
       
       
    }
        
}

function showProduct(){
    window.location.href="inventory.html"
}