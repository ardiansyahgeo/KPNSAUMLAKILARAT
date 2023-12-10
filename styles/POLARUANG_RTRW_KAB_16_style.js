var size = 0;
var placement = 'point';
function categories_POLARUANG_RTRW_KAB_16(feature, value, size, resolution, labelText,
                       labelFont, labelFill, bufferColor, bufferWidth,
                       placement) {
                switch(value.toString()) {case 'Badan Air':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(151,219,242,0.79)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Kawasan Hutan Lindung':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(50,95,40,0.79)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Kawasan Hutan Produksi yang dapat Dikonversi':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(155,225,55,0.79)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Kawasan Pariwisata':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(255,165,255,0.79)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Kawasan Perikanan Tangkap':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(100,155,210,0.79)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Kawasan Perkebunan':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(175,175,55,0.79)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Kawasan Permukiman Perkotaan':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(245,155,30,0.79)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Kawasan Pertahanan dan Keamanan':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(155,0,255,0.79)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Kawasan Peruntukan Industri':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(105,0,0,0.79)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Kawasan Transportasi':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(215,55,0,0.79)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;}};

var style_POLARUANG_RTRW_KAB_16 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    var value = feature.get("NAMOBJ");
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
    
var style = categories_POLARUANG_RTRW_KAB_16(feature, value, size, resolution, labelText,
                          labelFont, labelFill, bufferColor,
                          bufferWidth, placement);

    return style;
};
