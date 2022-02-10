let totalCalories = 0;
//var query = 'steak rice'
var myName = document.getElementById("myText").value


document.getElementById("myButton").onclick = function() {
var myName = document.getElementById("myText").value
console.log(totalCalories);
}

$.ajax({
    method: 'GET',
    url: 'https://api.calorieninjas.com/v1/nutrition?query=' + totalCalories,
    headers: { 'X-Api-Key': 'o7Vl+wl2wg6RAxxPA/meUw==OXz8mZ5Ksv3yqUiG' },
    contentType: 'application/json',
    success: function (result) {
        const results = result.items
        for (let i = 0; i < results.length; i++) {

            const calories = results[i].calories
            totalCalories = totalCalories + calories
        }
        console.log(totalCalories);

       // totalCalories = 0
    },
    error: function ajaxError(jqXHR) {
        console.error('Error: ', jqXHR.responseText);
    }
});


