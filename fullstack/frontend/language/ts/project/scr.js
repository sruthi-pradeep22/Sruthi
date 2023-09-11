let div=document.getElementById('root')


let myproducts=[
    {name:'t-shirt',image:'./1.jpg'},
    {name:'shirt',image:'./2.jpg'},
    {name:'pants',image:'./1.jpg'}
]

function displayProducts(){
   



    myproducts.map((item)=>{
        let image=document.createElement('img')
        image.src=item.image
        image.style.width="200px"
        div.appendChild(image)
    })
}