import "./Main.css"
const dataz = require("../../Resources/arrangefirst.json")
function Main() {

    console.log(dataz.data.length)
    function random (min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
      }
     

function randomurl () {
const randomNumber = random(0, 573);
var win = window.open(dataz.data[randomNumber], '_blank');
win.focus();

}

return ( <div id="divv">
<button onClick={randomurl} id="btn_gen" >Generate</button>

</div> );

}

export default Main;