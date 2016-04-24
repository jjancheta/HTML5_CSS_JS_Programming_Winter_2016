//********************************************************************************//
//* Name :   ANCHETA, Jesus Jr                                                   *//
//* zenit login : int222_161f02                                                  *//
//********************************************************************************//
//********************************************************************************//
//*   Do not modify any statements in detailPaymentCalculation function          *//
//********************************************************************************//

/*Global Varriables : Error Messages*/

/*for calculatePayment function*/
var paymentErrorRule1 = "<p><mark><b>Monthly Payment Error!</b></mark> >>> Please complete the form first and then click on Calculate Monthly Payment.</p>";

/*for validateUserId function*/
var userIdErrorRule1 = "<p><mark><b>Client ID Error!</b></mark> >>> Must be 10 characters long.</p>";
var userIdErrorRule2 = "<p><mark><b>Client ID Error!</b></mark> >>> Hypen (-) must be on the 5th position.</p>";
var userIdErrorRule3 = "<p><mark><b>Client ID Error!</b></mark> >>> Numbers are expected from 1st to 4th positions.</p>";
var userIdErrorRule4 = "<p><mark><b>Client ID Error!</b></mark> >>> Numbers are expected from 6th to 10th positions.</p>";
var userIdErrorRule5 = "<p><mark><b>Client ID Error!</b></mark> >>> Sum of numbers to the left and right of the hypen must be greater than zero.</p>";
var userIdErrorRule6 = "<p><mark><b>Client ID Error!</b></mark> >>> Sum of numbers to the right of the hypen multiply by 2 plus 2 must be equal to the sum of numbers to the left of the hypen.</p>";

/*for validateClientName function*/
var clientNameErrorRule1 = "<p><mark><b>Client Name Error!</b></mark> >>> Must be at least 3 characters.</p>";    
var clientNameErrorRule2 = "<p><mark><b>Client Name Error!</b></mark> >>> Name must not start or end with apostrophe(').</p>";
var clientNameErrorRule3 = "<p><mark><b>Client Name Error!</b></mark> >>> Name must begin with 3 alphabetic characters.</p>";
var clientNameErrorRule4 = "<p><mark><b>Client Name Error!</b></mark> >>> Name must contain only alphabetic charactes and 1 apostrophe(') in the middle.</p>";
var clientNameErrorRule5 = "<p><mark><b>Client Name Error!</b></mark> >>> Number of apostrophe(') exceeded.</p>";

/*for validatePropValue function*/
var propValueErrorRule1 = "<p><mark><b>Property Value Error!</b></mark> >>> Empty value not allowed.</p>";
var propValueErrorRule2 = "<p><mark><b>Property Value Error!</b></mark> >>> Value must be greater than 0 or a positive number.</p>";
var propValueErrorRule3 = "<p><mark><b>Property Value Error!</b></mark> >>> Value must be a whole number.</p>";
var propValueErrorRule4 = "<p><mark><b>Property Value Error!</b></mark> >>> Value must be $65,000 higher than the down payment.</p>";  

/*for validateDownPay function*/
var downPayErrorRule1 = "<p><mark><b>Down Payment Error!</b></mark> >>> Empty value not allowed.</p>";
var downPayErrorRule2 = "<p><mark><b>Down Payment Error!</b></mark> >>> Value must be greater than 0 or a positive number.</p>";
var downPayErrorRule3 = "<p><mark><b>Down Payment Error!</b></mark> >>> Value must be a whole number.</p>";
var downPayErrorRule4 = "<p><mark><b>Down Payment Error!</b></mark> >>> Value must be at least 20% of property value.</p>";   

/*for validateLocation function*/
var locationErrorRule1 = "<p><mark><b>Location Error!</b></mark> >>> No location selected.</p>";
var locationErrorRule2 = "<p><mark><b>Location Error!</b></mark> >>> Not a valid location selected.</p>";   

/*for validateIncome function*/
var incomeErrorRule1 = "<p><mark><b>Income Range Error!</b></mark> >>> No income selected.</p>";
var incomeErrorRule2 = "<p><mark><b>Income Range Error!</b></mark> >>> Not a valid income selected.</p>";   

/*for validatePropDetails function*/
var propDetailserrorRule1 = "<p><mark><b>Property Type Error!</b></mark> >>> No property type selected.</p>";

/*for validateMortYear function*/
var mortYearErrorRule1 = "<p><mark><b>Mortgage Year Error!</b></mark> >>> Empty value not allowed.</p>";
var mortYearErrorRule2 = "<p><mark><b>Mortgage Year Error!</b></mark> >>> Value must be numbers only.</p>";
var mortYearErrorRule3 = "<p><mark><b>Mortgage Year Error!</b></mark> >>> Value must be equal or 1 year greater to the current year.</p>";  

/*for validateMortMonth function*/
var mortMonthErrorRule1 = "<p><mark><b>Mortgage Month Error!</b></mark> >>> Empty value not allowed.</p>";
var mortMonthErrorRule2 = "<p><mark><b>Mortgage Month Error!</b></mark> >>> Value must be numeric only.</p>";
var mortMonthErrorRule3 = "<p><mark><b>Mortgage Month Error!</b></mark> >>> Value must be from 01-12 only.</p>";
var mortMonthErrorRule4 = "<p><mark><b>Mortgage Month Error!</b></mark> >>> Value must be equal or 1 month greater to the current month.</p>";   

/*for validateIntRate function*/
var intRateErrorRule1 = "<p><mark><b>Interest Rate Error!</b></mark> >>> Empty value not allowed.</p>";
var intRateErrorRule2 = "<p><mark><b>Interest Rate Error!</b></mark> >>> Value must be numeric only.</p>";
var intRateErrorRule3 = "<p><mark><b>Interest Rate Error!</b></mark> >>> Value entered below/over the limits.</p>";   

/*for validateAmortization function*/
var amortizationErrorRule1 = "<p><mark><b>Amortization Error!</b></mark> >>> Empty value not allowed.</p>";
var amortizationErrorRule2 = "<p><mark><b>Amortization Error!</b></mark> >>> Value must be numeric only.<span><br/>"; 
var amortizationErrorRule3 = "<p><mark><b>Amortization Error!</b></mark> >>> Value must be from 05-20 only.</p>";
    


function detailPaymentCalculation(mortAmount, mortDownPayment, mortRate, mortAmortization) {

    //********************************************************************************//
    //*   This function calculates the monthly payment based on the following:       *//
    //*                                                                              *//
    //*               M = P [ i(1 + i)n ] / [ (1 +  i)n - 1]                         *//
    //*                                                                              *//
    //*   Note: This function also updates the payment amount on the form            *//
    //********************************************************************************//
     var paymentError = "";
     var v = mortAmount * 1;
     var d = mortDownPayment * 1;
     var i = mortRate * 1;
     var y = mortAmortization * 1;
     var a = v - d;
         i = i/100/12;
         n = y * 12;
     var f = Math.pow((1+i),n);

     var p = (a * ((i*f)/(f-1))).toFixed(2);

     if (p=="NaN" || p=="Infinity") {
         document.forms[0].payment.value = "";
     }
     else {
           document.forms[0].payment.value = p;   
     }

} // End of detailPaymentCalculation function


function calculatePayment() {   

    //********************************************************************************//
    //*   You will need to call the functions that validate the following:           *//
    //********************************************************************************//
    //*        (1)              (2)              (3)             (4)                 *//
    //********************************************************************************//
    //*   Property value  -  Down payment  -  Interest rate -  Amortization          *//
    //********************************************************************************//
    //*   If there are no errors, then call                                          *//
    //*                                                                              *//
    //*      detailPaymentCalculation(...., ......, ......, ......);                 *//
    //*                                                                              *//
    //*   and make sure to pass the four values in the order shown above.            *//
    //*                                                                              *//
    //********************************************************************************//
    //*   If there are errors, present the client the following message in the       *//
    //*   reserved area on the form:                                                 *//
    //*                                                                              *//
    //*   Please complete the form first and then click on Calculate Monthly Payment *//
    //*                                                                              *//
    //********************************************************************************//
    
    if (validatePropValue()==="" && validateDownPay() ==="" && validateIntRate()==="" && validateAmortization()===""){
        detailPaymentCalculation(document.mortgage.propValue.value,
                                 document.mortgage.downPay.value,
                                 document.mortgage.intRate.value,
                                 document.mortgage.amortization.value);
        clearErrorMessages();
    }
    else{
        clearErrorMessages();
        showErrorMessages(paymentErrorRule1);
        
    }
 
    
} // End of calculatePayment function



function formValidation() {

    //***************************************************************************************//
    //*                                                                                     *//
    //* This function calls the different functions to validate all required fields         *//
    //*                                                                                     *//
    //* Once you have called and validated all field, determine if any error(s)             *//
    //*  have been encountered                                                              *//
    //*                                                                                     *//
    //* If any of the required fields are in error:                                         *//
    //*                                                                                     *//
    //*    present the client with a list of all the errors in reserved area                *//
    //*         on the form and                                                             *//
    //*          don't submit the form to the CGI program in order to allow the             *//
    //*          client to correct the fields in error                                      *//
    //*                                                                                     *//
    //*    Error messages should be meaningful and reflect the exact error condition.       *//
    //*                                                                                     *//
    //*    Make sure to return false                                                        *//
    //*                                                                                     *//
    //* Otherwise (if there are no errors)                                                  *//
    //*                                                                                     *//
    //*    Recalculate the monthly payment by calling                                       *//
    //*      detailPaymentCalculation(mortAmount,mortDownPayment,mortRate,mortAmortization) *//
    //*                                                                                     *//
    //*    Change the 1st. character in the field called client to upper case               *//
    //*                                                                                     *//
    //*    Change the initial value in the field called jsActive from N to Y                *//
    //*                                                                                     *//
    //*    Make sure to return true in order for the form to be submitted to the CGI        *//
    //*                                                                                     *//
    //***************************************************************************************//

    var errors ="";
    var result = true;
    
    errors += validateUserId();
    errors += validateClientName();
    errors += validatePropValue();
    errors += validateDownPay();
    errors += validateLocation();
    errors += validateIncome();
    errors += validatePropDetails();
    errors += validateAmortization();
    errors += validateIntRate();    
    errors += validateMortYear();
    errors += validateMortMonth();

    if (errors === ""){
        detailPaymentCalculation(document.mortgage.propValue.value,
                                 document.mortgage.downPay.value,
                                 document.mortgage.intRate.value,
                                 document.mortgage.amortization.value);
        
        //change the value of jsActive
        document.mortgage.jsActive.value = 'Y'; 
        
        //change the first character of the client name to uppercase.
       // document.mortgage.client.value = (document.mortgage.client.value).charAt(0).toUpperCase()+  
        //                                 (document.mortgage.client.value).slice(1);
        (document.mortgage.client.value).charAt(0).toUpperCase();
        clearErrorMessages(); 
    }
    else{
        showErrorMessages(errors);
        result = false;
    }
    return result;

} // End of completeFormValidation

/*Validates Client Id Input*/
function validateUserId(){
    var errorUserId ="";
    var inputValue = document.mortgage.userId.value;
    var inputLength = inputValue.length;
    var rule3 = 0;
    var rule4 = 0;
    var totalLeft = 0;
    var totalRight = 0;   
    
    if (inputLength !== 10){                             //rule#1  - check if user input 10 characters
        errorUserId = userIdErrorRule1;
    }
    else if(inputValue[4] !== "-"){                      //rule#2 - check if hypen is entered on the correct position(5th)
        errorUserId = userIdErrorRule2;
    }
    
    else {
    
        for(var i = 0; i < inputLength; i++){
            if (inputValue.charCodeAt(i) >= 48 && inputValue.charCodeAt(i) <= 57 && i < 4){
                rule3++;
                totalLeft += +inputValue[i];
            }
            else if (inputValue.charCodeAt(i) >= 48 && inputValue.charCodeAt(i) <= 57 && i > 4 && i < inputLength){
                rule4++;
                totalRight += +inputValue[i];   
            }
        }
        
        if(rule3 !== 4){                                    //rule#3 - check if left side of the hypen are all numerics
            errorUserId = userIdErrorRule3; 
        }

        else if(rule4 !== 5){                               //rule#4 - check if right side of the hypen are all numerics
            errorUserId = userIdErrorRule4;
        }

        else if (totalLeft <= 0 || totalRight <= 0){        //rule#5 - check the sum of both sides if less than zero
            errorUserId = userIdErrorRule5; 

        }
        else if (((totalLeft*2)+2) != totalRight){      //rule#6 - check if sum of left side(double plus 2) == totalRight 
             errorUserId = userIdErrorRule6; 
        }
        
    } 
    return errorUserId;
}


/*Validates Client Name Input*/
function validateClientName(){
    var errorClientName="";
    var inputValue = document.mortgage.client.value;
    var inputLength = inputValue.length;
    inputValue = inputValue.toLowerCase();
    var count = 0;
    
     //check for min 3 character length >> rule#1
    if (inputLength < 3){   
        errorClientName = clientNameErrorRule1; 
    }
    else{
        for(var i = 0; i < inputLength; i++){
        
        //check for apostrophe at beginning and end >>rule#2
        if ((i === 0 && inputValue.charCodeAt(i) == 39) || 
            (i == inputLength-1 && inputValue.charCodeAt(inputLength-1) == 39)){
                errorClientName = clientNameErrorRule2;
                break;
        }
        
        //check for first 3 alphabetic charaters >>rule#3
        if ((i >= 0 && i <= 2) && (inputValue.charCodeAt(i) < 97 || inputValue.charCodeAt(i) > 122)){   
            errorClientName = clientNameErrorRule3;
            break;    
        }
        
        //check for alphabetic and apostrophe at the rest of the string >>rule4
       if ((i >=3 && i <= inputLength -2) && 
           (inputValue.charCodeAt(i) < 97 || inputValue.charCodeAt(i) > 122) && 
           (inputValue.charCodeAt(i) !== 39)){
                errorClientName = clientNameErrorRule4;
                break; 
        }
        
        //checks the number of  apostrophe >>rule#5
        if ((i >=3 && i <= inputLength -2) && (inputValue.charCodeAt(i) === 39)){
            count++;
            if(count > 1){
                errorClientName = clientNameErrorRule5; 
                break; 
            }
        }
     }
    }
    return errorClientName;
}

/*Validates Property Value Input*/
function validatePropValue(){
    var errorPropValue="";
    var inputValue = document.mortgage.propValue.value;
    var inputLength = inputValue.length;
    var difference = inputValue - (document.mortgage.downPay.value);

    //checks if user enter any value >>rule#1
    if(inputLength === 0){
        errorPropValue = propValueErrorRule1;
    }
    //checks for negative or zero value  >>rule#2
    else if(inputValue <= 0 ){
        errorPropValue = propValueErrorRule2;
    }
    //checks for decimal number   >>rule#3
    else if (inputValue % 1 !== 0){
        errorPropValue = propValueErrorRule3;
    }
    //checks if value is more than 65000 higher to down payment value entered  >>rule#4
    else if (difference < 65000){
        errorPropValue = propValueErrorRule4; 
    }
    
    return errorPropValue;
    
}

/*Validates Down payment Input*/
function validateDownPay(){
    var errorDownPay="";
    var inputValue = document.mortgage.downPay.value;
    var inputLength = inputValue.length;
    var ratio = inputValue / (document.mortgage.propValue.value);

    //checks if user enter any value >>rule#1
    if(inputLength === 0){
        errorDownPay = downPayErrorRule1;
    }
    //checks for negative or zero value  >>rule#2
    else if(inputValue <= 0 ){
        errorDownPay = downPayErrorRule2;
    }
    //checks for decimal number  >>rule#3
    else if (inputValue % 1 !== 0){
        errorDownPay = downPayErrorRule3 ;
    }
    //checks if value is at least 20% of property value  >>rule#4
    else if (ratio < 0.20){
        errorDownPay =  downPayErrorRule4; 
    }
    
    return errorDownPay;
    
}

/*Validates Location Input*/
function validateLocation() {
    var errorLocation="";
    var selected = document.mortgage.propLocation.selectedIndex;
    
    //rule#1 - no item selected
    if (selected === -1){
        errorLocation = locationErrorRule1;
    }
    //rule#2 - not a valid item seleceted
    else if(selected === 0){
        errorLocation = locationErrorRule2;
    }
    return errorLocation;
}


/*Validates Income Input*/
function validateIncome() {
    var errorIncome="";
    var selected = document.mortgage.income.selectedIndex;
   
    //rule#1 - no item selected
    if (selected === -1){
        errorIncome = incomeErrorRule1;
    }
    //rule#2 - not a valid item seleceted
    else if(selected === 0){
        errorIncome = incomeErrorRule2; 
    }
    return errorIncome;
}

/*Validates Property Details Input*/
function validatePropDetails(){
    var errorPropDetails="";
    var noOfOptions = document.mortgage.propDetails.length;
    var count = 0;
    
    for (var i = 0; i < noOfOptions; i++){
        if (document.mortgage.propDetails[i].checked === true){
            count++;
        }
    }
    
    if (count !== 1){
        errorPropDetails = propDetailserrorRule1;
    }
    return errorPropDetails;
}

/*Validates Mortgage Year input*/
function validateMortYear(){
    var errorMortYear="";
    var inputValue = document.mortgage.mortYear.value;
    var inputLength = inputValue.length;
    var currentYear = new Date().getFullYear();
    var count = 0;
    
    //checks if user enter any value  >>rule#1
     if(inputLength === 0){
            errorMortYear = mortYearErrorRule1;
        }
     else {
        for (var i = 0; i < inputLength; i++){
            if(inputValue.charCodeAt(i) < 48 || inputValue.charCodeAt(i) > 57 ){
                count++;
            }
        }
        //checks if value is numeric     >>rule#2
        if (count > 0){    
            errorMortYear = mortYearErrorRule2; 
        }       
         
        //checks if value is equal or 1 year greater than to the current year    >>rule#3
        else if (inputValue != currentYear && inputValue != (currentYear + 1)){
            errorMortYear = mortYearErrorRule3;
        }
     }
    return errorMortYear;
    
}

/*Validates Mortgage Month Input*/
function validateMortMonth(){
    var errorMortMonth="";
    var inputValue = document.mortgage.mortMonth.value;
    var inputLength = inputValue.length;
    var currentMonth = new Date().getMonth();
    var count = 0;
  
    //checks if user enter any value  >>rule#1
    if(inputLength === 0){
            errorMortMonth = mortMonthErrorRule1;
        }
   
    else {
        for (var i = 0; i < inputLength; i++){
            if(inputValue.charCodeAt(i) < 48 || inputValue.charCodeAt(i) > 57 ){
                count++;
            }
        }
    
        //checks if value is numeric     >>rule#2
        if (count > 0){    
            errorMortMonth = mortMonthErrorRule2; 
        }      
        //checks if the value is from 1 to 12  >>rule#3
        else if(inputValue < 1 || inputValue > 12){
             errorMortMonth = mortMonthErrorRule3; 
         }
        //checks if value is equal or 1 year greater than to the current month   >>rule#4
        else if(((inputValue-1) != currentMonth) && ((inputValue-1) != (currentMonth + 1))){
             errorMortMonth = mortMonthErrorRule4;

         }
    }
    return errorMortMonth;
         
}

/*Validates Interest Rate Input*/
function validateIntRate(){
    var errorIntRate="";
    var inputValue = document.mortgage.intRate.value;
    var inputLength = inputValue.length;
    var noOfDecimal = 0;
    var noOfNumeric = 0;
    
    //checks if user enter any value  >>rule#1
    if(inputLength === 0){
        errorIntRate = intRateErrorRule1 ; 
    }
    
    else {
        for(var i = 0; i < inputLength; i++){
            //checks for decimal point
            if(inputValue.charCodeAt(i) == 46){    
                noOfDecimal++;
            }
            //checks if its numeric or not
            if (inputValue.charCodeAt(i) >= 48 && inputValue.charCodeAt(i) <= 57){
                noOfNumeric++;
            }
        }
       // alert( noOfDecimal + "+" + noOfNumeric + "=" +inputLength);
        
        //checks number of decimal point and all are numeric  >>rule#2
        if((noOfDecimal !== 1) && ((noOfDecimal + noOfNumeric) !== inputLength)){
           errorIntRate = intRateErrorRule2;
        }
        
        //checks the range  rule#3
        else if (inputValue < 3  || inputValue > 16){
            errorIntRate = intRateErrorRule3;
       }
    }
    return errorIntRate;
}
                
/*Validate Amortization Input*/
function validateAmortization(){
    var errorAmortization="";
    var inputValue = document.mortgage.amortization.value;
    var inputLength = inputValue.length;
    var noOfNumeric = 0;
    
    //checks if user enter any value >>rule#1
    if(inputLength === 0){
        errorAmortization = amortizationErrorRule1;
    }
 
    else { 
        for(var i = 0; i < inputLength; i++){
            if (inputValue.charCodeAt(i) >= 48 && inputValue.charCodeAt(i) <= 57){
                noOfNumeric++;
            }
        } 
        
        //checks if its numeric or not  >>rule#3
        if (noOfNumeric != inputLength){
           errorAmortization = amortizationErrorRule2;
        }
        //checks if the value is from 5 to 20   >>rule#3
        else if(inputValue < 5 || inputValue > 20){
            errorAmortization = amortizationErrorRule3;
        }
    }
    return errorAmortization; 
}

/*display error messages*/
function showErrorMessages(errorMessages){
    document.getElementById('errors').innerHTML = errorMessages;
}

/*clear error messages*/
function clearErrorMessages(){
    document.getElementById('errors').innerHTML = " ";
}


