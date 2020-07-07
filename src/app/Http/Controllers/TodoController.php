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
}
