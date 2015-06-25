var load = 25*60000;    // 25 mins
var dry = 60*60000;     // 60 mins
var buffer = 15*60000;  // 15 mins

var loadtime = new Date();
loadtime.setHours(Math.min(23, loadtime.getHours()+2));
$('#leaving').val(loadtime.getHours()+":"+loadtime.getMinutes());

$('#leaving').on('change', function(e) {
    var time = $(e.currentTarget).val().split(':');
    var leaving = new Date();
    leaving.setHours(time[0]);
    leaving.setMinutes(time[1]);
    var now = new Date();
    var loads = parseInt($('#loads').val());
    var threshold = 2*buffer+(load*loads)+(dry*Math.ceil(loads*0.6));
    console.log((leaving-now)/60000);
    console.log('Thresold:',threshold/60000);
    if ((leaving-now)<=threshold) {
        $('#answer').text('No.');
    } else {
        $('#answer').text('Yes.');
    }

});

$('#loads').on('change', function(e) {
    var loads = $(e.currentTarget).val();
    $('#loadnum').text(loads);
    $('#leaving').change();
});

$('#leaving').change();
