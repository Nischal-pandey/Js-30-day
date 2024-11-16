  let btn = document.querySelector(".btn")

  btn.onclick = () => {
    alert("Button clicked!")
  }


    btn.addEventListeners( "click", ()=> {
        console.log("button was clicked");
        
    });