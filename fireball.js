class Fireball
{
    constructor( x, y )
    {
        this.fireball = images[ 'fireball' ];
        this.x = x;
        this.y = y;
        this.width = this.fireball.width;
        this.height = this.fireball.height;
        this.speed = 100;
        this.passed = false;
    }
    update( dt )
    {
        this.x = this.x + dt * this.speed;
        if ( this.x > g_virtual_width )
        {
            this.passed = true;
        }
    }
    draw()
    {
        g_game.drawImage( this.fireball, this.x, this.y );
    }
}