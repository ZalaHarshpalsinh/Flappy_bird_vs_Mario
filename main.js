let g_game_area = document.querySelector( '#game' );
let g_game = g_game_area.getContext( '2d' );

const g_actual_width = g_game_area.width;
const g_actual_height = g_game_area.height;
const g_virtual_width = 512;
const g_virtual_height = 288;
const g_gravity = 10;

const scale_x = g_actual_width / g_virtual_width;
const scale_y = g_actual_height / g_virtual_height;
g_game.scale( scale_x, scale_y );

let images = {
    ground: './images/ground.png',
    background: './images/background.png',
    bird: './images/bird.png',
    enemy: './images/mario.png',
    fireball: './images/fireball.png'
};
images = load_images( images );
on_all_load_start_render( images, render );
let last_update = Date.now();
let keypressed = [];

let background = new Backgrounds();
let bird = new Bird();
let enemy = new Enemy();

function render()
{
    let now = Date.now();
    let dt = ( now - last_update ) / 1000;
    last_update = now;
    update( dt );
    draw();
}

function update( dt )
{
    background.update( dt );
    bird.update( dt );
    enemy.update( dt );
    keypressed = [];
    for ( let ball of bird.fireballs )
    {
        if ( collide( enemy, ball ) )
        {
            enemy.killed = true;
        }
        console.log( 'collide' );
    }
}

function draw()
{
    background.draw();
    bird.draw();
    enemy.draw();
}

document.addEventListener( 'keydown', function ( event )
{
    keypressed[ event.code ] = true;
} );