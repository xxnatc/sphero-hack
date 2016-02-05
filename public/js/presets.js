'use strict';
/* global io */

var socket = io.connect('http://localhost:3000');

$('.card').on('click', 'button', function() {
  socket.emit('preset', { name: $(this).data('preset') });
});

$('#stop-btn').on('click', () => {
  socket.emit('clear-preset');
});
