<script src="//code.jquery.com/jquery-1.11.1.min.js"></script>

$('.page-scroll').on('click', function(e) {

 var tujuan = $(this).attr('href');

 var elemenTujuan = $(tujuan);

 $('html , body').animate({
  scrollTop: elemenTujuan.offset().top - 50
 });

 e.preventDefault();
});﻿