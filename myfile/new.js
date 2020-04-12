window.onload = function(){


  var str="";
  for(var i=0;i<3;i+=1){
    str+=
      '<div class="col-4">'+
        '<div class="card">'+
          '<div id="sketch'+i+'"></div>'+ 
          '<div class="card-body">'+
            '<p>'+i+'</p>'+
          '</div>'+
        '</div>'+
      '</div>';
  }  

  document.getElementById("cards").innerHTML = str;
  

  var brushSketch = function(p5j){

      let x = 1;
      let y = 1;
      let easing = 0.1;
    p5j.setup = function(){
      p5j.createCanvas(350, 300);


    }

    p5j.draw = function(){
      p5j.background(255, 204, 0);

      let targetX = p5j.mouseX;
      let dx = targetX-x;
      x += dx*easing;

        
      let targetY = p5j.mouseY;
      let dy = targetY-y;
      y += dy*easing;

      p5j.stroke(255);
      p5j.strokeWeight(1);

      
  
      p5j.triangle(x,y,x+30,y+30,x+90,y+30);
      p5j.triangle(x,y,x+30,y+30,x-90,y+60);
      p5j.triangle(x,y,x+30,y+90,x+90,y+100);
      p5j.triangle(x,y,x+30,y+90,x+90,y-30);

    }
  }

  new p5(brushSketch, 'sketch0');
  new p5(brushSketch, 'sketch1');
  new p5(brushSketch, 'sketch2');

}