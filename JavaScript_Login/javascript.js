/*sakit kepala x_x*/
/*MUHAMMAD NUR FAIZ BIN MOHAMAD TARMIZI*/
/*18DDT20F2022*/
function login(){
    let passwordU = document.getElementById('passwordU').value;/*'let' = declare variable (function scope)*/
    /*'var' = declare variable (block scope)*/
    /*g = global */
    /*match() method matches a STRING against a regular expression(RegExp)*/
    var upper = passwordU.match(/[A-Z]/);/*RegExp */
    var lower = passwordU.match(/[a-z]/);/*RegExp */
    var num = /[0-9]/g /*RegExp without match() method*/
    var symbol = passwordU.match(/[$-/:-?{-~!"^_`\[\]]/);/*RegExp */
    
    /*.length counts the number of characters in string and compare it*/      
    /* TRUE*/
    if (passwordU.length >= 12){
        a = true;
    }    

    else{/* FALSE*/
        
        alert ('harap maaf, kata laluan anda kurang daripada 12 huruf');
    }

    /*Uppercase*/    
    /* TRUE*/
    if (upper){
        b = true;
    }    

    else{/* FALSE*/
        
        alert ('harap maaf, kata laluan anda tidak mengandungi huruf besar');
    }

    /*Lowercase*/     
    if (lower){/* TRUE*/
        c = true;
    }    
    else{/* FALSE*/
        alert ('harap maaf, kata laluan anda tidak mengandungi huruf kecil');
    }

    /*Number*/    
    if (passwordU != num){/* TRUE*/
        d = true;
    }    
    else{/* FALSE*/
        alert ('harap maaf, kata laluan anda tidak mengandungi huruf nombor');
    }

    /*Symbol*/  
    if (symbol){/* TRUE*/
        e = true;
    }    
    else{/* FALSE*/
        alert ('harap maaf, kata laluan anda tidak mengandungi simbol');
    }


    /* final check*/
    if(a == true && b == true && c == true && d == true && e ==true){
        alert('Tahniah')
    }
    else if (a != true && b != true && c != true && d != true && e !=true){
        /*pass block*/
    }
    else{
        /*pass block*/
    }
}