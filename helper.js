function resizeToMax(id){
    myImage = new Image() 
    var img = document.getElementById(id);
    myImage.src = img.src; 
    if(myImage.width > myImage.height){
        img.style.width = "100%";
    } else {
        img.style.height = "100%";
    }
}

function sortListAZ() { 
    var list, i, switching, b, shouldSwitch;
    list = document.getElementById("myUL");
    switching = true;
    while (switching) {
      switching = false;
      b = list.getElementsByTagName("li");
      for (i = 0; i < (b.length - 1); i++) {
        shouldSwitch = false;
        if (b[i].innerHTML.toLowerCase() > b[i + 1].innerHTML.toLowerCase()) {
          shouldSwitch = true;
          break;
        }
      }
      if (shouldSwitch) {
        b[i].parentNode.insertBefore(b[i + 1], b[i]);
        switching = true;
      }
    }
}

function sortListZA() { 
    var list, i, switching, b, shouldSwitch;
    list = document.getElementById("myUL");
    switching = true;
    while (switching) {
      switching = false;
      b = list.getElementsByTagName("li");
      for (i = 0; i < (b.length - 1); i++) {
        shouldSwitch = false;
        if (b[i].innerHTML.toLowerCase() < b[i + 1].innerHTML.toLowerCase()) {
          shouldSwitch = true;
          break;
        }
      }
      if (shouldSwitch) {
        b[i].parentNode.insertBefore(b[i + 1], b[i]);
        switching = true;
      }
    }
}

function toggleButtonText() {
    var button = document.getElementById('alphasort');
    if(button.innerText == "A-Z"){
        button.innerText = "Z-A";
        sortListAZ()
    }
    else{
        button.innerText = "A-Z";
        sortListZA()
    }
}

function sortByDate(){
    sortListAZ()
    var list, i, b, y1, m1, d1;
    list = document.getElementById("myUL");
    switching = true;
    while(switching)
    {
        switching = false;
        b = list.getElementsByTagName("li");
        for(i = 0; i < (b.length-1); i++)
        {
            shouldSwitch = false;
            var string = b[i].innerHTML;
            string = string.substring(string.indexOf(":")+2, string.indexOf("."));
            y1 = string.substring(6);
            d1 = string.substring(3,5);
            m1 = string.substring(0,2);
            var d2 = parseInt(d1);
            var m2 = parseInt(m1);
            var y2 = parseInt(y1);
            date1 = new Date(y2, m2, d2, 0, 0, 0, 0);
            var string1 = b[i+1].innerHTML;
            string1 = string1.substring(string1.indexOf(":")+2, string1.indexOf("."));
            y3 = string1.substring(6);
            d3 = string1.substring(3,5);
            m3 = string1.substring(0,2);
            var d4 = parseInt(d3);
            var m4 = parseInt(m3);
            var y4 = parseInt(y3);
            date2 = new Date(y4, m4, d4, 0, 0, 0, 0);
            if(date1-date2 < 0) 
            {
                shouldSwitch = true;
                break;
            }
        }
        if (shouldSwitch) 
        {
            b[i].parentNode.insertBefore(b[i + 1], b[i]);
            switching = true;
        }

    }
    
}