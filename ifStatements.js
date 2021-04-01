module.exports = {
    looseEquality: function(firstInput, secondInput){
        // should return true for value equality, so 1 is equal to "1", but 1 is not equal to 0.
        /* Add condition here, comparing firstInput and secondInput */
        if(firstInput == secondInput){
            return true;
        } else {
            return false;
        }
    },
    strictEquality: function(firstInput, secondInput){
        // should return true for value equality, so 1 is equal to "1", but 1 is not equal to 0.
        if(firstInput === secondInput){
            return true;
        } else {
            return false;
        }
    },
    looseInequality: function(firstInput, secondInput){
        // should return true for value equality, so 1 is equal to "1", but 1 is not equal to 0.
        /* Add condition here, comparing firstInput and secondInput */
        if(firstInput != secondInput){
            return true;
        } else {
            return false;
        }
    },
    strictInequality: function(firstInput, secondInput){
        // should return true for value equality, so 1 is equal to "1", but 1 is not equal to 0.
        if(firstInput !== secondInput){
            return true;
        } else {
            return false;
        }
    },
    elseIf: function(firstInput, secondInput){
        // When the first input is true, it should return the string "if"
        // When the second input is true it should return the string "else if"
        // When neither input is true it should return the string "else"
        if(firstInput){
            return "if";
        } else if(secondInput){
            return "else if";
        } else {
            return "else";
        }
    }
}