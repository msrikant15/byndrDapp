
showloading();

function showloading() {
  $('#loader').css('display','block');
}

function stopLoading() {
  $('#loader').css('display','none');
}

function GetParameterValues(param) {  
    var url = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');  
    for (var i = 0; i < url.length; i++) {  
        var urlparam = url[i].split('=');  
        if (urlparam[0] == param) {  
            return urlparam[1];  
        }  
    }  
}

$(document).ready(function() {

var state = GetParameterValues('state');

if((state == "list_of_books") || (state == undefined)) {

    $('#list_books_block').css('display','block');

    $('#list_books tbody').append('<tr><td>1</td><td>Tiger Nixon</td><td>System Architect</td><td>Edinburgh</td><td>61</td><td ><span class="issue_book" data-id="1">Issue Book</span></td></tr><tr><td>2</td><td>Garrett Winters</td><td>Accountant</td><td>Tokyo</td><td>63</td><td ><span class="issue_book_disable">Book Issued</span></td></tr>');

    $('#list_books').DataTable(); // data table constructor

}

if(state == "available_books") {
    
    $('#available_books_block').css('display','block');

    $('#available_books tbody').append('<tr><td>1</td><td>Tiger Nixon</td><td>System Architect</td><td>Edinburgh</td><td>61</td><td ><span class="issue_book" data-id="1">Issue Book</span></td></tr><tr><td>2</td><td>Garrett Winters</td><td>Accountant</td><td>Tokyo</td><td>63</td><td ><span class="issue_book_disable">Book Issued</span></td></tr>');


    $('#available_books').DataTable(); // data table constructor

}

if(state == "issue_book") {
 
    $('#issue_book_block').css('display','block');

    $('#issue_books tbody').append('<tr><td>1</td><td>Tiger Nixon</td><td>System Architect</td><td>Edinburgh</td><td>61</td><td ><span class="issue_book" data-id="789465">Issue Book</span></td></tr><tr><td>2</td><td>Garrett Winters</td><td>Accountant</td><td>Tokyo</td><td>63</td><td ><span class="issue_book" data-id="123456">Issue Book</span></td></tr>');


    $('#issue_books').DataTable(); // data table constructor

}

if(state == "books_issued") {

    $('#issued_books_block').css('display','block');


    $('#issued_books tbody').append('<tr><td>1</td><td>Tiger Nixon</td><td>System Architect</td><td>Edinburgh</td><td>61</td><td><span class="issue_book_disable">Book Issued</span></td></tr><tr><td>2</td><td>Garrett Winters</td><td>Accountant</td><td>Tokyo</td><td>63</td><td ><span class="issue_book_disable">Book Issued</span></td></tr>');


    $('#issued_books').DataTable(); // data table constructor

}

if(state == "total_members") {

    $('#total_members_block').css('display','block');


    $('#total_members tbody').append('<tr><td>1</td><td>Tiger Nixon</td><td>System Architect</td><td >Active</td></tr><tr><td>2</td><td>Tiger Nixon</td><td>System Architect</td><td>Active</td></tr>');


    $('#total_members').DataTable(); // data table constructor

}


/* Add book Functionality */

$('.add_book').on('click',function(){

$('.add_book_main').fadeIn();

});


$('.add_book_close').on('click',function(){

$('.add_book_main').fadeOut();

});

$('#add_book_form').submit(function(e){
e.preventDefault();

var book_name = $('#book_name').val();
var book_author = $('#book_author').val();
var book_genre = $('#book_genre').val();

if(book_genre && book_author && book_genre) {

// Add Book Functionality 

// end add book functionality
$('.add_book_status').removeClass('error');
$('.add_book_status').addClass('success');
$('.add_book_status').html('You Have added Book Successfully');

}else{

$('.add_book_status').removeClass('success');
$('.add_book_status').addClass('error');
$('.add_book_status').html('Please fill all the fields');

}

});

/* Add book Functionality */


/* Join Library Functionality */

$('.join_library').on('click',function(){

$('.join_library_main').fadeIn();

});


$('.join_library_close').on('click',function(){

$('.join_library_main').fadeOut();

});

$('#join_library_form').submit(function(e){
e.preventDefault();

var join_name = $('#join_name').val();
var join_email = $('#join_email').val();

if(join_name && join_email) {

// Join Library Functionality 

// end Join Library functionality
$('.join_library_status').removeClass('error');
$('.join_library_status').addClass('success');
$('.join_library_status').html('You Have Joined Library Successfully');

}else{

$('.join_library_status').removeClass('success');
$('.join_library_status').addClass('error');
$('.join_library_status').html('Please fill all the fields');

}

});

/* Join Library Functionality */



// Code for issue book -- Button click functionality

        $('.issue_book').on('click',function(){

        var book_id = $(this).data('id');

        location.reload(!0);

        });

/* end of Code for Issue Book*/


$("#book_genre").select2( {
    theme: "bootstrap",
    placeholder: "Select a Genre"
} );


} );


stopLoading();