function TilesEffect(cnt,img){
    var glitchcnt=cnt;
    var glitchimg=img;
    function glitchimageHeight(item,item2){
        var height=item.naturalHeight;
        var width=item.naturalWidth;
         var ratio=height/width;
             return item2.clientWidth*ratio;
    }
    for(var i=0;i<glitchcnt.length;i++){
        var glitchheight=glitchimageHeight(glitchimg[i],glitchcnt[i]);
    
        glitchcnt[i].style.height=glitchheight+"px";
        glitchcnt[i].style.overflow="hidden";
        glitchimg[i].style.height=100+"%";
        glitchimg[i].style.width=100+"%";
        glitchimg[i].style.float="left";
    
        var tobj=document.createElement('div');
        glitchcnt[i].appendChild(tobj);
         
         tobj.style.height=100+"%";
         tobj.style.width=100+"%";
         tobj.style.float="left";
         tobj.style.transform="translateY(-100%)";
         for(var j=1;j<=5;j++){
         var iline=document.createElement('div');
         tobj.appendChild(iline);
         iline.style.height=20+"%";
         iline.style.width="100%";
         iline.style.overflow="hidden";
         for(var k=1;k<=5;k++){
             var jline=document.createElement('div');
             iline.appendChild(jline);
             jline.style.height=100+"%";
             jline.style.width=20+"%";
             jline.style.float="left";       
             if(j%2==0){
                 if(k%2==0)
             jline.style.background="rgba(255,255,255,.3)";
             }
             else{
                 if(k%2!=0)
                 jline.style.background="rgba(255,255,255,.2)";
             }
             
         }
         }
    }
    window.addEventListener('resize',function(){
        for(var i=0;i<glitchcnt.length;i++){
            var glitchheight=glitchimageHeight(glitchimg[i],glitchcnt[i]);
            glitchcnt[i].style.height=glitchheight+"px";
        }
    });

}