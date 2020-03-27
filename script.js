function GetAnalysis() {
    var str = document.getElementById('txtname').value;
    var c_v=c_c = 0,d=0,s_c=0,sp_c=0, total_vowels="",total_const="",total_digit="",total_spechar="";
    for (var i = 0; i < str.length; i++) {
    if (str.charAt(i).match(/[a-zA-Z]/) != null) {

    if (str.charAt(i).match(/[aeiouAEIOU]/))
    {
    total_vowels = total_vowels + str.charAt(i);
    c_v++;
    }
    else
    {
        total_const=total_const+str.charAt(i);
        c_c++;
    }
    }
    else if(str.charAt(i).match(/[0-9]/))
    {
        total_digit=total_digit +str.charAt(i);
        d++;
    }
    else if (str.charAt(i).match(/^[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]*$/))
    {
        total_spechar=total_spechar+str.charAt(i);
        s_c++;
    }
    else if (str.charAt(i).match(/ /))
    {
        total_spechar=total_spechar+str.charAt(i);
        sp_c++;
    }
    }
    
    document.getElementById('vcount').value = c_v;

    document.getElementById('ccount').value = c_c;
    document.getElementById('dcount').value = d
    document.getElementById('scount').value = s_c;
    document.getElementById('spacecount').value = sp_c;
    
    }

    