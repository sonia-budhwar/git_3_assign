let a=23;
let prime=true;
for(let i=2;i<a;i++)
{
    if(a%i==0)
    {
        prime=false;
    }
}
if(prime){
    console.log("prime");
}
else{
    console.log("not prime");
}
