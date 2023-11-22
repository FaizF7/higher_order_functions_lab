const ScranAdvisor = function(restaurants){
    this.restaurants = restaurants;
}

// Add methods to prototype
ScranAdvisor.prototype.countRestaurants = function(){
    return this.restaurants.length
}

ScranAdvisor.prototype.findByName = function(name){
    return this.restaurants.find((restaurant)=>{return restaurant.name===name})
}

ScranAdvisor.prototype.findAllNames = function(){
    return this.restaurants.map((restaurant)=>{return restaurant.name})
}

ScranAdvisor.prototype.findRestaurantByTown = function(townName){
    return this.restaurants.filter((restaurant)=>{return restaurant.location.town===townName})
}

ScranAdvisor.prototype.mostCommonCuisine=function(){
    // 
    const cuisineCounts= {}

    this.restaurants.forEach((restaurant) => {

        restaurant.cuisines.forEach((cuisine)=>{

            if (cuisineCounts[cuisine]!=undefined){
            cuisineCounts[cuisine] = cuisineCounts[cuisine]+1}
            else{
                cuisineCounts[cuisine] = 1
            }
        })
    })


    // let mostCommonCuisine = Object.keys(cuisineCounts)[0]
    // Object.keys(cuisineCounts).forEach((element)=>{
    //     console.log(element);
    //     if (cuisineCounts[element]>cuisineCounts[mostCommonCuisine]){
    //         mostCommonCuisine = element
    //         // mostCommon = element
    //         console.log(mostCommonCuisine);
    //     }
    // })

    mostCommonCuisine = Object.keys(cuisineCounts).reduce((accumulate,element)=> {
        if (cuisineCounts[accumulate]>cuisineCounts[element]){
            return accumulate
        }
        return element
    })


    return mostCommonCuisine

}


ScranAdvisor.prototype.findBySubstring = function(substring){
    return this.restaurants.filter((restaurant)=>{
        return restaurant.name.toLowerCase().includes(substring.toLowerCase())
    })
}

module.exports = ScranAdvisor;