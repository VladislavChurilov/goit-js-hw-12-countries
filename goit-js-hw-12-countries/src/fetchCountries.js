export default class FetchCountries {
    constructor(){
        this.searchQuery = '';
                
    }
    fetchCountries(){
        
        const url = `https://restcountries.eu/rest/v2/name/${this.searchQuery}`;
       return fetch (url)
        .then(countries => countries.json())        
        return countries.articles;
    }     
    get query() {
        return this.searchQuery;
    }
    set query(newQuery) {
        this.searchQuery = newQuery;
    }
     
}