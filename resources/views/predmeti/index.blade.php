@extends('layouts.app')

@section('content')
    <h1>Lista predmeta</h1>
    <br>
    @foreach ($pred as $p)
        <div class="well">
        <h3><a href="/predmeti/{{$p->id}}">{{$p->title}}</a></h3>
        <small>Written on: {{$p->created_at}} Written by: {{$p->user->name}}</small>
        
        @if(!Auth::guest())
        @if (Auth::user()->id == $p->user_id || (auth()->user()->role == 'Admin')))
                {!!Form::open(['action' => ['PredmetiController@destroy', $p->id], 'method' =>'POST', 'class' => 'pull-right'])!!}
                {{Form::hidden('_method','DELETE')}}
                {{Form::submit('Izbriši', ['class' => 'btn btn-danger'])}}
                {!!Form::close()!!}
                <a href="/predmeti/{{$p->id}}/edit" class="btn btn-default pull-right">Uredi</a>
        @endif
        @endif
            </div> 
        @endforeach
    <br>
    <div class="row justify-content-center">
        {{$pred->links()}}
    </div>
    @if(!Auth::guest())
        @if ((auth()->user()->role == 'Admin') || (auth()->user()->role == 'Profesor' ))
            <a href="/predmeti/create" class="btn btn-primary pull-right">Novi predmet</a>
        @endif
    @endif
@endsection
