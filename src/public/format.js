window.addEventListener( "submit", function () {

    function sendForm(){
        fetch('/upload', {method:"POST"} )
            .then(() => {
                alert("Cadastro realizado com sucesso!")
            }
            ).catch((e) => {
                alert("Falha ao realizar o cadastro.")
            }
        )

        window.location.href = "http://localhost:3000/";

    }

    sendForm()
});