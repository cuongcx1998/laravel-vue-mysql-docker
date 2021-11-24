<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
	<meta name="csrf-token" content="{{ csrf_token() }}">
  <meta name="locale" content="{{ str_replace('_', '-', app()->getLocale()) }}">
	<title>Home</title>
	<link rel="stylesheet" href="{{ mix('css/bootstrap.css') }}">
	<link rel="stylesheet" href="{{ mix('css/app.css') }}">
</head>
<body>
	<div id="app"></div>
	<script src="{{ mix('js/app.js') }}"></script>
</body>
</html>
