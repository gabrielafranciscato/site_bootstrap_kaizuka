$(document).ready(function() {
   
    $('#telefone').mask('(00)00000-0000');
    

    $('form').validate({
        rules: {
            name: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            phone: {
                required: true
            },
            message: {
                required: false, 
            }
        },
        messages: {
            name: 'Type your name here', 
        },
        submitHandler: function(form) {
            console.log(form);
        },
        invalidHandler: function(evento, validator) {
            let incorrectFields = validator.numberOfInvalids();
            if (incorrectFields) {
                alert(`${incorrectFields} incorrect fields`);
            }
        }
    });
});