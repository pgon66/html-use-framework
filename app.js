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
    const lastNameOfUser = $("#lastname").val()
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
            "lastName": lastNameOfUser,
            "age": ageOfUser
        })
    }).done(function (response) {
        
        if (response.success) {
            $("#success-record-msg").css('display', 'block')

            $("#name").val('')
            $("#lastname").val('')
            $("#age").val('')
        }

    });

    console.log(nameOfUser)
    console.log(lastNameOfUser)
    console.log(ageOfUser)
    
}

function closeSuccessMsg() {
    $("#success-record-msg").css('display', 'none')
}
