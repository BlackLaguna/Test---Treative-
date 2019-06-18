
const routes = {
    tourist     :    '/Test2/public/api/tourist',
    flight      :    '/Test2/public/api/flight'
};

var touristsList = document.getElementById('touristsList');
var touristsManager = document.getElementById('touristsManager');
var flightsList = document.getElementById('flightsList');
var flightsManager = document.getElementById('flightsManager');
var generalContent = document.getElementById('generalContent');
var body = document.getElementsByTagName('body');


function resetContent(){
    generalContent.innerHTML='';
}

touristsList.onclick = showTourisList;
flightsList.onclick = showFlightList;
touristsManager.onclick = showTouristManager;
flightsManager.onclick = showFlightManager;


function showTourisList (event = false) {
   if(event) event.preventDefault();
    let request = new XMLHttpRequest();
    request.open('GET', routes.tourist, true);
    request.onload = function() {
        let data = JSON.parse(this.response);
        resetContent();
        if (request.status >= 200 && request.status < 400)   {
            let headers = ['Tourist Number','Firs Name','Last Name','Gender','Country','Remarks','Birthday'];
            generalContent.innerHTML = buildTable(headers,data,'tourist_id');
        } else {
            generalContent.innerHTML = request.status;
        }
    }
    request.send();

}

function showFlightList (event) {
    event.preventDefault();
    let request = new XMLHttpRequest();
    request.open('GET', routes.flight, true);
    request.onload = function() {
        let data = JSON.parse(this.response);
        resetContent();
        if (request.status >= 200 && request.status < 400)   {
            let headers = ['Flight Number','Departure date and time','Arrival date and time','Number of seats','Ticket price'];
            generalContent.innerHTML = buildTable(headers,data,'flight_id');
        } else {
            generalContent.innerHTML = request.status;
        }
    }
    request.send();
}

function showTouristManager(event) {
    event.preventDefault();

    let request = new XMLHttpRequest();

    request.open('GET', routes.tourist, true);

    request.onload = function() {

        let data = JSON.parse(this.response);
        resetContent();

        if (request.status >= 200 && request.status < 400)   {

            let headers = ['Tourist Number','Firs Name','Last Name','Gender','Country','Remarks','Birthday','Delete Tourist'];
            generalContent.innerHTML = addInputs([{name: 'First name',    type: 'text'},
                                                        {name: 'Last name',     type: 'text'},
                                                        {name: 'Gender',        type: 'text'},
                                                        {name: 'Country',       type: 'text'},
                                                        {name: 'Remarks',       type: 'text'},
                                                        {name: 'Date of birth', type: 'date'},],routes.tourist);
            generalContent.innerHTML += buildTable(headers,data,'tourist_id',true,'date_of_birth','deleteTourist');

        } else {

            generalContent.innerHTML = request.status;
        }
    }
    request.send();
}

function showFlightManager(event) {
    event.preventDefault();

    let request = new XMLHttpRequest();

    request.open('GET', routes.flight, true);

    request.onload = function() {

        let data = JSON.parse(this.response);
        resetContent();

        if (request.status >= 200 && request.status < 400)   {

            let headers = ['Flight Number','Departure date and time','Arrival date and time','Number of seats','Ticket price','Delete Flight'];
            generalContent.innerHTML = addInputs([{name: 'Departure date and time',   type: 'datetime-local',},
                                                        {name: 'Arrival date and time',     type: 'datetime-local'},
                                                        {name: 'Number of seats',           type:'number'},
                                                        {name: 'Ticket price',              type:'number'}],routes.flight);
            generalContent.innerHTML += buildTable(headers,data,'flight_id',true,'ticket_price','deleteFlight');

        } else {
            generalContent.innerHTML = request.status;
        }
    }
    request.send();
}

body[0].onclick = function (event) {
    if(event.target.classList.contains('deleteTourist'))deleteResourse(event.target,routes.tourist);
    if(event.target.classList.contains('deleteFlight'))deleteResourse(event.target,routes.flight);
    if(event.target.classList.contains('sendForm'))addResourse(event.target.dataset.route);
    if(event.target.classList.contains('linktourist'))openResourse(event,event.target.dataset.url,event.target.dataset.id,'Tourist №');
    if(event.target.classList.contains('linkflight'))openResourse(event,event.target.dataset.url,event.target.dataset.id,'Flight №');
    if(event.target.classList.contains('addRelation'))changeRelation('POST',event.target.dataset.route,event.target.dataset.str,event.target.dataset.id);
    if(event.target.classList.contains('deleteRelation'))changeRelation('DELETE',event.target.dataset.route,event.target.dataset.str,event.target.dataset.id);
}

function openResourse(event,url,id,str) {
    event.preventDefault();
    let requst = new XMLHttpRequest();
    requst.open('GET',url,true);
    requst.onload = function () {
        let data = JSON.parse(this.response);
        if(requst.status === 200){
            resetContent();
            generalContent.innerHTML = '<h2 class="red-text text-center">'+str+id+'</h2>';
            buildTableRelationship(id,str);
        } else {
            alert('error: ' + request.status);
        }

    }
    requst.send();
}

function addResourse(url) {
    let request = new XMLHttpRequest();
    let form = document.getElementById('form');
    let data = new FormData(form);
    request.open('POST', url , true);
    request.onload = function () {
        if (request.status === 200) {
            alert('success');
            document.getElementById("form").reset();
        } else {
            alert('error: ' + request.status);
        }
    }
    request.send(data);
}

function deleteResourse(e,url) {
    let delTr = document.getElementById('tr' + e.dataset.id);
    let request = new XMLHttpRequest();

    request.open('DELETE', url + '/' + e.dataset.id, true);
    request.onload = function () {
        if (request.status === 200) delTr.remove();
        else alert('error: ' + request.status);
    }
    request.send();
}

function changeRelation(method,url,str,id) {
    let request = new XMLHttpRequest();

    request.open(method,url,true);
    request.onload = function () {
        if(request.status === 200){
            document.getElementById('rowTable').remove();
            buildTableRelationship(id,str);
        } else {
            alert('error '+ request.status);
        }
    }
    request.send();
}





function buildTable(headers, data, option, button = false, buttonOption, buttonClassName) {
    let content = '<table class="table table-hover"><thead><tr>';
    let reversArray = [];
    let url = option;

    url = url.substring(0, url.length - 3);

    if(button){
        data = data.map((e) => {
            e[buttonOption] = e[buttonOption] + '</td><td><button type="button" data-id="'+e[option]+'" class="btn btn-danger ' + buttonClassName + '">Delete</button>';
            return e;
        });
    }

    data = data.map((e) => {
        reversArray["<a href='#' class='link"+url+"' data-id='"+e[option]+"' data-url='"+ routes[url]+'/'+e[option] +"'>" +  e[option] + "</a>"] = e[option];
        e[option] =  "<a href='#' class='link"+url+"' data-id='"+e[option]+"' data-url='"+ routes[url]+'/'+e[option]  +"'>" +  e[option] + "</a>";

        return e;
    });

    content += headers.reduce((a, c) => a + "<th>" + c + "</th>", "") + '</tr></thead><tbody>';
    content += data.reduce((a, c) => a + "<tr id='tr"+reversArray[c[option]]+"'>" + Object.values(c).reduce((a, c) => a + "<td>" + c + "</td>", "")  + "</tr>", "");

    return content + '</tbody></table>';
}

function addInputs(names,route) {
    let content = '<form id="form"><div class="row">';

    content += names.reduce((a, c) => a + "<div class=\"col-md-2\">"+c['name']+"</div>" , "") +'</div>';
    content += '<div class="row">' + names.reduce((a, c) => a + "<div class=\"col-md-2\"><input name='"+c['name']+"' type=\""+c['type']+"\" class=\"form-control\" placeholder=\""+c['name']+"\"></div>" , "");

    return content + '<div class="col"><button type="button" data-route="'+route+'" class="btn btn-primary float-right sendForm">Save</button></div></div></form>';
}

function buildTableRelationship(id,str) {
    if(str === 'Tourist №'){
        let request = new XMLHttpRequest();
        let content = '<div id="rowTable" class=row>';
        request.open('GET', routes.tourist +'/'+ id+'/flights', true);
        request.onload = function () {
            if (request.status === 200) {
                let data = JSON.parse(this.response);
                data['flights'].map((e) => {
                  delete( e['pivot']);
                   return e;
                });
                content += '<div class="col-6"><table class="table table-hover">' + data['flights'].reduce((a, c) => a + "<tr>" + Object.values(c).reduce((a, c) => a + "<td>" + c + "</td>", "")  + "<td><button data-str='"+str+"' data-id='"+id+"' data-route='"+routes.tourist +'/'+ id+'/flights/'+c['flight_id']+"' type=\"button\" class=\"btn btn-danger deleteRelation\">Delete</button></td></tr>", "") +'</table></div>';
                content += '<div class="col-6"><table class="table table-hover">' + data['noFlights'].reduce((a, c) => a + "<tr>" + Object.values(c).reduce((a, c) => a + "<td>" + c + "</td>", "")  + "<td><button data-str='"+str+"' data-id='"+id+"' data-route='"+routes.tourist +'/'+ id+'/flights/'+c['flight_id']+"' type=\"button\" class=\"btn btn-success addRelation\">Add</button></td></tr>", "") +'</table></div>';
                return generalContent.innerHTML += content +'</div>';
            }
            else alert('error: ' + request.status);
        }
        request.send();
    }
    if(str === 'Flight №'){
        let request = new XMLHttpRequest();
        let content = '<div id="rowTable" class=row>';
        request.open('GET', routes.flight +'/'+ id+'/tourists', true);
        request.onload = function () {
            if (request.status === 200) {
                let data = JSON.parse(this.response);
                data['tourists'].map((e) => {
                    delete( e['pivot']);
                    return e;
                });
                content += '<div class="col-6"><table class="table table-hover">' + data['tourists'].reduce((a, c) => a + "<td>" + Object.values(c).reduce((a, c) => a + "<td>" + c + "</td>", "")  + "<td><button data-str='"+str+"' data-id='"+id+"' data-route='"+routes.flight +'/'+ id+'/tourists/'+c['tourist_id']+"' type=\"button\" class=\"btn btn-danger deleteRelation\">Delete</button></td></tr>", "") +'</table></div>';
                content += '<div class="col-6"><table class="table table-hover">' + data['noTourists'].reduce((a, c) => a + "<tr>" + Object.values(c).reduce((a, c) => a + "<td>" + c + "</td>", "")  + "<td><button data-str='"+str+"' data-id='"+id+"' data-route='"+routes.flight +'/'+ id+'/tourists/'+c['tourist_id']+"' type=\"button\" class=\"btn btn-success addRelation\">Add</button></td></tr>", "") +'</table></div>';
                return generalContent.innerHTML += content +'</div>';
            }
            else alert('error: ' + request.status);
        }
        request.send();
    }
}



showTourisList();