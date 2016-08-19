console.log("Utils: New Div");

var newDiv = u.createNewDiv({
   id:'test-vertical_center',
   classNames: 'js_utils-test',
   css: {
      width: '50vw',
      marginLeft: '25vw',
      height: 'auto',
      padding: '2em',
      backgroundColor: '#efefef',
      border: '3px solid #def',
      textAlign: 'center'
   }
});

newDiv.html('<h2>New Div</h2>')
newDiv.append('<p>New Window Created!</p>')

$('body').append( newDiv );
