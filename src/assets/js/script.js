'use strict';

function progress() {

    var progress = document.querySelectorAll('progress');
    var percent = [79, 90, 69, 92, 50, 79, 90, 69, 92, 50];

    for (var i = 0; i < progress.length; i++) {
        progress[i].value = percent[i];
    }

}




