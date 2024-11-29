function hideAllInfoBoxes() {
    const infoBoxes = document.querySelectorAll('.info-box');
    infoBoxes.forEach(box => box.classList.add('hidden'));
}

function showInfoBox(id) {
    hideAllInfoBoxes(); 
    const infoBox = document.getElementById(id);
    if (infoBox) {
        infoBox.classList.remove('hidden'); 
    }
}


document.getElementById('intro').addEventListener('click', function () {
    showInfoBox('intro-box'); 
});

document.getElementById('period1').addEventListener('click', function () {
    showInfoBox('period1-box'); 
});

document.getElementById('period2').addEventListener('click', function () {
    showInfoBox('period2-box');
});

document.getElementById('period3').addEventListener('click', function () {
    showInfoBox('period3-box'); 
});
