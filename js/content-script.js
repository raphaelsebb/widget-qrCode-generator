chrome.runtime.onMessage.addListener(function(msg, sender) {
    if (msg == "toggle") {
        openClose();
    }
});

function openClose() {
    if ($('#mobileGo').length > 0) {
        toggle();
    } else {
        insertHtml();
    }
}

function insertHtml() {
    // create content element & set style
    var mobileGo = document.createElement('mobileGo-extension');
    mobileGo.id = "mobileGo";
    mobileGo.style.zIndex = "99999";

    document.body.appendChild(mobileGo);

    // create iframe
    var iframe = document.createElement('iframe');
    iframe.id = "iframe-mobileGo";
    iframe.src = chrome.extension.getURL("index.html");
    $(iframe).css("margin", "0");
    $(iframe).css("padding", "0");

    document.getElementById('mobileGo').appendChild(iframe);
    $('#mobileGo').fadeIn(200);

    // hide on click outside
    $(document).mouseup(function(e) {
        const container = $("#mobileGo");
        if (!container.is(e.target) && !container.has(e.target)) {
            container.fadeOut(200);
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
