function groupingDishes(dishes) {
 var ingredients = {};           
    
    dishes.forEach(function (dish) {
        var i;
        var ingredient;
        console.log("\n///tamano de la linea: "+dish.length+"\n//////")
        for (i = 1; i < dish.length; i++) {
            ingredient = dish[i];
           //console.log("\n-------ingrediente: "+ingredient);
           //console.log(ingredients);
           // console.log("NO Existe: "+ !ingredients[ingredient]);
            if (!ingredients[ingredient]) {
                ingredients[ingredient] = [dish[0]];
               // console.log(ingredients[ingredient]+"primer if"+i);
            } else {
              //  console.log(ingredients[ingredient].push(dish[0])+"else"+i);
              ingredients[ingredient].push(dish[0]);
                
            }
            //console.log(ingredients);
        }
    });
    
    var res = [];
    Object.keys(ingredients).sort().forEach(function (key) {
        if (ingredients[key].length > 1) {  
            //console.log(ingredients[key]);            
            //console.log([key]);   
            res.push([key].concat(ingredients[key].sort()));
        }        
    });
    return res;
}
