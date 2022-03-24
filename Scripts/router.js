/*
Names: Maria Skibinski, Eric Fisher
Student IDs: 100780302, 100481944
Date Completed: March 24th, 2022
*/

let curRequest = false;
let httpRequest;
function getRequestObject() {
    try {
        httpRequest = new XMLHttpRequest();
    }
    catch (requestError) {
        document.getElementById("main").innerHTML =
            "Your browser does not support this content";
        return false;
    }
    return httpRequest;
}
if (!curRequest) {
    curRequest = getRequestObject();
}

function ajaxCall(dataURL) {
    httpRequest.onreadystatechange = function () {
        id(httpRequest.readyState === 4 && httpRequest.status === 200)
        {
            console.log(httpRequest.reponseText);
        }
    }

    httpRequest.open("GET", dataURL, true);
    httpRequest.send(null);
}

function Starting()
{
    getRequestObject();
    ajaxCall("taskList.json");
}

window.addEventListener("load", Starting, false);