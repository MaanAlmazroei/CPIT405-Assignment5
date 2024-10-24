const apiKey='96cb16ec6c164be7a61152813242410';
function searching(){


    var city = document.getElementById("cityName").value;
    var highTemp = document.getElementById("high");
    var lowTemp = document.getElementById("low");
    var wind = document.getElementById("wind");
var xhr=new XMLHttpRequest();
xhr.onreadystatechange=function(){
    
    if(this.readyState == 4 && this.status == 200){
        let responseObject=JSON.parse(xhr.responseText);
            highTemp.innerText = `High: ${responseObject.current.temp_c} C`;
            lowTemp.innerText = `Low: ${responseObject.current.feelslike_c} C`;
            wind.innerText = `Wind Speed: ${responseObject.current.wind_kph} k/h`;
    }
};

xhr.open("GET",`https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`,true);
xhr.send();

}
document.getElementById("searchBtn").addEventListener("click", searching);