var n1=0;
var n2=0;
var n3=0;
var n4=0;
var n5=0;
var n6=0;
var n7=0;
var n8=0;
var n9=0;
var N=0;
var SC_1=0;
var SC_2=0;
var play=1;
var col_1="#5b8c5a";
var col_2="#d45079";
function RESET(){
    n1=0;
    n2=0;
    n3=0;
    n4=0;
    n5=0;
    n6=0;
    n7=0;
    n8=0;
    n9=0;
    N=0;
    play=1;
    var butn="B1";
    document.getElementById(butn).style.background=none;
    document.getElementById(butn).style.border= "1px";
    document.getElementById(butn).style.color= "rgba(100,100,100,0.5)";
    document.getElementById(butn).style.width= "100px";
    document.getElementById(butn).style.height= "100px";
    var butn="B2";
    document.getElementById(butn).style.background=none;
    document.getElementById(butn).style.border= "1px";
    document.getElementById(butn).style.color= "rgba(100,100,100,0.5)";
    document.getElementById(butn).style.width= "100px";
    document.getElementById(butn).style.height= "100px";
    var butn="B3";
    document.getElementById(butn).style.background=none;
    document.getElementById(butn).style.border= "1px";
    document.getElementById(butn).style.color= "rgba(100,100,100,0.5)";
    document.getElementById(butn).style.width= "100px";
    document.getElementById(butn).style.height= "100px";
    var butn="B4";
    document.getElementById(butn).style.background=none;
    document.getElementById(butn).style.border= "1px";
    document.getElementById(butn).style.color= "rgba(100,100,100,0.5)";
    document.getElementById(butn).style.width= "100px";
    document.getElementById(butn).style.height= "100px";
    var butn="B5";
    document.getElementById(butn).style.background=none;
    document.getElementById(butn).style.border= "1px";
    document.getElementById(butn).style.color= "rgba(100,100,100,0.5)";
    document.getElementById(butn).style.width= "100px";
    document.getElementById(butn).style.height= "100px";
    var butn="B6";
    document.getElementById(butn).style.background=none;
    document.getElementById(butn).style.border= "1px";
    document.getElementById(butn).style.color= "rgba(100,100,100,0.5)";
    document.getElementById(butn).style.width= "100px";
    document.getElementById(butn).style.height= "100px";
    var butn="B7";
    document.getElementById(butn).style.background=none;
    document.getElementById(butn).style.border= "1px";
    document.getElementById(butn).style.color= "rgba(100,100,100,0.5)";
    document.getElementById(butn).style.width= "100px";
    document.getElementById(butn).style.height= "100px";
    var butn="B8";
    document.getElementById(butn).style.background=none;
    document.getElementById(butn).style.border= "1px";
    document.getElementById(butn).style.color= "rgba(100,100,100,0.5)";
    document.getElementById(butn).style.width= "100px";
    document.getElementById(butn).style.height= "100px";
    var butn="B9";
    document.getElementById(butn).style.background=none;
    document.getElementById(butn).style.border= "1px";
    document.getElementById(butn).style.color= "rgba(100,100,100,0.5)";
    document.getElementById(butn).style.width= "100px";
    document.getElementById(butn).style.height= "100px";
}
function CHECK(){
    N=1;
    if(n1==N&&n2==N&&n3==N){
        SC_1++;
        window.alert("Player1 won!");
        UPDATE();
    }
    N=-1;
    if(n1==N&&n2==N&&n3==N){
        SC_2++;
        window.alert("Player2 won!");
        UPDATE();
    }
    N=1;
    if(n4==N&&n5==N&&n6==N){
        SC_1++;
        window.alert("Player1 won!");
        UPDATE();
    }
    N=-1;
    if(n4==N&&n5==N&&n6==N){
        SC_2++;
        window.alert("Player2 won!");
        UPDATE();
    }
    N=1;
    if(n7==N&&n8==N&&n9==N){
        SC_1++;
        window.alert("Player1 won!");
        UPDATE();
    }
    N=-1;
    if(n7==N&&n8==N&&n9==N){
        SC_2++;
        window.alert("Player2 won!");
        UPDATE();
    }
    ////////////////////////////////
    N=1;
    if(n1==N&&n4==N&&n7==N){
        SC_1++;
        window.alert("Player1 won!");
        UPDATE();
    }
    N=-1;
    if(n1==N&&n4==N&&n7==N){
        SC_2++;
        window.alert("Player2 won!");
        UPDATE();
    }
    N=1;
    if(n2==N&&n5==N&&n8==N){
        SC_1++;
        window.alert("Player1 won!");
        UPDATE();
    }
    N=-1;
    if(n2==N&&n5==N&&n8==N){
        SC_2++;
        window.alert("Player2 won!");
        UPDATE();
    }
    N=1;
    if(n3==N&&n6==N&&n9==N){
        SC_1++;
        window.alert("Player1 won!");
        UPDATE();
    }
    N=-1;
    if(n3==N&&n6==N&&n9==N){
        SC_2++;
        window.alert("Player2 won!");
        UPDATE();
    }
    //////////////////////////
    N=1;
    if(n1==N&&n5==N&&n9==N){
        SC_1++;
        window.alert("Player1 won!");
        UPDATE();
    }
    N=-1;
    if(n1==N&&n5==N&&n9==N){
        SC_2++;
        window.alert("Player2 won!");
        UPDATE();
    }
    N=1;
    if(n3==N&&n5==N&&n7==N){
        SC_1++;
        window.alert("Player1 won!");
        UPDATE();
    }
    N=-1;
    if(n3==N&&n5==N&&n7==N){
        SC_2++;
        window.alert("Player2 won!");
        UPDATE();
    }
}

function UPDATE(){
    document.getElementById("S1").innerHTML = ""+SC_1;
    document.getElementById("S2").innerHTML = ""+SC_2;
    RESET();
}
function btn1_clk(){
    if(n1==0){
        if(play==1){
            n1=1;
            document.getElementById("B1").style.background = col_1;
            document.getElementById("B1").style.borderRadius = "50%";   
        }
        if(play==-1){
            n1=-1;
            document.getElementById("B1").style.background = col_2;
        }
    }
    play*=-1;
    CHECK();
}
function btn2_clk(){
    if(n2==0){
        if(play==1){
            n2=1;
            document.getElementById("B2").style.background = col_1;
            document.getElementById("B2").style.borderRadius = "50%";
        }
        if(play==-1){
            n2=-1;
            document.getElementById("B2").style.background = col_2;
            
        }
    }
    play*=-1;
    CHECK();
}
function btn3_clk(){
    if(n3==0){
        if(play==1){
            n3=1;
            document.getElementById("B3").style.background = col_1;
            document.getElementById("B3").style.borderRadius = "50%";
        }
        if(play==-1){
            n3=-1;
            document.getElementById("B3").style.background = col_2;
        }
    }
    play*=-1;
    CHECK();
}
function btn4_clk(){
    if(n4==0){
        if(play==1){
            n4=1;
            document.getElementById("B4").style.background = col_1;
            document.getElementById("B4").style.borderRadius = "50%";
        }
        if(play==-1){
            n4=-1;
            document.getElementById("B4").style.background = col_2;
        }
    }
    play*=-1;
    CHECK();
}
function btn5_clk(){
    if(n5==0){
        if(play==1){
            n5=1;
            document.getElementById("B5").style.background = col_1;
            document.getElementById("B5").style.borderRadius = "50%";
        }
        if(play==-1){
            n5=-1;
            document.getElementById("B5").style.background = col_2;
        }
    }
    play*=-1;
    CHECK();
}
function btn6_clk(){
    if(n6==0){
        if(play==1){
            n6=1;
            document.getElementById("B6").style.background = col_1;
            document.getElementById("B6").style.borderRadius = "50%";
        }
        if(play==-1){
            n6=-1;
            document.getElementById("B6").style.background = col_2;
        }
    }
    play*=-1;
    CHECK();
}
function btn7_clk(){
    if(n7==0){
        if(play==1){
            n7=1;
            document.getElementById("B7").style.background = col_1;
            document.getElementById("B7").style.borderRadius = "50%";
        }
        if(play==-1){
            n7=-1;
            document.getElementById("B7").style.background= col_2;
        }
    }
    play*=-1;
    CHECK();
}
function btn8_clk(){
    if(n8==0){
        if(play==1){
            n8=1;
            document.getElementById("B8").style.background = col_1;
            document.getElementById("B8").style.borderRadius = "50%";
        }
        if(play==-1){
            n8=-1;
            document.getElementById("B8").style.background = col_2;
        }
    }
    play*=-1;
    CHECK();
}
function btn9_clk(){
    if(n9==0){
        if(play==1){
            n9=1;
            document.getElementById("B9").style.background = col_1;
            document.getElementById("B9").style.borderRadius = "50%";
        }
        if(play==-1){
            n9=-1;
            document.getElementById("B9").style.background = col_2;
        }
    }
    play*=-1;
    CHECK();
}




