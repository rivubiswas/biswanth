const car = [
    'Camping','Cycling','Kayaking','Photo Tour','Fishing','Yoga'
]

const pic =[
    'images/camping.webp','images/cycling.webp','images/kayaking.webp','images/photography.webp','images/fishing.webp','images/yoga.webp'
]

i=0

function changeNext(){
    if(i<5 && i>-1){
        i=i+1
        document.getElementById('maaro').innerHTML=car[i];
        document.getElementById('maaro2').src=pic[i];
    }
}


function changePrev(){
    if(i>0 && i<6){
        i=i-1
        document.getElementById('maaro').innerHTML=car[i];
        document.getElementById('maaro2').src=pic[i];
    }
}