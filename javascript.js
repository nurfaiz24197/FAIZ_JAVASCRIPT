/*Login Version 2*/
/*MUHAMMAD NUR FAIZ BIN MOHAMAD TARMIZI*/
/*18DDT20F2022*/
function login(){
    /*'let' = declare variable (function scope)*/
    let passwordU = document.getElementById('passwordU').value;
    let usernameU = document.getElementById('nameU').value;
    /*'var' = declare variable (block scope)*/
    /*match() method matches a STRING against a regular expression(RegExp)*/
    var upper = passwordU.match(/[A-Z]/);/*RegExp */
    var lower = passwordU.match(/[a-z]/);/*RegExp */
    var num = passwordU.match(/[0-9]/); /*RegExp*/
    var symbol = passwordU.match(/[$-/:-?{-~!"^_`\[\]]/);/*RegExp */
    
    /*USERNAME */
    /*TRUE*/
    if(usernameU.length >= 1)
    {
        /*Pass Block */
    }
    /*FALSE */
    else
    {
        alert('Sila letak Username')
    }

    /*PASSWORD */
    /*TRUE */
    if (passwordU.length >= 1 ){/*User need to input atleast one character*/
        /*.length counts the number of characters in string and compare it*/      
        /* TRUE*/
        if (passwordU.length >= 12){
            a = true;
        }    
        /* FALSE*/
        else{
            alert ('harap maaf, kata laluan anda kurang daripada 12 huruf');
        }

        /*Uppercase*/    
        /* TRUE*/
        if (upper){
            b = true;
        }    
        /* FALSE*/
        else{
            
            alert ('harap maaf, kata laluan anda tidak mengandungi huruf besar');
        }

        /*Lowercase*/ 
        /* TRUE*/    
        if (lower){
            c = true;
        }    
        /* FALSE*/
        else{
            alert ('harap maaf, kata laluan anda tidak mengandungi huruf kecil');
        }

        /*Number*/   
         /* TRUE*/
        if (num){
            d = true;
        }    
        /* FALSE*/
        else{
            alert ('harap maaf, kata laluan anda tidak mengandungi huruf nombor');
        }

        /*Symbol*/  
        /* TRUE*/
        if (symbol){
            e = true;
        }    
        /* FALSE*/
        else{
            alert ('harap maaf, kata laluan anda tidak mengandungi simbol');
        }
    }
    /*User input nothing*/
    /*FALSE*/
    else{
        alert ('Sila letak Password');
    }



    /* FINAL CHECK*/
    if(a == true && b == true && c == true && d == true && e ==true){/* if all TRUE*/
        alert('Tahniah')
    }
    else if (a != true && b != true && c != true && d != true && e !=true){/* if all FALSE*/
        /*pass block*/
    }
    else{
        /*pass block*/
    }
}