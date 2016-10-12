var newDiv = u.createNewDiv( {
   id:'test-resize_functions',
   classNames: 'js_utils-test v-center',
   css: {
      width: '50vw',
      marginLeft: '25vw',
      height: '50vh',
      border: '1px solid #def',
      textAlign: 'center',
   }
});

var img = $('<img>').attr('src','http://fakeimg.pl/200x150/eee/ddd?text=vcenter')

newDiv.html('<h2>Resize Functions</h2>')
newDiv.append( img )
newDiv.append('<p>Functions can be mapped to window resize event</p>')
newDiv.append('<small>View test in browser js console</p>')

$('body').append( newDiv );

u.addWindowResizeFunction( function() {
   console.log("Window Resize callback functionc")
})
u.addWindowResizeFunction( u.verticalCenter );

u.verticalCenter();

console.log("Utils: Resize Functions");
