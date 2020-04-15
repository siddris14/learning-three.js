

///// SCENE SETUP ////////////////////////////////////////////////////////////////////////////////////////
// Creating the SCNENE

var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera( 55, window.innerWidth / window.innerHeight, 0.1, 1000 );

var renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
renderer.setClearColor( new THREE.Color( 0xE0D5CA ) );
renderer.shadowMap.Enabled = true;
document.body.appendChild( renderer.domElement );


// Adding browser auto resize

window.addEventListener ( 'resize', function() 
{
	var width = window.innerWidth;
	var height = window.innerHeight;
	renderer.setSize( width, height );
	camera.aspect = width / height; 
  	camera.updateProjectionMatrix();
} );



///// EFFECTS SETUP ////////////////////////////////////////////////////////////////////////////////////////
// Adding Anaglyph Effect

var anaEffect = new THREE.AnaglyphEffect( renderer );
anaEffect.setSize( window.innerWidth, window.innerHeight );



///// CONTROL SETUP ////////////////////////////////////////////////////////////////////////////////////////
// Adding Orbit Control 

var controls = new THREE.OrbitControls( camera, renderer.domElement );



///// GEOMETRY SETUP ////////////////////////////////////////////////////////////////////////////////////////
// Adding the geometry – Cube

var cubeGeometry = new THREE.BoxGeometry();
var cubeMaterial = new THREE.MeshLambertMaterial( { color: 0xe0e0e0, wireframe: false } );

var cube = new THREE.Mesh( cubeGeometry, cubeMaterial );
cube.scale.set( 1.5, 1.5, 1.5 );
cube.rotation.set( 0, 45, 0 );
cube.castShadow = true;
scene.add( cube );

camera.position.z = 5;


// Adding the geometry – Plane

// var planeGeometry = new THREE.PlaneGeometry( 5, 5 );
// var planeMaterial = new THREE.MeshLambertMaterial( { color: 0xe0e0e0, wireframe: false } );

// var plane = new THREE.Mesh( planeGeometry, planeMaterial );
// plane.rotation.x = -0.5 * Math.PI;
// plane.position.set( 0, -1, 0 );
// plane.receiveShadow = true;
// scene.add( plane );



///// LIGHTS SETUP ////////////////////////////////////////////////////////////////////////////////////////
// Adding Lights – Spot Light

var spotLight = new THREE.SpotLight( 0x404040, 3.0 );
spotLight.position.set( 8, 13, -10 );
spotLight.castShadow = true;
scene.add( spotLight );

var spotLight2 = new THREE.SpotLight( 0x404040, 3.0 );
spotLight2.position.set( -20, -21, 20);
spotLight2.castShadow = true;
scene.add( spotLight2 );


// Adding Lights – Arial Light

// var areaLight = new THREE.RectAreaLight( 0xffffff, 100,  200, 100 );
// areaLight.position.set( 0, -5, 0 );
// areaLight.castShadow = true;
// scene.add( areaLight );



///// RENDERING & ANIMATION SETUP ////////////////////////////////////////////////////////////////////////////////////////
// Rendering the SCENE

function animate( ) {
	requestAnimationFrame( animate );

	// Add animation to the cube
	cube.rotation.x += 0.02;
	cube.rotation.y += 0.01;
	cube.rotation.z += 0.03;

	// Calling the renderer
	// renderer.render( scene, camera );

	// Calling the Anaglyph renderer
	anaEffect.render( scene, camera );
}
animate();

