// function ajax() {
//     http://172.28.194.45:8081/microdata-console-api/user/getLoginUser
// }

function ajax(url, fnSucc, fnFaild) {

    let oAjax;
    // if (window.XMLHttpRequest) {
    // if (global.XMLHttpRequest) {
    //
    //     oAjax = new XMLHttpRequest();
    //
    // } else {
    //
    //     oAjax = new ActiveXObject("Microsoft.XMLHTTP");
    // }

    oAjax = new XMLHttpRequest();

    oAjax.open('GET', url, true);

    oAjax.send();

    oAjax.onreadystatechange = function () {

            if (oAjax.status === 200) {

                fnSucc(oAjax.responseText);

            } else {

                if (fnFaild) {

                    fnFaild(oAjax.status);

                }

            }
    };

}

ajax('http://172.28.194.45:8081/microdata-console-api/user/getLoginUser',function (response) {
    console.log(response);
},function (response) {
    console.log(response);
});