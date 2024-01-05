const body = document.querySelector('body')
console.log(body);
const boxes = document.querySelectorAll('.button')
// console.log(boxes);
boxes.forEach( (item) => {
    item.addEventListener('click', (box) =>{
        // console.log(box)
        if(box.target.id === "grey"){
            body.style.backgroundColor = box.target.id

        }
        if(box.target.id === "white"){
            body.style.backgroundColor = box.target.id

        }
        if(box.target.id === "blue"){
            body.style.backgroundColor = box.target.id

        }
        if(box.target.id === "yellow"){
            body.style.backgroundColor = box.target.id

        }
        if(box.target.id === "purple"){
            body.style.backgroundColor = box.target.id

        }
        

    })
} )
