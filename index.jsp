<% java.util.Date date = new java.util.Date();
java.text.SimpleDateFormat sdf = new java.text.SimpleDateFormat("HH:mm - dd.MM.yyyy");
String stamp = sdf.format(date); %>

<h1> Ooops :( </h1>
<h2> Aufgrund technischer Probleme kann keine Rechnungen ausgestellt werden </h2>
<h2>________________________________________________________________________</h2>
<h3> Zeitstempel: <%= stamp %> </h3>