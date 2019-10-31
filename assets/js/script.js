var listeimg = document.images;
for(var i = 0; i < listeimg.length; i++) {
   listeimg[i].addEventListener("mouseover", function(event) {change(this.id)});
}

function change(id) {
  var img = document.getElementById(id);
  img.src=`assets/images/${id}_2.jpg`; 
  img.addEventListener("mouseout", function(event) {this.src=`assets/images/${id}.jpg`; });

}