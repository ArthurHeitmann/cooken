class SearchHandler {
    constructor(mongoClient) {
        this.client = mongoClient;
    }

    async byTitle(recipeTitle) {
        const recipesColl = (await this.client.connect()).db("cooken").collection("recipes");
        const query = { title: new RegExp(recipeTitle)}
        return recipesColl.find(query).toArray();
    }

    async byRating(minRating) {
        const recipesColl = (await this.client.connect()).db("cooken").collection("recipes");
        const query = { "rating.rating": {$gte : parseFloat(minRating)}};    //$gte = greater than equal
        return recipesColl.find(query).toArray();
    }

    async byTime(maxTime) {
        const recipesColl = (await this.client.connect()).db("cooken").collection("recipes");
        const query = { totalTime: { $lte : parseInt(maxTime)}};   //$lte = less than equal
        return recipesColl.find(query).toArray();
    }

    async byDifficulty(maxDifficulty) {
        const recipesColl = (await this.client.connect()).db("cooken").collection("recipes");
        const query = { difficulty: { $lte : parseInt(maxDifficulty)}};
        return recipesColl.find(query).toArray();
    }
}

module.exports = SearchHandler;