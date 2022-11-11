let count=0;
function findNumberType(){
    let num=document.getElementById("num").value
    num=parseInt(num)
    let res
    if(num<0)res = "Negative"
    if(num>0)res = "Positive"
    if(num===0)res = "Zero"
    document.getElementById("result").innerHTML=res
}

let arr=[1,-1,0,-3,5]
function sumOfPositive(){
    let s=0
    for(let i=0;i<arr.length;i++)
    {
        if(arr[i]>0)
        s=s+arr[i];
    }
    
    console.log(s)
    document.getElementById("result").innerHTML=s
}
function fibo()
{
    
    let i=0;
    let num= document.getElementById("num").value
    let res=num;
    // document.getElementById("result").innerHTML="343";
 //   document.getElementById("result").innerHTML="34";
    
   
    while(res!=num)
    {
        res=fibbnoaci(i);
        console.log(res);
        i++;
    }

}
function fibbnoaci(numm)
{
   
    if(numm<2)
    {
       
        return numm;
    }
    
    return (fibbnoaci(numm-1)+fibbnoaci(numm-2));
}
function counter()
{
    count+=1;
    console.log(count);
    document.getElementById("result").innerHTML=count;
}
function resetCounter()
{
    count=0;
    console.log(count);
    document.getElementById("result").innerHTML=count;

}