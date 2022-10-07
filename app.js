function resquestOfServer() {
    $.ajax({
        type: 'get',
        url: "http://localhost:8000/hello-world?info=testonly=OlaMundo"
    }).done(function (data) {
        document.getElementById('developer').innerHTML = data.name
        document.getElementById('version').innerHTML = data.version
        document.getElementById('value-of-variable').innerHTML = data.value_of_variable_info
        document.getElementById('mananger-developer').innerHTML = data.mananger_developer
        document.getElementById('company-site').innerHTML = data.web_site_company

        $("#show-values").css('display', 'block')
    });

}

function submitDataOfUser() {
    const nameOfUser = $("#name").val()
    const lastNameOfUser = $("#last_name").val()
    const ageOfUser = $("#age").val()

    $.ajax({
        "url": "http://localhost:8000/insert-data",
        "method": "POST",
        "timeout": 0,
        "headers": {
            "Content-Type": "application/json; charset=UTF-8"
        },
        "data": JSON.stringify({
            "name": nameOfUser,
            "last_name": lastNameOfUser,
            "age": ageOfUser
        })
    }).done(function (response) {
        
        if (response.success) {

            closeErrorMsg()
            
            $("#success-record-msg").css('display', 'block')

            $("#name").val('')
            $("#last_name").val('')
            $("#age").val('')
        } else {

            let errorMsg;

            closeSuccessMsg()

            if(response.missingAttribute === 'name') {
                errorMsg = 'O campo nome não pode ficar em branco.'
            }

            if(response.missingAttribute === 'last_name') {
                errorMsg = 'O campo sobrenome não pode ficar em branco.'
            }

            if(response.missingAttribute === 'age') {
                errorMsg = 'O campo idade não pode ficar em branco.'
            }

            console.log(response)
            $("#error-record-msg").css('display', 'block')
            $("#content-error-record-msg").html(errorMsg)
        }

    });

    console.log(nameOfUser)
    console.log(lastNameOfUser)
    console.log(ageOfUser)
    
}

function closeSuccessMsg() {
    $("#success-record-msg").css('display', 'none')
}

function closeErrorMsg() {
    $("#error-record-msg").css('display', 'none')
}

