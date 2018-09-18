<!-- keine Ahnung für was das ist -->
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" 
"http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd"> 
<html xmlns="http://www.w3.org/1999/xhtml">

<head>
    <meta http-equiv="content-type" content="text/html; charset=utf-8" />
    <title>Burger-Love</title>
    <link rel="stylesheet" href="styles.css">
    <script src="script.js"> </script>
</head>

<body>

    <!-- Navigation Bar -->
    <div class="navbar">
        <span onClick="openNav()"> open </span>
    </div>

    <div id="mySidenav" class="sidenav">
        <a href="javascript:void(0)" class="closebtn" onclick="closeNav()">&times;</a>
        <a href="#">About</a>
        <a href="#">Services</a>
        <a href="#">Clients</a>
        <a href="#">Contact</a>
    </div>


    <!-- Header -->
    <div class="header">
        <h1>My Website</h1>
        <h2>Test</h2>
        <p>With a <b>flexible</b> layout.</p>
    </div>

    

    <!-- The flexible grid (content) -->
    <div class="row">
        <div class="side">
            <h2>About Me</h2>
            <h5>Photo of me:</h5>
            <div class="fakeimg" style="height:200px;">Image</div>
            <p>Some text about me in culpa qui officia deserunt mollit anim..</p>
            <h3>More Text</h3>
            <p>Lorem ipsum dolor sit ame.</p>
            <div class="fakeimg" style="height:60px;">Image</div><br>
            <div class="fakeimg" style="height:60px;">Image</div><br>
            <div class="fakeimg" style="height:60px;">Image</div>
        </div>
        <div class="main">
            <h2>TITLE HEADING</h2>
            <h5>Title description, Dec 7, 2017</h5>
            <div class="fakeimg" style="height:200px;">Image</div>
            <p>Some text..</p>
            <p>Sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
            <br>
            <h2>TITLE HEADING</h2>
            <h5>Title description, Sep 2, 2017</h5>
            <div class="fakeimg" style="height:200px;">Image</div>
            <p>Some text..</p>
            <p>Sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
        </div>
    </div>

    <!-- Footer -->
    <div class="footer">
        <h2>Footer</h2>
    </div>
</body>
</html>