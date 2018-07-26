chrome.runtime.onMessage.addListener(function(msg, sender) {
    if (msg == "toggle") {
        open_close();
    }
});

function open_close() {
    if ($('#mobileGo').length > 0) {
        toggle();
    } else {
        insertHtml();
    }
}

function insertHtml() {
    // create div & set style
    var mobileGo = document.createElement('mobileGo-extension');
    mobileGo.id = "mobileGo";
    mobileGo.style.zIndex = "99999";

    document.body.appendChild(mobileGo);

    // create iframe
    var iframe = document.createElement('iframe');
    iframe.id = "iframe-mobileGo";
    iframe.src = chrome.extension.getURL("index.html");

    document.getElementById('mobileGo').appendChild(iframe);
    $('#mobileGo').fadeIn(200);

    // hide on click outside
    $(document).mouseup(function(e)
    {
        if(e.target.id != $("#mobileGo").attr('id') && !$("#mobileGo").has(e.target).length)
        {
            $("#mobileGo").fadeOut(200);
        }
    });
}

// hide / show
function toggle() {
    if ($('#mobileGo').is(":visible")) {
        $('#mobileGo').fadeOut(200);
    } else {
        $('#mobileGo').fadeIn(200);
    }
}
