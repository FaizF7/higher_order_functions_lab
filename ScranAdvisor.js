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
    // new object
    const cuisineCounts= {}
    let mostCommonCuisine = ""
// for each restaurant in restaurants
    this.restaurants.forEach((restaurant) => {
// for each cuisine in cuisines list of restaurant
        restaurant.cuisines.forEach((cuisine)=>{
// Add one to count if it exists
            // if (cuisineCounts[cuisine]){
            // cuisineCounts[cuisine] += 1}
            // // if cuisine doesn't exist yet then add it and give it count 1
            // else{
            //     cuisineCounts[cuisine] = 1
            // }

            cuisineCounts[cuisine] = cuisineCounts[cuisine]?cuisineCounts[cuisine]+1:1
            mostCommonCuisine = mostCommonCuisine?mostCommonCuisine:cuisine
            mostCommonCuisine = cuisineCounts[mostCommonCuisine]<cuisineCounts[cuisine]?cuisine:mostCommonCuisine
            // if (!mostCommonCuisine){
            //     mostCommonCuisine=cuisine
            // }
            // if(cuisineCounts[mostCommonCuisine]<cuisineCounts[cuisine]){
            //     mostCommonCuisine=cuisine
            // }


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

    // mostCommonCuisine = Object.keys(cuisineCounts).reduce((largest,element)=> {
    //     //return max(largest,element) for each element
    //     if (cuisineCounts[largest]>cuisineCounts[element]){
    //         return largest
    //     }
    //     return element
    // })

    return mostCommonCuisine
}


ScranAdvisor.prototype.findBySubstring = function(substring){
    return this.restaurants.filter((restaurant)=>{
        return restaurant.name.toLowerCase().includes(substring.toLowerCase())
    })
}

module.exports = ScranAdvisor;