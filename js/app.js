chrome.tabs.query({currentWindow: true, active: true}, function(tabs){
    const urlData = new URL(tabs[0].url)
    const url = urlData.href;
    const domain = urlData.hostname;
    const title = tabs[0].title;

    // Qr code
    const qrCodeApi = 'https://api.qrserver.com/v1/create-qr-code/?data=' + url
    let img = $('<img id="code">')
    img.attr('src', qrCodeApi)
    $('#qr-code').empty()
    img.appendTo('#qr-code')

    // Title
    if (title.length > 80) {
        title = title.substring(0,80) + '...'
    }
    $('#title').text(title)

    // Color theme
    const picularAPI = 'https://server.picular.co/' + domain
    $.getJSON(picularAPI, function(data) {
        let colorKey = data.primary
        let colorSecondary = data.secondary
        updateTheme(colorKey, colorSecondary)
    })
    .fail(function() {
        console.log('error')
    })
    .always(function() {
        console.log('complete')
    })
})

function updateTheme(colorKey, colorSecondary) {
    $('header h1').css({
        background: colorKey,
        transition: 'all 1s ease-in-out'
    })
}
