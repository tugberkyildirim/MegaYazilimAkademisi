var gallery_url="https://source.unsplash.com/random/300x300"
var gallery_area=document.getElementById("galeri");
var titlebar=document.getElementById("title-bar");
titlebar.style.maxWidth="100%";
titlebar.style.maxHeight="100%";


function resimleri_ekle(){
    var img_list=[];
    for(i=0;i<=14;i++){
        img_list.push("https://source.unsplash.com/random/300x300");
    }
    for(i=1;i<=15;i++){

        gallery_area.innerHTML+="<div class='card'>"+
        "<img class='card-img-top' src='"+"https://source.unsplash.com/random/300x300?sig="+Math.random()+"' alt='Card image cap'>"+
        "<div class='card-body'>"+
          "<p class='card-text'>Resim "+i+"</p>"+
        "</div>"+
        "</div>";
    }
}

function resim_yenile(){
    titlebar.style="background:url('https://source.unsplash.com/random/1280x720?sig="+Math.random()+"');";
    titlebar.style.backgroundRepeat="no-repeat";
    titlebar.style.backgroundPosition="center";
    titlebar.style.backgroundAttachment="fixed";
    titlebar.style.boxSizing="border-box";
    titlebar.style.backgroundSize="100% 100%";
}
