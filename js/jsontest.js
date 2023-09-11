var soldMain = document.getElementById('sold_data'),
//    info = document.getElementById('info'),
    requestURL = '../Soldiers.json',
    request = new XMLHttpRequest();
request.open('GET', requestURL);
request.onload = function(e) {
    if (request.readyState === 4) {
        if (request.status === 200) {
            console.log(request.response);
            var dataResult = JSON.parse(request.responseText);
            getTableInfo(dataResult);
        } else {
            console.error(request.statusText);
        }
    }
};
request.onerror = function(e) {
    console.error(request.statusText);
};
request.send();

function getTableInfo(data) {
 // console.log(Array.isArray(data.workers));
    data.forEach(function(elem) {
        let tr = document.createElement('div');
        tr.innerHTML = `${elem.HP}<br>${elem.ATK}<br>${elem.DEF}<br>${elem.MDEF}`;
        workers.appendChild(div);
    });
}