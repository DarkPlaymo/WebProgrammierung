<?php
	$str_browser_language = !empty($_SERVER['HTTP_ACCEPT_LANGUAGE']) ? strtok(strip_tags($_SERVER['HTTP_ACCEPT_LANGUAGE']), ',') : '';
	$str_browser_language = !empty($_GET['language']) ? $_GET['language'] : $str_browser_language;
	switch (substr($str_browser_language, 0,2))
	{
		case 'de':
			$str_language = 'de';
			break;
		case 'en':
			$str_language = 'en';
			break;
		default:
			$str_language = 'en';
	}
    
	$arr_available_languages = array();
	$arr_available_languages[] = array('str_name' => 'English', 'str_token' => 'en');
	$arr_available_languages[] = array('str_name' => 'Deutsch', 'str_token' => 'de');
    
	$str_available_languages = (string) '';
	foreach ($arr_available_languages as $arr_language)
	{
		if ($arr_language['str_token'] !== $str_language)
		{
			$str_available_languages .= '<a href="'.strip_tags($_SERVER['PHP_SELF']).'?language='.$arr_language['str_token'].'" lang="'.$arr_language['str_token'].'" xml:lang="'.$arr_language['str_token'].'" hreflang="'.$arr_language['str_token'].'">'.$arr_language['str_name'].'</a> | ';
		}
	}
	$str_available_languages = substr($str_available_languages, 0, -3);
?>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN"
"http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head lang="<?php echo $str_language; ?>" xml:lang="<?php echo $str_language; ?>">
<meta http-equiv="content-type" content="text/html; charset=utf-8" />
<title>MAMP PRO</title>
<link rel="stylesheet" href="styles.css">
</head>

<body>
    <p><img src="MAMP-PRO-Logo.png" id="logo" alt="MAMP PRO Logo" width="250" height="49" /></p>

    <p class="text"><strong>Der virtuelle <span lang="en" xml:lang="en">Host</span> wurde erfolgreich eingerichtet.</strong></p>
    <p class="text">Wenn Sie diese Seite sehen, dann bedeutet dies, dass der neue virtuelle Penis <span lang="en" xml:lang="en">Host</span> erfolgreich eingerichtet wurde. Sie können jetzt Ihren <span lang="en" xml:lang="en">Web</span>-Inhalt hinzufügen, diese Platzhalter-Seite<sup><a href="#footnote_1">1</a></sup> sollten Sie ersetzen <abbr title="beziehungsweise">bzw.</abbr> löschen.</p>
    <p class="text">
        Server-Name: <samp><?php echo $_SERVER['SERVER_NAME']; ?></samp><br />
        Document-Root: <samp><?php echo $_SERVER['DOCUMENT_ROOT']; ?></samp>
    </p>
    <p class="text" id="footnote_1"><small><sup>1</sup> Dateien: <samp>index.php</samp> und <samp>MAMP-PRO-Logo.png</samp></small></p>
    <hr />
</body>
</html>