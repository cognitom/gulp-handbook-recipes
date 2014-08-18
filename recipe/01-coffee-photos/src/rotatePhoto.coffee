rotatePhoto = ->
  $ul = $('.photofeed > ul')
  $last = $ul.children().last()
  
  $last.fadeOut -> $last.prependTo $ul
  .fadeIn()

$(document).on 'photoLoaded', (e) ->
  setInterval rotatePhoto, 3000
