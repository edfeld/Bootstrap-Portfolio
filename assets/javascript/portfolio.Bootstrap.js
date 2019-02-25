// javascript for Bootstrap portfolio

$('a.mail').on('click', function(){
    alert("edfeld1@gmail.com");
    var href = $(this).attr('href');
    $(this).attr('href', href.replace('ed@badmail.mydomain.com', 'edfeld1@gmail.com'));
});