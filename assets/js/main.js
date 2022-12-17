
function showInfo() { /* Function to show Contact details */

    document.getElementById('1').onclick = function() {
        document.getElementById('info1').style.display = 'block';
    };
    document.getElementById('2').onclick = function() {
            document.getElementById('info2').style.display = 'block';
    };
    document.getElementById('3').onclick = function() {
        document.getElementById('info3').style.display = 'block';
};
    
}

window.onload = function() { /* Function to call fadein function when window loads */
    
    window.setTimeout(fadein, 1000); 
  }
  
  
  function fadein() {
    
    document.getElementById('fade').style.opacity = '1'; /* Function to change opacity of text */
    
  }
 

