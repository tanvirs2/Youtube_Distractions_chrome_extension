

let toggle = false;

const toggleHandler = () => {
    toggle = !toggle;
    return toggle;
}

const onImg = "data:image/jpeg;base64,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";
const offImg = "data:image/jpeg;base64,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";

window.addEventListener("load", function(event) {

    //console.log(chrome.runtime);

    /*chrome.runtime.onMessage.addListener((msg)=>{
        if (msg === "update-tab") {
            console.log('runtime');
        }
    })*/

    let contents;
    let contentsInner;

    let html = `<div>
                    <h1 style="color: green">Focusing Enable</h1>
                    <p>No Distraction</p>                                     
                    <img id="on-off-toggle" src="${onImg}" alt="">
                    <h3>Develop by <a href="https://tanvirpro.com/" target="_blank" style="color: blue; text-decoration: none">TanvirSarker</a> </h3>
                </div>
            `;

    let contents_promise = new Promise((resolve, reject)=>{

        let myInter = setInterval(()=>{
            contents = event.target.body.querySelector("#secondary.ytd-watch-flexy")

            if (contents) {
                contentsInner = contents.querySelector("#secondary-inner");
                if (contentsInner) {
                    clearInterval(myInter);
                    resolve();
                }
            }

        }, 800);
    });

    contents_promise.then(()=>{
        const node = document.createElement("div");
        node.innerHTML = html;
        contents.prepend(node)

        contentsInner.style.display = "none";

        let toggleImg = contents.querySelector("#on-off-toggle");
        let h1 = contents.querySelector("h1");
        let p = contents.querySelector("p");
        toggleImg.addEventListener('click', ()=>{

            if (toggle) {
                contentsInner.style.display = "none";
                h1.innerHTML = "Focusing Enable";
                p.innerHTML = "No Distraction";
                toggleImg.src = onImg;
            } else {
                contentsInner.style.display = "block";
                h1.innerHTML = "Focusing Disable";
                p.innerHTML = "Distraction On";
                toggleImg.src = offImg;
            }

            toggleHandler()
        })
    });

});
