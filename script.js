$(document).ready(function() {
    $("#go").click(function() {
        var name = $("#search").val();
    var part1= "https://api.data.gov/nrel/alt-fuel-stations/v1/nearest.json?api_key=fpFzrGNVZj3l0b34GUvU4gIm34pnT13u6EsUsF1U&location=Denver+CO";