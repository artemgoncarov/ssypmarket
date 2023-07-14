function likes(names) {
    if (names.length == 0){
        return "no one likes this"
    }
    else if (names.length == 1){
        return (names[0] + " likes this")
    }
    else if (names.length == 2){
        return (`{names[0]} and Alex like this`)
    }

}