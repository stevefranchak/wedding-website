$(document).ready(function() {
    var $helloWorldParagraph = $('<p style="font-weight: bold;">Hello, world!</p>').insertAfter('p:eq(0)'),
        colors = ['#ff0000', '#00ff00', '#0000ff'],
        numColors = colors.length,
        i = 0;

    setInterval(function() {
        $helloWorldParagraph.css('color', colors[i++ % numColors]);
    }, 1000);
});