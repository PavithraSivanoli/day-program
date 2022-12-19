n=prompt("enter the date mm-dd-yyy")
var z = new Date(n);
var z= z.getDay();
if(z==0)
{
	document.write("weekend");
}
else
{
	document.write("weekday");
}