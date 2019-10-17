
Spry.Utils.addLoadListener(function() {

	  function generate() {
		  var num = + document.getElementById('num1').value;
		  var num_dig = [];
		  var result = 0;
		  while(num){
			  num_dig.push(num%10);
			  num = Math.floor(num/10);
		  }
		  for ( in_num = 0 ; in_num < num_dig.length ; in_num++){
			  var n = 0 ;
			  for(i = num_dig.length - 1 ; i >= 0 ; i--){
				  if ( i !== in_num){
					  n = n * 10 + num_dig[i];
				  }
			  }
			 result = Math.max(n, result);
		  } 
		  document.getElementById('demo').innerHTML=
			  "The Maximal Number After Deleting One Digits:<br>" + result ;
	  }
	

});
