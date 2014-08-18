api = 'https://api.flickr.com/services/feeds/photos_public.gne'

loadPhoto = (tag = 'coffee') ->
  $.getJSON "#{api}?tags=#{tag}&format=json&jsoncallback=?"
  .done (data) ->
    $ul = $('<ul>')
    for item in data.items
      $('<li>').appendTo $ul
      .css backgroundImage: "url(#{item.media.m})"
    $('.photofeed').empty().append $ul
    
    $.event.trigger type: 'photoLoaded'
      
loadPhoto()
