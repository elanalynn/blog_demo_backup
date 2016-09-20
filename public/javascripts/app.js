'use strict'

$(document).ready(()=>{
  console.log('sanity check')
})

// function populateUsers(){
//   $.get('/users/utility', function(data){
//     $('.user-select').material_select()
//     for (var i = 0; i < data.length; i++) {
//       $('.user-select').append('<option>' + data[i].first_name + ' ' + data[i].last_name + '</option>')
//     }
//     // console.log(data)
//   })
// }
//
// function addDeleteListener(){
//   $('.btn-delete-post').click(function(){
//     var id = parseInt(window.location.pathname.split('/')[2])
//     // console.log(id)
//     $.ajax({
//       url: '/posts/' + id,
//       method: 'DELETE',
//       success: function(data){
//         console.log(data)
//       },
//     })
//   })
// }
