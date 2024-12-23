  
var backgroundImage;
  function addPost(){
    var title=document.getElementById("title");
    var Discription=document.getElementById("Discription");
    // console.log("bgImage",backgroundImage)
    console.log(title.value, Discription.value)
  if(title.value.trim()&&Discription.value.trim()){

  var posts=document.getElementById("posts");
  posts.innerHTML+=`
  <div class="card ">
        <div class="card-header">
          @post
        </div>
        <div style="background-image:url{$(backgroundImage)} class="card-body">
          <blockquote class="blockquote mb-0">
            <p>${title.value}</p>
            <footer class="blockquote-footer">${Discription.value}</cite></footer>
          </blockquote>
        </div>
        </div>  
  `
  title.value="";
  Discription.value="";
}
  else{
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Please Enter Title and Discription!",
    });
  }
  
  function selectImage(src){
    backgroundImage=src;
    var bgImage=document.getElementsByClassName("bg-image");
   for (var i=0;i<bgImage.length;i++){
    bgImage[i].className="bg-images"
   }
    event.target.className += " images-list-selected"
     
  }}