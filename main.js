var app = new Vue({
  el:'#root',
  data: {
    i: 0,
    arraySrc: [
      'https://www.raiplayradio.it/cropgd/400x400/dl/img/2018/04/26/1524742001084_paesaggio.jpg',
      'https://cdn.shopify.com/s/files/1/0046/4397/9350/products/2019-sogno-paesaggi-cielo-notturno-kit-diamond-painting-vm8136-artluna_1200x1200.jpg?v=1551190444',
      'https://st.depositphotos.com/1004124/3791/i/600/depositphotos_37913121-stock-photo-landscape-in-tuscany-with-wood.jpg',
      'https://i2.wp.com/www.alessandroferrantelli.com/wp-content/uploads/2016/12/Alba-Lago-di-Piana-degli-Albanesi.jpg?resize=750%2C750&ssl=1',
    ]
  },
  methods: {
    next:function () {
      if (this.i < this.arraySrc.length -1) {
        this.i ++ ;
      } else {
        this.i =0
      }
    },
    prev:function () {
      if (this.i > 0) {
        this.i --;
      }else {
        this.i = this.arraySrc.length -1
      }
    },
    dotSelect: function (i) {
      this.i = i;
    }
  },
  created: function () {
    setInterval(this.next, 3000)
  }
})