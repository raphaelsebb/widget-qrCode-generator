chrome.tabs.query({currentWindow: true, active: true}, function(tabs){
    let url = encodeURI(tabs[0].url);
    let title = tabs[0].title;
    let picularAPI = 'https://server.picular.co/'+encodeURIComponent(title)
    let colorKey = ''
    let test = $.getJSON(picularAPI, function(data) {
        colorKey = data.primary
        colorSecondary = data.secondary
        updateTheme(colorKey, colorSecondary)
    })
    if (title.length > 80) {
        title = title.substring(0,80) + '...'
    }
    $('#title').text(title)
    let img = $('<img id="code">')
    img.attr('src', 'http://api.qrserver.com/v1/create-qr-code/?data='+ url)
    $('#qr-code').empty()
    img.appendTo('#qr-code')
})

function updateTheme(colorKey, colorSecondary) {
    $('.title').css("background", colorKey)
    $('a').css("color", colorSecondary)
}
