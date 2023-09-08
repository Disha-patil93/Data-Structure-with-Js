function towerofhonoi(n,a,b,c)
{
 if(n==1)
 {
 console.log("Move disk 1 from rod "+a+" to rod "+b);
 return
 }
 towerofhonoi(n-1,a,c,b)
 console.log("Move disk "+n+" from rod "+a+" to rod "+b);
 towerofhonoi(n-1,c,b,a)
}
var n=3;
towerofhonoi(n,'a','c','b')