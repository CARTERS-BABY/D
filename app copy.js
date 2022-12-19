
canvas =
document.getElementById('canvas');
cx= canvas.getContext('2d');
cx.beginPath ();   
cx.strokeStyle = "red";
cx.lineWidht = 1;
cx.rect( 150,143,430,200);
cx.stroke ();

cx.beginPath ();   
cx.strokeStyle = "BLUE";
cx.lineWidht = 5;
cx.arc(250,210,40,0,2 * Math.PI);
cx.stroke ();

cx.beginPath ();   
cx.strokeStyle = "YELLOW";
cx.lineWidht = 5;
cx.arc(300,250,40,0,2 * Math.PI);
cx.stroke ();


cx.beginPath ();   
cx.strokeStyle = "BLACK";
cx.lineWidht = 5;
cx.arc(355,210,40,0,2 * Math.PI);
cx.stroke ();

cx.beginPath ();   
cx.strokeStyle = "GREEN";
cx.lineWidht = 5;
cx.arc(400,250,40,0,2 * Math.PI);
cx.stroke ();


cx.beginPath ();   
cx.strokeStyle = "RED";
cx.lineWidht = 5;
cx.arc(450,210,40,0,2 * Math.PI);
cx.stroke ();
