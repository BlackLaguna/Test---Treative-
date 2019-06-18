/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./resources/js/script.js":
/*!********************************!*\
  !*** ./resources/js/script.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var routes = {
  tourist: '/Test2/public/api/tourist',
  flight: '/Test2/public/api/flight'
};
var touristsList = document.getElementById('touristsList');
var touristsManager = document.getElementById('touristsManager');
var flightsList = document.getElementById('flightsList');
var flightsManager = document.getElementById('flightsManager');
var generalContent = document.getElementById('generalContent');
var body = document.getElementsByTagName('body');

function resetContent() {
  generalContent.innerHTML = '';
}

touristsList.onclick = showTourisList;
flightsList.onclick = showFlightList;
touristsManager.onclick = showTouristManager;
flightsManager.onclick = showFlightManager;

function showTourisList() {
  var event = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
  if (event) event.preventDefault();
  var request = new XMLHttpRequest();
  request.open('GET', routes.tourist, true);

  request.onload = function () {
    var data = JSON.parse(this.response);
    resetContent();

    if (request.status >= 200 && request.status < 400) {
      var headers = ['Tourist Number', 'Firs Name', 'Last Name', 'Gender', 'Country', 'Remarks', 'Birthday'];
      generalContent.innerHTML = buildTable(headers, data, 'tourist_id');
    } else {
      generalContent.innerHTML = request.status;
    }
  };

  request.send();
}

function showFlightList(event) {
  event.preventDefault();
  var request = new XMLHttpRequest();
  request.open('GET', routes.flight, true);

  request.onload = function () {
    var data = JSON.parse(this.response);
    resetContent();

    if (request.status >= 200 && request.status < 400) {
      var headers = ['Flight Number', 'Departure date and time', 'Arrival date and time', 'Number of seats', 'Ticket price'];
      generalContent.innerHTML = buildTable(headers, data, 'flight_id');
    } else {
      generalContent.innerHTML = request.status;
    }
  };

  request.send();
}

function showTouristManager(event) {
  event.preventDefault();
  var request = new XMLHttpRequest();
  request.open('GET', routes.tourist, true);

  request.onload = function () {
    var data = JSON.parse(this.response);
    resetContent();

    if (request.status >= 200 && request.status < 400) {
      var headers = ['Tourist Number', 'Firs Name', 'Last Name', 'Gender', 'Country', 'Remarks', 'Birthday', 'Delete Tourist'];
      generalContent.innerHTML = addInputs([{
        name: 'First name',
        type: 'text'
      }, {
        name: 'Last name',
        type: 'text'
      }, {
        name: 'Gender',
        type: 'text'
      }, {
        name: 'Country',
        type: 'text'
      }, {
        name: 'Remarks',
        type: 'text'
      }, {
        name: 'Date of birth',
        type: 'date'
      }], routes.tourist);
      generalContent.innerHTML += buildTable(headers, data, 'tourist_id', true, 'date_of_birth', 'deleteTourist');
    } else {
      generalContent.innerHTML = request.status;
    }
  };

  request.send();
}

function showFlightManager(event) {
  event.preventDefault();
  var request = new XMLHttpRequest();
  request.open('GET', routes.flight, true);

  request.onload = function () {
    var data = JSON.parse(this.response);
    resetContent();

    if (request.status >= 200 && request.status < 400) {
      var headers = ['Flight Number', 'Departure date and time', 'Arrival date and time', 'Number of seats', 'Ticket price', 'Delete Flight'];
      generalContent.innerHTML = addInputs([{
        name: 'Departure date and time',
        type: 'datetime-local'
      }, {
        name: 'Arrival date and time',
        type: 'datetime-local'
      }, {
        name: 'Number of seats',
        type: 'number'
      }, {
        name: 'Ticket price',
        type: 'number'
      }], routes.flight);
      generalContent.innerHTML += buildTable(headers, data, 'flight_id', true, 'ticket_price', 'deleteFlight');
    } else {
      generalContent.innerHTML = request.status;
    }
  };

  request.send();
}

body[0].onclick = function (event) {
  if (event.target.classList.contains('deleteTourist')) deleteResourse(event.target, routes.tourist);
  if (event.target.classList.contains('deleteFlight')) deleteResourse(event.target, routes.flight);
  if (event.target.classList.contains('sendForm')) addResourse(event.target.dataset.route);
  if (event.target.classList.contains('linktourist')) openResourse(event, event.target.dataset.url, event.target.dataset.id, 'Tourist №');
  if (event.target.classList.contains('linkflight')) openResourse(event, event.target.dataset.url, event.target.dataset.id, 'Flight №');
  if (event.target.classList.contains('addRelation')) changeRelation('POST', event.target.dataset.route, event.target.dataset.str, event.target.dataset.id);
  if (event.target.classList.contains('deleteRelation')) changeRelation('DELETE', event.target.dataset.route, event.target.dataset.str, event.target.dataset.id);
};

function openResourse(event, url, id, str) {
  event.preventDefault();
  var requst = new XMLHttpRequest();
  requst.open('GET', url, true);

  requst.onload = function () {
    var data = JSON.parse(this.response);

    if (requst.status === 200) {
      resetContent();
      generalContent.innerHTML = '<h2 class="red-text text-center">' + str + id + '</h2>';
      buildTableRelationship(id, str);
    } else {
      alert('error: ' + request.status);
    }
  };

  requst.send();
}

function addResourse(url) {
  var request = new XMLHttpRequest();
  var form = document.getElementById('form');
  var data = new FormData(form);
  request.open('POST', url, true);

  request.onload = function () {
    if (request.status === 200) {
      alert('success');
      document.getElementById("form").reset();
    } else {
      alert('error: ' + request.status);
    }
  };

  request.send(data);
}

function deleteResourse(e, url) {
  var delTr = document.getElementById('tr' + e.dataset.id);
  var request = new XMLHttpRequest();
  request.open('DELETE', url + '/' + e.dataset.id, true);

  request.onload = function () {
    if (request.status === 200) delTr.remove();else alert('error: ' + request.status);
  };

  request.send();
}

function changeRelation(method, url, str, id) {
  var request = new XMLHttpRequest();
  request.open(method, url, true);

  request.onload = function () {
    if (request.status === 200) {
      document.getElementById('rowTable').remove();
      buildTableRelationship(id, str);
    } else {
      alert('error ' + request.status);
    }
  };

  request.send();
}

function buildTable(headers, data, option) {
  var button = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
  var buttonOption = arguments.length > 4 ? arguments[4] : undefined;
  var buttonClassName = arguments.length > 5 ? arguments[5] : undefined;
  var content = '<table class="table table-hover"><thead><tr>';
  var reversArray = [];
  var url = option;
  url = url.substring(0, url.length - 3);

  if (button) {
    data = data.map(function (e) {
      e[buttonOption] = e[buttonOption] + '</td><td><button type="button" data-id="' + e[option] + '" class="btn btn-danger ' + buttonClassName + '">Delete</button>';
      return e;
    });
  }

  data = data.map(function (e) {
    reversArray["<a href='#' class='link" + url + "' data-id='" + e[option] + "' data-url='" + routes[url] + '/' + e[option] + "'>" + e[option] + "</a>"] = e[option];
    e[option] = "<a href='#' class='link" + url + "' data-id='" + e[option] + "' data-url='" + routes[url] + '/' + e[option] + "'>" + e[option] + "</a>";
    return e;
  });
  content += headers.reduce(function (a, c) {
    return a + "<th>" + c + "</th>";
  }, "") + '</tr></thead><tbody>';
  content += data.reduce(function (a, c) {
    return a + "<tr id='tr" + reversArray[c[option]] + "'>" + Object.values(c).reduce(function (a, c) {
      return a + "<td>" + c + "</td>";
    }, "") + "</tr>";
  }, "");
  return content + '</tbody></table>';
}

function addInputs(names, route) {
  var content = '<form id="form"><div class="row">';
  content += names.reduce(function (a, c) {
    return a + "<div class=\"col-md-2\">" + c['name'] + "</div>";
  }, "") + '</div>';
  content += '<div class="row">' + names.reduce(function (a, c) {
    return a + "<div class=\"col-md-2\"><input name='" + c['name'] + "' type=\"" + c['type'] + "\" class=\"form-control\" placeholder=\"" + c['name'] + "\"></div>";
  }, "");
  return content + '<div class="col"><button type="button" data-route="' + route + '" class="btn btn-primary float-right sendForm">Save</button></div></div></form>';
}

function buildTableRelationship(id, str) {
  if (str === 'Tourist №') {
    var _request = new XMLHttpRequest();

    var content = '<div id="rowTable" class=row>';

    _request.open('GET', routes.tourist + '/' + id + '/flights', true);

    _request.onload = function () {
      if (_request.status === 200) {
        var data = JSON.parse(this.response);
        data['flights'].map(function (e) {
          delete e['pivot'];
          return e;
        });
        content += '<div class="col-6"><table class="table table-hover">' + data['flights'].reduce(function (a, c) {
          return a + "<tr>" + Object.values(c).reduce(function (a, c) {
            return a + "<td>" + c + "</td>";
          }, "") + "<td><button data-str='" + str + "' data-id='" + id + "' data-route='" + routes.tourist + '/' + id + '/flights/' + c['flight_id'] + "' type=\"button\" class=\"btn btn-danger deleteRelation\">Delete</button></td></tr>";
        }, "") + '</table></div>';
        content += '<div class="col-6"><table class="table table-hover">' + data['noFlights'].reduce(function (a, c) {
          return a + "<tr>" + Object.values(c).reduce(function (a, c) {
            return a + "<td>" + c + "</td>";
          }, "") + "<td><button data-str='" + str + "' data-id='" + id + "' data-route='" + routes.tourist + '/' + id + '/flights/' + c['flight_id'] + "' type=\"button\" class=\"btn btn-success addRelation\">Add</button></td></tr>";
        }, "") + '</table></div>';
        return generalContent.innerHTML += content + '</div>';
      } else alert('error: ' + _request.status);
    };

    _request.send();
  }

  if (str === 'Flight №') {
    var _request2 = new XMLHttpRequest();

    var _content = '<div id="rowTable" class=row>';

    _request2.open('GET', routes.flight + '/' + id + '/tourists', true);

    _request2.onload = function () {
      if (_request2.status === 200) {
        var data = JSON.parse(this.response);
        data['tourists'].map(function (e) {
          delete e['pivot'];
          return e;
        });
        _content += '<div class="col-6"><table class="table table-hover">' + data['tourists'].reduce(function (a, c) {
          return a + "<td>" + Object.values(c).reduce(function (a, c) {
            return a + "<td>" + c + "</td>";
          }, "") + "<td><button data-str='" + str + "' data-id='" + id + "' data-route='" + routes.flight + '/' + id + '/tourists/' + c['tourist_id'] + "' type=\"button\" class=\"btn btn-danger deleteRelation\">Delete</button></td></tr>";
        }, "") + '</table></div>';
        _content += '<div class="col-6"><table class="table table-hover">' + data['noTourists'].reduce(function (a, c) {
          return a + "<tr>" + Object.values(c).reduce(function (a, c) {
            return a + "<td>" + c + "</td>";
          }, "") + "<td><button data-str='" + str + "' data-id='" + id + "' data-route='" + routes.flight + '/' + id + '/tourists/' + c['tourist_id'] + "' type=\"button\" class=\"btn btn-success addRelation\">Add</button></td></tr>";
        }, "") + '</table></div>';
        return generalContent.innerHTML += _content + '</div>';
      } else alert('error: ' + _request2.status);
    };

    _request2.send();
  }
}

showTourisList();

/***/ }),

/***/ 1:
/*!**************************************!*\
  !*** multi ./resources/js/script.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\xampp\htdocs\Test2\resources\js\script.js */"./resources/js/script.js");


/***/ })

/******/ });