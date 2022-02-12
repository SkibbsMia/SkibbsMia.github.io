/*
Names: Maria Skibinski, Eric Fisher
Student IDs: *********, 100481944
Date Completed: February 10th, 2022
*/

function Start()
{
    // Text for the about page
    if ( window.location.pathname == "/Scripts/about.html")
    {
        AboutPageInfo();
    }
    //Text for the home page
    else if ( window.location.pathname == "/Scripts/index.html")
    {
        IndexPageInfo();
    }
    //Text for the projects page
    else if ( window.location.pathname == "/Scripts/products.html")
    {
        ProjectsPageInfo();
    }
    //Text for the services page
    else if ( window.location.pathname == "/Scripts/services.html")
    {
        ServicesPageInfo();
    }
    // Contact Form Functionality
    else if ( window.location.pathname == "/Scripts/contact.html")
    {
        document.getElementById("IdContactForm").addEventListener("submit", ContactFormSubmit, false);
    }
    
    ProductToProject();

    HumanResouceNav();
}

window.addEventListener( "load", Start, false);

function AboutPageInfo()
{
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

function IndexPageInfo()
{
    var indexIntro = document.createTextNode("Welcome to our website! This website is dedicated to the WEBD 6201 course! This is the labs that are have to build " +
    "off of. Currently this website is dedicated to Lab One. It has a homepage(This current tab!), Projects, Services, About Us and a Contact Us pages.");
    document.getElementById("IdIndexParagraph").appendChild(indexIntro);
}

function ProjectsPageInfo()
{
    var projectsIntro = document.createTextNode("projects intro");

    var projectOne = document.createTextNode("project one desc");
    
    var projectTwo = document.createTextNode("project two desc");

    var projectThree = document.createTextNode("project three desc");

    document.getElementById("projectsIntroPara").appendChild(projectsIntro);
    document.getElementById("projectOnePara").appendChild(projectOne);
    document.getElementById("projectTwoPara").appendChild(projectTwo);
    document.getElementById("projectThreePara").appendChild(projectThree);
}
function ServicesPageInfo()
{
    var servicesIntro = document.createTextNode("service intro");

    var serviceOne = document.createTextNode("service one desc");
    
    var serviceTwo = document.createTextNode("service two desc");

    var serviceThreeThree = document.createTextNode("service three desc");

    document.getElementById("serviesIntroPara").appendChild(servicesIntro);
    document.getElementById("serviceOnePara").appendChild(serviceOne);
    document.getElementById("serviceTwoPara").appendChild(serviceTwo);
    document.getElementById("serviceThreePara").appendChild(serviceThree);
}

function ProductToProject()
{
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
    newAProjectsTag.setAttribute( "href", "products.html");
    newAProjectsTag.setAttribute( "id", "IdProjects");

    // Append the nodes together
    newAProjectsTag.appendChild(iconForProject);
    newAProjectsTag.appendChild(document.createTextNode("Projects"));
    
    // Replace the old a tag with the new one
    currentAProductTag.parentNode.replaceChild(newAProjectsTag, currentAProductTag);
}

function HumanResouceNav()
{
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

    // Set attributes to the a tag
    a.setAttribute( "href", "humanResources.html");
    a.setAttribute( "id", "IdhumanResources");
    
    // Set attributes to the i tag
    iTagForHumanResources.setAttribute("class", "fa-solid fa-person");
    iTagForHumanResources.setAttribute("style", "margin-right: 5px");

    // Append the nodes together
    a.appendChild(iTagForHumanResources);
    a.appendChild(document.createTextNode("Human Resources"));
    li.appendChild(a);

    // Insert the new link in the Navbar between About Us and Contact Us
    ul.insertBefore(li, document.getElementById("IdAboutList"));

}

function ContactFormSubmit(e)
{
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
