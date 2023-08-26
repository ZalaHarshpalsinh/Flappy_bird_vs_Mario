class Enemy
{
    constructor()
    {
        this.enemy = images[ 'enemy' ];
        this.x = g_virtual_width + 10;
        this.y = random( 50, g_virtual_height - 35 );
        this.width = this.enemy.width;
        this.height = this.enemy.height;
        this.speed = -20;
        this.killed = false;
    }

    update( dt )
    {
        if ( !this.killed )
        {
            this.x = this.x + ( dt * this.speed );
        }
    }
    draw()
    {
        if ( !this.killed )
        {

            g_game.save();
            g_game.scale( -1, 1 );
            g_game.drawImage( this.enemy, -this.x, this.y );
            g_game.restore();
        }
    }
}