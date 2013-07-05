// ==UserScript==
// @name        XVIDEOS Zen Watching Mode
// @author	mecab
// @namespace   http://mecab.misosi.ru/
// @description	Add Zen button to XVIDEOS
// @include     http://www.xvideos.com/video*
// @version     1.0
// @grant	none
// @license	MIT License
// ==/UserScript==

var original_player_background;
var zen_background = '#1D1F21';
var zen_close_color = '#A4B1B1';

$(function() {
    original_player_background = $('#player').css('background-color');
    $('body')
	.append($('<div id="zen"><div style="position: absolute; float: right; top: 0; right: 0; margin: 5px; font-size: 24px; z-index: 30000;"><a href="#" id="zen_close_btn" style="text-decoration: none;">×</a></div><div id="zen_content" style="position: absolute; top: 0; display: table; width: 100%; height: 100%; text-align: center; vertical-align: middle;"><div id="zen_inner" style="display: table-cell; vertical-align: middle; z-index: 20000"></div></div></div>')
	.css('width', '100%')
	.css('height', '100%')
	.css('background-color', zen_background)
	.css('position', 'absolute')
	.css('z-index', 10000)
	.css('top', 0)
	.hide());
    $('#zen_close_btn').css('color', zen_close_color);
    $('#zen_close_btn').bind('click', function() {
	$('body').css('overflow', 'visible').css('height', '');
	$('#zen').hide();
	$('#player').css('background-color', original_player_background).appendTo('#content');
    });
    
    $('#videoTabs .tabButtons').append($('<li class="headtab closable">Zen</li>'))
	.bind('click', function() {
	    window.scroll(0, 0);
	    $('#zen').show();
	    $('body').css('overflow', 'hidden').css('height', '100%');
	    $('#player').css('background-color', zen_background).appendTo('#zen_inner');
	});
});
