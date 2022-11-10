
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
   
    for(let i=1;i<buffer.length;i++)
    {
        console.log("buf",buffer[i])
        if(buffer[i].match(/[0-9]/g))
        {
            num=num*10+(parseFloat(buffer[i]));
            console.log(num);
        }
        else if(buffer[i]=="+"||buffer[i]=="-"||buffer[i]=="*"||buffer[i]=="/")
        {
            op=buffer[i];
           
            num2=num;
            num=0;
            i++;
            let flag=0;
           for(;i<buffer.length&&flag==0;)
           {
                if(buffer[i]=='+'||buffer[i]=='-'||buffer[i]=="*"||buffer[i]=="/")
                {
                    flag=1;
                    i=i-2;
                }
                else if(buffer[i].match(/[0-9]/g))
                num=num*10+(parseFloat(buffer[i]));
                i++;
           }
           console.log("sum1",num);
           console.log("sum2",num2);
           if(op=="+")
           {
            sum=num+num2;
            num=sum;
            console.log("wequl",sum)
           }
           else if(op=="-")
           {
            sum=num2-num;
            num=sum;
           }
           else if(op=="*")
           {
            sum=num2*num;
            num=sum;
           }
           else if(op=="/")
           {
            sum=num2/num;
            num=sum;
           }

        }
        
    }
   
   
    
    buffer=sum.toLocaleString();
    dsp.innerHTML=sum;
}