var size = 0;
var placement = 'point';
function categories_ProduktivitasAkuifer_21(feature, value, size, resolution, labelText,
                       labelFont, labelFill, bufferColor, bufferWidth,
                       placement) {
                switch(value.toString()) {case 'Produktif Kecil Setempat Berarti':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(138,253,255,0.7)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Produktif Sedang / Sedang Sampai Tinggi':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(134,224,181,0.7)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Setempat Produktif':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(234,237,54,0.7)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;}};

var style_ProduktivitasAkuifer_21 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    var value = feature.get("prod");
    var labelText = "";
    size = 0;
    var labelFont = "10px, sans-serif";
    var labelFill = "#000000";
    var bufferColor = "";
    var bufferWidth = 0;
    var textAlign = "left";
    var offsetX = 8;
    var offsetY = 3;
    var placement = 'point';
    if ("" !== null) {
        labelText = String("");
    }
    
var style = categories_ProduktivitasAkuifer_21(feature, value, size, resolution, labelText,
                          labelFont, labelFill, bufferColor,
                          bufferWidth, placement);

    return style;
};
