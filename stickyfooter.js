function StickyFooter( args ) {
    this.footer = null;

    for ( var props in args ) {
        if ( this.hasOwnProperty( props ) ) {
            this[props] = args[props];
        }
    }

    this.pos = footer.getBoundingClientRect();
    this.height = window.innerHeight;
    this.height = this.height - this.pos.top;
    this.height = this.height - this.footer.offsetHeight;
}

StickyFooter.prototype = ( {
    constructor : StickyFooter,
    logIt : function ( e ) {
        console.log( e.type );
    },
    positionFooter : function () {
        this.footer.style.marginTop = this.height + 'px';
    }
} );

[ 'load', 'resize', 'orientationChange' ].map( function ( e ) {
    var StickTheFooter = new StickyFooter(
            {
                footer : document.getElementById( "footer-container" )
            }
    );

    window.addEventListener( e, StickTheFooter.positionFooter.bind( StickTheFooter ) );
} );
