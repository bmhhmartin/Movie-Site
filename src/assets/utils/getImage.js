function getImage (name){
    return new URL(`../images/movie-covers/${name}`, import.meta.url).href
}

export { getImage };

