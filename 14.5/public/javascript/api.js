function queryapi(queryparameter){
let totalCalories = 0;


    $.ajax({
        method: 'GET',
        url: 'https://api.calorieninjas.com/v1/nutrition?query=' + queryparameter,
        headers: { 'X-Api-Key': 'o7Vl+wl2wg6RAxxPA/meUw==OXz8mZ5Ksv3yqUiG' },
        contentType: 'application/json',
        success: function (result) {
            const results = result.items
            for (let i = 0; i < results.length; i++) {
    
                const calories = results[i].calories
                totalCalories = totalCalories + calories
            }
            document.getElementById("calories").textContent = totalCalories;
;
    
        },
        error: function ajaxError(jqXHR) {
            console.error('Error: ', jqXHR.responseText);
        }
    });
    return totalCalories;
}

document.getElementById("myButton").onclick = function() {
var queryparameter = document.getElementById("myText").value
console.log(queryparameter);

 queryapi(queryparameter);

}


