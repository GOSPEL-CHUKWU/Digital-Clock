'use strict';
const hour = document.querySelector('.hour-digit');
const minute = document.querySelector('.minute-digit');
const second = document.querySelector('.second-digit');
const amOrPm = document.querySelector('.am-or-pm');

const topLeft = document.querySelector('.top-left')
const leftMiddle = document.querySelector('.left-middle')
const bottomLeft = document.querySelector('.bottom-left')
const bottomMiddle = document.querySelector('.bottom-middle')
const bottomRight = document.querySelector('.bottom-right')
const rightMiddle = document.querySelector('.right-middle')
const topRight = document.querySelector('.top-right')
const topMiddle = document.querySelector('.top-middle')

const currentTime = function () {
  //generate time
  let newDate = new Date();
  let h = newDate.getHours();
  let m = newDate.getMinutes();
  let s = newDate.getSeconds();
  let amPm = 'AM';

  //get 12 hours clock
  if (h > 12) {
    h = h - 12;
    amPm = 'PM';
  }
  
  //add 0 to the beginning of 1-9
  h = h < 10 ? '0' + h : h;
  m = m < 10 ? '0' + m : m;
  s = s < 10 ? '0' + s : s;

  hour.innerText = h;
  minute.innerText = m;
  second.innerText = s;
  amOrPm.innerText = amPm;

  setInterval(() => {
    currentTime();
  }, 1000);

  //Name Animation
  const dropEffect = () => {
    let nameEffect = document.querySelector('.name');

    nameEffect.classList.add('effect');
    nameEffect.addEventListener('transitionend', function () {
      nameEffect.classList.remove('effect');
    });
  };
  setInterval(() => {
    dropEffect();
  }, 1000);

  
  //transition of minutes and hours
  if (s === 59) {
    const minuteAnimation = function () {
      if (minute.classList[1] !== 'transition') {
        minute.classList.add('transition');
        minute.addEventListener('transitionend', function () {
          minute.classList.remove('transition');
        });
      }
    };
      minuteAnimation();

  }else if(minute.classList[1] === 'transition'){
    minute.classList.remove('transition')
  }
  if (m === 59 && s === 59) {
    const hourAnimation = function () {
      if (hour.classList[1] !== 'transition') {
        hour.classList.add('transition');
        hour.addEventListener('transitionend', function () {
          hour.classList.remove('transition');
        });
      }
    };
      hourAnimation();

  }else if(hour.classList[1] === 'transition'){
    hour.classList.remove('transition')
  }

  //cube animation
  if (s >= 58) {
    const cubeAnimation = function () {

      //remove hidden
      topLeft.classList.remove('hidden')
      leftMiddle.classList.remove('hidden')
      bottomLeft.classList.remove('hidden')
      bottomMiddle.classList.remove('hidden')
      bottomRight.classList.remove('hidden')
      rightMiddle.classList.remove('hidden')
      topRight.classList.remove('hidden')
      topMiddle.classList.remove('hidden')
      if (s >= 59) {

        //add transition 
        topLeft.classList.add('top-left-animation');
        topLeft.addEventListener('transitionend', function () {
          topLeft.classList.remove('top-left-animation');
        });
        leftMiddle.classList.add('left-middle-animation');
        leftMiddle.addEventListener('transitionend', function () {
          leftMiddle.classList.remove('left-middle-animation');
        });
        bottomLeft.classList.add('bottom-left-animation');
          bottomLeft.addEventListener('transitionend', function () {
          bottomLeft.classList.remove('bottom-left-animation');
        });
        bottomMiddle.classList.add('bottom-middle-animation');
        bottomMiddle.addEventListener('transitionend', function () {
          bottomMiddle.classList.remove('bottom-middle-animation');
        });
        bottomRight.classList.add('bottom-right-animation');
        bottomRight.addEventListener('transitionend', function () {
          bottomRight.classList.remove('bottom-right-animation');
        });      
        rightMiddle.classList.add('right-middle-animation');
        rightMiddle.addEventListener('transitionend', function () {
          rightMiddle.classList.remove('right-middle-animation');
        });
        topRight.classList.add('top-right-animation');
        topRight.addEventListener('transitionend', function () {
          topRight.classList.remove('top-right-animation');
        });
        topMiddle.classList.add('top-middle-animation');
        topMiddle.addEventListener('transitionend', function () {
          topMiddle.classList.remove('top-middle-animation');
        });
      }
    };
      cubeAnimation();
  }else if(s < 59){


    //add hidden
    topLeft.classList.add('hidden')
    leftMiddle.classList.add('hidden')
    bottomLeft.classList.add('hidden')
    bottomMiddle.classList.add('hidden')
    bottomRight.classList.add('hidden')
    rightMiddle.classList.add('hidden')
    topRight.classList.add('hidden')
    topMiddle.classList.add('hidden')

    
    //remove transition
    topLeft.classList.remove('top-left-animation')
    leftMiddle.classList.remove('left-middle-animation')
    bottomLeft.classList.remove('bottom-left-animation')
    bottomMiddle.classList.remove('bottom-middle-animation')
    bottomRight.classList.remove('bottom-right-animation')
    rightMiddle.classList.remove('right-middle-animation')
    topRight.classList.remove('top-right-animation')
    topMiddle.classList.remove('top-middle-animation')
    
    }
  }




currentTime();