function getParagraph1(){
    var inputs=[];

    for (i=1 ; i<=6;i++){

    inputs.push(document.getElementById("input box1"+i).value);
    }

document.getElementById("showParagraph1").innerHTML=inputs.join(".");
}
function getParagraph2(){
    var inputs=[];

    for (i=1 ; i<=6;i++){

    inputs.push(document.getElementById("input box1"+i).value);
    }

document.getElementById("showParagraph2").innerHTML=inputs.join(".");
inputbox_array=[];
function showParagraph1(){
    var display_showParagraph1=[];
    for(var j=1;j<=4;j++)
    var showParagraph1=document.getElementById("showParagraph1_"+j).value;
    console.log(showParagraph1);
    showParagraph1.push(showParagraph1);
}

