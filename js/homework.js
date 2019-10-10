$(document).ready(function(){
 $('#Subject').on('click',function(){
    var select = $('#Subject').val();
    $('.alert-info').html(select);
 });
});