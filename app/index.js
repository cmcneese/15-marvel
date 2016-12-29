import 'whatwg-fetch';
const apiKey = 5e2916234effe6286328f704c9ad7f40;
import http://gateway.marvel.com:80/v1/public/series/9856?apikey=5e2916234effe6286328f704c9ad7f40

const app = new Vue({
  el: '.full-page',

  data() {
    return {
      series: null,
      characters: null,
      comics: [],
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

    searchSeries(input) {
      fetch(`http://gateway.marvel.com/v1/public/series?limit=1&titleStartsWith=${input}&apikey=${apiKey}`)
      .then((r) => r.json())
      .then((data) => {
        this.series = data.data.results[0];
        this.searchCharacters(this.series);
        this.searchComics(this.series);
      });
    },

  }
})

      }
    ]
  }
}
