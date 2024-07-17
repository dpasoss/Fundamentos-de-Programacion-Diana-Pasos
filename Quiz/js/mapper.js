//get clicked position
function getPosition() {
    const a = viewer.raycaster.intersectObject(viewer.panorama, true)[0].point;
    return a;
};

//list of all info spots on panorama1
var infospotsall = [infospot1,infospot2,infospot3,infospot4,infospot5,infospot6];

function isHovering() {
    for (let i = 0; i < infospotsall.length; i++) {
        if (infospotsall[i].isHovering) {
            return true;
        } else {
            continue;
        }
    }
};

//nombre de la panoramica 
panorama.addEventListener('click', function(event) {

    let clickedPos = getPosition();
    let value = Object.values(clickedPos);
    let x = value[0];
    let y = value[1];
    let z = value[2];

    x = parseInt(Math.floor(x / 10));
    y = parseInt(Math.floor(y / 10));
    z = parseInt(Math.floor(z / 10));

    alert("(" + x + " ," + y + " , " + z + ")")

});