(function () {

    function Content(){
        switch (document.title) {
            case "About Us - WEBD6201 LAB 2":
                document.getElementById("aboutus").innerHTML = "I am Duc and I am an international student from Vietnam. I am 19 years old and will be 20 this October. I am expected to graduate this year.";
                break
        }
        switch (document.title) {
            case "Projects - WEBD6201 LAB 2":
                document.getElementById("p1").innerHTML = "1.While I was in 11th grade, Duc and his friends had a project for biology class. In which we had to make alcohol from a fruit that we chose. We chose grapes as it was one of the easiest fruits to make alcohol. The result of the project was to learn about the fermentation.";
                document.getElementById("p2").innerHTML = "2.Throughout Ducs high school years, he played professional futsal for a good while. It was more of a campaign rather than a project but it was something that I was proud of. We were in a touranment that had many stronger clubs than our in the city participated, we were the underdog but somehow we managed to got 3rd place at the end of the touranment."; 
                document.getElementById("p3").innerHTML = "3.The last one, specifically Duc and his friends are planning to make custom mouses and keyboards based off of our interest and hobby is to play games and to do something that is game related. We want to be the best Vietnamese gaming hardware company in the future and to compete agaisnt the top dogs such as Razer, Logitech, etc.";
                break
        }
        switch (document.title) {
            case "Services - WEBD6201 LAB 2":
                document.getElementById("s1").innerHTML = "1. We strive to make the best looking website for all of our clients.";
                document.getElementById("s2").innerHTML = "2. We also make custom functions to make your websites unique in your own way."; 
                document.getElementById("s3").innerHTML = "3. We also design free logo if you choose our company to design your website.";
                break
        }
        switch (document.title){
            case "Home - WEBD6201 LAB 2":
                document.getElementById("welcome").innerHTML="WELCOME TO LAB 2"
        }

        
    }
    function sleep(milliseconds) {
        const date = Date.now();
        let currentDate = null;
        do {
          currentDate = Date.now();
        } while (currentDate - date < milliseconds);
      }
    // function Projects(){
    //         document.getElementById("projects").innerHTML = `<a class="nav-link active" href="./projects.html"><i class="fa-solid fa-diagram-project"></i> Projects</a>`;
    // }
    function user(){
            let element = document.getElementById("submitButton")
            element.addEventListener("click", function(e) {
                e.preventDefault()
                console.log("Name: "+document.getElementById("fullName").value);
                console.log("user Number: "+document.getElementById("userNumber").value);
                console.log("Email Address: "+document.getElementById("emailAddress").value);
                setTimeout(()=>{
                    location.href = "index.html"
                },3000);
                return false
            })
            
            
    }
    
    function login(){
        
    }

    function AddUser(firstname, lastname, emailaddress) {
        let user = new core.User(firstname, lastname, emailaddress)
        if (user.serialize()) {
            let key = user.Firstname.substring(0, 1) + Date.now()
            localStorage.setItem(key, user.serialize())
        }
    }

    function ValidateInput(inputFieldID, regularExpression, exception) {
        let ErrorMessage = $('#ErrorMessage').hide()

        $('#' + inputFieldID).on("blur", function() {
            let inputText = $(this).val()

            if (!regularExpression.test(inputText)) {
                // failure to match full name with regex

                $(this).trigger("focus").trigger("select")

                ErrorMessage.addClass("alert alert-danger").text(exception).show()
            } else {
                // success in matching full name with regex

                ErrorMessage.removeAttr("class").hide()
            }
        })
    }
    function DisplayUser() {
        console.log("Login Page")

        userFormValidate()

        let registerButton = document.getElementById("registerButton")

        // localStorage Example
        // localStorage.setItem("Random Variable", "random variable for testing and demonstration")
        // console.log(localStorage.getItem("Random Variable"))
        // localStorage.removeItem("Random Variable")

        registerButton.addEventListener("click", function(e) {
                e.preventDefault()
                AddUser(firstname.value, lastname.value, emailaddress.value)
            
        })
    }
    function comparePw(){
        var password = document.getElementById("password").value;
        var cpassword = document.getElementById("cpassword").value;
        if(cpassword!=password){
            ErrorMessage.addClass("alert alert-danger")
            ErrorMessage.text("Password does not match")
            ErrorMessage.show()
        }
        else{
            //ErrorMessage.removeAttr("class")
            //  ErrorMessage.hide()
        }
    }

    function userFormValidate() {
        let emailAddressPattern = /^[\w-\.]+@([\w-]+\.)+[\w-][\D]{2,10}$/g
        let firstNamePattern = /^([a-z]{2,25})*$/g
        let lastNamePattern = /^([a-z]{2,25})*$/g
        let passwordPattern = /^.{6,}$/


        ValidateInput("firstname", firstNamePattern, "Please enter a valid First name.")
        ValidateInput("lastname", lastNamePattern, "Please enter a valid Last name.")
        ValidateInput("emailaddress", emailAddressPattern, "Please enter a valid Email Address")
        ValidateInput("password", passwordPattern, "Password is too short.")
        ValidateInput("cpassword", comparePw("password"), "Passwords do not match")
    }
    // function Register(){
    //     let element = document.getElementById("registerButton")
    //         element.addEventListener("click", function(e) {
    //             e.preventDefault()
    //             Adduser(firstname.value, lastname.value, emailaddress.value)
    //             //let user = new core.User()
    //         })
            
    // }
    // function testName(){
    //     let ErrorMessage = $("ErrorMessage").hide()

    //     let NamePattern = /^([a-z]{2,25})((\s|,|-)([a-z]{2,25}))*(\s|-|,)*([a-z]{2,25})*$/g

    //     $('#firstname').on("blue", function(){
    //         let NameText=$(this).val()

    //         if(!NamePattern.test(NameText)){
    //             $(this).trigger("focus").trigger("select")

    //             ErrorMessage.addClass("alert alert-danger")
    //             ErrorMessage.text("Please enter a valid first name")
    //             ErrorMessage.show()

    //         } else {
    //             // success in matching full name with regex
    //             ErrorMessage.removeAttr("Class")
    //             ErrorMessage.hide()

    //         }
    //     })
    //     $('#lastname').on("blue", function(){
    //         let NameText=$(this).val()

    //         if(!NamePattern.test(NameText)){
    //             $(this).trigger("focus").trigger("select")

    //             ErrorMessage.addClass("alert alert-danger")
    //             ErrorMessage.text("Please enter a valid last name")
    //             ErrorMessage.show()

    //         } else {
    //             // success in matching full name with regex
    //             ErrorMessage.removeAttr("Class")
    //             ErrorMessage.hide()
    //         }
    //     })
    // }

    // function testEmail(){
    //     let ErrorMessage = $("ErrorMessage").hide()

    //     let fullEmailPattern = /^([a-zA-Z0-9-.]+)@([a-zA-Z0-9-.]+).([a-zA-Z]{2,5})$/g
    //     $('#emailaddress').on("blue", function(){
    //         let fullEmailText=$(this).val()

    //         if(!fullEmailPattern.test(fullEmailText)){
    //             $(this).trigger("focus").trigger("select")
    //             ErrorMessage.addClass("alert alert-danger")
    //             ErrorMessage.text("Must enter a valid Email including @ and a . PLease.")
    //             ErrorMessage.show()
    //             return false;

    //         } else {
    //             // success in matching email with regex
    //             ErrorMessage.removeAttr("Class")
    //             ErrorMessage.hide()
    //             return true;
    //         }
    //     })


    // }
    // function testpassword(){
    //     let ErrorMessage = $("ErrorMessage").hide()

    //     let fullPasswordPattern = /^({6,25})$/g
    //     $('#password').on("blue", function(){
    //         let fullPasswordText=$(this).val()

    //         if(!fullPasswordPattern.test(fullpasswordext)){
    //             $(this).trigger("focus").trigger("select")

    //             ErrorMessage.addClass("alert alert-danger")
    //             ErrorMessage.text("Must enter a valid password. Must be 6 characters minimum")
    //             ErrorMessage.show()
    //             return false;
    //         } else {
    //             // success in matching email with regex
    //             ErrorMessage.removeAttr("Class")
    //             ErrorMessage.hide()
    //             return true;
    //         }
    //     })
        
    //     comparePw();

    // }
    
    function Start() {
        console.log("App Started!")
        const about = document.getElementById("about")
        human = document.createElement("li")
        human.innerHTML = `<a class="nav-link" href="#"><i class="fa-light fa-person"></i> Human Resources</a>`
        human.classList.add("nav-item")
        about.parentNode.insertBefore(human, about.nextSibling)
        //Projects()
        Content()
        switch(document.title){
            case "user Us - WEBD6201 LAB 2":
            user()
            break
        }
        switch(document.title){
            case "Register - WEBD6201 LAB 2":
            DisplayUser()
        }
    }



    window.addEventListener("load", Start)
})()