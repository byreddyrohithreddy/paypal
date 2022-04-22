function hovernext()
{
    window.location.href="#2";
}


  async function timedCount() {
    function sleep(ms) {
        return new Promise(
          resolve => setTimeout(resolve, ms)
        );
      };
    var i=0;
  i = i + 1;
  while(i<9999)
  {
    postMessage(i);

    await sleep(1000);

    i=i+1;
  }
}


function myfunction()
{
    var w;
    if(typeof(Worker) !== "undefined") 
    {
           w = new Worker((URL.createObjectURL(new Blob(["("+timedCount.toString()+")()"], {type: 'text/javascript'}))));
           w.onmessage = function(event) {
            document.getElementById("btn4").innerText=(event.data%10);
            document.getElementById("btn3").innerText=(Math.floor(event.data/10)%10);
            document.getElementById("btn2").innerText=(2+(Math.floor(event.data/100)%10));
            document.getElementById("btn1").innerText=(Math.floor(event.data/1000)%10);
        };
    }
    else {
        document.getElementById("btn1").innerText = "10";
      }
        
    
}