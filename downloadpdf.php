<?php

header("Content-type:application/pdf");

header("Content-Disposition:attachment;filename='ebook-supply-optimus.pdf'");

readfile("ebook-supply-optimus.pdf");

?>
