$(document).ready(function(){
    console.log(1);

    //set event input
    var InputElem = document.getElementById("en-input");

    InputElem.onchange = function(event){
        var file = InputElem.files;
        console.log(file);
        if(file.length != 0){
            alert('Open images');
            return false;
        }
        file = e.target.file[0];

        if(file.size > 1024){
            alert('File oversize')
            return;
        }
        window.location.href='Enkey.html';
    }
});
