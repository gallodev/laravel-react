<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Todos;

class TodoController extends Controller
{
    public function index(){        
        return Todos::all();
    }

    public function show($id){
        return Todos::find($id);
    }

    public function create(Request $request){
        return Todos::create($request->all());
    }

    public function update(Request $request,$id){
        $todo = Todos::findorfail($id);
        Todos::update($request->all());

        return $todo;
    }

    public function delete($id){
        Todos::find($id)->delete();

        return 204;        
    }

}
