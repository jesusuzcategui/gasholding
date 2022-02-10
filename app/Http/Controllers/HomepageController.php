<?php
 
namespace App\Http\Controllers;
 
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

 
class HomepageController extends Controller
{
    
    public function index(Request $request, Response $response)
    {
		return response()->json(['Name' => 'Wendy']);
    }
}