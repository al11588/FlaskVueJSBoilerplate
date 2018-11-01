new Vue({
  el: '#app',
  delimiters: ["[[", "]]"],
  data () {
    return {
      info: null,
      errored: false,
    }
  },
  mounted () {
    axios
      .get('http://api.adviceslip.com/advice')
      .then(response => (this.info = response.data.slip.advice))
      .catch(error => console.log(error))
  }
})