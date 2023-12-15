var titlebar=document.getElementById("title-bar");
titlebar.style.maxWidth="100%";
titlebar.style.maxHeight="100%";

function resim_yenile(){
    titlebar.style="background:url('https://source.unsplash.com/random/1280x720?sig="+Math.random()+"');";
    titlebar.style.backgroundRepeat="no-repeat";
    titlebar.style.backgroundPosition="center";
    titlebar.style.backgroundAttachment="fixed";
    titlebar.style.boxSizing="border-box";
    titlebar.style.backgroundSize="100% 100%";
}
