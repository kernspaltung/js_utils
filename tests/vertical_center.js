var newDiv = u.createNewDiv( {
   id:'test-vertical_center',
   classNames: 'js_utils-test v-center',
   css: {
      width: '50vw',
      marginLeft: '25vw',
      height: '55vh',
      border: '1px solid #def',
      textAlign: 'center',

   }
});

var img = $('<img>').attr('src','http://fakeimg.pl/200x150/eee/ddd')
img.height('15vh');

newDiv.html('<h2>Vertical Center</h2>')
newDiv.append( img )
newDiv.append('<p>Parent receives padding-top to center children vertically</p>')

$('body').append( newDiv );



u.verticalCenter();

console.log("Utils: Vertical Center");
