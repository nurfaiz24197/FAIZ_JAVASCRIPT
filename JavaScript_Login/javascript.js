/*sakit kepala x_x*/
/*MUHAMMAD NUR FAIZ BIN MOHAMAD TARMIZI*/
/*18DDT20F2022*/
function login(){
    let passwordU = document.getElementById('passwordU').value;/*'let' = declare variable (function scope)*/
    /*'var' = declare variable (block scope)*/
    /*g = global */
    /*method match() will compare with value in variable 'passwordU'*/
    var upper = passwordU.match(/[A-Z]/);/*RegExp */
    var lower = passwordU.match(/[a-z]/);/*RegExp */
    var num = passwordU.match(/[1-9]/);/*RegExp */
    var symbol = passwordU.match(/^[a-zA-Z0-9!@#\$%\^\&*\)\(+=._-]+$/g);/*RegExp special character */
    
    /*.length counts the number of characters in string and compare it*/      
    /* TRUE*/
    if (passwordU.length >= 12){
        a = true;
    }    

    else{/* FALSE*/
        
        alert ('harap maaf, kata laluan anda kurang daripada 12 huruf');
    }

    /*match with variable 'upper'*/    
    /* TRUE*/
    if (upper){
        b = true;
    }    

    else{/* FALSE*/
        
        alert ('harap maaf, kata laluan anda tidak mengandungi huruf besar');
    }

    /*match with variable 'lower'*/    
    if (lower){/* TRUE*/
        c = true;
    }    
    else{/* FALSE*/
        alert ('harap maaf, kata laluan anda tidak mengandungi huruf kecil');
    }

    /*match with variable 'num'*/    
    if (num){/* TRUE*/
        d = true;
    }    
    else{/* FALSE*/
        alert ('harap maaf, kata laluan anda tidak mengandungi huruf nombor');
    }

    /*match with variable 'symbol'*/
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
    else if(a != true && b != true && c != true && d != true && e !=true){
        /*pass block*/
    }
    else{
        /*pass block*/
    }
}