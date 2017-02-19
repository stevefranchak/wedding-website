var CountdownWidget = require('./Countdown');
require('./EventMap');

$(document).ready(function() {

  // Initialize the countdown widget
  new CountdownWidget(
    1495312200000, /* Number of milliseconds since Unix epoch for May 20th, 2017 at 4:30 PM */
    $('#countdown-container > section')
  );

  // In a time crunch; hacking together solution for keeping container heights the same in Event Details
  // (function() {
  //   $eventDetailsInfoBlocks = $('#event-details-container .info-block-body p');
  //
  //   $(window).on('resize', function() {
  //
  //   });
  // });

});
