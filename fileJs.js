
const dsp = document.getElementById('res');

var buffer="0";
function c()
{
    buffer="0";
    dsp.innerHTML=0;
} 
function d1()
{
    buffer+="1";
    dsp.innerHTML=buffer;
} 
function d2()
{
    buffer+="2";
    dsp.innerHTML=buffer;
} 
function d3()
{
    buffer+="3";
    dsp.innerHTML=buffer;
}

function d4()
{
    buffer+="4";
    dsp.innerHTML=buffer;
}
function d5()
{
    buffer+="5";
    dsp.innerHTML=buffer;
}
function d6()
{
    buffer+="6";
    dsp.innerHTML=buffer;
}
function d7()
{
    buffer+="7";
    dsp.innerHTML=buffer;
}
function d8()
{
    buffer+="8";
    dsp.innerHTML=buffer;
}
function d9()
{
    buffer+="9";
    dsp.innerHTML=buffer;
}
function d0()
{
    buffer+="0";
    dsp.innerHTML=buffer;
}

function mul()
{
    buffer+="*";
    dsp.innerHTML=buffer;
}
function plus()
{
    buffer+="+";
    dsp.innerHTML=buffer;
}
function divide()
{
    buffer+="/";
    dsp.innerHTML=buffer;
}
function minus()
{
    buffer+="-";
    dsp.innerHTML=buffer;
}
function decimal()
{
    buffer+=".";
    dsp.innerHTML=buffer;
}
function equal()
{
    let op="";
    console.log(buffer);
    let sum=0;
    let num=0;
    let num2=0; 
    let ans=0;
    const temp = buffer.match(/^[-+]?([0-9]+)[\\.0-9]+[-+*/+][-+]?([0-9]+)[\\.0-9]*$/g);
    if(temp==null)
    {
        dsp.innerHTML="Error";
        return "Error";
    }
    for(let i=1;i<=buffer.length;i++)
    {
        
        if(buffer[i].match(/[0-9]/g))
        {
            num=num*10+(parseFloat(buffer[i]));
            console.log(num);
        }
        else if(buffer[i]=="+"||buffer[i]=='-')
        {
            op=buffer[i];
           
            num2=num;
            num=0;
            i++;
           for(;i<buffer.length;)
           {
                if(buffer[i]=='+'||buffer=='-')
                {
                    break;
                }
                num=num*10+(parseFloat(buffer[i]));
                i++;
           }
           console.log(num);
           console.log(num2);
           if(op=="+")
           {
            sum=num+num2;
           }
           else if(op=="-")
           {
            sum=num2-num;
           }

        }
        
    }
   
   
    
    buffer=sum.toLocaleString();
    dsp.innerHTML=sum;
}