'use strict';

// prettier-ignore
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

const form = document.querySelector('.form');
const containerWorkouts = document.querySelector('.workouts');
const inputType = document.querySelector('.form__input--type');
const inputDistance = document.querySelector('.form__input--distance');
const inputDuration = document.querySelector('.form__input--duration');
const inputSteps = document.querySelector('.form__input--cadence');
const inputElevation = document.querySelector('.form__input--elevation');

class WorkOut{
date=new Date();
id=(Date.now()+'').slice(-10);
  constructor(coords,distance,duration){
    this.coords=coords;//{lat,lng}
    this.distance=distance;
    this.duration=duration
  }
}

class Running extends WorkOut{
  constructor(coords,distance,duration,steps){
    super(coords,distance,duration);
    this.steps=steps;
    this.calcPace();
  }
  calcPace(){
    this.pace=this.duration/this.distance;
    return this.pace
  }
  }

  class Cycling extends WorkOut{
    constructor(coords,distance,duration,elevation){
      super(coords,distance,duration);
      this.elevation=elevation;
      this.calcSpeed();
    }
    calcSpeed(){
      this.speed=this.distance/(this.duration/60);
      return this.speed
    }
  }
  const run1=calcPace([27,-46],30,20,220);
  const cycle1=calcSpeed([27,-46],70,30,220);
console.log(run1,cycle1);

  //APplication
let map,mapEvent;
class App{
  #map;
  #mapEvent;
  constructor(){
this._getPosition();
  }
    _getPosition(){
      if(navigator.geolocation)
      navigator.geolocation.getCurrentPosition(this._loadMap,function(){
            alert('Couldnt Get Position');
          });
        }

    _loadMap(position){
        const {latitude} = position.coords;
        const {longitude}= position.coords;
        console.log(`https://www.google.com/maps/@${latitude},${longitude}`);
        //console.log(position);
        const coords = [latitude, longitude];
          this.#map = L.map('map').setView(coords, 13);

        L.tileLayer('https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
          attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(map);

      //Handling clicks on map
        this.#map.on('click', function(mapE) {
              this.#mapEvent=mapE;
            //form.classList.remove('hidden');
            inputDistance.focus();
          });
        }

_showMap(){}

    _toggleElevationFeild(){
      inputType.addEventListener('change',function(){
        inputElevation.closest('.form__row').classList.toggle('form__row--hidden');
        inputSteps.closest('.form__row').classList.toggle('form__row--hidden');
      });

    }

    _newWorkout(){
      e.preventDefault();
      //Clear input feilds
      inputDistance.value=inputDistance.value=inputElevation.value=inputSteps.value='';
      //Display Marker
      console.log(mapEvent);
      const {lat,lng} = mapEvent.latlng;
      L.marker([lat, lng]).addTo(map)
        .bindPopup(L.popup({
          maxWidth: 220,
          minWidth: 135,
          autoClose: false,
          closeOnClick: false,
          className: 'running-popup',
          }))
          .setPopupContent('WorkOut').openPopup();
    });


    }



const app= new App();
app._getPosition();


  form.addEventListener('submit', function(e) {
