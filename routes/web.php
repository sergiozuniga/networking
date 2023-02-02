<?php

use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Auth;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

Route::get('t', function() {
    dd(env('APP_URL'));
});

Auth::routes();

Route::get('/home', 'HomeController@index')->name('home');
Route::get('/message/{id}', 'MessageController@chatHistory')->name('message');
Route::get('/video/{id}', 'VideocallController@index')->name('video');
Route::get('/calendar/{id}', 'EventController@index')->name('calendar');
Route::get('/event/{id}', 'EventController@calendar')->name('event');
Route::post('/event/action', 'EventController@action')->name('event.action');

Route::group(['prefix'=>'ajax', 'as'=>'ajax::'], function() {
   Route::post('message/send', 'MessageController@ajaxSendMessage')->name('message.new');
   Route::delete('message/delete/{id}', 'MessageController@ajaxDeleteMessage')->name('message.delete');
});


