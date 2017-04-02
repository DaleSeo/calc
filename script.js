var app = new Vue({
  el: '#app',
  data: {
    input: '',
    keyGroups: [
      [
      	{class: 'btn btn-warning', value: '(', text: '('},
      	{class: 'btn btn-warning', value: ')', text: ')'},
      	{class: 'btn btn-danger', value: 'D', text: '<span class="glyphicon glyphicon-arrow-left" aria-hidden="true"></span>'},
        {class: 'btn btn-danger', value: 'C', text: 'C'},
      ],
      [
      	{class: 'btn btn-default', value: '7', text: '7'},
      	{class: 'btn btn-default', value: '8', text: '8'},
      	{class: 'btn btn-default', value: '9', text: '9'},
      	{class: 'btn btn-success', value: '+', text: '+'}
      ],
      [
      	{class: 'btn btn-default', value: '4', text: '4'},
      	{class: 'btn btn-default', value: '5', text: '5'},
      	{class: 'btn btn-default', value: '6', text: '6'},
      	{class: 'btn btn-success', value: '-', text: '-'}
      ],
      [
      	{class: 'btn btn-default', value: '1', text: '1'},
      	{class: 'btn btn-default', value: '2', text: '2'},
      	{class: 'btn btn-default', value: '3', text: '3'},
      	{class: 'btn btn-success', value: '*', text: '*'}
      ],
      [
      	{class: 'btn btn-default', value: '.', text: '.'},
      	{class: 'btn btn-default', value: '0', text: '0'},
      	{class: 'btn btn-default', value: '00', text: '00'},
      	{class: 'btn btn-success', value: '/', text: '/'}
      ],
      [
        {class: 'btn btn-primary btn-block', value: '=', text: '='}
      ]
    ]
  },
  methods: {
    handleClick: function (value) {
      if (value === '=') {
        this.input = String(eval(this.input))
      } else if (value === 'C') {
        this.input = ''
      } else if (value === 'D') {
        this.input = this.input.substr(0, this.input.length - 1)
      } else {
        this.input += value
      }
    }
  }
})
