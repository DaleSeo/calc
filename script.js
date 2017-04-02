var app = new Vue({
  el: '#app',
  data: {
    input: '',
    keyGroups: [
      [
        {idx: 0, type: 'btn btn-danger', value: 'C'},
      	{idx: 1, type: 'btn btn-warning', value: '('},
      	{idx: 2, type: 'btn btn-warning', value: ')'},
      	{idx: 3, type: 'btn btn-success', value: '+'}
      ],
      [
      	{idx: 4, type: 'btn btn-default', value: '7'},
      	{idx: 5, type: 'btn btn-default', value: '8'},
      	{idx: 6, type: 'btn btn-default', value: '9'},
      	{idx: 7, type: 'btn btn-success', value: '-'}
      ],
      [
      	{idx: 8, type: 'btn btn-default', value: '4'},
      	{idx: 9, type: 'btn btn-default', value: '5'},
      	{idx: 10, type: 'btn btn-default', value: '6'},
      	{idx: 11, type: 'btn btn-success', value: '*'}
      ],
      [
      	{idx: 12, type: 'btn btn-default', value: '1'},
      	{idx: 13, type: 'btn btn-default', value: '2'},
      	{idx: 14, type: 'btn btn-default', value: '3'},
      	{idx: 15, type: 'btn btn-success', value: '/'}
      ],
      [
      	{idx: 16, type: 'btn btn-default', value: '.'},
      	{idx: 17, type: 'btn btn-default', value: '0'},
      	{idx: 18, type: 'btn btn-default', value: '00'},
      	{idx: 19, type: 'btn btn-primary', value: '='}
      ]
    ]
  },
  methods: {
    append: function (value) {
      this.input += value
    }
  }
})
