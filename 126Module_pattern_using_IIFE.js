
//BUDGEET CONTROLLER
var budgetController = (function(){     //implementing module pattern   IIFE

    var x = 23;

    var add = function (a){
        return x+a;
    }

    return {
        publicTest:function(b){ //now publictest is available to outside 
            return add(b);
        }
    }

})();

//when budget controller returns, it will have publicTest attached as an object ...eg: budgetController.publicTest(7) from window scope


//UI CONTROLLER
var UIcontroller  = (function(){

    //some code

})();



//GLOBAL APP CONTROLLER
var controller  = (function(budgetCtrl,UICtrl){  //app controller

    var z = budgetCtrl.publicTest(5);

    return {
        anotherPublic: function(){
            console.log(z);
        }
    }
    
})(budgetController,UIcontroller);

controller.anotherPublic();