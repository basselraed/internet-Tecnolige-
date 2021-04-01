$(function() {
    $('#envoi').on('click', function(){
        var message_text = $('#message-text').val();
        if(message_text !== ''){
            $(".row:last").after('<div class="row"><div class="message message-out pull-right">'+message_text+'</div></div>');
            $('#message-text').val('');
        }
    });
    
    
    $('#validation').on('click', function(){
        $("#modal-photo").hide();
        var file = photo.files[0];
        var reader = new FileReader();
        reader.onload = function (e) {
            $(".row:last").after('<div class="row"><img src="'+e.target.result+'" class="message pull-right" alt="photo"/></div></div>');
        }        
        reader.readAsDataURL(file);
        $('#photo').val('');
    });
});