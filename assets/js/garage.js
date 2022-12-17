function validate() 
{
      
    if( document.Form.make.value == "" ) /* Function to force user to input text */
    {
        alert( "Please provide your car's make and model!" );
        document.make.focus() ;
        return false;
    }
    else if( document.Form.year.value == "" ) 
    {
        alert( "Please provide your car's year!" );
        document.Form.year.focus() ;
        return false;
    }
    else if( document.Form.email.value == "" )
    {
        alert( "Please provide your email address!" );
        document.Form.email.focus() ;
        return false;
    }
        else 
        {
            setTimeout(function() {window.location = "thankyou.html" });
        }    
    
        return( true );
}
 
