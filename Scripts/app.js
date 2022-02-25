/*
Create a JavaScript Class named User, in the same file (app.js) but above the 
IIFE that includes firstName, lastName, username, email and password properties.
*/
class User {
    constructor(firstName, lastName, email, password) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.password = password;
    }
}

/*
Names: Maria Skibinski, Eric Fisher
Student IDs: 100780302, 100481944
Date Completed: February 11th, 2022
*/

function Start() {
    // Text for the about page
    if (window.location.pathname == "/Scripts/about.html") {
        AboutPageInfo();
    }
    //Text for the home page
    else if (window.location.pathname == "/Scripts/index.html") {
        IndexPageInfo();
    }
    //Text for the projects page
    else if (window.location.pathname == "/Scripts/products.html") {
        ProjectsPageInfo();
    }
    //Text for the services page
    else if (window.location.pathname == "/Scripts/services.html") {
        ServicesPageInfo();
    }
    // Contact Form Functionality
    else if (window.location.pathname == "/Scripts/contact.html") {
        document.getElementById("IdContactForm").addEventListener("submit", ContactFormSubmit, false);
    }

    ProductToProject();

    HumanResouceNav();

    // grabs the session username if there is one,
    username = sessionStorage.getItem('username');

    // if there is one then it will add it to the nav bar.
    if (username != null) {
        UsernameNav();
    }
}

window.addEventListener("load", Start, false);

function AboutPageInfo() {
    var aboutIntro = document.createTextNode("Information about the people who created this website.");

    var mariaBio = document.createTextNode("Maria Skibinski is a twenty-one year old attending Durham College in Ontario for Computer Programming and Analysis." +
        " She is currently at McDonald's and has been for five years and hopes to find a job in her field. Programming is a passion," +
        " and she just loves to work on coding project and be able to problem solve. Currently her main interest is web development " +
        "as she finds interest in Front-end Web Development. (Working with HTML, CSS, JavaScript, Php and many more)");

    var ericBio = document.createTextNode("Eric Fisher is currently enrolled in the Computer Programming Diploma Program at Durham College." +
        " He previously graduated the Computer Foundations certificate program in 2020." +
        " He currently works as a Retail Sales Associate in the telecommunications industry. Prior to that he worked in the restaurant industry for over 10 years" +
        " in several positions, most notably as a host and food server. Eric considers himself to be an adaptive and creative problem-solver.");

    document.getElementById("IdAboutUsPara").appendChild(aboutIntro);
    document.getElementById("IdMariaInfo").appendChild(mariaBio);
    document.getElementById("IdEricInfo").appendChild(ericBio);
}

function IndexPageInfo() {
    var indexIntro = document.createTextNode("Welcome to our website! This website is dedicated to the WEBD 6201 course! This is the labs that are have to build " +
        "off of. Currently this website is dedicated to Lab One. It has a homepage(This current tab!), Projects, Services, About Us and a Contact Us pages.");
    document.getElementById("IdIndexParagraph").appendChild(indexIntro);
}

function ProjectsPageInfo() {
    var projectsIntro = document.createTextNode("This page features an image and brief summary of 3 of our favourite projects.");

    var projectOne = document.createTextNode("This project is a functional BMI calculator. The website uses a responsive layout, and was built with HTML, CSS, Javascript.");

    var projectTwo = document.createTextNode("This is a Lab created with .Net framework and C#. This Lab was showing how we can connect a database to a website in .net. It was fully functional and even had a sign in page.");

    var projectThree = document.createTextNode("This is a Activity Diagram that was created for a made-up library application. It was done by using Visio and having a knowledgeable background in System Development.");

    document.getElementById("projectsIntroPara").appendChild(projectsIntro);
    document.getElementById("projectOnePara").appendChild(projectOne);
    document.getElementById("projectTwoPara").appendChild(projectTwo);
    document.getElementById("projectThreePara").appendChild(projectThree);
}
function ServicesPageInfo() {
    var servicesIntro = document.createTextNode("There are 3 services we offer. They are:");

    var serviceOne = document.createTextNode("We offer database development services. We are experienced with tools, such as Microsoft Access and SQL and are able to assist with database development from planning and design to implementation.");

    var serviceTwo = document.createTextNode("We offer web development services. We are able to implement a variety of programming languages and tools, including, but not limited to HTML, CSS, Javascript/Jquery, SQL, PHP, C#, and more.");

    var serviceThree = document.createTextNode("We offer systems and analysis and development services. We are able to use UML and other methods to effectively analyze existing systems and develop new systems.");

    document.getElementById("introServices").appendChild(servicesIntro);
    document.getElementById("serviceOnePara").appendChild(serviceOne);
    document.getElementById("serviceTwoPAra").appendChild(serviceTwo);
    document.getElementById("serviceThreePara").appendChild(serviceThree);
}

function ProductToProject() {
    /*Using only JavaScript change the Products link found in the Navbar above to Projects. */

    // Grab the current a tag for product
    var currentAProductTag = document.getElementById("IdProductLink");

    // Create new i and a tags
    var iconForProject = document.createElement("i");
    var newAProjectsTag = document.createElement("a");

    // Set attributes to the i tag
    iconForProject.setAttribute("class", "fa-solid fa-code");
    iconForProject.setAttribute("style", "margin-right: 5px");

    // Set attributes to the a tag
    newAProjectsTag.setAttribute("href", "products.html");
    newAProjectsTag.setAttribute("id", "IdProjects");

    // Append the nodes together
    newAProjectsTag.appendChild(iconForProject);
    newAProjectsTag.appendChild(document.createTextNode("Projects"));

    // Replace the old a tag with the new one
    currentAProductTag.parentNode.replaceChild(newAProjectsTag, currentAProductTag);
}

function HumanResouceNav() {
    /*Using only JavaScript, add another link to the Navbar above named Human Resources,
    that sits between About Us and Contact Us. You may not hard code this in the html file
    this must be done using DOM manipulation. Ensure that you also include an appropriate
    font-icon using Font-Awesome */

    // Find the ul in the Nav bar
    var ul = document.getElementById("IdNavList");

    // Create new tags
    var li = document.createElement("li");
    var a = document.createElement("a");
    var iTagForHumanResources = document.createElement("i");

    // Set attributes to the li tag
    li.setAttribute("class", "nav-item");

    // Set attributes to the a tag
    a.setAttribute("href", "humanResources.html");
    a.setAttribute("id", "IdhumanResources");

    // Set attributes to the i tag
    iTagForHumanResources.setAttribute("class", "fa-solid fa-person");
    iTagForHumanResources.setAttribute("style", "margin-right: 5px");

    // Append the nodes together
    a.appendChild(iTagForHumanResources);
    a.appendChild(document.createTextNode("Human Resources"));
    li.appendChild(a);

    // Insert the new link in the Navbar between About Us and Contact Us
    ul.insertBefore(li, document.getElementById("IdContactList"));

}

function ContactFormSubmit(e) {
    // the user's information gets outputted onto the console.
    let output = ("Full Name: " + document.getElementById("name").value) + "\n" + "Phone Number: " + (document.getElementById("number").value) + "\n" + "Email Address: " + (document.getElementById("email").value) + "\n" + "Short Message: " + (document.getElementById("message").value);
    console.log(output);

    // This is how I was able to have the submit button to wait and then
    // redirect. the preventDefault makes it so I am able to customize what
    // the submit button does.
    e.preventDefault();
    window.setTimeout(function () {
        window.location.replace("index.html");
    }, 3000);
    return false;
}

var username = "";

// Grabs the current session username and creates a tag into the nav.
function UsernameNav() {
    username = sessionStorage.getItem('username');

    $('#IdContactList').after('<li class="nav-text" id="IdUserNameList">' + username + '</li>');
}

$(document).ready(function () {

    //Login - When the login/logout link gets clicked, checks if 
    $('#IdLogin').click(function () {
        username = sessionStorage.getItem('username');
        if (username != null) {
            sessionStorage.removeItem('username');
            $("#IdUserNameList").remove();
            alert("Successfully Logged Out!");
        }
    });

    // Login - when the button is clicked it stores the new username in.
    $("#IdLoginForm").submit(function () {

        username = $("#usernameInput").val();
        sessionStorage.setItem('username', username);
        UsernameNav();

    });

    //Register - Create a div element with id = ErrorMessage
    $("<div id = 'ErrorMessage'></div>").insertAfter("#IdRegisterForm");

    //Hide Error Message
    $("#ErrorMessage").hide();
    let firstNameError = true;
    $("#firstNameInput").keyup(function () {
        validateFirstName();
    });
    let lastNameError = true;
    $("#lastNameInput").keyup(function () {
        validateLastName();
    });
    let emailError = true;
    $("#emailInput").keyup(function () {
        validateEmail();
    });
    let passwordError = true;
    $("#passwordRegisterInput").keyup(function () {
        validatePassword();
    });
    let confirmationError = true;
    $("#passwordConfirmInput").keyup(function () {
        validateConfirmation();
    });

    //Register - If first name or last name are shorter than 2 characters, display appropriate error
    function validateFirstName() {
        let firstName = $("#firstNameInput").val();
        if (firstName.length < 2) {
            if (!$('#IdFirstNameError').length) {
                $("#ErrorMessage").show();
                $('#ErrorMessage').append('<p id="IdFirstNameError">First name must have at least 2 characters.</p>');
                //$("#ErrorMessage").html("<br>First name must have at least 2 characters.");
            }
            firstNameError = false;
            return false;
        }
        else {
            firstNameError = true;
            $('#IdFirstNameError').remove();
            //$("#ErrorMessage").hide();
        }
    }

    function validateLastName() {
        let lastName = $("#lastNameInput").val();
        if (lastName.length < 2) {
            if (!$('#IdLastNameError').length) {
                $("#ErrorMessage").show();
                $('#ErrorMessage').append('<p id="IdLastNameError">Last name must have at least 2 characters.</p>');
                //$("#ErrorMessage").html("<br>Last name must have at least 2 characters.");
            }
            lastNameError = false;
            return false;
        }
        else {
            lastNameError = true;
            $('#IdLastNameError').remove();
            //$("#ErrorMessage").hide();
        }
    }


    //Register - If email does not have at least 8 characters and contain an @ symbol, display appropriate error
    function validateEmail() {
        let email = $("#emailInput").val();

        if (email.length < 8) {
            if (!$('#IdEmailError').length) {
                $("#ErrorMessage").show();
                $('#ErrorMessage').append('<p id="IdEmailError">Email must contain at least 8 characters.</p>');
                //$("#ErrorMessage").html("<br>Email must contain at least 8 characters.")
            }
            emailError = false;
            return false;
        }
        else {
            emailError = true;
            //$("ErrorMessage").hide()
            $('#IdEmailError').remove();
        }
        if (!(email.includes('@'))) {
            if (!$('#IdEmailError').length) {
                $("#ErrorMessage").show();
                $('#ErrorMessage').append('<p id="IdEmailError">Email must contain "@" symbol.</p>');
                //$("#ErrorMessage").html("<br>Email must contain '@' symbol.")
            }
            emailError = false;
            return false;
        }
        else {
            emailError = true;
            //$("ErrorMessage").hide()
            $('#IdEmailError').remove();
        }
    }


    //Register - If password is less than 6 characters and does not match confirm password field, display error
    function validatePassword() {
        let password = $("#passwordRegisterInput").val();
        if (password.length < 6) {
            if (!$('#IdPasswordError').length) {
                $("#ErrorMessage").show();
                $('#ErrorMessage').append('<p id="IdPasswordError">Password must contain at least 6 characters.</p>');
                //$("#ErrorMessage").html("<br>Password must contain at least 6 characters.")
            }
            passwordError = false;
            return false;
        }
        else {
            passwordError = true;
            //$("#ErrorMessage").hide();
            $('#IdPasswordError').remove();
        }
    }
    function validateConfirmation() {
        let password = $("#passwordRegisterInput").val();
        let confirmation = $("#passwordConfirmInput").val();
        if (password != confirmation) {
            if (!$('#IdConfirmationError').length) {
                $("#ErrorMessage").show();
                $('#ErrorMessage').append('<p id="IdConfirmationError">Password and Confirmation Password must match.</p>');
                //$("#ErrorMessage").html("<br>Password and Confirmation Password must match.")
            }
            confirmationError = false;
            return false;
        }
        else {
            confirmationError = true;
            //$("#ErrorMessage").hide();
            $('#IdConfirmationError').remove();
        }
    }
    //Register When user clicks on register button - Prevent default form behaviour
    $("#IdRegisterForm").submit(function (e) {
        e.preventDefault();

        validateFirstName();
        validateLastName();
        validateEmail();
        validatePassword();
        validateConfirmation();
        // if there is no errors create a user.
        if ((firstNameError == true) &&
            (lastNameError == true) &&
            (emailError == true) &&
            (passwordError == true) &&
            (confirmationError == true)) {
            //Register - When form is submitted create instance of User class and display to the console.
            let firstName = $("#firstNameInput").val();
            let lastName = $("#lastNameInput").val();
            let email = $("#emailInput").val();
            let password = $('#passwordRegisterInput').val();

            var userInstance = new User(firstName, lastName, email, password);

            console.log(userInstance);

        }
    });

    // Check if the Error message div is empty. if it is hide it.
    $("#IdRegisterForm").keyup(function () {
        if ($('#ErrorMessage').contents().length == 0) {
            $("#ErrorMessage").hide();
        }
    });

});
