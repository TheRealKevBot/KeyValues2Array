function objectToArray(obj) {
    let arr = []
	for ([key, val] of Object.entries(obj)) {
        arr.push([key, val])
    }
    return arr
} 

console.log(objectToArray({
    D: 1, 
    B: 2, 
    C: 3
}), [["D", 1], ["B", 2], ["C", 3]])

console.log(objectToArray({
	likes: 2, 
    dislikes: 3, 
    followers: 10
}), [["likes", 2], ["dislikes", 3], ["followers", 10]])