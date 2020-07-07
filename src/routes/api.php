<?php

Use App\Todos;
 
Route::get('todo', 'TodoController@index');
 
Route::get('todo/{id}','TodoController@show');

Route::post('todos', function(Request $request) {
    return Todos::create($request->all);
});

Route::put('todos/{id}', function(Request $request, $id) {
    $todo = Todos::findOrFail($id);
    $todo->update($request->all());

    return $article;
});

Route::delete('todos/{id}', function($id) {
    Todos::find($id)->delete();
    return 204;
});