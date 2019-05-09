// javascript for Bootstrap portfolio
let first = 'edfeld1';
let second = 'gmail.com';
let email;
$('a.mail').on('click', function(){
    alert("edfeld1@gmail.com");
    var href = $(this).attr('href');
    $(this).attr('href', href.replace('ed@badmail.mydomain.com', 'edfeld1@gmail.com'));
});

$('.submit-btn').on('click', function (){
    // alert("Hello");
    let email = first + "@" + second;
    console.log("email: ", email);
    alert("My email is " + email);
})