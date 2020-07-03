const pi = Math.PI;
const a2 = Math.sqrt(2)
const a3 = Math.sqrt(3)
const a5 = Math.sqrt(5)

class firRec {
  constructor(width, length){
      this._width = width
      this._length = length
  }
	get width(){
    return this._width
  }

  set width(wth){
    if (typeof wth !== 'number'){
      throw new Error('Width must contain only numbers');
      alert('Width must contain only numbers');
      
    }

    this._width = wth
  }

  //

  	get length(){
    return this._length
  }

  set length(len){
    if (typeof len !== 'number'){
      throw new Error('length must contain only numbers');
      alert('length must contain only numbers');
      
    }

    this._length = len
  }

  //

  
	toString(){
  	let out =  (+this._width + +this._length) * 2;
  	let area = this._width * this._length;
  	let diag = Math.sqrt(Math.pow(this._width,2) + Math.pow(this._length,2))
  	let n = this._length/this._width;
  	let alfa = Math.atan(n) * 180 / Math.PI
    let beta = 90 -alfa;
    
    
   

      if(diag/a2 === Math.ceil(diag/a2) || diag/a2 === Math.floor(diag/a2)){
      diag = diag/a2 + "√2";
      
    }
      else if(diag/a3 === Math.ceil(diag/a3) || diag/a3 === Math.floor(diag/a3)){
      diag = diag/a3 + "√3";
      
    }
      else if(diag/a5 === Math.ceil(diag/a5) || diag/a5 === Math.floor(diag/a5)){
      diag = diag/a5 + "√5";
      
    }
   

    $("#span1").text("The perimeter is: "+ out + " cm") 
    $("#span2").text("The area is: "+ area +  "cm")
    $("#span3").text("The diagonal is: "+ diag + " cm") 
    $("#span4").text("The alfa angle is: "+ alfa + " °") 
    $("#span5").text("The beta angle is: "+ beta + " °")
  	return "";

  }


}

function strRect(){

   let wid = $("#widRec").val()
   let len = $("#lenRec").val()
   let rez = new firRec(wid,len); 
    $("#span1Div").attr("data-aos", "zoom-in-up")
    $(".asas").css("display","block")
    $(".asas").css("display","block")
    $(".asas").css("display","block")
    $(".asas").css("display","block")
    $(".asas").css("display","block")
   rez.toString()
}


function hayt1(){
   $(".mainFir").css('display', 'block')
   $(".mainFir1").css('display', 'none')
  
}function jnj1(){
  $(".mainFir").css('display', 'none')
}
function hayt2(){
   $(".mainFir1").css('display', 'block')
   $(".mainFir").css('display', 'none')
  
}function jnj2(){
  $(".mainFir1").css('display', 'none')
}






class firTri {
  constructor(base, hip){
      this._base = base
      this._hip = hip
  }
  get base(){
    return this._base
  }

  set base(base1){
    if (typeof base1 !== 'number'){
      throw new Error('Width must contain only numbers');
      alert('Width must contain only numbers');
      
    }

    this._base = base1
  }

  //

    get hip(){
    return this._hip
  }

  set hip1(hip1){
    if (typeof hip1 !== 'number'){
      throw new Error('length must contain only numbers');
      alert('length must contain only numbers');
      
    }

    this._hip = hip1
  }

  //

  
  toString(){
    let h =  (4 * this._hip*this._hip - this._base * this._base) / 4; 
    let p = 2 * this._hip + +this._base;
        // √(2*b*b - a*a)/2    (+this._width + +this._length) * 2;
    let area =  (Math.sqrt(h) * this._base) / 2;
    
    
    let n = this._length/this._width;

    let alfa = (2* Math.asin(this._base/2/this._hip) * 180 / Math.PI).toFixed();
    let beta = 90 - alfa / 2;

    let h2 =  Math.sin((beta*Math.PI)/180);
     
    if(Math.sqrt(h) === Math.ceil(Math.sqrt(h))){
      h = Math.sqrt(h);
    }
    else{
      h = "√" + h;
    }

      // (area/a2).toFixed(2)
      if(h2/a2 == (h2/a2).toFixed(2) || h2/a2 == (h2/a2).toFixed(2) - 0.01){
      h2 = h2/a2 + "√2";
      
    }
      else if(h2/a3 == (h2/a3).toFixed(2) || h2/a3 == (h2/a3).toFixed(2) - 0.01){
      h2 = h2/a3 + "√3";
      
    }
      else if(h2/a5 == (h2/a5).toFixed(2) || h2/a5 == (h2/a5).toFixed(2) - 0.01){
      h2 = h2/a5 + "√5";
      
    }

   if(area/a2 == (area/a2).toFixed(2) || area/a2 == (area/a2).toFixed(2) - 0.01){
      area = area/a2 + "√2";
      
    }
      else if(area/a3 == (area/a3).toFixed(2) || area/a3 == (area/a3).toFixed(2) - 0.01){
      area = area/a3 + "√3";
      
    }
      else if(area/a5 == (area/a5).toFixed(2) || area/a5 == (area/a5).toFixed(2) - 0.01){
      area = area/a5 + "√5";
      
    }
    $("#span6").text("The basement height is: "+ h + " cm") 
    $("#span11").text("The Side height is: "+ h2 + " cm")
    $("#span7").text("The perimeter is: "+ p + " cm")
    $("#span8").text("The area is: "+ area + " cm2") 
    $("#span9").text("The alfa angle is: "+ alfa + " °") 
    $("#span10").text("The beta angle is: "+ beta + " °")
    return "";

  }


}

function strTri(){

   let wid = $("#widTri").val()
   let len = $("#lenTri").val()
   let rez = new firTri(wid,len); 
    $(".asas1").css("display","block")
    $(".asas1").css("display","block")
    $(".asas1").css("display","block")
    $(".asas1").css("display","block")
    $(".asas1").css("display","block")
   rez.toString()
}

$(document).ready(function(){
  $("#span1").mouseenter(function(){
    $("#re1").css('stroke' , "#6BD1ED")
    $("#re2").css('stroke' , "#6BD1ED")
    $("#re6").css('stroke' , "#6BD1ED")
    $("#re7").css('stroke' , "#6BD1ED")
  });
});
$(document).ready(function(){
  $("#span1").mouseleave(function(){
    $("#re1").css('stroke' , "#000")
    $("#re2").css('stroke' , "#000")
    $("#re6").css('stroke' , "#000")
    $("#re7").css('stroke' , "#000")
  });
});

$(document).ready(function(){
  $("#span2").mouseenter(function(){
    $(".gg").css({"background-color":"#6BD1ED"})
  });
});
$(document).ready(function(){
  $("#span2").mouseleave(function(){
    $(".gg").css({"background-color":"#fff"})
  });
});

$(document).ready(function(){
  $("#span3").mouseenter(function(){
    $("#re3").css("stroke" , "#6BD1ED")
  });
});
$(document).ready(function(){
  $("#span3").mouseleave(function(){
    $("#re3").css("stroke" , "#000")
  });
});

$(document).ready(function(){
  $("#span4").mouseenter(function(){
    $("#re4").css("stroke" , "#6BD1ED")
  });
});
$(document).ready(function(){
  $("#span4").mouseleave(function(){
    $("#re4").css("stroke" , "#000")
  });
});

$(document).ready(function(){
  $("#span5").mouseenter(function(){
    $("#re5").css("stroke" , "#6BD1ED")
  });
});
$(document).ready(function(){
  $("#span5").mouseleave(function(){
    $("#re5").css("stroke" , "#000")
  });
});

var images = [
    'images/back.gif', 
    'images/back1.gif', 
    'images/back2.gif'
];
var num = 0;
function myfunkcia(){
   setInterval(a , 10000)
}
function a() {
    var slider = document.getElementById('wp1');
    num++;
    if(num >= images.length) {
       num = 0;
    }
    slider.src = images[num];
}
myfunkcia()
