function firstWord(s) {
 if(!s){
    return ""	 
 }

	 s = s.trim()

	let spaceid = s.indexOf(" ")
	if(spaceid === -1)
	{
		return s
}
	return s.slice(0 , spaceid)

	

}
// Do not change the code below

const s = prompt("Enter String:");
alert(firstWord(s));
