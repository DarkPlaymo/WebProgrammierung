<?php
    function drawStar($img,$x,$y,$color){
        $radius = 20;
        $spikness = 0.5;
        $point =array();
        $t = 0;
        for($a = 0;$a <= 360;$a += 360/10){
            $t++;
            if($t % 2 == 0){
                $point[] = $x + ($radius * $spikness) * cos(deg2rad($a));
                $point[] = $y + ($radius * $spikness) * sin(deg2rad($a));
            } else {
                $point[] = $x + $radius * cos(deg2rad($a));
                $point[] = $y + $radius * sin(deg2rad($a));
            }
        }
        return imagefilledpolygon($img,$point,10,$color);
    }


    //Bild + Farben
    $my_img = imagecreate( 200, 250 );
    $black      = imagecolorallocate( $my_img, 0, 0, 0 ); 
    $yellow     = imagecolorallocate( $my_img, 255, 255, 0 );
    $blue       = ImageColorAllocate($my_img,0x00,0x00,0xFF);
    $red        = ImageColorAllocate($my_img, 0xFF, 0x00, 0x00);
    
    //Grundfarbe + Schrift + Sterne
    imagefilledrectangle( $my_img, 0, 0, 200, 50, $blue);
    imagestring( $my_img, 6, 55, 10, "Eine Runde", $yellow );
    imagestring( $my_img, 6, 65, 25, "Schach?", $yellow );
    drawStar($my_img, 25, 25, $yellow);
    drawStar($my_img, 175, 25, $yellow);
    imagesetthickness ( $my_img, 5 );

    //Rote Rechtecke für Schachbrett
    for ($i=0; $i < 8; $i++) { 
        for ($j=0; $j < 4; $j++) {
            $bonus = ($i % 2 == 0) ? 0 : 25 ;
            $x = $bonus + $j * 50;
            $y = 50 + $i * 25;
            imagefilledrectangle( $my_img, $x, $y, $x+25, $y+25, $red);
        }
    }                                

    //Meta
    header( "Content-type: image/png" );
    imagepng( $my_img );
    //Aufräumen
    imagecolordeallocate( $black );
    imagecolordeallocate( $yellow );
    imagecolordeallocate( $blue );
    imagecolordeallocate( $red );
    imagedestroy( $my_img );
?>