var c=0;
var allInput = document.querySelectorAll("input");
allInput[1].addEventListener("click", f)
function f()
{
    c++;
    if(c==1)
    {
        document.body.style.backgroundImage=`url(../../assets/images/${c}.jpg)`;
    }
    else if(c==2)
    {
        document.body.style.backgroundImage=`url(../../assets/images/${c}.jpg)`;
    }
    else if(c==3)
    {
        document.body.style.backgroundImage=`url(../../assets/images/${c}.jpg)`;
    }
    else if(c==4)
    {
        document.body.style.backgroundImage=`url(../../assets/images/${c}.jpg)`;
    }
    else if(c==5)
    {
        document.body.style.backgroundImage=`url(../../assets/images/${c}.jpg)`;
    }
    else if(c==6)
    {
        document.body.style.backgroundImage=`url(../../assets/images/${c}.jpg)`;
    }
    else
    {
        c=0;
    }
}
allInput[0].addEventListener("click", b)
function b()
{
    c--;
    if(c==1)
    {
        document.body.style.backgroundImage=`url(../../assets/images/${c}.jpg)`;
    }
    else if(c==2)
    {
        document.body.style.backgroundImage=`url(../../assets/images/${c}.jpg)`;
    }
    else if(c==3)
    {
        document.body.style.backgroundImage=`url(../../assets/images/${c}.jpg)`;
    }
    else if(c==4)
    {
        document.body.style.backgroundImage=`url(../../assets/images/${c}.jpg)`;
    }
    else if(c==5)
    {
        document.body.style.backgroundImage=`url(../../assets/images/${c}.jpg)`;
    }
    else if(c==6)
    {
        document.body.style.backgroundImage=`url(../../assets/images/${c}.jpg)`;
    }
    else
    {
        c=5;
    }
}

