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

function registerListerners() {
    getRequestObject();
    DisplayTaskList()

    var task;
    task = document.getElementById(" taskInputId ");

}
window.addEventListener("load", registerListerners, false);

function DisplayTaskList() {
    // attempt to create XMLHttpRequest object and make the request
    try {

        asyncRequest.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                var myArr = JSON.parse(this.responseText);
                console.log(myArr);
            }
        };

        asyncRequest.open("GET", "../taskList.json", true); // prepare the request
        asyncRequest.send(null); // send the request
    } // end try
    catch (exception) {
        alert("Request Failed");
    } // end catch
}

function AddNewTask() {

}