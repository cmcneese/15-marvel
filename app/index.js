import 'whatwg-fetch';
import Vue from 'vue/dist/vue';
const apiKey = '5e2916234effe6286328f704c9ad7f40';

const app = new Vue({
  el: '.full-page',

  data() {
    return {
      series: null,
      characters: null,
      comics: null,
      modalDescription: false,
      searchTerm: '',
    };
  },

  mounted() {
    this.searchSeries('Hulk');
  },

  methods: {
    showDescription(description) {
      this.modalDescription = description;
    },

    hideModal() {
      this.modalDescription = null;
    },

    searchSeries(series) {
      fetch(`http://gateway.marvel.com/v1/public/series?limit=1&titleStartsWith=${series}&apikey={apiKey}`)
      .then((r) => r.json())
      .then((data) => {
        this.seriesData = data.data.results[0];
        this.searchCharacters(this.seriesData.id);
        this.searchComics(this.seriesData.id);
      });
    },

    searchCharacters(seriesId) {
      fetch(`http://gateway.marvel.com/v1/public/series/${seriesId}/characters?apikey={apiKey}`)
        .then((r) => r.json())
        .then((data) => {
          this.characters = data.data.results;
        });
    },

    searchComics(series) {
      fetch(`http://gateway.marvel.com/v1/public/series/${series}/comics?apikey={apiKey}`)
        .then((r) => r.json())
        .then((r) => {
          this.comics = data.data.results;
        });
    },
  },
});
