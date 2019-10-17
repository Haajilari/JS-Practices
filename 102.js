
Spry.Utils.addLoadListener(function() {

	  function generate() {
		  var num = + document.getElementById('num1').value;
		  var arr = [] ;
		  var ctrl = 0 ;
		  for (i=0 ; i<num ; i++){
			  arr.push(prompt("Enter Element" + (i+1)));
			  arr.map(Number);
		  }
		  for (i=0 ; i<arr.length ; i++){
			  for ( j = i+1 ; j <arr.length ; j++)
			  if ( arr[i] > arr[j] ){
				  ctrl++
			  }
			  
		  }
		  document.getElementById('demo').innerHTML=
			  "Number of inverseion is: " + ctrl ;
	  }
	
	

});
