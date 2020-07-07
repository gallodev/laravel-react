<?php

Use App\Todos;
 
Route::get('todo', 'TodoController@index');
 
Route::get('todo/{id}','TodoController@show');

Route::post('todos','TodoController@create');

Route::put('todos/{id}','TodoController@update');

Route::delete('todos/{id}','TodoController@delete');