@extends('layouts.app')

@section('content')
<div class="container">
    <div class="row justify-content-center">
        <div class="col-md-8">
            <div class="card">
                <div class="card-header">Dashboard</div>

                <div class="card-body">
                    <div class="text-center">
                        @if ((auth()->user()->role == 'Admin') || (auth()->user()->role == 'Profesor' ))
                            <a href="/posts/create" class="btn btn-info">Create Post</a>
                        @else 
                            <h4>Dobro došli {{auth()->user()->name}} {{auth()->user()->lastname}}</h4>
                        @endif
                    </div>
                    @if (session('status'))
                        <div class="alert alert-success" role="alert">
                            {{ session('status') }}
                        </div>
                    @endif
                </div>
            </div>
        </div>
    </div>
    <br>
    @if(count($posts) > 0)
    <div class="row justify-content-center">
    <table class="table table-striped" style="max-width:60%">
        <tr>
            <th>Title</th>
            <th></th>
            <th></th>
        </tr>
        @foreach($posts as $post)
            <tr>
                <td>{{$post->title}}</td>
                <td><a href="/posts/{{$post->id}}/edit" class="btn btn-default">Edit</a></td>
                <td>{!!Form::open(['action' => ['PostsController@destroy', $post->id], 'method' =>'POST', 'class' => 'pull-right'])!!}
                    {{Form::hidden('_method','DELETE')}}
                    {{Form::submit('Delete', ['class' => 'btn btn-danger'])}}
                    {!!Form::close()!!}
                </td>
            </tr>
        @endforeach
    </table>
    </div>
    @endif
</div>
@endsection
