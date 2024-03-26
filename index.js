const value=document.getElementById("temp");
const output=document.getElementById("henry");
const celtofah=document.getElementById("celtofah");
const fahtocel=document.getElementById("fahtocel");
const button=document.getElementById("submit");
const form=document.getElementById("formm");
let temp;
function convert()
{
   
    if(fahtocel.checked)
    {
       temp=Number(value.value);
       temp=((temp-32)*5/9).toFixed(1);
       output.textContent=`${temp} °C`;
    }
    else if(celtofah.checked)
    {
        temp=Number(value.value);
        temp=((temp*9/5)+32).toFixed(1);
        output.textContent=`${temp} °F`;
    }
    else
    {
        output.textContent="Select any option";
    }
}
