 $('#contactForm').on('submit', function(event) {
        event.preventDefault();
        $.ajax({
            url: $(this).attr('action'),
            method: $(this).attr('method'),
            data: $(this).serialize(),
            success: function(response) {
                alertMessege();
            },
            error: function(error) {
                alert('Fehler beim Absenden des Formulars.');
            }
        });
    });
        
function alertMessage() {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;

    if (name !== "" && email !== "" && message !== "") {
        swal("Successful", "The Message sent Successfully!", "success")
            .then(() => {
                    document.getElementById('name').value = "";
                    document.getElementById('email').value = "";
                    document.getElementById('message').value = "";
                    
                });

    } else {
        swal("Error", "Please fill in all fields before sending!", "error");
    }
}