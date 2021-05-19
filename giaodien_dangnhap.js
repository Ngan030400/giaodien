function getInfo()
        {
           var user = document.getElementById("user").value;
           var pass =document.getElementById("pass").value;
          

           if(user ==""){
              document.getElementById("errorname").innerHTML="vui lòng nhập user";
           }
           else{
            document.getElementById("errorname").innerHTML="";
           }
        
        if(pass ==""){
              document.getElementById("erroremail").innerHTML="vui lòng nhập đủ email";
           }
           else{
            document.getElementById("erroremail").innerHTML="";
           }
        }