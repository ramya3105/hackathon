var req=new XMLHttpRequest();
req.open('GET','https://restcountries.com/v3.1/all',true);
req.send();
req.onload=function(){
    var result=JSON.parse(req.response);

    for(var i=0;i<result.length;i++){
        try{
       var capital=result[i].capital;
       var latlon=result[i].latlng;
        if(latlon.length === 0){
        throw new Error("invalid coordinates for the country")

       }
       weatherdata(capital,...latlon);
    }catch(e){
        console.log("invalid country"+capital+e.message);

    }

    }
}
function weatherdata(capital,lat,lang){
    var url=`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lang}&appid=51121b876f98a485c2c71c68a6cca20f`
    var request=new XMLHttpRequest();
    request.open('GET',url,true);
    request.send();
    request.onload=function(){
        var data=JSON.parse(request.response);
        console.log(`${capital}:${data.main.teemp}`);
    }
    }

