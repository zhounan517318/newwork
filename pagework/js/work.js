var aPage=document.getElementsByClassName('page');
var aBtn=document.getElementsByClassName('btn');
var aClose=document.getElementsByClassName('close');

for(var i=0;i<aBtn.length;i++){
	(function(index){	
		aBtn[i].onclick=function(){
		
		aPage[index].style.left='90%'
		aPage[index].style.transform='translateX(-1000px)'
		aPage[index].style.transition='0.7s';

	   }
	   addEvent(aClose[index],'click',function(){
			aPage[index].style.left='90%'
			aPage[index].style.transform='translateX(1800px)'
			aPage[index].style.transition='0.7s';
		})
		
	
	})(i);
	
}
  
function addEvent(obj,sEv,fn){
	if(obj.addEventListener){
		obj.addEventListener(sEv,fn,false);
	}else{
		obj.attachEvent('on'+sEv,fn);
	}	
}
	

// JavaScript Document