// import debounce from 'lodash.debounce';
import { alert, notice, info, success, error, defaultModules } from'@pnotify/core';
// import"@pnotify/core/dist/PNotify.css";
import"@pnotify/core/dist/BrightTheme.css";
import FetchCountries from './fetchCountries';
import countryTpl from './template/country.hbs';
import oneCountryTpl from './template/country-one.hbs';
let debounce = require('lodash.debounce');

const refs = {
    listRef: document.querySelector('.js-coutry-counteiner'),
    formRef: document.querySelector('.js-search-form'),
    btnRef:document.querySelector('js-btn-primary')    
}
const newFetchCountries = new FetchCountries();

refs.formRef.addEventListener("submit", onSearch);
refs.formRef.addEventListener("input",debounce(onSearch, 500));

function onSearch(e) {
    e.preventDefault();
    clearArticlesConteiner();  
    newFetchCountries.query = e.target.query.value;
    newFetchCountries.fetchCountries().then(appendContryMarkup)   
}
function appendContryMarkup(articles) {
    if (articles.length >= 2 && articles.length <= 10){
        return refs.listRef.insertAdjacentHTML('beforeend',countryTpl(articles));
    }
    if(articles.length === 1){
        return refs.listRef.insertAdjacentHTML('beforeend',oneCountryTpl(articles));  
    }     
    const myAlert = alert({                
        text:"Please enter a more specific query!",        
        type: 'info'                
        });       
}
function clearArticlesConteiner() {
    refs.listRef.innerHTML = '';
}
