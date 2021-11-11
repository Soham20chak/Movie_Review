$(document).ready(function(){
    $('.swift').click(function(){
        var signButton = $(this).html();
        console.log(signButton);
        debugger;
        if(signButton == 'Sign In'){
            $('.sign_up').html('Sign In'); // sign up button text change
            $('.sign_in').html('Sign Up'); // sign in button text change
            $('.swift_right').show(); // second logo show
            $('.b-forgot').show(); // forgot option show
            $('.form_title').html('Sign in now !!!'); // form title text change
            $('.b-subtext').html('or use your email account'); // form sub title text change
            $('.user_title').html('Hello, Friend'); // user title text change
            $('.user_subTitle').html('Enter your personal details </br> and start journey with us.'); // user sub title text change
            $('.b-title').css('margin-top','100px'); // user section add margin top in css
            $('.swift_left').hide(); // default logo hide
            $('.username').hide(); // form user field hide
            $('.b-wrapper').addClass('swift_element'); // add reverse
        }else{
            $('.sign_up').html('Sign Up'); // sign up button text change
            $('.sign_in').html('Sign In'); // sign in button text change
            $('.swift_right').hide(); // second logo hide
            $('.b-forgot').hide(); // forgot option hide
            $('.form_title').html('Create Account');
            $('.b-subtext').html('or use your email for registration');
            $('.user_title').html('Welcome Friend');
            $('.user_subTitle').html('To keep Connected with us please </br> login with your personal info.');
            $('.b-title').css('margin-top','0px');
            $('.swift_left').show();
            $('.username').show();
            $('.b-wrapper').removeClass('swift_element');
        }

    })
})

