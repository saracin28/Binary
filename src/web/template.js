
function convert() {
var n=parseInt(document.getElementById("in").value);
        var f="";
        var x=0;
        var c =1;
        var g ="";
        var y=0;

        for (var i = 0; i < c; i++) {
            if (n > 0) {
                x = n % 2;
                f = f + x;
                n = n / 2;
                n=parseInt(n);
                c++;
            }
        }
        for (var j = f.length - 1; j >= 0; j--) {
            g = g + f.charAt(j);
        }
        y=parseInt(g);
                 document.getElementById("result").innerHTML=y;
    }

function sum(){
      var m=parseInt(document.getElementById("in1").value);
      var n=parseInt(document.getElementById("in2").value);
            m=m+n;
             var f="";
             var x=0;
                    var c =1;
                    var g ="";
                    var y=0;

                    for (var i = 0; i < c; i++) {
                        if (m > 0) {
                            x = m % 2;
                            f = f + x;
                            m = m / 2;
                            m=parseInt(m);
                            c++;
                        }
                    }
                    for (var j = f.length - 1; j >= 0; j--) {
                        g = g + f.charAt(j);
                    }
                    y=parseInt(g);
            document.getElementById("result2").innerHTML= y;
    }
function dif(){
          var m=parseInt(document.getElementById("in1").value);
          var n=parseInt(document.getElementById("in2").value);
          if(m==n){
          document.getElementById("result2").innerHTML=0;}
          else if(n>m){
          document.getElementById("result2").innerHTML= "Second number is too big!";
          }else{
                m=m-n;
                 var f="";
                 var x=0;
                        var c =1;
                        var g ="";
                        var y=0;

                        for (var i = 0; i < c; i++) {
                            if (m > 0) {
                                x = m % 2;
                                f = f + x;
                                m = m / 2;
                                m=parseInt(m);
                                c++;
                            }
                        }
                        for (var j = f.length - 1; j >= 0; j--) {
                            g = g + f.charAt(j);
                        }
                        y=parseInt(g);
                document.getElementById("result2").innerHTML= y;
                }
        }
function mul(){
              var m=parseInt(document.getElementById("in1").value);
              var n=parseInt(document.getElementById("in2").value);
                    m=m*n;
                     var f="";
                     var x=0;
                            var c =1;
                            var g ="";
                            var y=0;

                            for (var i = 0; i < c; i++) {
                                if (m > 0) {
                                    x = m % 2;
                                    f = f + x;
                                    m = m / 2;
                                    m=parseInt(m);
                                    c++;
                                }
                            }
                            for (var j = f.length - 1; j >= 0; j--) {
                                g = g + f.charAt(j);
                            }
                            y=parseInt(g);
                    document.getElementById("result2").innerHTML= y;
            }

function convert1() {
var n=parseInt(document.getElementById("in5").value);
var g =n.toString();
        var f = 0;
        var x = g.length;
        x--;
        var k=1;
        if(check(n)==1 ){
           document.getElementById("result3").innerHTML="The number is not binary!";
           }else{
        for(var i = 0; i < x; i++){
            k=k*2;
        }
        for (var i = 0; i < g.length; i++) {
            var y=parseInt(g.substring(i,i+1));
            f=f+y*k;
            k=k/2;
        }
document.getElementById("result3").innerHTML=f;
}
    }
function sum1(){
 var m=parseInt(document.getElementById("in3").value);
 var n=parseInt(document.getElementById("in4").value);
  var h =m.toString();
  var g =n.toString();
 var x=h.length;
 var z=g.length;
 var f = 0;
 var o = 0;
 x--;
 z--;
 var k=1;
 if(check(m)==1 || check(n)==1 ){
 document.getElementById("result4").innerHTML="One number is not binary!";
 }
 else{
 for(var i = 0; i < x; i++){
 k=k*2;
 }
 for (var i = 0; i < h.length; i++) {
 var y=parseInt(h.substring(i,i+1));
 f=f+y*k;
 k=k/2;
 }

var p=1;
 for(var i = 0; i < z; i++){
 p=p*2;
 }
 for (var i = 0; i < g.length; i++) {
 var y=parseInt(g.substring(i,i+1));
 o=o+y*p;
 p=p/2;
 }
 d=f+o;
 document.getElementById("result4").innerHTML=d;
 }
 }

 function dif1(){
  var m=parseInt(document.getElementById("in3").value);
  var n=parseInt(document.getElementById("in4").value);
   var h =m.toString();
   var g =n.toString();
  var x=h.length;
  var z=g.length;
  var f = 0;
  var o = 0;
  x--;
  z--;
  var k=1;
   if(check(m)==1 || check(n)==1 ){
   document.getElementById("result4").innerHTML="One number is not binary!";
   }else{
  for(var i = 0; i < x; i++){
  k=k*2;
  }
  for (var i = 0; i < h.length; i++) {
  var y=parseInt(h.substring(i,i+1));
  f=f+y*k;
  k=k/2;
  }

 var p=1;
  for(var i = 0; i < z; i++){
  p=p*2;
  }
  for (var i = 0; i < g.length; i++) {
  var y=parseInt(g.substring(i,i+1));
  o=o+y*p;
  p=p/2;
  }
  d=f-o;
  document.getElementById("result4").innerHTML=d;
  }
}

function mul1(){
  var m=parseInt(document.getElementById("in3").value);
  var n=parseInt(document.getElementById("in4").value);
   var h =m.toString();
   var g =n.toString();
  var x=h.length;
  var z=g.length;
  var f = 0;
  var o = 0;
  x--;
  z--;
  var k=1;
   if(check(m)==1 || check(n)==1 ){
   document.getElementById("result4").innerHTML="One number is not binary!";
   }else{
  for(var i = 0; i < x; i++){
  k=k*2;
  }
  for (var i = 0; i < h.length; i++) {
  var y=parseInt(h.substring(i,i+1));
  f=f+y*k;
  k=k/2;
  }

 var p=1;
  for(var i = 0; i < z; i++){
  p=p*2;
  }
  for (var i = 0; i < g.length; i++) {
  var y=parseInt(g.substring(i,i+1));
  o=o+y*p;
  p=p/2;
  }
  d=f*o;
  document.getElementById("result4").innerHTML=d;
  }
}

function check(x){
var r=0;
var z=x.toString();
for(var i=0;i<z.length;i++){
if(x%10>1){
r=1;
x=x/10;
break;
}
}
return r;
}
