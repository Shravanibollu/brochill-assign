<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;


use App\Models\Actors;

class ActorController extends Controller
{
    public function index(Request $request){
        $query = Actors::query();
        if ($data = $request->input('category')) {
            $query->whereRaw("category LIKE '%" . $data . "%'");
        }
        return $query->get();
    }
     
    public function add(Request $request){

       
        $newActor= new Actors();

        $newActor->actor_name = $request->{'name'};
        $newActor->category= $request->{'industry'};

        $newActor->save();
        return $newActor;
        return $request;
    }
}
