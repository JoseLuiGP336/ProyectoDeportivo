var http = require('http').createServer(handler); //require http server, and create server with function handler()
var fs = require('fs'); //require filesystem module
var io = require('socket.io')(http) //require socket.io module and pass the http object (server)
var Gpio = require('onoff').Gpio; //include onoff to interact with the GPIO
var LED = new Gpio(2, 'out'); //use GPIO pin 2 as output
var pushButton = new Gpio(3, 'in', 'both'); //use GPIO pin 3 as input, and 'both' button presses, and releases should be handled
var LED1 = new Gpio(4, 'out');
var pushButton1 = new Gpio(17, 'in', 'both');
var LED2 = new Gpio(27, 'out');
var pushButton2 = new Gpio(22, 'in', 'both');
var LED3 = new Gpio(10, 'out');
var pushButton3 = new Gpio(9, 'in', 'both');
var LED4 = new Gpio(11, 'out');
var pushButton4 = new Gpio(5, 'in', 'both');
var LED5 = new Gpio(6, 'out');
var pushButton5 = new Gpio(13, 'in', 'both');
var LED6 = new Gpio(19, 'out');
var pushButton6 = new Gpio(26, 'in', 'both');
var LED7 = new Gpio(20, 'out');
var pushButton7 = new Gpio(21, 'in', 'both');
var LED8 = new Gpio(12, 'out');
var pushButton8 = new Gpio(16, 'in', 'both');
var LED9 = new Gpio(8, 'out');
var pushButton9 = new Gpio(7, 'in', 'both');
var LED10 = new Gpio(24, 'out');
var pushButton10 = new Gpio(25, 'in', 'both');
var LED11 = new Gpio(18, 'out');
var pushButton11 = new Gpio(23, 'in', 'both');
var status = "";
let controllight = 1; let controllight1 = 1; let controllight2 = 1; let controllight3 = 1;
let controllight4 = 1; let controllight5 = 1; let controllight6 = 1; let controllight7 = 1;
let controllight8 = 1; 

//value.
http.listen(8083); //listen to port 8080

function handler (req, res) { //create server
  fs.readFile(__dirname + '/public/index.html', function(err, data) { //read file index.html in public folder
    if (err) {
      res.writeHead(404, {'Content-Type': 'text/html'}); //display 404 on error
      return res.end("404 Not Found");
    }
    res.writeHead(200, {'Content-Type': 'text/html'}); //write HTML
    res.write(data); //write data from index.html
    return res.end();
  });
}

io.sockets.on('connection', function (socket) {// WebSocket Connection
  var lightvalue = 0; //static variable for current status
  console.log("Enlace exitoso");

  pushButton.watch(function (err, value) { //Watch for hardware interrupts on pushButton
     if (err) { //if an error
       console.error('There was an error', err); //output error message to console
       return;
   }
     lightvalue = value;
     socket.emit('light', lightvalue);
  });
  
  socket.on('light', function(data) { //get light switch status from client
    console.log("Boton1: " + controllight);
    lightvalue = data;
    if(data===1){
      LED.writeSync(1); //turn LED on or on
      controllight = controllight+1
    }
    else{
      if (controllight >= 2){
        LED.writeSync(0); //turn LED on or off
        controllight = 1;
      } 
    }
  });

  pushButton1.watch(function (err, value) { //Watch for hardware interrupts on pushButton
    if (err) { //if an error
      console.error('There was an error', err); //output error message to console
      return;
    }
    
    lightvalue = value;
     socket.emit('light1', lightvalue);
  });
  socket.on('light1', function(data) { //get light switch status from client
    console.log("boton2: " + controllight1);
    lightvalue1 = data;
    if(data===1){
      LED1.writeSync(1); //turn LED on or on
      controllight1 = controllight1+1;
    }
    else{
      if (controllight1 >= 2){
        LED1.writeSync(0); //turn LED on or off
        controllight1 = 1;
        console.log("SE APAGA");
      } 
    }
  });
  
  

  pushButton2.watch(function (err, value) { //Watch for hardware interrupts on pushButton
    if (err) { //if an error
      console.error('There was an error', err); //output error message to console
      return;
    }
    
    lightvalue = value;
     socket.emit('light2', lightvalue);
  });
  socket.on('light2', function(data) { //get light switch status from client
    console.log("boton3: " + controllight2);
    lightvalue1 = data;
    if(data===1){
      LED2.writeSync(1); //turn LED on or on
      controllight2 = controllight2+1;
    }
    else{
      if (controllight2 >= 2){
        LED2.writeSync(0); //turn LED on or off
        controllight2 = 1;
        console.log("SE APAGFA");
      } 
    }
  });

  pushButton3.watch(function (err, value) { //Watch for hardware interrupts on pushButton
    if (err) { //if an error
      console.error('There was an error', err); //output error message to console
      return;
    }
    
    lightvalue = value;
     socket.emit('light3', lightvalue);
  });
  socket.on('light3', function(data) { //get light switch status from client
    console.log("boton4: " + controllight3);
    lightvalue3 = data;
    if(data===1){
      LED3.writeSync(1); //turn LED on or on
      controllight3 = controllight3+1;
    }
    else{
      if (controllight3 >= 2){
        LED3.writeSync(0); //turn LED on or off
        controllight3 = 1;
        console.log("SE APAGA");
      } 
    }
  });



  pushButton4.watch(function (err, value) { //Watch for hardware interrupts on pushButton
    if (err) { //if an error
      console.error('There was an error', err); //output error message to console
      return;
    }
    
    lightvalue = value;
     socket.emit('light4', lightvalue);
  });
  socket.on('light4', function(data) { //get light switch status from client
    console.log("boton5: " + controllight4);
    lightvalue4 = data;
    if(data===1){
      LED4.writeSync(1); //turn LED on or on
      controllight4 = controllight4+1;
    }
    else{
      if (controllight4 >= 2){
        LED4.writeSync(0); //turn LED on or off
        controllight4 = 1;
        console.log("SE APAGA");
      } 
    }
  }); 


  pushButton5.watch(function (err, value) { //Watch for hardware interrupts on pushButton
    if (err) { //if an error
      console.error('There was an error', err); //output error message to console
      return;
    }
    
    lightvalue = value;
     socket.emit('light5', lightvalue);
  });
  socket.on('light5', function(data) { //get light switch status from client
    console.log("boton6: " + controllight5);
    lightvalue5 = data;
    if(data===1){
      LED5.writeSync(1); //turn LED on or on
      controllight5 = controllight5+1;
    }
    else{
      if (controllight5 >= 2){
        LED5.writeSync(0); //turn LED on or off
        controllight5 = 1;
        console.log("SE APAGA");
      } 
    }
  }); 

  pushButton6.watch(function (err, value) { //Watch for hardware interrupts on pushButton
    if (err) { //if an error
      console.error('There was an error', err); //output error message to console
      return;
    }
    
    lightvalue = value;
     socket.emit('light6', lightvalue);
  });
  socket.on('light6', function(data) { //get light switch status from client
    console.log("boton7: " + controllight6);
    lightvalue6 = data;
    if(data===1){
      LED6.writeSync(1); //turn LED on or on
      controllight6 = controllight6+1;
    }
    else{
      if (controllight6 >= 2){
        LED6.writeSync(0); //turn LED on or off
        controllight6 = 1;
        console.log("SE APAGA");
      } 
    }
  }); 


  pushButton7.watch(function (err, value) { //Watch for hardware interrupts on pushButton
    if (err) { //if an error
      console.error('There was an error', err); //output error message to console
      return;
    }
    
    lightvalue = value;
     socket.emit('light7', lightvalue);
  });
  socket.on('light7', function(data) { //get light switch status from client
    console.log("boton8: " + controllight7);
    lightvalue7 = data;
    if(data===1){
      LED7.writeSync(1); //turn LED on or on
      controllight7 = controllight7+1;
    }
    else{
      if (controllight7 >= 2){
        LED7.writeSync(0); //turn LED on or off
        controllight7 = 1;
        console.log("SE APAGA");
      } 
    }
  });
  
  
  pushButton8.watch(function (err, value) { //Watch for hardware interrupts on pushButton
    if (err) { //if an error
      console.error('There was an error', err); //output error message to console
      return;
    }
    
    lightvalue = value;
     socket.emit('light8', lightvalue);
  });
  socket.on('light8', function(data) { //get light switch status from client
    console.log("boton9: " + controllight8);
    lightvalue8 = data;
    if(data===1){
      LED8.writeSync(1); //turn LED on or on
      controllight8 = controllight8+1;
    }
    else{
      if (controllight8 >= 2){
        LED8.writeSync(0); //turn LED on or off
        controllight8 = 1;
        console.log("SE APAGA");
      } 
    }
  });


});

process.on('SIGINT', function () { //on ctrl+c
  LED.writeSync(0); // Turn LED off
  LED1.writeSync(0);
  LED2.writeSync(0);
  LED.unexport(); // Unexport LED GPIO to free resources
  LED1.unexport();
  LED2.unexport();
  pushButton.unexport(); // Unexport Button GPIO to free resources
  pushButton1.unexport();
  pushButton2.unexport();
  process.exit(); //exit completely
});