
// const shaMessage = document.getElementById("testPara");
// document.setAttribute("tabindex", 0);

// testPara.addEventListener("click", () => {console.log("you clicked the test"); document.body.style.background = "blue";})

//  const func1 = (shaStr) => {
//      console.log(shaStr);
//       alert("keydown");
//      if (Event.keyCode == 86)
//      {
//          document.body.style.background = "violet";
//      }
      
//      shaMessage.textcontent = shaStr;
// }


// let shaKeyPropElement = document.getElementById("shaKeyProp")
// let shaCodePropElement = document.getElementById("shaCodeProp")
// let shaWhichPropElement = document.getElementById("shaWhichProp")

// const x = document.createElement("AUDIO");

// class soundUse extends Audio {
//     constructor() {
//       // Always call super first in constructor
//       super();
        
//       // constructor definition left out for brevity

//     }
//   }



const soundNames = ["clap","boom","hihat","kick","openhat","ride","snare","tink","tom"];

for (let e of soundNames)
{
    let shaAudioElement = document.createElement("audio");
    shaAudioElement.src = `sounds/${e}.wav`;
    shaAudioElement.id = e;
    document.body.appendChild(shaAudioElement);

    // shaAudioList.appendChild(shaElement);
    console.log(shaAudioElement);
}

const selectAudioElements = document.getElementsByTagName("audio");

const soundObject = {"w":0, "d":1, "s":2, "a":3, "q":4, "e":5, " ":6};

const selectBoxElements = document.getElementsByClassName("boxUnit");

const drumHeight = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

let boxIndex = 0;
for (let t of selectBoxElements)
{
    t.id = `shaBox${boxIndex}`;
    let a = " "
    t.innerHTML =   `<div class = "boxSlice">
                        <div class = "boxSliceFeatureUpper"></div><div class = "boxSliceFeatureUpper"></div><div class = "boxSliceFeatureUpper"></div>
                    </div>
                    <div class = "boxSlice">
                    ${soundNames[boxIndex]}${t.id}
                    </div>
                    <div class= "boxSlice">
                    <div class = "boxSliceFeatureLower"></div><div class = "boxSliceFeatureLower"></div><div class = "boxSliceFeatureLower"></div>
                    </div>`;
    t.style.color = "blue";
    boxIndex++;
}

// for (let t of selectBottomBoxElements)
// {
//     t.id = `shaBox${boxIndex}`;
//     t.innerHTML = t.id;
//     boxIndex++;
// }

console.log(selectBoxElements);


let playSelect = 0;
// let boxElement = document.getElementById("box");

const playThat = (e) => {

    console.log(playSelect);
    playSelect = soundObject[e.key];
    selectAudioElements[playSelect].play();

    let idString = `shaBox${playSelect}`;
    console.log(idString);

    boxElement = document.getElementById(idString);
    console.log(boxElement);
    boxElement.style.color = "red";



}

// addEventListener("keydown", (e) => {console.log(e)});

addEventListener("keydown", playThat, false);

