chrome.tabs.query({currentWindow: true, active: true}, function(tabs){
    var url = encodeURI(tabs[0].url);
    var title = tabs[0].title;
    if (title.length > 80) {
        title = title.substring(0,80) + '...';
    }
    $('#url').text(title);
    var img = $('<img id="code">'); //Equivalent: $(document.createElement('img'))
    img.attr('src', 'http://api.qrserver.com/v1/create-qr-code/?data='+ url);
    $('#qr-code').empty();
    img.appendTo('#qr-code');
})
