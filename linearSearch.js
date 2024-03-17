function linearSearch(hay,needle){
	for(let i=0; i < hay.length; i++){
		if(hay[i] === needle) return true
	}
	return false
}

console.log(linearSearch([3,4,5,2,0,7,8,9],8))


























