'use strict';
const state = document.getElementsByClassName('set')[0];
const allButtons = state.getElementsByTagName('li');
const players = state.getElementsByTagName('audio');
const sounds = ['first','second','third','fourth','fifth'];
let step = 0;



function setMode(event) {
    let mode;
    if (event.shiftKey && event.repeat) {
        mode = 'lower';
    } else if (event.altKey && event.repeat) {
        mode = 'higher';
    } else if (!event.shiftKey || !event.altKey){
        mode = 'middle';
    }
    if (state.classList.contains('lower') && mode !== 'lower') {
        state.classList.remove('lower');
        state.classList.add(mode);
    } else if (state.classList.contains('middle') && mode !== 'middle') {
        state.classList.remove('middle');
        state.classList.add(mode);
    } else if (state.classList.contains('higher') && mode !== 'higher') {
        state.classList.remove('higher');
        state.classList.add(mode);
    }
    console.log(mode);
    for (const btn of allButtons) {
        //btn.addEventListener('click', play);
        let newMode = state.className.replace('set','').replace(' ','');
        let player = btn.getElementsByTagName('audio')[0];
        player.src = `sounds/${newMode}/${sounds[step]}.mp3`;
        console.log(newMode);
        btn.addEventListener('click', function(){
            player.pause();
            player.currentTime = 0;
            player.play();
        });
        step++;
    }
}
    document.addEventListener('keydown',setMode);
    document.addEventListener('keyup',function(){
        if (!state.classList.contains('middle')) {
            state.classList.remove('lower');
            state.classList.remove('higher');
            state.classList.add('middle');
        }
    });

    