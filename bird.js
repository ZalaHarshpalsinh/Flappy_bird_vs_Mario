class Bird
{
    constructor()
    {
        this.bird = images[ 'bird' ];

        this.x = 0;
        this.y = g_virtual_height / 2 - this.bird.height / 2;
        this.dy = 0;
        this.jump = -5;
        this.fireballs = [];
        this.last_fire = Date.now();
    }

    update( dt )
    {
        this.dy = this.dy + dt * g_gravity;
        if ( keypressed[ 'Space' ] )
        {
            this.dy = this.jump;
        }
        if ( keypressed[ 'Enter' ] )
        {
            let delay = ( Date.now() - this.last_fire ) / 1000;
            if ( delay > 1 )
            {
                let tmp = new Fireball( this.x + 10, this.y );
                this.fireballs.push( tmp );
                this.last_fire = Date.now();
            }
        }
        this.y = Math.min( this.y + this.dy, g_virtual_height - 35 );
        for ( let ball of this.fireballs )
        {
            ball.update( dt );
            if ( ball.passed )
            {
                this.fireballs.shift();
            }
        }
    }

    draw()
    {
        g_game.drawImage( this.bird, this.x, this.y );
        for ( let ball of this.fireballs )
        {
            ball.draw();
        }
    }
}