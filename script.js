
		let x1, x2, x3, y1, y2, y3;
		let got = false;
		//get x1 x2 x3 y1 y2 y3 once
		function getPosition(){
			//console.log("run")
	        x1 = window.scrollX + document.querySelector('.a').getBoundingClientRect().left;
	        y1 = window.scrollX + document.querySelector('.a').getBoundingClientRect().top;
  	        x2 = window.scrollX + document.querySelector('.b').getBoundingClientRect().left;
	        y2 = window.scrollX + document.querySelector('.b').getBoundingClientRect().top;
	        x3 = window.scrollX + document.querySelector('.c').getBoundingClientRect().left;
	        y3 = window.scrollX + document.querySelector('.c').getBoundingClientRect().top;
	        got = true;}

		function getPositionOnce(){
			if(!got) getPosition();}

		//place option's blocks
		let blockWH;
		function placeBlocks(){
			getPositionOnce();
	        $('.a')
	        	.css("left", function(){
	         		//console.log($(this).index() % 3 * 60 + x)
	          		return $(this).index() % 3 * blockWH + x1;
	         	})
	         	.css("top", function(){
	            	return Math.floor($(this).index()/3) * blockWH + y1;
	         	});
	        $('.b')
	        	.css("left", function(){
	         		//console.log($(this).index() % 3 * 60 + x)
	          		return $(this).index() % 3 * blockWH + x2;
	         	})
	         	.css("top", function(){
	            	return Math.floor($(this).index()/3) * blockWH + y2;
	         	});
	        $('.c')
	        	.css("left", function(){
	         		//console.log($(this).index() % 3 * 60 + x)
	          		return $(this).index() % 3 * blockWH + x3;
	         	})
	         	.css("top", function(){
	            	return Math.floor($(this).index()/3) * blockWH + y3;
	         	});}

        //make black class draggable
	    $('.a')
	      .drag("init",function(){
	         if ($( this ).is('.black'))
	            return $('.black');
	      })
	      .drag(function( ev, dd ){
	         let index = $(this).index();
	         $( this ).css({
	            top: event.clientY + Math.floor(index/3)*blockWH - (blockWH * 1.5),
	            left: event.clientX + index % 3 * blockWH - (blockWH * 1.5)
	         });
	      });
	    $('.b')
	      .drag("init",function(){
	         if ($( this ).is('.black2'))
	            return $('.black2');
	      })
	      .drag(function( ev, dd ){
	         let index = $(this).index();
	         $( this ).css({
	            top: event.clientY + Math.floor(index/3)*blockWH - (blockWH * 1.5),
	            left: event.clientX + index % 3 * blockWH - (blockWH * 1.5)
	         });
	      });
	    $('.c')
	      .drag("init",function(){
	         if ($( this ).is('.black3'))
	            return $('.black3');
	      })
	      .drag(function( ev, dd ){
	         let index = $(this).index();
	         $( this ).css({
	            top: event.clientY + Math.floor(index/3)*blockWH - (blockWH * 1.5),
	            left: event.clientX + index % 3 * blockWH - (blockWH * 1.5)
	         });
	      });

		//give coordinations where divs were dropped
        $('.a5').mouseup(function(){
        	let left = $('.a5').position().left;
        	let top = $('.a5').position().top;
        	drop(left,top,1);});
        $('.b5').mouseup(function(){
        	let left = $('.b5').position().left;
        	let top = $('.b5').position().top;
        	drop(left,top,2);});
        $('.c5').mouseup(function(){
        	let left = $('.c5').position().left;
        	let top = $('.c5').position().top;
        	drop(left,top,3)});

	    //get random shapes
		let shape1 = 0;
		let shape2 = 0;
		let shape3 = 0;
    	let tempa;
    	let tempb;
    	let tempc;
	    function shapes(a, b, c){
	    	//console.log(tempa,tempb,tempc)
	    	if(a === 1){
	    		tempa = 1;
	    		$('.a').removeClass('black');
	    	}
	    	if(b === 2){
	    		tempb = 2;
	    		$('.b').removeClass('black2');
	    	}
	    	if(c === 3){
	    		tempc = 3;
	    		$('.c').removeClass('black3');
	    	}
	    	if(tempa === 1 && tempb === 2 && tempc === 3){
	    		tempa = 0;
	    		tempb = 0;
	    		tempc = 0;
		    	let opt1 = Math.floor(Math.random() * 23);
		    	let opt2 = Math.floor(Math.random() * 23);
		    	let opt3 = Math.floor(Math.random() * 23);

					$('.a').removeClass('black');
					if(opt1 == 0){
						shape1 = 0;
						$('.a2').addClass('black');
						$('.a5').addClass('black');
						$('.a8').addClass('black');
					}else if(opt1 == 1){
						shape1 = 1;
						$('.a5').addClass('black');
					}else if(opt1 == 2){
						shape1 = 2;
						$('.a4').addClass('black');
						$('.a5').addClass('black');
						$('.a6').addClass('black');
					}else if(opt1 == 3){
						shape1 = 3;
						$('.a2').addClass('black');
						$('.a4').addClass('black');
						$('.a5').addClass('black');
						$('.a6').addClass('black');
						$('.a8').addClass('black');
					}else if(opt1 == 4){
						shape1 = 4;
						$('.a3').addClass('black');
						$('.a5').addClass('black');
						$('.a7').addClass('black');
					}else if(opt1 === 5){
						shape1 = 5;
						$('.a1').addClass('black');
						$('.a2').addClass('black');
						$('.a4').addClass('black');
						$('.a5').addClass('black');
					}else if(opt1 === 6){
						shape1 = 6;
						$('.a3').addClass('black');
						$('.a5').addClass('black');
					}else if(opt1 === 7){
						shape1 = 7;
						$('.a1').addClass('black');
						$('.a5').addClass('black');
						$('.a9').addClass('black');
					}else if(opt1 === 8){
						shape1 = 8;
						$('.a1').addClass('black');
						$('.a5').addClass('black');
					}else if(opt1 === 9){
						shape1 = 9;
						$('.a5').addClass('black');
						$('.a6').addClass('black');
						$('.a7').addClass('black');
						$('.a8').addClass('black');
					}else if(opt1 === 10){
						shape1 = 10;
						$('.a4').addClass('black');
						$('.a5').addClass('black');
						$('.a8').addClass('black');
						$('.a9').addClass('black');
					}else if(opt1 === 11){
						shape1 = 11;
						$('.a1').addClass('black');
						$('.a4').addClass('black');
						$('.a5').addClass('black');
						$('.a8').addClass('black');
					}else if(opt1 === 12){
						shape1 = 12;
						$('.a3').addClass('black');
						$('.a5').addClass('black');
						$('.a6').addClass('black');
						$('.a8').addClass('black');
					}else if(opt1 === 13){
						shape1 = 13;
						$('.a5').addClass('black');
						$('.a7').addClass('black');
						$('.a8').addClass('black');
						$('.a9').addClass('black');
					}else if(opt1 === 14){
						shape1 = 14;
						$('.a1').addClass('black');
						$('.a2').addClass('black');
						$('.a3').addClass('black');
						$('.a5').addClass('black');
					}else if(opt1 === 15){
						shape1 = 15;
						$('.a1').addClass('black');
						$('.a4').addClass('black');
						$('.a5').addClass('black');
						$('.a7').addClass('black');
					}else if(opt1 === 16){
						shape1 = 16;
						$('.a3').addClass('black');
						$('.a5').addClass('black');
						$('.a6').addClass('black');
						$('.a9').addClass('black');
					}else if(opt1 === 17){
						shape1 = 17;
						$('.a5').addClass('black');
						$('.a7').addClass('black');
						$('.a8').addClass('black');
					}else if(opt1 === 18){
						shape1 = 18;
						$('.a5').addClass('black');
						$('.a8').addClass('black');
						$('.a9').addClass('black');
					}else if(opt1 === 19){
						shape1 = 19;
						$('.a1').addClass('black');
						$('.a2').addClass('black');
						$('.a5').addClass('black');
					}else if(opt1 === 20){
						shape1 = 20;
						$('.a2').addClass('black');
						$('.a3').addClass('black');
						$('.a5').addClass('black');
					}else if(opt1 === 21){
						shape1 = 21;
						$('.a5').addClass("black");
						$('.a8').addClass("black");
					}else if(opt1 === 22){
						shape1 = 22;
						$('.a5').addClass("black");
						$('.a6').addClass("black");
					}

					$('.b').removeClass('black2');
					if(opt2 == 0){
						shape2 = 0;
						$('.b2').addClass('black2');
						$('.b5').addClass('black2');
						$('.b8').addClass('black2');
					}else if(opt2 == 1){
						shape2 = 1;
						$('.b5').addClass('black2');
					}else if(opt2 == 2){
						shape2 = 2;
						$('.b4').addClass('black2');
						$('.b5').addClass('black2');
						$('.b6').addClass('black2');
					}else if(opt2 == 3){
						shape2 = 3;
						$('.b2').addClass('black2');
						$('.b4').addClass('black2');
						$('.b5').addClass('black2');
						$('.b6').addClass('black2');
						$('.b8').addClass('black2');
					}else if(opt2 == 4){
						shape2 = 4;
						$('.b3').addClass('black2');
						$('.b5').addClass('black2');
						$('.b7').addClass('black2');
					}else if(opt2 === 5){
						shape2 = 5;
						$('.b1').addClass('black2');
						$('.b2').addClass('black2');
						$('.b4').addClass('black2');
						$('.b5').addClass('black2');
					}else if(opt2 === 6){
						shape2 = 6;
						$('.b3').addClass('black2');
						$('.b5').addClass('black2');
					}else if(opt2 === 7){
						shape2 = 7;
						$('.b1').addClass('black2');
						$('.b5').addClass('black2');
						$('.b9').addClass('black2');
					}else if(opt2 === 8){
						shape2 = 8;
						$('.b1').addClass('black2');
						$('.b5').addClass('black2');
					}else if(opt2 === 9){
						shape2 = 9;
						$('.b5').addClass('black2');
						$('.b6').addClass('black2');
						$('.b7').addClass('black2');
						$('.b8').addClass('black2');
					}else if(opt2 === 10){
						shape2 = 10;
						$('.b4').addClass('black2');
						$('.b5').addClass('black2');
						$('.b8').addClass('black2');
						$('.b9').addClass('black2');
					}else if(opt2 === 11){
						shape2 = 11;
						$('.b1').addClass('black2');
						$('.b4').addClass('black2');
						$('.b5').addClass('black2');
						$('.b8').addClass('black2');
					}else if(opt2 === 12){
						shape2 = 12;
						$('.b3').addClass('black2');
						$('.b5').addClass('black2');
						$('.b6').addClass('black2');
						$('.b8').addClass('black2');
					}else if(opt2 === 13){
						shape2 = 13;
						$('.b5').addClass('black2');
						$('.b7').addClass('black2');
						$('.b8').addClass('black2');
						$('.b9').addClass('black2');
					}else if(opt2 === 14){
						shape2 = 14;
						$('.b1').addClass('black2');
						$('.b2').addClass('black2');
						$('.b3').addClass('black2');
						$('.b5').addClass('black2');
					}else if(opt2 === 15){
						shape2 = 15;
						$('.b1').addClass('black2');
						$('.b4').addClass('black2');
						$('.b5').addClass('black2');
						$('.b7').addClass('black2');
					}else if(opt2 === 16){
						shape2 = 16;
						$('.b3').addClass('black2');
						$('.b5').addClass('black2');
						$('.b6').addClass('black2');
						$('.b9').addClass('black2');
					}else if(opt2 === 17){
						shape2 = 17;
						$('.b5').addClass('black2');
						$('.b7').addClass('black2');
						$('.b8').addClass('black2');
					}else if(opt2 === 18){
						shape2 = 18;
						$('.b5').addClass('black2');
						$('.b8').addClass('black2');
						$('.b9').addClass('black2');
					}else if(opt2 === 19){
						shape2 = 19;
						$('.b1').addClass('black2');
						$('.b2').addClass('black2');
						$('.b5').addClass('black2');
					}else if(opt2 === 20){
						shape2 = 20;
						$('.b2').addClass('black2');
						$('.b3').addClass('black2');
						$('.b5').addClass('black2');
					}else if(opt2 === 21){
						shape2 = 21;
						$('.b5').addClass("black2");
						$('.b8').addClass("black2");
					}else if(opt2 === 22){
						shape2 = 22;
						$('.b5').addClass("black2");
						$('.b6').addClass("black2");
					}

					$('.c').removeClass('black3');
					if(opt3 == 0){
						shape3 = 0;
						$('.c2').addClass('black3');
						$('.c5').addClass('black3');
						$('.c8').addClass('black3');
					}else if(opt3 == 1){
						shape3 = 1;
						$('.c5').addClass('black3');
					}else if(opt3 == 2){
						shape3 = 2;
						$('.c4').addClass('black3');
						$('.c5').addClass('black3');
						$('.c6').addClass('black3');
					}else if(opt3 == 3){
						shape3 = 3;
						$('.c2').addClass('black3');
						$('.c4').addClass('black3');
						$('.c5').addClass('black3');
						$('.c6').addClass('black3');
						$('.c8').addClass('black3');
					}else if(opt3 == 4){
						shape3 = 4;
						$('.c3').addClass('black3');
						$('.c5').addClass('black3');
						$('.c7').addClass('black3');
					}else if(opt3 === 5){
						shape3 = 5;
						$('.c1').addClass('black3');
						$('.c2').addClass('black3');
						$('.c4').addClass('black3');
						$('.c5').addClass('black3');
					}else if(opt3 === 6){
						shape3 = 6;
						$('.c3').addClass('black3');
						$('.c5').addClass('black3');
					}else if(opt3 === 7){
						shape3 = 7;
						$('.c1').addClass('black3');
						$('.c5').addClass('black3');
						$('.c9').addClass('black3');
					}else if(opt3 === 8){
						shape3 = 8;
						$('.c1').addClass('black3');
						$('.c5').addClass('black3');
					}else if(opt3 === 9){
						shape3 = 9;
						$('.c5').addClass('black3');
						$('.c6').addClass('black3');
						$('.c7').addClass('black3');
						$('.c8').addClass('black3');
					}else if(opt3 === 10){
						shape3 = 10;
						$('.c4').addClass('black3');
						$('.c5').addClass('black3');
						$('.c8').addClass('black3');
						$('.c9').addClass('black3');
					}else if(opt3 === 11){
						shape3 = 11;
						$('.c1').addClass('black3');
						$('.c4').addClass('black3');
						$('.c5').addClass('black3');
						$('.c8').addClass('black3');
					}else if(opt3 === 12){
						shape3 = 12;
						$('.c3').addClass('black3');
						$('.c5').addClass('black3');
						$('.c6').addClass('black3');
						$('.c8').addClass('black3');
					}else if(opt3 === 13){
						shape3 = 13;
						$('.c5').addClass('black3');
						$('.c7').addClass('black3');
						$('.c8').addClass('black3');
						$('.c9').addClass('black3');
					}else if(opt3 === 14){
						shape3 = 14;
						$('.c1').addClass('black3');
						$('.c2').addClass('black3');
						$('.c3').addClass('black3');
						$('.c5').addClass('black3');
					}else if(opt3 === 15){
						shape3 = 15;
						$('.c1').addClass('black3');
						$('.c4').addClass('black3');
						$('.c5').addClass('black3');
						$('.c7').addClass('black3');
					}else if(opt3 === 16){
						shape3 = 16;
						$('.c3').addClass('black3');
						$('.c5').addClass('black3');
						$('.c6').addClass('black3');
						$('.c9').addClass('black3');
					}else if(opt3 === 17){
						shape3 = 17;
						$('.c5').addClass('black3');
						$('.c7').addClass('black3');
						$('.c8').addClass('black3');
					}else if(opt3 === 18){
						shape3 = 18;
						$('.c5').addClass('black3');
						$('.c8').addClass('black3');
						$('.c9').addClass('black3');
					}else if(opt3 === 19){
						shape3 = 19;
						$('.c1').addClass('black3');
						$('.c2').addClass('black3');
						$('.c5').addClass('black3');
					}else if(opt3 === 20){
						shape3 = 20;
						$('.c2').addClass('black3');
						$('.c3').addClass('black3');
						$('.c5').addClass('black3');
					}else if(opt3 === 21){
						shape3 = 21;
						$('.c5').addClass("black3");
						$('.c8').addClass("black3");
					}else if(opt3 === 22){
						shape3 = 22;
						$('.c5').addClass("black3");
						$('.c6').addClass("black3");
					}
			}}//console.log(tempa,tempb,tempc)
		shapes(1,2,3);


       	let row = null; //variables to pass to the functions
       	let col = null;	//variables to pass to the functions
        //see where block is dropped
        function drop(left, top, option){

        	/////////////////////////CALCULATIONS ONLY WORK FOR SCREENS WIDER THAN 1200 PX!!!!!

			//$(window).width()/2 = width of broswer
        	//630/2; = width of main
        	//23 = top start of the main

        	let x = left - $(window).width()/2 + 315;//630/2; //find where the left blocks are
        	let y = top - 23; //find where the top blocks are

        	//calculate where the block was dropped
	        if((x >= 0 && x <= 630) && (y >= 0 && y <= 630)){
	        	if(x <= 70){
	        		col = 1;
	        		if(y <= 70){
	        			row = 1;
	        		}else if(y <= 140){
	        			row = 2;
	        		}else if(y <= 210){
	        			row = 3;
	        		}else if(y <= 280){
	        			row = 4;
	        		}else if(y <= 350){
	        			row = 5;
	        		}else if(y <= 420){
	        			row = 6;
	        		}else if(y <= 490){
	        			row = 7;
	        		}else if(y <= 560){
	        			row = 8;
	        		}else if(y <= 630){
	        			row = 9;
	        		}
	        	}else if(x <= 140){
	        		col = 2;
	        		if(y <= 70){
	        			row = 1;
	        		}else if(y <= 140){
	        			row = 2;
	        		}else if(y <= 210){
	        			row = 3;
	        		}else if(y <= 280){
	        			row = 4;
	        		}else if(y <= 350){
	        			row = 5;
	        		}else if(y <= 420){
	        			row = 6;
	        		}else if(y <= 490){
	        			row = 7;
	        		}else if(y <= 560){
	        			row = 8;
	        		}else if(y <= 630){
	        			row = 9;
	        		}
	        	}else if(x <= 210){
	        		col = 3;
	        		if(y <= 70){
	        			row = 1;
	        		}else if(y <= 140){
	        			row = 2;
	        		}else if(y <= 210){
	        			row = 3;
	        		}else if(y <= 280){
	        			row = 4;
	        		}else if(y <= 350){
	        			row = 5;
	        		}else if(y <= 420){
	        			row = 6;
	        		}else if(y <= 490){
	        			row = 7;
	        		}else if(y <= 560){
	        			row = 8;
	        		}else if(y <= 630){
	        			row = 9;
	        		}
	        	}else if(x <= 280){
	        		col = 4;
	        		if(y <= 70){
	        			row = 1;
	        		}else if(y <= 140){
	        			row = 2;
	        		}else if(y <= 210){
	        			row = 3;
	        		}else if(y <= 280){
	        			row = 4;
	        		}else if(y <= 350){
	        			row = 5;
	        		}else if(y <= 420){
	        			row = 6;
	        		}else if(y <= 490){
	        			row = 7;
	        		}else if(y <= 560){
	        			row = 8;
	        		}else if(y <= 630){
	        			row = 9;
	        		}
	        	}else if(x <= 350){
	        		col = 5;
	        		if(y <= 70){
	        			row = 1;
	        		}else if(y <= 140){
	        			row = 2;
	        		}else if(y <= 210){
	        			row = 3;
	        		}else if(y <= 280){
	        			row = 4;
	        		}else if(y <= 350){
	        			row = 5;
	        		}else if(y <= 420){
	        			row = 6;
	        		}else if(y <= 490){
	        			row = 7;
	        		}else if(y <= 560){
	        			row = 8;
	        		}else if(y <= 630){
	        			row = 9;
	        		}
	        	}else if(x <= 420){
	        		col = 6;
	        		if(y <= 70){
	        			row = 1;
	        		}else if(y <= 140){
	        			row = 2;
	        		}else if(y <= 210){
	        			row = 3;
	        		}else if(y <= 280){
	        			row = 4;
	        		}else if(y <= 350){
	        			row = 5;
	        		}else if(y <= 420){
	        			row = 6;
	        		}else if(y <= 490){
	        			row = 7;
	        		}else if(y <= 560){
	        			row = 8;
	        		}else if(y <= 630){
	        			row = 9;
	        		}
	        	}else if(x <= 490){
	        		col = 7;
	        		if(y <= 70){
	        			row = 1;
	        		}else if(y <= 140){
	        			row = 2;
	        		}else if(y <= 210){
	        			row = 3;
	        		}else if(y <= 280){
	        			row = 4;
	        		}else if(y <= 350){
	        			row = 5;
	        		}else if(y <= 420){
	        			row = 6;
	        		}else if(y <= 490){
	        			row = 7;
	        		}else if(y <= 560){
	        			row = 8;
	        		}else if(y <= 630){
	        			row = 9;
	        		}
	        	}else if(x <= 560){
	        		col = 8;
	        		if(y <= 70){
	        			row = 1;
	        		}else if(y <= 140){
	        			row = 2;
	        		}else if(y <= 210){
	        			row = 3;
	        		}else if(y <= 280){
	        			row = 4;
	        		}else if(y <= 350){
	        			row = 5;
	        		}else if(y <= 420){
	        			row = 6;
	        		}else if(y <= 490){
	        			row = 7;
	        		}else if(y <= 560){
	        			row = 8;
	        		}else if(y <= 630){
	        			row = 9;
	        		}
	        	}else if(x <= 630){
	        		col = 9;
	        		if(y <= 70){
	        			row = 1;
	        		}else if(y <= 140){
	        			row = 2;
	        		}else if(y <= 210){
	        			row = 3;
	        		}else if(y <= 280){
	        			row = 4;
	        		}else if(y <= 350){
	        			row = 5;
	        		}else if(y <= 420){
	        			row = 6;
	        		}else if(y <= 490){
	        			row = 7;
	        		}else if(y <= 560){
	        			row = 8;
	        		}else if(y <= 630){
	        			row = 9;
	        		}
	        	}
	        }else{
	       		//console.log('out of range');
	        	placeBlocks();
	        	return;
	        }

	        let shape;
	        if(option === 1){
	        	shape = shape1;
	        }else if(option === 2){
	        	shape = shape2;
	        }else if(option === 3){
	        	shape = shape3;
	        }

	        determine(row, col, shape, option);}

		//create variable class for jquery
		function createClass(row,col){
			return $('.r' + row.toString() + 'c' + col.toString());}

        //determine wether the shape fits or not
		function determine(row, col, shape, option){

			//console.log(option);

			//find shape and placements
		    if(shape === 0){
		    	//vertical line
		    	//console.log("shape === 0")
		        if(createClass(row-1, col).css("background-color") === 'rgba(0, 0, 0, 0)' && createClass(row, col).css("background-color") === 'rgba(0, 0, 0, 0)' && createClass(row+1, col).css("background-color") === 'rgba(0, 0, 0, 0)'){		        	
		        	createClass(row-1, col).css("background-color","black");
		        	createClass(row, col).css("background-color","black");
		        	createClass(row+1, col).css("background-color","black");
		        	setTimeout(functions, 600)
		        	shapes(option,option,option);
		        	//return blocks to normal position after being dropped
		        	placeBlocks();

		        }else{
		            // console.log("Shape 0 cant be placed here");
		            placeBlocks();
		            return;
		        }
		    }else if(shape === 1){
		    	//middle dot
		    	//console.log("shape === 1")
		        if(createClass(row, col).css("background-color") === 'rgba(0, 0, 0, 0)'){
		        	createClass(row, col).css('background-color', 'black');
		        	setTimeout(functions, 600)
		        	shapes(option,option,option);
		    		//return blocks to normal position after being dropped
		    		placeBlocks();
		        }else{
		            // console.log("Shape 1 cant be placed here");
		            placeBlocks();
		            return;
		        }
		    }else if(shape === 2){
		    	//horizontal line
		    	//console.log("shape === 2")
		        if(createClass(row, col-1).css("background-color") === 'rgba(0, 0, 0, 0)' && createClass(row, col).css("background-color") === 'rgba(0, 0, 0, 0)' && createClass(row, col+1).css("background-color") === 'rgba(0, 0, 0, 0)'){
		        	createClass(row, col-1).css("background-color","black");
		        	createClass(row, col).css("background-color","black");
		        	createClass(row, col+1).css("background-color","black");
		        	setTimeout(functions, 600)
		        	shapes(option,option,option);
		        	placeBlocks();
		        }else{
		            // console.log("Shape 2 cant be placed here");
		            placeBlocks();
		            return;
		        }  
		    }else if(shape === 3){
		    	//cross
		    	//console.log("shape === 3")
		        if(createClass(row-1, col).css("background-color") === 'rgba(0, 0, 0, 0)' && createClass(row, col-1).css("background-color") === 'rgba(0, 0, 0, 0)' && createClass(row, col).css("background-color") === 'rgba(0, 0, 0, 0)' && createClass(row+1, col).css("background-color") === 'rgba(0, 0, 0, 0)' && createClass(row, col+1).css("background-color") === 'rgba(0, 0, 0, 0)'){
		        	createClass(row-1, col).css("background-color","black");
		        	createClass(row, col-1).css("background-color","black");
		        	createClass(row, col).css("background-color","black");
		        	createClass(row+1, col).css("background-color","black");
		        	createClass(row, col+1).css("background-color","black");
		        	setTimeout(functions, 600)
		        	shapes(option,option,option);
		        	placeBlocks();
		        }else{
		            // console.log("Shape 3 cant be placed here");
		            placeBlocks();
		            return;
		        }  
		    }else if(shape === 4){
		    	//big right diagonal 
		    	//console.log("shape === 4");
		    	if(createClass(row-1,col+1).css("background-color") === "rgba(0, 0, 0, 0)" && createClass(row,col).css("background-color") === "rgba(0, 0, 0, 0)" && createClass(row+1,col-1).css("background-color") === 'rgba(0, 0, 0, 0)'){
		    		createClass(row-1, col+1).css("background-color","black");
		        	createClass(row, col).css("background-color","black");
		        	createClass(row+1, col-1).css("background-color","black");
		        	setTimeout(functions, 600)
		        	shapes(option,option,option);
		        	//return blocks to normal position after being dropped
		        	placeBlocks();
		    	}else{
		    		// console.log("Shape 4 cant be placed here");
		            placeBlocks();
		            return;
		    	}
		    }else if(shape === 5){
		     	//cube
		     	//console.log("shape === 5")
		     	if(createClass(row-1,col-1).css("background-color") === "rgba(0, 0, 0, 0)" && createClass(row-1,col).css("background-color") === "rgba(0, 0, 0, 0)" && createClass(row,col-1).css("background-color") === "rgba(0, 0, 0, 0)" && createClass(row,col).css("background-color") === "rgba(0, 0, 0, 0)"){
		    		createClass(row-1, col-1).css("background-color","black");
		    		createClass(row-1, col).css("background-color","black");
		        	createClass(row, col).css("background-color","black");
		        	createClass(row, col-1).css("background-color","black");
		        	setTimeout(functions, 600)
		        	shapes(option,option,option);
		        	//return blocks to normal position after being dropped
		        	placeBlocks();
				}else{
		    		// console.log("Shape 5 cant be placed here");
		            placeBlocks();					
		            return;
				}
		    }else if(shape === 6){
		     	//small right diagonal
		     	//console.log("shape === 6")
		     	if(createClass(row-1,col+1).css("background-color") === "rgba(0, 0, 0, 0)" && createClass(row,col).css("background-color") === "rgba(0, 0, 0, 0)"){
		     		createClass(row-1,col+1).css("background-color", "black");
		     		createClass(row,col).css("background-color", "black");
		     		setTimeout(functions, 600)
		     		shapes(option,option,option);
		        	placeBlocks();
		     	}else{
		     		// console.log("Shape 6 cant be placed here");
		            placeBlocks();
		            return;
		     	}
		    }else if(shape === 7){
		    	//left diagonal
		    	//console.log("shape === 7")
		    	if(createClass(row-1,col-1).css("background-color") === "rgba(0, 0, 0, 0)" && createClass(row,col).css("background-color") === "rgba(0, 0, 0, 0)" && createClass(row+1,col+1).css("background-color") === "rgba(0, 0, 0, 0)"){
		     		createClass(row-1,col-1).css("background-color", "black");
		     		createClass(row,col).css("background-color", "black");
		     		createClass(row+1,col+1).css("background-color", "black");
		     		setTimeout(functions, 600)
		     		shapes(option,option,option);
		        	placeBlocks();
		     	}else{
		     		// console.log("Shape 7 cant be placed here");
		            placeBlocks();
		            return;
		     	}
		    }else if(shape === 8){
		    	//small left diagonal
		    	//console.log("shape === 8")
		    	if(createClass(row-1,col-1).css("background-color") === "rgba(0, 0, 0, 0)" && createClass(row,col).css("background-color") === "rgba(0, 0, 0, 0)"){
		     		createClass(row-1,col-1).css("background-color", "black");
		     		createClass(row,col).css("background-color", "black");
		     		setTimeout(functions, 600)
		     		shapes(option,option,option);
		        	placeBlocks();
		     	}else{
		     		// console.log("Shape 8 cant be placed here");
		            placeBlocks();
		            return;
		     	}
		    }else if(shape === 9){
		    	//console.log("shape === 9")
		    	if(createClass(row+1,col-1).css("background-color") === "rgba(0, 0, 0, 0)" && createClass(row+1,col).css("background-color") === "rgba(0, 0, 0, 0)" && createClass(row,col).css("background-color") === "rgba(0, 0, 0, 0)" && createClass(row,col+1).css("background-color") === "rgba(0, 0, 0, 0)"){
		     		createClass(row+1,col-1).css("background-color", "black");
		     		createClass(row+1,col).css("background-color", "black");
		     		createClass(row,col).css("background-color", "black");
		     		createClass(row,col+1).css("background-color", "black");
		     		setTimeout(functions, 600)
		     		shapes(option,option,option);
		        	placeBlocks();
		     	}else{
		     		// console.log("Shape 9 cant be placed here");
		            placeBlocks();
		            return;
		     	}
		    }else if(shape === 10){
		    	//console.log("shape === 10")
		    	if(createClass(row,col-1).css("background-color") === "rgba(0, 0, 0, 0)" && createClass(row,col).css("background-color") === "rgba(0, 0, 0, 0)" && createClass(row+1,col).css("background-color") === "rgba(0, 0, 0, 0)" && createClass(row+1,col+1).css("background-color") === "rgba(0, 0, 0, 0)"){
		     		createClass(row,col-1).css("background-color", "black");
		     		createClass(row+1,col).css("background-color", "black");
		     		createClass(row,col).css("background-color", "black");
		     		createClass(row+1,col+1).css("background-color", "black");
		     		setTimeout(functions, 600)
		     		shapes(option,option,option);
		        	placeBlocks();
		     	}else{
		     		// console.log("Shape 10 cant be placed here");
		            placeBlocks();
		            return;
		     	}
		    }else if(shape === 11){
		    	//console.log("shape === 11")
		    	if(createClass(row-1,col-1).css("background-color") === "rgba(0, 0, 0, 0)" && createClass(row,col-1).css("background-color") === "rgba(0, 0, 0, 0)" && createClass(row,col).css("background-color") === "rgba(0, 0, 0, 0)" && createClass(row+1,col).css("background-color") === "rgba(0, 0, 0, 0)"){
		     		createClass(row-1,col-1).css("background-color", "black");
		     		createClass(row,col-1).css("background-color", "black");
		     		createClass(row,col).css("background-color", "black");
		     		createClass(row+1,col).css("background-color", "black");
		     		setTimeout(functions, 600)
		     		shapes(option,option,option);
		        	placeBlocks();
		     	}else{
		     		// console.log("Shape 11 cant be placed here");
		            placeBlocks();
		            return;
		     	}
		    }else if(shape === 12){
		    	//console.log("shape === 12")
		    	if(createClass(row-1,col+1).css("background-color") === "rgba(0, 0, 0, 0)" && createClass(row,col).css("background-color") === "rgba(0, 0, 0, 0)" && createClass(row,col+1).css("background-color") === "rgba(0, 0, 0, 0)" && createClass(row+1,col).css("background-color") === "rgba(0, 0, 0, 0)"){
		     		createClass(row-1,col+1).css("background-color", "black");
		     		createClass(row,col).css("background-color", "black");
		     		createClass(row,col+1).css("background-color", "black");
		     		createClass(row+1,col).css("background-color", "black");
		     		setTimeout(functions, 600)
		     		shapes(option,option,option);
		        	placeBlocks();
		     	}else{
		     		// console.log("Shape 12 cant be placed here");
		            placeBlocks();
		            return;
		     	}
		    }else if(shape === 13){
		    	//console.log("shape === 13")
		    	if(createClass(row,col).css("background-color") === "rgba(0, 0, 0, 0)" && createClass(row+1,col-1).css("background-color") === "rgba(0, 0, 0, 0)" && createClass(row+1,col).css("background-color") === "rgba(0, 0, 0, 0)" && createClass(row+1,col+1).css("background-color") === "rgba(0, 0, 0, 0)"){
		     		createClass(row,col).css("background-color", "black");
		     		createClass(row+1,col-1).css("background-color", "black");
		     		createClass(row+1,col).css("background-color", "black");
		     		createClass(row+1,col+1).css("background-color", "black");
		     		setTimeout(functions, 600)
		     		shapes(option,option,option);
		        	placeBlocks();
		     	}else{
		     		// console.log("Shape 13 cant be placed here");
		            placeBlocks();
		            return;
		     	}
		    }else if(shape === 14){
		    	//console.log("shape === 14")
		    	if(createClass(row-1,col-1).css("background-color") === "rgba(0, 0, 0, 0)" && createClass(row-1,col).css("background-color") === "rgba(0, 0, 0, 0)" && createClass(row-1,col+1).css("background-color") === "rgba(0, 0, 0, 0)" && createClass(row,col).css("background-color") === "rgba(0, 0, 0, 0)"){
		     		createClass(row-1,col-1).css("background-color", "black");
		     		createClass(row-1,col).css("background-color", "black");
		     		createClass(row-1,col+1).css("background-color", "black");
		     		createClass(row,col).css("background-color", "black");
		     		setTimeout(functions, 600)
		     		shapes(option,option,option);
		        	placeBlocks();
		     	}else{
		     		//console.log("Shape 14 cant be placed here");
		            placeBlocks();
		            return;
		     	}
		    }else if(shape === 15){
		    	//console.log("shape === 15")
		    	if(createClass(row-1,col-1).css("background-color") === "rgba(0, 0, 0, 0)" && createClass(row,col-1).css("background-color") === "rgba(0, 0, 0, 0)" && createClass(row,col).css("background-color") === "rgba(0, 0, 0, 0)" && createClass(row+1,col-1).css("background-color") === "rgba(0, 0, 0, 0)"){
		     		createClass(row-1,col-1).css("background-color", "black");
		     		createClass(row,col-1).css("background-color", "black");
		     		createClass(row+1,col-1).css("background-color", "black");
		     		createClass(row,col).css("background-color", "black");
		     		setTimeout(functions, 600)
		     		shapes(option,option,option);
		        	placeBlocks();
		     	}else{
		     		//console.log("Shape 14 cant be placed here");
		            placeBlocks();
		            return;
		     	}
		    }else if(shape === 16){
		    	//console.log("shape === 16")
		    	if(createClass(row-1,col+1).css("background-color") === "rgba(0, 0, 0, 0)" && createClass(row,col).css("background-color") === "rgba(0, 0, 0, 0)" && createClass(row,col+1).css("background-color") === "rgba(0, 0, 0, 0)" && createClass(row+1,col+1).css("background-color") === "rgba(0, 0, 0, 0)"){
		     		createClass(row-1,col+1).css("background-color", "black");
		     		createClass(row,col+1).css("background-color", "black");
		     		createClass(row+1,col+1).css("background-color", "black");
		     		createClass(row,col).css("background-color", "black");
		     		setTimeout(functions, 600)
		     		shapes(option,option,option);
		        	placeBlocks();
		     	}else{
		     		//console.log("Shape 14 cant be placed here");
		            placeBlocks();
		            return;
		     	}
		    }else if(shape === 17){
		    	//console.log("shape === 17")
		    	if(createClass(row,col).css("background-color") === "rgba(0, 0, 0, 0)" && createClass(row+1,col-1).css("background-color") === "rgba(0, 0, 0, 0)" && createClass(row+1,col).css("background-color") === "rgba(0, 0, 0, 0)"){
		     		createClass(row,col).css("background-color", "black");
		     		createClass(row+1,col-1).css("background-color", "black");
		     		createClass(row+1,col).css("background-color", "black");
		     		setTimeout(functions, 600)
		     		shapes(option,option,option);
		        	placeBlocks();
		     	}else{
		     		//console.log("Shape 14 cant be placed here");
		            placeBlocks();
		            return;
		     	}
		    }else if(shape === 18){
		    	//console.log("shape === 18")
		    	if(createClass(row,col).css("background-color") === "rgba(0, 0, 0, 0)" && createClass(row+1,col).css("background-color") === "rgba(0, 0, 0, 0)" && createClass(row+1,col+1).css("background-color") === "rgba(0, 0, 0, 0)"){
		     		createClass(row,col).css("background-color", "black");
		     		createClass(row+1,col).css("background-color", "black");
		     		createClass(row+1,col+1).css("background-color", "black");
		     		setTimeout(functions, 600)
		     		shapes(option,option,option);
		        	placeBlocks();
		     	}else{
		     		//console.log("Shape 14 cant be placed here");
		            placeBlocks();
		            return;
		     	}
		    }else if(shape === 19){
		    	//console.log("shape === 19")
		    	if(createClass(row-1,col-1).css("background-color") === "rgba(0, 0, 0, 0)" && createClass(row-1,col).css("background-color") === "rgba(0, 0, 0, 0)" && createClass(row,col).css("background-color") === "rgba(0, 0, 0, 0)"){
		     		createClass(row,col).css("background-color", "black");
		     		createClass(row-1,col-1).css("background-color", "black");
		     		createClass(row-1,col).css("background-color", "black");
		     		setTimeout(functions, 600)
		     		shapes(option,option,option);
		        	placeBlocks();
		     	}else{
		     		//console.log("Shape 14 cant be placed here");
		            placeBlocks();
		            return;
		     	}
		    }else if(shape === 20){
		    	//console.log("shape === 20")
		    	if(createClass(row-1,col).css("background-color") === "rgba(0, 0, 0, 0)" && createClass(row-1,col+1).css("background-color") === "rgba(0, 0, 0, 0)" && createClass(row,col).css("background-color") === "rgba(0, 0, 0, 0)"){
		     		createClass(row,col).css("background-color", "black");
		     		createClass(row-1,col).css("background-color", "black");
		     		createClass(row-1,col+1).css("background-color", "black");
		     		setTimeout(functions, 600)
		     		shapes(option,option,option);
		        	placeBlocks();
		     	}else{
		     		//console.log("Shape 14 cant be placed here");
		            placeBlocks();
		            return;
		     	}
		    }else if(shape === 21){
		    	//console.log("shape === 21")
		    	if(createClass(row,col).css("background-color") === "rgba(0, 0, 0, 0)" && createClass(row+1,col).css("background-color") === "rgba(0, 0, 0, 0)"){
		     		createClass(row,col).css("background-color", "black");
		     		createClass(row+1,col).css("background-color", "black");
		     		setTimeout(functions, 600)
		     		shapes(option,option,option);
		        	placeBlocks();
		     	}else{
		     		//console.log("Shape 14 cant be placed here");
		            placeBlocks();
		            return;
		     	}
		    }else if(shape === 22){
		    	//console.log("shape === 22")
		    	if(createClass(row,col).css("background-color") === "rgba(0, 0, 0, 0)" && createClass(row,col+1).css("background-color") === "rgba(0, 0, 0, 0)"){
		     		createClass(row,col).css("background-color", "black");
		     		createClass(row,col+1).css("background-color", "black");
		     		setTimeout(functions, 600)
		     		shapes(option,option,option);
		        	placeBlocks();
		     	}else{
		     		//console.log("Shape 14 cant be placed here");
		            placeBlocks();
		            return;
		     	}
		    }
		    addScore(shape);}

		function functions(){
			checkLine();
			checkCol();
			checkStages9BlocksBackground();}

		function checkLine(){
		    let class_ = [];
		 	for(let row = 9; row >= 1; row--){
		 	    //console.log("Row",row)
			    class_ = [];
			    for(let col = 9; col >= 1; col--){
			        class_.push(createClass(row,col));
			    }
			    //console.log(class_)
			    if(class_.every(function(element){
			        return element.css("background-color") === "rgb(0, 0, 0)";
			    })){
			        clearLine(row);
			    }
		 	}}

		function clearLine(row){
			for(let i = 1; i <= 9; i++){
				let class_ = createClass(row,i)
				$(class_).css("background-color","rgba(0, 0, 0, 0)")
			}addScore(23)}

		function checkCol(){
		    let class_ = [];
		 	for(let col = 9; col >= 1; col--){
		 	    //console.log("Row",row)
			    class_ = [];
			    for(let row = 9; row >= 1; row--){
			        class_.push(createClass(row,col));
			    }
			    //console.log(class_)
			    if(class_.every(function(element){
			        return element.css("background-color") === "rgb(0, 0, 0)";
			    })){
			        clearCol(col);
			    }
		 	}}

		function clearCol(col){
			for(let i = 1; i <= 9; i++){
				let class_ = createClass(i,col)
				$(class_).css("background-color","rgba(0, 0, 0, 0)");
			}addScore(23)}

		//returns the classes of one of the nine stage's block
		function returnBlockClasses(num){
		    let row, col;
		    //console.log("block", num)
		    if(num === 1){
		        row = 1;
		        col = 1;
		    }else if(num === 2){
		        row = 1;
		        col = 10;
		    }else if(num === 3){
		        row = 1;
		        col = 19;
		    }else if(num === 4){
		        row = 10; 
		        col = 1;
		    }else if(num === 5){
		        row = 10;
		        col = 10;
		    }else if(num === 6){
		        row = 10;
		        col = 19;
		    }else if(num === 7){
		        row = 19;
		        col = 1;
		    }else if(num === 8){
		        row = 19;
		        col = 10;
		    }else if(num === 9){
		        row = 19;
		        col = 19;
		    }
		    let class_ = [];
		    for(let i = Math.floor(row/3)+1; i <= Math.floor(row/3)+3; i++){
		        for(let j = Math.floor(col/3)+1; j <= Math.floor(col/3)+3; j++){
		            class_.push($(".r"+ i.toString()+ "c"+ j.toString()));
		        }
		    }
		    return class_;}

		function checkStages9BlocksBackground(){
			let class_ = null;
			for(let i = 1; i <= 9; i++){
				class_ = returnBlockClasses(i);
				// for(let j = 0; j < 9; j++){
				// 	class_.push("." + class_[j])
				// }
				if(class_.every(function(element){
					return element.css("background-color") == "rgb(0, 0, 0)";
				})){
					clearBlock(i);
				}
			}}

		function clearBlock(block){
			let classes = returnBlockClasses(block);
			//console.log("Block", block, "is full")
			for(let i = 0; i < 9; i++){
				classes[i].css("background-color", "rgba(0, 0, 0, 0)");
			}addScore(23)}

		let score = 0;
		function addScore(shape){
			switch(shape){
				case 0:
				case 2:
				case 4:
				case 7:
				case 17:
				case 18:
				case 19:
				case 20:
					score += 3;
					break;
				case 5:
				case 9:
				case 10:
				case 11:
				case 12:
				case 13:
				case 14:
				case 15:
				case 16:
					score += 4;
					break;
				case 3:
					score += 5;
					break;
				case 1:
					score += 1;
					break;
				case 6:
				case 8:
				case 21:
				case 22:
					score += 2;
					break;
				//block or vertical or horizontal line cleared
				case 23:
					score += 27;
					break;
			}
			//console.log(score)
			$('h3').text(score)}

		$('aside').css({
			left: (window.outerWidth/2 - $('main').width()) * 4 / 7})

		function setDimensions(){
			let width = $(window).width();
			if(width < 500){
				blockWH = 15;
				$('.a').width(15);				
				$('.b').width(15);
				$('.c').width(15);
				$('.a').height(15);
				$('.b').height(15);
				$('.c').height(15);
			}else if(width < 768){
				blockWH = 20;
				$('.a').width(20);				
				$('.b').width(20);
				$('.c').width(20);
				$('.a').height(20);
				$('.b').height(20);
				$('.c').height(20);
			}else if(width < 1024){
				blockWH = 30;
				$('.a').width(30);				
				$('.b').width(30);
				$('.c').width(30);
				$('.a').height(30);
				$('.b').height(30);
				$('.c').height(30);
			}else if(width < 1200){
				blockWH = 40;
				$('.a').width(40);				
				$('.b').width(40);
				$('.c').width(40);
				$('.a').height(40);
				$('.b').height(40);
				$('.c').height(40);
			}else if(width >= 1200){
				blockWH = 50;
				$('.a').width(50);				
				$('.b').width(50);
				$('.c').width(50);
				$('.a').height(50);
				$('.b').height(50);
				$('.c').height(50);
			}
			placeBlocks();}

		setDimensions();