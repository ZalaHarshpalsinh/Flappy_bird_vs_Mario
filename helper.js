
function load_images( images )
{
    for ( let name in images )
    {
        let image = document.createElement( 'img' );
        image.src = images[ name ];
        images[ name ] = image;
    }
    return images;
}

function on_all_load_start_render( images, render )
{
    let load_count = 0;
    let image_count = Object.keys( images ).length;
    for ( let name in images )
    {
        images[ name ].onload = () =>
        {
            load_count++;
            if ( load_count == image_count )
            {
                setInterval( render, 33.3333 );
            }
        }
    }
}
function random( lower, upper )
{
    return ( ( Math.random() * ( upper - lower ) ) + lower );
}

function collide( obj1, obj2 )
{
    console.log( obj1, obj2 );
    if ( ( obj1.x + obj1.width > obj2.x ) && ( obj1.x < obj2.x + obj2.width ) )
    {
        if ( ( obj1.y + obj1.height > obj2.y ) && ( obj1.y < obj2.y + obj2.height ) )
        {
            return true;
        }
    }
    return false;
}