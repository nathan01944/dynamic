var json = $.getJSON("/data/data.text", function(json) {
    console.log(json); // this will show the info it in firebug console
});

function LoadOdds() {
    return (
        json.sport_title
    );
}

export default LoadOdds;