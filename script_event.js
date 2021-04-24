$(document).ready(function(){
    console.log(1);
    //toggle the lable button
    $('#enc .label').click(function(){
       $(this).parent().find('input').click();
    })

    //set event input
    var file = null;

    $('#enc').on('change', 'en-input', function(e){
        if(e.target.files.length!=1){
            alert('Open images');
            return false;
        }
        file = e.target.file[0];

        if(file.size > 1024){
            alert('File oversize')
            return;
        }
        window.location.href='Enkey.html';
    });
    
});
