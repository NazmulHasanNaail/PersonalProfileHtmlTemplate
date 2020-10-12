$(".single-wishlist i").click(function() {
  console.log("classname - " + this.className)
  if(this.className=="" || this.className == "remove fa fa-heart-o")
      this.className = "fa fa-heart-o";
  else 
      this.className = "remove fa fa-heart-o";
});