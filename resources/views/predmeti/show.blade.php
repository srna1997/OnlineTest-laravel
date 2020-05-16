@extends('layouts.app')

@section('content')
    <h1>{{$pred->title}}</h1>
    <small>Objavljeno: {{$pred->created_at}}<br><br>
    <div class="jumbotron">
        {!!$pred->body!!}
    </div>
    <hr>
    @if(!Auth::guest())
        <a href="/predmeti/{{$pred->id}}/objave" class="btn btn-default">Obavijesti</a>
    @endif
<hr>


    <a href="/predmeti" class="btn btn-danger pull-right">Nazad</a> 
@endsection