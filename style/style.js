var letters = "WABCÇDEFGĞHİIJKLMNOÖPRSŞTUÜVYZabcçdefgğhiıjklmnoöprsştuüvyzw'#";
var count = 0;

function syllableDivision(word) {
    
    var words="";
    var sentence="";
    
    for (var i = word.length - 1; i >= 0; i--) {
        if (letters.includes(word[i])){
            words = word[i] + words;
        }
        
        else {
            if (words.length>0){
                words = spelling(words);
                sentence = word[i] + words + sentence;
                words = "";
            }
            
            else{
                sentence = word[i] + sentence;
            }
        }
    }
    
    if (words.length>0) {
        words=spelling(words);
        sentence=words+sentence;
        words="";
    }
    
    content("result", sentence);
}
      
var colors = ["yellow","#6a47af", "#f7758f"];
    
function spelling(word) {
    var colourful = "";
    var sylabble = "";
    
    for (var i = word.length - 1; i >= 0; i--) {
        sylabble = word[i] + sylabble;
        
        if (i > 0 && vowel(word[i - 1]) === true && sylabble.length > 2) {
        colourful = "<span style='color:" + colors[(count % colors.length)] + "'>" + sylabble + "</span>" + colourful;
        sylabble = "";
        count++;
    } 
    
    else if (word[i] === "'" && i > 1 && vowel(word[i - 1]) === false && vowel(word[i + 1]) === true) {
        colourful = "<span style='color:" + colors[(count % colors.length)] + "'>" + word[i - 1] + sylabble + "</span>" + colourful;
        sylabble = "";
        count++;
        i--;
    } 
    
    else {
    
            if (i === 0) {
                colourful = "<span style='color:" + colors[(count % colors.length)] + "'>" + sylabble + "</span>" + colourful;
                sylabble = "";
                count++;
            } 
            
            else {
    
                if (sylabble.length === 1) {
                    
                    if (i > 0 && vowel(word[i]) === true && vowel(word[i - 1]) === true){
                        colourful = "<span style='color:" + colors[(count % colors.length)] + "'>" + sylabble + "</span>" + colourful;
                        sylabble = "";
                        count++;
                    }
                }
    
    
                if (sylabble.length === 2) {
                    
                    if (sylabble[0] === "r" && word[i - 1] === "t" && vowel(word[i - 2]) === false) { 
                    } 
                    
                    else { 
                        if(i > 1) {
                            if (vowel(word[i]) === false && vowel(word[i + 1]) === true){
                                colourful = "<span style='color:" + colors[(count % colors.length)] + "'>" + sylabble + "</span>" + colourful;
                                sylabble = "";
                                count++;
                            }
                                
                            if (vowel(word[i])==true && vowel(word[i-1])==true) {
                                colourful = "<span style='color:" + colors[(count % colors.length)] + "'>" + sylabble + "</span>" + colourful;
                                sylabble = "";
                                count++;
                            }
                        } 
            
                            else if (vowel(word[i]) === false && vowel(word[i - 1]) === true && vowel(word[i + 1]) === true) {
                                colourful = "<span style='color:" + colors[(count % colors.length)] + "'>" + sylabble + "</span>" + colourful;
                                sylabble = "";
                                count++;
                            }
                        }
                }
    
    
                if (sylabble.length === 3){
    
                    if (i > 1){
                        
                        if (sylabble[0] === "r" && word[i - 1] === "t" && vowel(word[i - 2]) === false){
                        }  
                        
                        else {
    
                            if(vowel(word[i]) === false) {
                                colourful = "<span style='color:" + colors[(count % colors.length)] + "'>" + sylabble + "</span>" + colourful;
                                sylabble = "";
                                count++;
                                }
                            }
    
                    } 
                   
                    else if (vowel(word[i]) === false && vowel(word[i - 1]) === true) {
                        colourful = "<span style='color:" + colors[(count % colors.length)] + "'>" + sylabble + "</span>" + colourful;
                        sylabble = "";
                        count++;
                    }
                }
    
                if (sylabble.length === 4) {
                    colourful = "<span style='color:" + colors[(count % colors.length)] + "'>" + sylabble + "</span>" + colourful;
                    sylabble = "";
                    count++;
                }
            }
    
    }
        }
    
    return colourful;
}
     
function vowel(letter) {
    var vowels="âîûaeıioöuüÂÎÛAEIİOÖUÜ";
    
    if(vowels.indexOf(letter) > -1) {
        return true;
    } 
        
    else {
        return false;
    }
}

function Value(id, index) {
    
    if (index == null) {
        return document.getElementById(id).value;
    } 
    
    else {
        document.getElementById(id).value = index;
            
        if (document.getElementById(id).value === index) {
            return true;
        } 
            
        else {
            return false;
        }
    }
}
    
 function content(id, index) {
    
    if (index == null) {
        return document.getElementById(id).innerHTML;
    } 
        
    else {
        document.getElementById(id).innerHTML = index;
    }
    
}  




