<!-- keine Ahnung für was das ist -->
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" 
"http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd"> 
<html xmlns="http://www.w3.org/1999/xhtml">

<head>
    <meta http-equiv="content-type" content="text/html; charset=utf-8" />
    <title>Burger-Love</title>
    <link rel="stylesheet" href="styles.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <script src="js/sideNav.js"></script>
    <script src="js/cookie.js"></script>
</head>

<body>
    <!-- Navigation Bar -->
    <div class="sidenav" id="mySideNav">
        <a href="javascript:void(0)" class="closebtn" onclick="closeNav()">&times;</a>
        <a href="index.php?site=home">Home</a>
        <a href="index.php?site=bestellen">Bestellen</a>
    </div>
    

    <!-- Header -->
    <div class="header">
        <div class="headerbar">
        <?php if ($_GET['site']!=null) : ?>
            <button class="btn" onClick="openNav()"><i class="fa fa-bars"></i></button>
        <?php  endif ?>
            
        </div>
        <div class="headerlogo">
            <?php 
                switch($_GET['site']){
                    case "home": 
                        echo "<h2> Das ist die Home-Seite </h2>"; 
                        break;
                    case "bestellen": 
                        echo "<h2> Hier kann man bestellen </h2>"; 
                        break;
                    case null: 
                        echo "<h2> Startseite </h2>"; 
                        break;
                    default: 
                        echo "<h2> Oops, something went wrong </h2>";
                }
            ?>
        </div>
    </div>

    <!-- Main Content -->
    <div class="main">
        <?php 
            if ($_GET['site']!=null){include("php/" . $_GET['site'] . ".php");}
            else {include("php/login.php");} ?>
    </div>

    <!-- Footer -->
    <div class="footer">
        <h2>Footer</h2>
    </div>
</body>
</html>