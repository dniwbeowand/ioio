const socket = io.connect("https://dbotlist.co");

socket.on('userCount', userCount => {
        document.getElementById('connectionCount').innerHTML = userCount;
  })