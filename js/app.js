chrome.tabs.query({currentWindow: true, active: true}, function(tabs){
    let url = encodeURI(tabs[0].url);
    let urlObject = new URL(tabs[0].url)
    let title = tabs[0].title;
    let domain = urlObject.hostname;
    let picularAPI = 'https://server.picular.co/' + domain
    $.getJSON(picularAPI, function(data) {
        let colorKey = data.primary
        let colorSecondary = data.secondary
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
