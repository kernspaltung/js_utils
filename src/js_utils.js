var $ = jQuery.noConflict();

function Utils(){

	var utils = this;

	// recalculate at resize
	this.windowResizing = false;
	this.windowResizeFunctions = [];



	$(document).ready(function(){

		$(window).trigger('resize');

	});




	this.createNewDiv = function( args ) {

	   var id = '';
	   var classes = '';
	   var style = '';
		var css = false;

		var newDiv = $('<div>');

	   if( typeof( args ) != "undefined" ) {

	      if( typeof( args.classNames ) != "undefined" ) {
	         newDiv.attr( 'class', args.classNames );
	      }
	      if( typeof( args.css ) != "undefined" ) {
				newDiv.css( args.css	 );
	      }
	   }

		newDiv.css('box-sizing', 'border-box');

	   return newDiv;

	}


	this.vcenter = function( selector ) {

		if (typeof(selector)==='undefined')
		selector = '.vcenter';

		$( selector ).each(function(){
			item = $(this);
			p = item.parent();
			mT = ( p.height() - item.height() ) / 2;
			item.css({ marginTop: mT });

		})
	}

	this.verticalCenter = function( selector ) {

		if (typeof(selector)==='undefined')
		selector = '.v-center';

		$( selector ).each(function(){
			var parent = $(this);
			parent.css({opacity:0});
			var totalH = 0;
			parent.children().each(function(){
				totalH += parseInt($(this).outerHeight(true));
			});
			parent.css({paddingTop: (( parent.outerHeight(true) - totalH ) / 2 ) });
			parent.animate({opacity:1});
		});

	}

	this.square = function( selector ) {

		if (typeof(selector)==='undefined')
		selector = '.square';

		$( selector ).each(function(){


			console.log( $(this).width(), $(this).height() );

			if( $(this).width() > 0 ) {
				$(this).height( $(this).outerWidth() );
			} else {
				if( $(this).height() > 0 ) {
					$(this).width( $(this).outerHeight() );
				}
			}

		});


	}
	this.squareH = function( selector ) {

		if (typeof(selector)==='undefined')
		selector = '.squareH';

		$( selector ).each(function(){
			$(this).height( $(this).outerWidth() );
		});

	}

	this.squareW = function( selector ) {

		if (typeof(selector)==='undefined')
		selector = '.squareW';

		$( selector ).each(function(){
			$(this).width( $(this).outerHeight() );
		});
	}


	this.shareW = function( selector ) {

		if (typeof(selector)==='undefined')
		selector = '.shareW';

		$( selector ).each(function(){
			// console.log( $(this).parent().css('paddingLeft') + $(this).parent().css('paddingRight') );
			var totalW = ( $(this).parent().width() - 2 ) - ( parseInt($(this).parent().css('paddingLeft')) + parseInt($(this).parent().css('paddingRight'))) ;
			var totalItems = $(this).siblings().length + 1;

			var thisW = totalW / totalItems;

			$(this).css({
				width: thisW,
				float: 'left'
			});


		});


	}
	this.shareH = function( selector ) {

		if (typeof(selector)==='undefined')
		selector = '.shareH';

		$( selector ).each(function(){

			var totalH = $(this).parent().innerHeight() - ( parseInt($(this).parent().css('paddingTop')) + parseInt($(this).parent().css('paddingBottom'))) - ( parseInt($(this).css('paddingTop')) + parseInt($(this).css('paddingBottom'))) ;
			var totalItems = $(this).siblings().length + 1;

			var thisH = totalH / totalItems;

			$(this).css({
				height: thisH,
				display:'block',
				clear:'both',
				float:'none',
			});


		});


	}


	this.scrollTo = function ( target, parent ) {

		var targetDivScroll = target.offset().top;
		var parentTop  = parent.offset().top;
		var currScroll = parent.scrollTop();

		var targetY = currScroll - parentTop + targetDivScroll;

		parent.stop().animate({
			scrollTop: targetY
		}, 1000, 'swing');
	}




	this.sameMaxH = function( elements ) {
		var do_this = true;
		elements.each(function(){
			if( $(window).width() > 1024 && $(this).hasClass('noSameH_lg') ){
				do_this = false;
			}
		})
		if( do_this ) {

			var maxH = 0;
			elements.each(function(){
				if( $(this).height() > maxH ){
					maxH = $(this).height();
				}
			})

			elements.height( maxH );
		}

	}


	$(window).resize(function() {
		// debounce by storing timeout in boolean check
		if( ! utils.windowResizing ) {
			utils.windowResizing = setTimeout(function(){
				var functions = utils.windowResizeFunctions;

				for( i in functions ) {
					functions[i]();
				}

				utils.windowResizing = false;

			},350);
		}

	});

	this.addWindowResizeFunction = function( resizeFunction ) {

		utils.windowResizeFunctions.push( resizeFunction );

	}







	this.executeFunctionByName = function(functionName, context /*, args */) {
		var args = [].slice.call(arguments).splice(2);
		var namespaces = functionName.split(".");
		var func = namespaces.pop();
		for(var i = 0; i < namespaces.length; i++) {
			context = context[namespaces[i]];
		}
		return context[func].apply(context, args);
	}

}
