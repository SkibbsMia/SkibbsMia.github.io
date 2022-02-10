/*
Names: Maria Skibinski, Eric Fisher
Student IDs: *********, 100481944
Date Completed: February 10th, 2022
*/

function start()
{
    /*All the text (body copy) for your site content above should be injected in the page via
    JavaScript only. For this Lab, you may hard code your text in string variables.*/

    // Text for the about page
    var aboutIntro = document.createTextNode("Information about the people who created this website.");

    var mariaBio = document.createTextNode("Maria Skibinski is a twenty-one year old attending Durham College in Ontario for Computer Programming and Analysis." +
    "She is currently at McDonald's and has been for five years and hopes to find a job in her field. Programming is a passion," +
    " and she just loves to work on coding project and be able to problem solve. Currently her main interest is web development " +
    "as she finds interest in Front-end Web Development. (Working with HTML, CSS, JavaScript, Php and many more)");

    var ericBio = document.createTextNode("orem ipsum dolor sit amet, consectetur adipiscing elit. Proin nulla ex, rutrum id tris");

    document.getElementById("IdAboutUsPara").appendChild(aboutIntro);
    document.getElementById("IdMariaInfo").appendChild(mariaBio);
    document.getElementById("IdEricInfo").appendChild(ericBio);

    /*Using only JavaScript change the Products link found in the Navbar above to Projects. */
    document.getElementById('IdProductLink').innerText = "Project";

    /*Using only JavaScript, add another link to the Navbar above named Human Resources,
    that sits between About Us and Contact Us. You may not hard code this in the html file
    this must be done using DOM manipulation. Ensure that you also include an appropriate
    font-icon using Font-Awesome */

}

window.addEventListener( "load", start, false);