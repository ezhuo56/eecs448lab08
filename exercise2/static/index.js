var imgTracker=0;
var images= ["./static/cat1.jpg","./static/cat2.jpg","./static/cat3.jpg","./static/cat4.jpg","./static/cat5.jpg"];

function next()
{
    if(imgTracker==4)
    {
        imgTracker =0;
    }
    else
    {
        imgTracker++;
    }
    document.getElementById("picture").src=images[imgTracker];
}

function prev()
{
    if(imgTracker==0)
    {
        imgTracker =4;
    }
    else
    {
        imgTracker--;
    }
    document.getElementById("picture").src= images[imgTracker];
}
