<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <title>Document</title>
</head>
<body>

<nav class="navbar navbar-expand-sm navbar-dark bg-dark">
    <button class="navbar-toggler mr-2" type="button" data-toggle="collapse" data-target="#navbar">
        <span class="navbar-toggler-icon"></span>
    </button>
    <span class="navbar-brand d-flex flex-fill">Brand</span>
    <div class="navbar-collapse collapse" id="navbar">
        <ul class="navbar-nav justify-content-center d-flex flex-fill">
            <li id="touristsListLi" class="nav-item  ">
                <a id="touristsList" class="nav-link" href="">Tourists list</a>
            </li>
            <li id="touristsManagerLi" class="nav-item">
                <a id="touristsManager" class="nav-link" href="">Tourists manager</a>
            </li>
            <li id="flightsListLi" class="nav-item">
                <a id="flightsList" class="nav-link" href="">Flights list</a>
            </li>
            <li id="flightsManagerLi" class="nav-item">
                <a id="flightsManager" class="nav-link" href="">Flights manager</a>
            </li>
        </ul>
    </div>
    <div class="d-flex flex-fill"><!--spacer--> </div>
</nav>
<div id="generalContent" class="container-fluid text-center"></div>




<script src="{{URL::asset('js/script.js')}}"></script>
<script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
</body>
</html>