let data=JSON.parse(localStorage.getItem("products"));
// console.log(data)
display(data);

function display(data){
    // console.log(data)
    if(data==null){
        let show=document.getElementById("all_products");
        show.innerText="Please Add some products"
        show.style.textAlign="center";
        show.style.fontSize="34px";
    }else{

    data.forEach(function(el){
        let div=document.createElement("div");

        let image=document.createElement("img");
        image.setAttribute("src",el.url)

        let type=document.createElement("h3");
        type.innerText="Type :"+el.type;

        let desc=document.createElement("p");
        desc.innerText="Discription :"+el.desc;

        let price=document.createElement("h3");
        price.innerText="Price :"+el.price;

        let remove=document.createElement("button");
        remove.innerText="Remove";
        remove.style.cursor="pointer";
        remove.style.backgroundColor="red";
        remove.style.border="none";
        remove.style.borderRadius="10px";
        remove.style.color="white"
        remove.addEventListener("click",dataRemove);
        function dataRemove(){
            event.target.parentNode.remove();
            // data.pop();
            // data=data;
            JSON.parse(localStorage.getItem("products")).pop()
            console.log(data.length)

        }


        div.append(image,type,desc,price,remove);

        let body=document.getElementById("all_products");
        body.append(div);
    })
}
}

function addProduct(){
    window.location.href="index.html"
}