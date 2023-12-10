var wms_layers = [];


        var lyr_ESRISatellite_0 = new ol.layer.Tile({
            'title': 'ESRI Satellite',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'
            })
        });

        var lyr_GoogleSatellite_1 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt0.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_ANALISISSIMPANGANPOLARUANG_2 = new ol.format.GeoJSON();
var features_ANALISISSIMPANGANPOLARUANG_2 = format_ANALISISSIMPANGANPOLARUANG_2.readFeatures(json_ANALISISSIMPANGANPOLARUANG_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ANALISISSIMPANGANPOLARUANG_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ANALISISSIMPANGANPOLARUANG_2.addFeatures(features_ANALISISSIMPANGANPOLARUANG_2);
var lyr_ANALISISSIMPANGANPOLARUANG_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ANALISISSIMPANGANPOLARUANG_2, 
                style: style_ANALISISSIMPANGANPOLARUANG_2,
                interactive: true,
    title: 'ANALISIS SIMPANGAN POLA RUANG<br />\
    <img src="styles/legend/ANALISISSIMPANGANPOLARUANG_2_0.png" /> Badan Air<br />\
    <img src="styles/legend/ANALISISSIMPANGANPOLARUANG_2_1.png" /> Budidaya > Budidaya<br />\
    <img src="styles/legend/ANALISISSIMPANGANPOLARUANG_2_2.png" /> Budidaya > Lindung<br />\
    <img src="styles/legend/ANALISISSIMPANGANPOLARUANG_2_3.png" /> Lindung > Budidaya<br />\
    <img src="styles/legend/ANALISISSIMPANGANPOLARUANG_2_4.png" /> Lindung > Lindung<br />\
    <img src="styles/legend/ANALISISSIMPANGANPOLARUANG_2_5.png" /> Tidak Berubah<br />'
        });
var format_JangkauanMenujuSDSederajat_3 = new ol.format.GeoJSON();
var features_JangkauanMenujuSDSederajat_3 = format_JangkauanMenujuSDSederajat_3.readFeatures(json_JangkauanMenujuSDSederajat_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JangkauanMenujuSDSederajat_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JangkauanMenujuSDSederajat_3.addFeatures(features_JangkauanMenujuSDSederajat_3);
var lyr_JangkauanMenujuSDSederajat_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_JangkauanMenujuSDSederajat_3, 
                style: style_JangkauanMenujuSDSederajat_3,
                interactive: true,
    title: 'Jangkauan Menuju SD/Sederajat<br />\
    <img src="styles/legend/JangkauanMenujuSDSederajat_3_0.png" /> Lokasi Sekolah<br />\
    <img src="styles/legend/JangkauanMenujuSDSederajat_3_1.png" /> 0 -1 km (ideal)<br />\
    <img src="styles/legend/JangkauanMenujuSDSederajat_3_2.png" /> 1-2,5 km<br />\
    <img src="styles/legend/JangkauanMenujuSDSederajat_3_3.png" /> 2,5-5 km<br />'
        });
var format_JangkauanMenujuSMPSederajat_4 = new ol.format.GeoJSON();
var features_JangkauanMenujuSMPSederajat_4 = format_JangkauanMenujuSMPSederajat_4.readFeatures(json_JangkauanMenujuSMPSederajat_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JangkauanMenujuSMPSederajat_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JangkauanMenujuSMPSederajat_4.addFeatures(features_JangkauanMenujuSMPSederajat_4);
var lyr_JangkauanMenujuSMPSederajat_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_JangkauanMenujuSMPSederajat_4, 
                style: style_JangkauanMenujuSMPSederajat_4,
                interactive: true,
    title: 'Jangkauan Menuju SMP/Sederajat<br />\
    <img src="styles/legend/JangkauanMenujuSMPSederajat_4_0.png" /> Lokasi Sekolah<br />\
    <img src="styles/legend/JangkauanMenujuSMPSederajat_4_1.png" /> 0-1 km (ideal)<br />\
    <img src="styles/legend/JangkauanMenujuSMPSederajat_4_2.png" /> 1-2,5 km<br />\
    <img src="styles/legend/JangkauanMenujuSMPSederajat_4_3.png" /> 2,5-5 km<br />'
        });
var format_JangkauanMenujuSMASederajat_5 = new ol.format.GeoJSON();
var features_JangkauanMenujuSMASederajat_5 = format_JangkauanMenujuSMASederajat_5.readFeatures(json_JangkauanMenujuSMASederajat_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JangkauanMenujuSMASederajat_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JangkauanMenujuSMASederajat_5.addFeatures(features_JangkauanMenujuSMASederajat_5);
var lyr_JangkauanMenujuSMASederajat_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_JangkauanMenujuSMASederajat_5, 
                style: style_JangkauanMenujuSMASederajat_5,
                interactive: true,
    title: 'Jangkauan Menuju SMA/Sederajat<br />\
    <img src="styles/legend/JangkauanMenujuSMASederajat_5_0.png" /> Lokasi Sekolah<br />\
    <img src="styles/legend/JangkauanMenujuSMASederajat_5_1.png" /> 0-3 km (ideal)<br />\
    <img src="styles/legend/JangkauanMenujuSMASederajat_5_2.png" /> 3-5 km<br />\
    <img src="styles/legend/JangkauanMenujuSMASederajat_5_3.png" /> 5-7,5 km<br />'
        });
var format_JangkauanMenujuPendidikanTinggi_6 = new ol.format.GeoJSON();
var features_JangkauanMenujuPendidikanTinggi_6 = format_JangkauanMenujuPendidikanTinggi_6.readFeatures(json_JangkauanMenujuPendidikanTinggi_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JangkauanMenujuPendidikanTinggi_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JangkauanMenujuPendidikanTinggi_6.addFeatures(features_JangkauanMenujuPendidikanTinggi_6);
var lyr_JangkauanMenujuPendidikanTinggi_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_JangkauanMenujuPendidikanTinggi_6, 
                style: style_JangkauanMenujuPendidikanTinggi_6,
                interactive: true,
    title: 'Jangkauan Menuju  Pendidikan Tinggi<br />\
    <img src="styles/legend/JangkauanMenujuPendidikanTinggi_6_0.png" /> Lokasi Pendidikan Tinggi<br />\
    <img src="styles/legend/JangkauanMenujuPendidikanTinggi_6_1.png" />  0-5 km (ideal)<br />\
    <img src="styles/legend/JangkauanMenujuPendidikanTinggi_6_2.png" /> 5-10 km<br />\
    <img src="styles/legend/JangkauanMenujuPendidikanTinggi_6_3.png" /> 10-25 km<br />'
        });
var format_UsulanPLTMGMasela_7 = new ol.format.GeoJSON();
var features_UsulanPLTMGMasela_7 = format_UsulanPLTMGMasela_7.readFeatures(json_UsulanPLTMGMasela_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_UsulanPLTMGMasela_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_UsulanPLTMGMasela_7.addFeatures(features_UsulanPLTMGMasela_7);
var lyr_UsulanPLTMGMasela_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_UsulanPLTMGMasela_7, 
                style: style_UsulanPLTMGMasela_7,
                interactive: true,
    title: 'Usulan PLTMG Masela<br />\
    <img src="styles/legend/UsulanPLTMGMasela_7_0.png" /> Alternatif 1<br />\
    <img src="styles/legend/UsulanPLTMGMasela_7_1.png" /> Alternatif 2<br />\
    <img src="styles/legend/UsulanPLTMGMasela_7_2.png" /> Alternatif 3<br />'
        });
var lyr_KonsepPenataan_8 = new ol.layer.Image({
                            opacity: 1,
                            title: "Konsep Penataan",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/KonsepPenataan_8.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [14615836.369153, -891340.983426, 14616254.963912, -890821.178511]
                            })
                        });
var format_Waterfront_City_9 = new ol.format.GeoJSON();
var features_Waterfront_City_9 = format_Waterfront_City_9.readFeatures(json_Waterfront_City_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Waterfront_City_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Waterfront_City_9.addFeatures(features_Waterfront_City_9);
var lyr_Waterfront_City_9 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Waterfront_City_9, 
                style: style_Waterfront_City_9,
                interactive: true,
                title: '<img src="styles/legend/Waterfront_City_9.png" /> Waterfront_City'
            });
var format_JangkauanMenujuKlinikApotekPraktek_Dokter_10 = new ol.format.GeoJSON();
var features_JangkauanMenujuKlinikApotekPraktek_Dokter_10 = format_JangkauanMenujuKlinikApotekPraktek_Dokter_10.readFeatures(json_JangkauanMenujuKlinikApotekPraktek_Dokter_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JangkauanMenujuKlinikApotekPraktek_Dokter_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JangkauanMenujuKlinikApotekPraktek_Dokter_10.addFeatures(features_JangkauanMenujuKlinikApotekPraktek_Dokter_10);
var lyr_JangkauanMenujuKlinikApotekPraktek_Dokter_10 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_JangkauanMenujuKlinikApotekPraktek_Dokter_10, 
                style: style_JangkauanMenujuKlinikApotekPraktek_Dokter_10,
                interactive: true,
    title: 'Jangkauan Menuju Klinik/Apotek/Praktek_Dokter<br />\
    <img src="styles/legend/JangkauanMenujuKlinikApotekPraktek_Dokter_10_0.png" /> Klinik, Apotek, Praktek Dokter<br />\
    <img src="styles/legend/JangkauanMenujuKlinikApotekPraktek_Dokter_10_1.png" /> 0-1,5 km (ideal)<br />\
    <img src="styles/legend/JangkauanMenujuKlinikApotekPraktek_Dokter_10_2.png" /> 1,5-3 km<br />\
    <img src="styles/legend/JangkauanMenujuKlinikApotekPraktek_Dokter_10_3.png" /> 3-5 km<br />'
        });
var format_JangkauanMenujuFasilitasKesehatan_11 = new ol.format.GeoJSON();
var features_JangkauanMenujuFasilitasKesehatan_11 = format_JangkauanMenujuFasilitasKesehatan_11.readFeatures(json_JangkauanMenujuFasilitasKesehatan_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JangkauanMenujuFasilitasKesehatan_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JangkauanMenujuFasilitasKesehatan_11.addFeatures(features_JangkauanMenujuFasilitasKesehatan_11);
var lyr_JangkauanMenujuFasilitasKesehatan_11 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_JangkauanMenujuFasilitasKesehatan_11, 
                style: style_JangkauanMenujuFasilitasKesehatan_11,
                interactive: true,
    title: 'Jangkauan Menuju Fasilitas Kesehatan<br />\
    <img src="styles/legend/JangkauanMenujuFasilitasKesehatan_11_0.png" /> Lokasi Fasilitas<br />\
    <img src="styles/legend/JangkauanMenujuFasilitasKesehatan_11_1.png" /> 0-3 km<br />\
    <img src="styles/legend/JangkauanMenujuFasilitasKesehatan_11_2.png" /> 3-5 km<br />\
    <img src="styles/legend/JangkauanMenujuFasilitasKesehatan_11_3.png" /> 5-7,5 km<br />'
        });
var format_WaktuTempuhMenitMenujuBandara_12 = new ol.format.GeoJSON();
var features_WaktuTempuhMenitMenujuBandara_12 = format_WaktuTempuhMenitMenujuBandara_12.readFeatures(json_WaktuTempuhMenitMenujuBandara_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_WaktuTempuhMenitMenujuBandara_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_WaktuTempuhMenitMenujuBandara_12.addFeatures(features_WaktuTempuhMenitMenujuBandara_12);
var lyr_WaktuTempuhMenitMenujuBandara_12 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_WaktuTempuhMenitMenujuBandara_12, 
                style: style_WaktuTempuhMenitMenujuBandara_12,
                interactive: true,
    title: 'Waktu Tempuh (Menit) Menuju Bandara<br />\
    <img src="styles/legend/WaktuTempuhMenitMenujuBandara_12_0.png" /> 0 - 25<br />\
    <img src="styles/legend/WaktuTempuhMenitMenujuBandara_12_1.png" /> 25 - 30<br />\
    <img src="styles/legend/WaktuTempuhMenitMenujuBandara_12_2.png" /> 30 - 35<br />\
    <img src="styles/legend/WaktuTempuhMenitMenujuBandara_12_3.png" /> 35 - 40<br />\
    <img src="styles/legend/WaktuTempuhMenitMenujuBandara_12_4.png" /> 40 - 45<br />\
    <img src="styles/legend/WaktuTempuhMenitMenujuBandara_12_5.png" /> 45 - 210<br />\
    <img src="styles/legend/WaktuTempuhMenitMenujuBandara_12_6.png" /> 210 - 220<br />\
    <img src="styles/legend/WaktuTempuhMenitMenujuBandara_12_7.png" /> 220 - 230<br />'
        });
var format_SMCA_WP_13 = new ol.format.GeoJSON();
var features_SMCA_WP_13 = format_SMCA_WP_13.readFeatures(json_SMCA_WP_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SMCA_WP_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SMCA_WP_13.addFeatures(features_SMCA_WP_13);
var lyr_SMCA_WP_13 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_SMCA_WP_13, 
                style: style_SMCA_WP_13,
                interactive: true,
    title: 'SMCA_WP<br />\
    <img src="styles/legend/SMCA_WP_13_0.png" /> Sesuai<br />\
    <img src="styles/legend/SMCA_WP_13_1.png" /> Sesuai Bersyarat<br />\
    <img src="styles/legend/SMCA_WP_13_2.png" /> Tidak Sesuai<br />\
    <img src="styles/legend/SMCA_WP_13_3.png" /> Sangat Tidak Sesuai<br />'
        });
var format_kepadatanPenduduk_14 = new ol.format.GeoJSON();
var features_kepadatanPenduduk_14 = format_kepadatanPenduduk_14.readFeatures(json_kepadatanPenduduk_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_kepadatanPenduduk_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_kepadatanPenduduk_14.addFeatures(features_kepadatanPenduduk_14);
var lyr_kepadatanPenduduk_14 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_kepadatanPenduduk_14, 
                style: style_kepadatanPenduduk_14,
                interactive: true,
    title: 'kepadatan Penduduk<br />\
    <img src="styles/legend/kepadatanPenduduk_14_0.png" /> <5 jiwa/900 meter persegi<br />\
    <img src="styles/legend/kepadatanPenduduk_14_1.png" /> 5-10 jiwa/900 meter persegi<br />\
    <img src="styles/legend/kepadatanPenduduk_14_2.png" /> 10-15 jiwa/900 meter persegi<br />\
    <img src="styles/legend/kepadatanPenduduk_14_3.png" /> >15 jiwa/900 meter persegi<br />'
        });
var format_HakAtasTanah_15 = new ol.format.GeoJSON();
var features_HakAtasTanah_15 = format_HakAtasTanah_15.readFeatures(json_HakAtasTanah_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HakAtasTanah_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HakAtasTanah_15.addFeatures(features_HakAtasTanah_15);
var lyr_HakAtasTanah_15 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_HakAtasTanah_15, 
                style: style_HakAtasTanah_15,
                interactive: true,
    title: 'Hak Atas Tanah<br />\
    <img src="styles/legend/HakAtasTanah_15_0.png" /> Hak Guna Bangunan<br />\
    <img src="styles/legend/HakAtasTanah_15_1.png" /> Hak Milik<br />\
    <img src="styles/legend/HakAtasTanah_15_2.png" /> Hak Pakai<br />\
    <img src="styles/legend/HakAtasTanah_15_3.png" /> Kosong<br />'
        });
var format_POLARUANG_RTRW_KAB_16 = new ol.format.GeoJSON();
var features_POLARUANG_RTRW_KAB_16 = format_POLARUANG_RTRW_KAB_16.readFeatures(json_POLARUANG_RTRW_KAB_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_POLARUANG_RTRW_KAB_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_POLARUANG_RTRW_KAB_16.addFeatures(features_POLARUANG_RTRW_KAB_16);
var lyr_POLARUANG_RTRW_KAB_16 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_POLARUANG_RTRW_KAB_16, 
                style: style_POLARUANG_RTRW_KAB_16,
                interactive: true,
    title: 'POLARUANG_RTRW_KAB<br />\
    <img src="styles/legend/POLARUANG_RTRW_KAB_16_0.png" /> Badan Air<br />\
    <img src="styles/legend/POLARUANG_RTRW_KAB_16_1.png" /> Kawasan Hutan Lindung<br />\
    <img src="styles/legend/POLARUANG_RTRW_KAB_16_2.png" /> Kawasan Hutan Produksi yang dapat Dikonversi<br />\
    <img src="styles/legend/POLARUANG_RTRW_KAB_16_3.png" /> Kawasan Pariwisata<br />\
    <img src="styles/legend/POLARUANG_RTRW_KAB_16_4.png" /> Kawasan Perikanan Tangkap<br />\
    <img src="styles/legend/POLARUANG_RTRW_KAB_16_5.png" /> Kawasan Perkebunan<br />\
    <img src="styles/legend/POLARUANG_RTRW_KAB_16_6.png" /> Kawasan Permukiman Perkotaan<br />\
    <img src="styles/legend/POLARUANG_RTRW_KAB_16_7.png" /> Kawasan Pertahanan dan Keamanan<br />\
    <img src="styles/legend/POLARUANG_RTRW_KAB_16_8.png" /> Kawasan Peruntukan Industri<br />\
    <img src="styles/legend/POLARUANG_RTRW_KAB_16_9.png" /> Kawasan Transportasi<br />'
        });
var format_POLARUANG_RTRW_PROV_MALUKU_17 = new ol.format.GeoJSON();
var features_POLARUANG_RTRW_PROV_MALUKU_17 = format_POLARUANG_RTRW_PROV_MALUKU_17.readFeatures(json_POLARUANG_RTRW_PROV_MALUKU_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_POLARUANG_RTRW_PROV_MALUKU_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_POLARUANG_RTRW_PROV_MALUKU_17.addFeatures(features_POLARUANG_RTRW_PROV_MALUKU_17);
var lyr_POLARUANG_RTRW_PROV_MALUKU_17 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_POLARUANG_RTRW_PROV_MALUKU_17, 
                style: style_POLARUANG_RTRW_PROV_MALUKU_17,
                interactive: true,
    title: 'POLARUANG_RTRW_PROV_MALUKU<br />\
    <img src="styles/legend/POLARUANG_RTRW_PROV_MALUKU_17_0.png" /> Hutan Produksi Konversi<br />\
    <img src="styles/legend/POLARUANG_RTRW_PROV_MALUKU_17_1.png" /> Pengembangan Pertanian Lahan Kering<br />'
        });
var format_CekunganAirTanah_18 = new ol.format.GeoJSON();
var features_CekunganAirTanah_18 = format_CekunganAirTanah_18.readFeatures(json_CekunganAirTanah_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CekunganAirTanah_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CekunganAirTanah_18.addFeatures(features_CekunganAirTanah_18);
var lyr_CekunganAirTanah_18 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CekunganAirTanah_18, 
                style: style_CekunganAirTanah_18,
                interactive: true,
    title: 'Cekungan Air Tanah<br />\
    <img src="styles/legend/CekunganAirTanah_18_0.png" /> cat larat<br />\
    <img src="styles/legend/CekunganAirTanah_18_1.png" /> cat saumlaki<br />\
    <img src="styles/legend/CekunganAirTanah_18_2.png" /> cat watidal<br />'
        });
var format_GEOLOGI_LITOLOGI_19 = new ol.format.GeoJSON();
var features_GEOLOGI_LITOLOGI_19 = format_GEOLOGI_LITOLOGI_19.readFeatures(json_GEOLOGI_LITOLOGI_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GEOLOGI_LITOLOGI_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GEOLOGI_LITOLOGI_19.addFeatures(features_GEOLOGI_LITOLOGI_19);
var lyr_GEOLOGI_LITOLOGI_19 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_GEOLOGI_LITOLOGI_19, 
                style: style_GEOLOGI_LITOLOGI_19,
                interactive: true,
    title: 'GEOLOGI_LITOLOGI<br />\
    <img src="styles/legend/GEOLOGI_LITOLOGI_19_0.png" /> Formasi Batimafudi<br />\
    <img src="styles/legend/GEOLOGI_LITOLOGI_19_1.png" /> Formasi Saumlaki<br />\
    <img src="styles/legend/GEOLOGI_LITOLOGI_19_2.png" /> Marl Member<br />'
        });
var format_BatasDAS_20 = new ol.format.GeoJSON();
var features_BatasDAS_20 = format_BatasDAS_20.readFeatures(json_BatasDAS_20, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BatasDAS_20 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BatasDAS_20.addFeatures(features_BatasDAS_20);
var lyr_BatasDAS_20 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_BatasDAS_20, 
                style: style_BatasDAS_20,
                interactive: true,
                title: '<img src="styles/legend/BatasDAS_20.png" /> Batas DAS'
            });
var format_ProduktivitasAkuifer_21 = new ol.format.GeoJSON();
var features_ProduktivitasAkuifer_21 = format_ProduktivitasAkuifer_21.readFeatures(json_ProduktivitasAkuifer_21, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ProduktivitasAkuifer_21 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ProduktivitasAkuifer_21.addFeatures(features_ProduktivitasAkuifer_21);
var lyr_ProduktivitasAkuifer_21 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ProduktivitasAkuifer_21, 
                style: style_ProduktivitasAkuifer_21,
                interactive: true,
    title: 'Produktivitas Akuifer<br />\
    <img src="styles/legend/ProduktivitasAkuifer_21_0.png" /> Produktif Kecil Setempat Berarti<br />\
    <img src="styles/legend/ProduktivitasAkuifer_21_1.png" /> Produktif Sedang / Sedang Sampai Tinggi<br />\
    <img src="styles/legend/ProduktivitasAkuifer_21_2.png" /> Setempat Produktif<br />'
        });
var format_JENISTANAH_22 = new ol.format.GeoJSON();
var features_JENISTANAH_22 = format_JENISTANAH_22.readFeatures(json_JENISTANAH_22, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JENISTANAH_22 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JENISTANAH_22.addFeatures(features_JENISTANAH_22);
var lyr_JENISTANAH_22 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_JENISTANAH_22, 
                style: style_JENISTANAH_22,
                interactive: true,
    title: 'JENISTANAH<br />\
    <img src="styles/legend/JENISTANAH_22_0.png" /> Gleisol Fluvik<br />\
    <img src="styles/legend/JENISTANAH_22_1.png" /> Kambisol Eutrik<br />\
    <img src="styles/legend/JENISTANAH_22_2.png" /> Kambisol Gleik<br />\
    <img src="styles/legend/JENISTANAH_22_3.png" /> Kambisol Humik<br />\
    <img src="styles/legend/JENISTANAH_22_4.png" /> Molisol Haplik<br />\
    <img src="styles/legend/JENISTANAH_22_5.png" /> Permukiman<br />\
    <img src="styles/legend/JENISTANAH_22_6.png" /> Tubuh Air<br />'
        });
var format_KawasanHutan_23 = new ol.format.GeoJSON();
var features_KawasanHutan_23 = format_KawasanHutan_23.readFeatures(json_KawasanHutan_23, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KawasanHutan_23 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KawasanHutan_23.addFeatures(features_KawasanHutan_23);
var lyr_KawasanHutan_23 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_KawasanHutan_23, 
                style: style_KawasanHutan_23,
                interactive: true,
    title: 'Kawasan Hutan<br />\
    <img src="styles/legend/KawasanHutan_23_0.png" /> Areal Penggunaan Lain<br />\
    <img src="styles/legend/KawasanHutan_23_1.png" /> Hutan Lindung<br />\
    <img src="styles/legend/KawasanHutan_23_2.png" /> Hutan Produksi Konversi<br />'
        });
var format_RawanBanjir_24 = new ol.format.GeoJSON();
var features_RawanBanjir_24 = format_RawanBanjir_24.readFeatures(json_RawanBanjir_24, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RawanBanjir_24 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RawanBanjir_24.addFeatures(features_RawanBanjir_24);
var lyr_RawanBanjir_24 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_RawanBanjir_24, 
                style: style_RawanBanjir_24,
                interactive: true,
    title: 'Rawan Banjir<br />\
    <img src="styles/legend/RawanBanjir_24_0.png" /> Rawan Banjir Sedang<br />\
    <img src="styles/legend/RawanBanjir_24_1.png" /> Rawan Banjir Tinggi<br />\
    <img src="styles/legend/RawanBanjir_24_2.png" /> Tidak Rawan<br />'
        });
var format_RawanGempaBumi_25 = new ol.format.GeoJSON();
var features_RawanGempaBumi_25 = format_RawanGempaBumi_25.readFeatures(json_RawanGempaBumi_25, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RawanGempaBumi_25 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RawanGempaBumi_25.addFeatures(features_RawanGempaBumi_25);
var lyr_RawanGempaBumi_25 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_RawanGempaBumi_25, 
                style: style_RawanGempaBumi_25,
                interactive: true,
    title: 'Rawan Gempa Bumi<br />\
    <img src="styles/legend/RawanGempaBumi_25_0.png" /> Rawan Rendah<br />\
    <img src="styles/legend/RawanGempaBumi_25_1.png" /> Rawan Sedang<br />\
    <img src="styles/legend/RawanGempaBumi_25_2.png" /> Rawan Tinggi<br />'
        });
var format_RawanLongsor_26 = new ol.format.GeoJSON();
var features_RawanLongsor_26 = format_RawanLongsor_26.readFeatures(json_RawanLongsor_26, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RawanLongsor_26 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RawanLongsor_26.addFeatures(features_RawanLongsor_26);
var lyr_RawanLongsor_26 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_RawanLongsor_26, 
                style: style_RawanLongsor_26,
                interactive: true,
    title: 'Rawan Longsor<br />\
    <img src="styles/legend/RawanLongsor_26_0.png" /> Rawan Longsor Rendah<br />\
    <img src="styles/legend/RawanLongsor_26_1.png" /> Tidak Rawan Longsor<br />'
        });
var format_RawanTsunami_27 = new ol.format.GeoJSON();
var features_RawanTsunami_27 = format_RawanTsunami_27.readFeatures(json_RawanTsunami_27, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RawanTsunami_27 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RawanTsunami_27.addFeatures(features_RawanTsunami_27);
var lyr_RawanTsunami_27 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_RawanTsunami_27, 
                style: style_RawanTsunami_27,
                interactive: true,
    title: 'Rawan Tsunami<br />\
    <img src="styles/legend/RawanTsunami_27_0.png" /> Rawan Tsunami Sedang<br />\
    <img src="styles/legend/RawanTsunami_27_1.png" /> Tidak Rawan Tsunami<br />'
        });
var format_Lereng_28 = new ol.format.GeoJSON();
var features_Lereng_28 = format_Lereng_28.readFeatures(json_Lereng_28, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Lereng_28 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Lereng_28.addFeatures(features_Lereng_28);
var lyr_Lereng_28 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Lereng_28, 
                style: style_Lereng_28,
                interactive: true,
    title: 'Lereng<br />\
    <img src="styles/legend/Lereng_28_0.png" /> <15%<br />\
    <img src="styles/legend/Lereng_28_1.png" /> 15-25%<br />\
    <img src="styles/legend/Lereng_28_2.png" /> 25-40%<br />\
    <img src="styles/legend/Lereng_28_3.png" /> >40%<br />'
        });
var format_Mangrove_29 = new ol.format.GeoJSON();
var features_Mangrove_29 = format_Mangrove_29.readFeatures(json_Mangrove_29, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Mangrove_29 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Mangrove_29.addFeatures(features_Mangrove_29);
var lyr_Mangrove_29 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Mangrove_29, 
                style: style_Mangrove_29,
                interactive: true,
    title: 'Mangrove<br />\
    <img src="styles/legend/Mangrove_29_0.png" /> Mangrove Lebat<br />\
    <img src="styles/legend/Mangrove_29_1.png" /> Mangrove Sedang<br />'
        });
var format_KAWASANKUMUH_30 = new ol.format.GeoJSON();
var features_KAWASANKUMUH_30 = format_KAWASANKUMUH_30.readFeatures(json_KAWASANKUMUH_30, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KAWASANKUMUH_30 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KAWASANKUMUH_30.addFeatures(features_KAWASANKUMUH_30);
var lyr_KAWASANKUMUH_30 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_KAWASANKUMUH_30, 
                style: style_KAWASANKUMUH_30,
                interactive: true,
    title: 'KAWASAN KUMUH<br />\
    <img src="styles/legend/KAWASANKUMUH_30_0.png" /> Prioritas 1<br />\
    <img src="styles/legend/KAWASANKUMUH_30_1.png" /> Prioritas 2<br />\
    <img src="styles/legend/KAWASANKUMUH_30_2.png" /> Prioritas 3<br />'
        });
var format_Runoff_31 = new ol.format.GeoJSON();
var features_Runoff_31 = format_Runoff_31.readFeatures(json_Runoff_31, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Runoff_31 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Runoff_31.addFeatures(features_Runoff_31);
var lyr_Runoff_31 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Runoff_31, 
                style: style_Runoff_31,
                interactive: true,
                title: '<img src="styles/legend/Runoff_31.png" /> Run off'
            });
var format_STRUKTUR_GEOLOGI_32 = new ol.format.GeoJSON();
var features_STRUKTUR_GEOLOGI_32 = format_STRUKTUR_GEOLOGI_32.readFeatures(json_STRUKTUR_GEOLOGI_32, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_STRUKTUR_GEOLOGI_32 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_STRUKTUR_GEOLOGI_32.addFeatures(features_STRUKTUR_GEOLOGI_32);
var lyr_STRUKTUR_GEOLOGI_32 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_STRUKTUR_GEOLOGI_32, 
                style: style_STRUKTUR_GEOLOGI_32,
                interactive: true,
                title: '<img src="styles/legend/STRUKTUR_GEOLOGI_32.png" /> STRUKTUR_GEOLOGI'
            });
var format_PolaRuangSaumalakiLarat_33 = new ol.format.GeoJSON();
var features_PolaRuangSaumalakiLarat_33 = format_PolaRuangSaumalakiLarat_33.readFeatures(json_PolaRuangSaumalakiLarat_33, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PolaRuangSaumalakiLarat_33 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PolaRuangSaumalakiLarat_33.addFeatures(features_PolaRuangSaumalakiLarat_33);
var lyr_PolaRuangSaumalakiLarat_33 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PolaRuangSaumalakiLarat_33, 
                style: style_PolaRuangSaumalakiLarat_33,
                interactive: true,
    title: 'Pola Ruang Saumalaki Larat<br />\
    <img src="styles/legend/PolaRuangSaumalakiLarat_33_0.png" /> Badan Jalan<br />\
    <img src="styles/legend/PolaRuangSaumalakiLarat_33_1.png" /> Ekosistem Mangrove<br />\
    <img src="styles/legend/PolaRuangSaumalakiLarat_33_2.png" /> Hutan Lindung<br />\
    <img src="styles/legend/PolaRuangSaumalakiLarat_33_3.png" /> Taman Kota<br />\
    <img src="styles/legend/PolaRuangSaumalakiLarat_33_4.png" /> Taman Kecamatan<br />\
    <img src="styles/legend/PolaRuangSaumalakiLarat_33_5.png" /> Taman Kelurahan<br />\
    <img src="styles/legend/PolaRuangSaumalakiLarat_33_6.png" /> Hutan Produksi yang dapat Dikonversi<br />\
    <img src="styles/legend/PolaRuangSaumalakiLarat_33_7.png" /> Taman RT<br />\
    <img src="styles/legend/PolaRuangSaumalakiLarat_33_8.png" /> Pemakaman<br />\
    <img src="styles/legend/PolaRuangSaumalakiLarat_33_9.png" /> Jalur Hijau<br />\
    <img src="styles/legend/PolaRuangSaumalakiLarat_33_10.png" /> Kawasan Peruntukan Industri<br />\
    <img src="styles/legend/PolaRuangSaumalakiLarat_33_11.png" /> Pariwisata<br />\
    <img src="styles/legend/PolaRuangSaumalakiLarat_33_12.png" /> Pembangkitan Tenaga Listrik<br />\
    <img src="styles/legend/PolaRuangSaumalakiLarat_33_13.png" /> Perdagangan dan Jasa Skala Kota<br />\
    <img src="styles/legend/PolaRuangSaumalakiLarat_33_14.png" /> Perdagangan dan Jasa Skala WP<br />\
    <img src="styles/legend/PolaRuangSaumalakiLarat_33_15.png" /> Perdagangan dan Jasa Skala SWP<br />\
    <img src="styles/legend/PolaRuangSaumalakiLarat_33_16.png" /> Campuran Intensitas Menengah/Sedang<br />\
    <img src="styles/legend/PolaRuangSaumalakiLarat_33_17.png" /> Perkantoran<br />\
    <img src="styles/legend/PolaRuangSaumalakiLarat_33_18.png" /> Perkebunan<br />\
    <img src="styles/legend/PolaRuangSaumalakiLarat_33_19.png" /> Pertahanan dan Keamanan<br />\
    <img src="styles/legend/PolaRuangSaumalakiLarat_33_20.png" /> Perumahan Kepadatan Sangat Rendah<br />\
    <img src="styles/legend/PolaRuangSaumalakiLarat_33_21.png" /> Perumahan Kepadatan Rendah<br />\
    <img src="styles/legend/PolaRuangSaumalakiLarat_33_22.png" /> Perumahan Kepadatan Sedang<br />\
    <img src="styles/legend/PolaRuangSaumalakiLarat_33_23.png" /> Perumahan Kepadatan Tinggi<br />\
    <img src="styles/legend/PolaRuangSaumalakiLarat_33_24.png" /> SPU Skala Kota<br />\
    <img src="styles/legend/PolaRuangSaumalakiLarat_33_25.png" /> SPU Skala Kecamatan<br />\
    <img src="styles/legend/PolaRuangSaumalakiLarat_33_26.png" /> SPU Skala Kelurahan<br />\
    <img src="styles/legend/PolaRuangSaumalakiLarat_33_27.png" /> SPU Skala RW<br />\
    <img src="styles/legend/PolaRuangSaumalakiLarat_33_28.png" /> Transportasi<br />\
    <img src="styles/legend/PolaRuangSaumalakiLarat_33_29.png" /> Perlindungan Setempat<br />\
    <img src="styles/legend/PolaRuangSaumalakiLarat_33_30.png" /> Perikanan Tangkap<br />\
    <img src="styles/legend/PolaRuangSaumalakiLarat_33_31.png" /> Rimba Kota<br />'
        });
var format_polaruang_lermatang_34 = new ol.format.GeoJSON();
var features_polaruang_lermatang_34 = format_polaruang_lermatang_34.readFeatures(json_polaruang_lermatang_34, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_polaruang_lermatang_34 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_polaruang_lermatang_34.addFeatures(features_polaruang_lermatang_34);
var lyr_polaruang_lermatang_34 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_polaruang_lermatang_34, 
                style: style_polaruang_lermatang_34,
                interactive: true,
    title: 'polaruang_lermatang<br />\
    <img src="styles/legend/polaruang_lermatang_34_0.png" /> Badan Jalan<br />\
    <img src="styles/legend/polaruang_lermatang_34_1.png" /> Ekosistem Mangrove<br />\
    <img src="styles/legend/polaruang_lermatang_34_2.png" /> Hutan Lindung<br />\
    <img src="styles/legend/polaruang_lermatang_34_3.png" /> Rimba Kota<br />\
    <img src="styles/legend/polaruang_lermatang_34_4.png" /> Taman Kota<br />\
    <img src="styles/legend/polaruang_lermatang_34_5.png" /> Taman Kecamatan<br />\
    <img src="styles/legend/polaruang_lermatang_34_6.png" /> Taman Kelurahan<br />\
    <img src="styles/legend/polaruang_lermatang_34_7.png" /> Ruang Terbuka Non Hijau<br />\
    <img src="styles/legend/polaruang_lermatang_34_8.png" /> Hutan Produksi yang dapat Dikonversi<br />\
    <img src="styles/legend/polaruang_lermatang_34_9.png" /> Taman RT<br />\
    <img src="styles/legend/polaruang_lermatang_34_10.png" /> Pemakaman<br />\
    <img src="styles/legend/polaruang_lermatang_34_11.png" /> Jalur Hijau<br />\
    <img src="styles/legend/polaruang_lermatang_34_12.png" /> Instalasi Pengolahan Air Limbah (IPAL)<br />\
    <img src="styles/legend/polaruang_lermatang_34_13.png" /> Kawasan Peruntukan Industri<br />\
    <img src="styles/legend/polaruang_lermatang_34_14.png" /> Pariwisata<br />\
    <img src="styles/legend/polaruang_lermatang_34_15.png" /> Pembangkitan Tenaga Listrik<br />\
    <img src="styles/legend/polaruang_lermatang_34_16.png" /> Pengelolaan Persampahan<br />\
    <img src="styles/legend/polaruang_lermatang_34_17.png" /> Perdagangan dan Jasa Skala Kota<br />\
    <img src="styles/legend/polaruang_lermatang_34_18.png" /> Perdagangan dan Jasa Skala WP<br />\
    <img src="styles/legend/polaruang_lermatang_34_19.png" /> Perdagangan dan Jasa Skala SWP<br />\
    <img src="styles/legend/polaruang_lermatang_34_20.png" /> Campuran Intensitas Menengah/Sedang<br />\
    <img src="styles/legend/polaruang_lermatang_34_21.png" /> Perkantoran<br />\
    <img src="styles/legend/polaruang_lermatang_34_22.png" /> Perkebunan<br />\
    <img src="styles/legend/polaruang_lermatang_34_23.png" /> Pertahanan dan Keamanan<br />\
    <img src="styles/legend/polaruang_lermatang_34_24.png" /> Perumahan Kepadatan Sangat Rendah<br />\
    <img src="styles/legend/polaruang_lermatang_34_25.png" /> Perumahan Kepadatan Rendah<br />\
    <img src="styles/legend/polaruang_lermatang_34_26.png" /> Perumahan Kepadatan Sedang<br />\
    <img src="styles/legend/polaruang_lermatang_34_27.png" /> Perumahan Kepadatan Tinggi<br />\
    <img src="styles/legend/polaruang_lermatang_34_28.png" /> SPU Skala Kota<br />\
    <img src="styles/legend/polaruang_lermatang_34_29.png" /> SPU Skala Kecamatan<br />\
    <img src="styles/legend/polaruang_lermatang_34_30.png" /> SPU Skala Kelurahan<br />\
    <img src="styles/legend/polaruang_lermatang_34_31.png" /> SPU Skala RW<br />\
    <img src="styles/legend/polaruang_lermatang_34_32.png" /> Transportasi<br />\
    <img src="styles/legend/polaruang_lermatang_34_33.png" /> Badan Air<br />\
    <img src="styles/legend/polaruang_lermatang_34_34.png" /> Hortikultura<br />\
    <img src="styles/legend/polaruang_lermatang_34_35.png" /> Perikanan Tangkap<br />\
    <img src="styles/legend/polaruang_lermatang_34_36.png" /> Perlindungan Setempat<br />\
    <img src="styles/legend/polaruang_lermatang_34_37.png" /> Pertambangan Minyak dan Gas Bumi<br />\
    <img src="styles/legend/polaruang_lermatang_34_38.png" /> Tanaman Pangan<br />'
        });
var format_blok_35 = new ol.format.GeoJSON();
var features_blok_35 = format_blok_35.readFeatures(json_blok_35, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_blok_35 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_blok_35.addFeatures(features_blok_35);
var lyr_blok_35 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_blok_35, 
                style: style_blok_35,
                interactive: true,
                title: '<img src="styles/legend/blok_35.png" /> blok'
            });
var format_BATASDESA_36 = new ol.format.GeoJSON();
var features_BATASDESA_36 = format_BATASDESA_36.readFeatures(json_BATASDESA_36, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BATASDESA_36 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BATASDESA_36.addFeatures(features_BATASDESA_36);
var lyr_BATASDESA_36 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_BATASDESA_36, 
                style: style_BATASDESA_36,
                interactive: true,
                title: '<img src="styles/legend/BATASDESA_36.png" /> BATAS DESA'
            });
var format_JaringanAirMinum_37 = new ol.format.GeoJSON();
var features_JaringanAirMinum_37 = format_JaringanAirMinum_37.readFeatures(json_JaringanAirMinum_37, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JaringanAirMinum_37 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JaringanAirMinum_37.addFeatures(features_JaringanAirMinum_37);
var lyr_JaringanAirMinum_37 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_JaringanAirMinum_37, 
                style: style_JaringanAirMinum_37,
                interactive: true,
    title: 'Jaringan Air Minum<br />\
    <img src="styles/legend/JaringanAirMinum_37_0.png" /> Jaringan Distribusi Pembagi<br />'
        });
var format_InfrastrukturAirMinum_38 = new ol.format.GeoJSON();
var features_InfrastrukturAirMinum_38 = format_InfrastrukturAirMinum_38.readFeatures(json_InfrastrukturAirMinum_38, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_InfrastrukturAirMinum_38 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_InfrastrukturAirMinum_38.addFeatures(features_InfrastrukturAirMinum_38);
var lyr_InfrastrukturAirMinum_38 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_InfrastrukturAirMinum_38, 
                style: style_InfrastrukturAirMinum_38,
                interactive: true,
    title: 'Infrastruktur Air Minum<br />\
    <img src="styles/legend/InfrastrukturAirMinum_38_0.png" /> Terminal Air<br />'
        });
var format_JaringanAirLimbah_39 = new ol.format.GeoJSON();
var features_JaringanAirLimbah_39 = format_JaringanAirLimbah_39.readFeatures(json_JaringanAirLimbah_39, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JaringanAirLimbah_39 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JaringanAirLimbah_39.addFeatures(features_JaringanAirLimbah_39);
var lyr_JaringanAirLimbah_39 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_JaringanAirLimbah_39, 
                style: style_JaringanAirLimbah_39,
                interactive: true,
    title: 'Jaringan Air Limbah<br />\
    <img src="styles/legend/JaringanAirLimbah_39_0.png" /> Pipa Induk<br />\
    <img src="styles/legend/JaringanAirLimbah_39_1.png" /> Pipa Persil<br />'
        });
var format_InfrastrukturAirLimbah_40 = new ol.format.GeoJSON();
var features_InfrastrukturAirLimbah_40 = format_InfrastrukturAirLimbah_40.readFeatures(json_InfrastrukturAirLimbah_40, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_InfrastrukturAirLimbah_40 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_InfrastrukturAirLimbah_40.addFeatures(features_InfrastrukturAirLimbah_40);
var lyr_InfrastrukturAirLimbah_40 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_InfrastrukturAirLimbah_40, 
                style: style_InfrastrukturAirLimbah_40,
                interactive: true,
    title: 'Infrastruktur Air Limbah<br />\
    <img src="styles/legend/InfrastrukturAirLimbah_40_0.png" /> IPAL Kota<br />\
    <img src="styles/legend/InfrastrukturAirLimbah_40_1.png" /> Sub-sistem Pengolahan Lumpur Tinja<br />'
        });
var format_JaringanDrainase_41 = new ol.format.GeoJSON();
var features_JaringanDrainase_41 = format_JaringanDrainase_41.readFeatures(json_JaringanDrainase_41, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JaringanDrainase_41 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JaringanDrainase_41.addFeatures(features_JaringanDrainase_41);
var lyr_JaringanDrainase_41 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_JaringanDrainase_41, 
                style: style_JaringanDrainase_41,
                interactive: true,
    title: 'Jaringan Drainase<br />\
    <img src="styles/legend/JaringanDrainase_41_0.png" /> Jaringan Drainase Sekunder<br />\
    <img src="styles/legend/JaringanDrainase_41_1.png" /> Jaringan Drainase Tersier<br />'
        });
var format_JaringanEnergi_42 = new ol.format.GeoJSON();
var features_JaringanEnergi_42 = format_JaringanEnergi_42.readFeatures(json_JaringanEnergi_42, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JaringanEnergi_42 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JaringanEnergi_42.addFeatures(features_JaringanEnergi_42);
var lyr_JaringanEnergi_42 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_JaringanEnergi_42, 
                style: style_JaringanEnergi_42,
                interactive: true,
    title: 'Jaringan Energi<br />\
    <img src="styles/legend/JaringanEnergi_42_0.png" /> Saluran Udara Tegangan Menengah (SUTM)<br />\
    <img src="styles/legend/JaringanEnergi_42_1.png" /> Saluran Udara Tegangan Rendah (SUTR)<br />'
        });
var format_InfrastrukturEnergi_43 = new ol.format.GeoJSON();
var features_InfrastrukturEnergi_43 = format_InfrastrukturEnergi_43.readFeatures(json_InfrastrukturEnergi_43, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_InfrastrukturEnergi_43 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_InfrastrukturEnergi_43.addFeatures(features_InfrastrukturEnergi_43);
var lyr_InfrastrukturEnergi_43 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_InfrastrukturEnergi_43, 
                style: style_InfrastrukturEnergi_43,
                interactive: true,
    title: 'Infrastruktur Energi<br />\
    <img src="styles/legend/InfrastrukturEnergi_43_0.png" /> Pembangkit Listrik Lainnya<br />\
    <img src="styles/legend/InfrastrukturEnergi_43_1.png" /> Pembangkit Listrik Tenaga Diesel (PLTD)<br />'
        });
var format_InfrastrukturPersampahan_44 = new ol.format.GeoJSON();
var features_InfrastrukturPersampahan_44 = format_InfrastrukturPersampahan_44.readFeatures(json_InfrastrukturPersampahan_44, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_InfrastrukturPersampahan_44 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_InfrastrukturPersampahan_44.addFeatures(features_InfrastrukturPersampahan_44);
var lyr_InfrastrukturPersampahan_44 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_InfrastrukturPersampahan_44, 
                style: style_InfrastrukturPersampahan_44,
                interactive: true,
    title: 'Infrastruktur Persampahan<br />\
    <img src="styles/legend/InfrastrukturPersampahan_44_0.png" /> Tempat Pengelolaan Sampah Reuse, Reduce, Recycle (TPS3R)<br />'
        });
var format_JaringanPrasaranLainnya_45 = new ol.format.GeoJSON();
var features_JaringanPrasaranLainnya_45 = format_JaringanPrasaranLainnya_45.readFeatures(json_JaringanPrasaranLainnya_45, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JaringanPrasaranLainnya_45 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JaringanPrasaranLainnya_45.addFeatures(features_JaringanPrasaranLainnya_45);
var lyr_JaringanPrasaranLainnya_45 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_JaringanPrasaranLainnya_45, 
                style: style_JaringanPrasaranLainnya_45,
                interactive: true,
    title: 'Jaringan Prasaran Lainnya<br />\
    <img src="styles/legend/JaringanPrasaranLainnya_45_0.png" /> Jalur Evakuasi Bencana<br />\
    <img src="styles/legend/JaringanPrasaranLainnya_45_1.png" /> Jaringan Pejalan Kaki<br />'
        });
var format_InfrastrukturPrasaranLainnya_46 = new ol.format.GeoJSON();
var features_InfrastrukturPrasaranLainnya_46 = format_InfrastrukturPrasaranLainnya_46.readFeatures(json_InfrastrukturPrasaranLainnya_46, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_InfrastrukturPrasaranLainnya_46 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_InfrastrukturPrasaranLainnya_46.addFeatures(features_InfrastrukturPrasaranLainnya_46);
var lyr_InfrastrukturPrasaranLainnya_46 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_InfrastrukturPrasaranLainnya_46, 
                style: style_InfrastrukturPrasaranLainnya_46,
                interactive: true,
    title: 'Infrastruktur Prasaran Lainnya<br />\
    <img src="styles/legend/InfrastrukturPrasaranLainnya_46_0.png" /> Pilar Batas Negara<br />\
    <img src="styles/legend/InfrastrukturPrasaranLainnya_46_1.png" /> Pos Pengamanan Perbatasan<br />\
    <img src="styles/legend/InfrastrukturPrasaranLainnya_46_2.png" /> Tempat Evakuasi Akhir<br />\
    <img src="styles/legend/InfrastrukturPrasaranLainnya_46_3.png" /> Tempat Evakuasi Sementara<br />'
        });
var format_InfrastrukturTelekomunikasi_47 = new ol.format.GeoJSON();
var features_InfrastrukturTelekomunikasi_47 = format_InfrastrukturTelekomunikasi_47.readFeatures(json_InfrastrukturTelekomunikasi_47, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_InfrastrukturTelekomunikasi_47 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_InfrastrukturTelekomunikasi_47.addFeatures(features_InfrastrukturTelekomunikasi_47);
var lyr_InfrastrukturTelekomunikasi_47 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_InfrastrukturTelekomunikasi_47, 
                style: style_InfrastrukturTelekomunikasi_47,
                interactive: true,
    title: 'Infrastruktur Telekomunikasi<br />\
    <img src="styles/legend/InfrastrukturTelekomunikasi_47_0.png" /> Infrastruktur Jaringan Mikro Digital<br />\
    <img src="styles/legend/InfrastrukturTelekomunikasi_47_1.png" /> Menara Base Transceiver Station (BTS)<br />'
        });
var format_JaringanTelekomunikasi_48 = new ol.format.GeoJSON();
var features_JaringanTelekomunikasi_48 = format_JaringanTelekomunikasi_48.readFeatures(json_JaringanTelekomunikasi_48, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JaringanTelekomunikasi_48 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JaringanTelekomunikasi_48.addFeatures(features_JaringanTelekomunikasi_48);
var lyr_JaringanTelekomunikasi_48 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_JaringanTelekomunikasi_48, 
                style: style_JaringanTelekomunikasi_48,
                interactive: true,
    title: 'Jaringan Telekomunikasi<br />\
    <img src="styles/legend/JaringanTelekomunikasi_48_0.png" /> Jaringan Serat Optik<br />'
        });
var format_JaringanTransportasi_49 = new ol.format.GeoJSON();
var features_JaringanTransportasi_49 = format_JaringanTransportasi_49.readFeatures(json_JaringanTransportasi_49, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JaringanTransportasi_49 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JaringanTransportasi_49.addFeatures(features_JaringanTransportasi_49);
var lyr_JaringanTransportasi_49 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_JaringanTransportasi_49, 
                style: style_JaringanTransportasi_49,
                interactive: true,
    title: 'Jaringan Transportasi<br />\
    <img src="styles/legend/JaringanTransportasi_49_0.png" /> Jalan Kolektor Primer<br />\
    <img src="styles/legend/JaringanTransportasi_49_1.png" /> Jalan Kolektor Sekunder<br />\
    <img src="styles/legend/JaringanTransportasi_49_2.png" /> Jalan Lokal Primer<br />\
    <img src="styles/legend/JaringanTransportasi_49_3.png" /> Jalan Lingkungan Sekunder<br />'
        });
var format_InfrastrukturTransportasi_50 = new ol.format.GeoJSON();
var features_InfrastrukturTransportasi_50 = format_InfrastrukturTransportasi_50.readFeatures(json_InfrastrukturTransportasi_50, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_InfrastrukturTransportasi_50 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_InfrastrukturTransportasi_50.addFeatures(features_InfrastrukturTransportasi_50);
var lyr_InfrastrukturTransportasi_50 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_InfrastrukturTransportasi_50, 
                style: style_InfrastrukturTransportasi_50,
                interactive: true,
    title: 'Infrastruktur Transportasi<br />\
    <img src="styles/legend/InfrastrukturTransportasi_50_0.png" /> Bandar Udara Pengumpan<br />\
    <img src="styles/legend/InfrastrukturTransportasi_50_1.png" /> Pangkalan Pendaratan Ikan<br />\
    <img src="styles/legend/InfrastrukturTransportasi_50_2.png" /> Pelabuhan Pengumpan Lokal<br />\
    <img src="styles/legend/InfrastrukturTransportasi_50_3.png" /> Pelabuhan Pengumpul<br />\
    <img src="styles/legend/InfrastrukturTransportasi_50_4.png" /> Pelabuhan Penyeberangan Kelas I<br />\
    <img src="styles/legend/InfrastrukturTransportasi_50_5.png" /> Terminal Khusus<br />\
    <img src="styles/legend/InfrastrukturTransportasi_50_6.png" /> Terminal Penumpang Tipe C<br />'
        });
var format_PusatPelayanan_51 = new ol.format.GeoJSON();
var features_PusatPelayanan_51 = format_PusatPelayanan_51.readFeatures(json_PusatPelayanan_51, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PusatPelayanan_51 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PusatPelayanan_51.addFeatures(features_PusatPelayanan_51);
var lyr_PusatPelayanan_51 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PusatPelayanan_51, 
                style: style_PusatPelayanan_51,
                interactive: true,
    title: 'Pusat Pelayanan<br />\
    <img src="styles/legend/PusatPelayanan_51_0.png" /> Pusat Lingkungan Kelurahan/Desa<br />\
    <img src="styles/legend/PusatPelayanan_51_1.png" /> Pusat Pelayanan Kota/Kawasan Perkotaan<br />\
    <img src="styles/legend/PusatPelayanan_51_2.png" /> Sub Pusat Pelayanan Kota/Kawasan Perkotaan<br />'
        });
var format_TOPONIMI_52 = new ol.format.GeoJSON();
var features_TOPONIMI_52 = format_TOPONIMI_52.readFeatures(json_TOPONIMI_52, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TOPONIMI_52 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TOPONIMI_52.addFeatures(features_TOPONIMI_52);
var lyr_TOPONIMI_52 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_TOPONIMI_52,
maxResolution:5.600893230452393,
 
                style: style_TOPONIMI_52,
                interactive: true,
    title: 'TOPONIMI<br />\
    <img src="styles/legend/TOPONIMI_52_0.png" /> Fasilitas Umum dan Sosial<br />\
    <img src="styles/legend/TOPONIMI_52_1.png" /> Pariwisata dan Hiburan<br />\
    <img src="styles/legend/TOPONIMI_52_2.png" /> Perkantoran dan Perdagangan-Jasa<br />\
    <img src="styles/legend/TOPONIMI_52_3.png" /> Pertahanan dan Keamanan<br />\
    <img src="styles/legend/TOPONIMI_52_4.png" /> RTH dan Sejenis<br />\
    <img src="styles/legend/TOPONIMI_52_5.png" /> Utilitas<br />'
        });

lyr_ESRISatellite_0.setVisible(false);lyr_GoogleSatellite_1.setVisible(true);lyr_ANALISISSIMPANGANPOLARUANG_2.setVisible(false);lyr_JangkauanMenujuSDSederajat_3.setVisible(false);lyr_JangkauanMenujuSMPSederajat_4.setVisible(false);lyr_JangkauanMenujuSMASederajat_5.setVisible(false);lyr_JangkauanMenujuPendidikanTinggi_6.setVisible(false);lyr_UsulanPLTMGMasela_7.setVisible(false);lyr_KonsepPenataan_8.setVisible(false);lyr_Waterfront_City_9.setVisible(false);lyr_JangkauanMenujuKlinikApotekPraktek_Dokter_10.setVisible(false);lyr_JangkauanMenujuFasilitasKesehatan_11.setVisible(false);lyr_WaktuTempuhMenitMenujuBandara_12.setVisible(false);lyr_SMCA_WP_13.setVisible(false);lyr_kepadatanPenduduk_14.setVisible(false);lyr_HakAtasTanah_15.setVisible(false);lyr_POLARUANG_RTRW_KAB_16.setVisible(false);lyr_POLARUANG_RTRW_PROV_MALUKU_17.setVisible(false);lyr_CekunganAirTanah_18.setVisible(false);lyr_GEOLOGI_LITOLOGI_19.setVisible(false);lyr_BatasDAS_20.setVisible(false);lyr_ProduktivitasAkuifer_21.setVisible(false);lyr_JENISTANAH_22.setVisible(false);lyr_KawasanHutan_23.setVisible(false);lyr_RawanBanjir_24.setVisible(false);lyr_RawanGempaBumi_25.setVisible(false);lyr_RawanLongsor_26.setVisible(false);lyr_RawanTsunami_27.setVisible(false);lyr_Lereng_28.setVisible(false);lyr_Mangrove_29.setVisible(false);lyr_KAWASANKUMUH_30.setVisible(false);lyr_Runoff_31.setVisible(false);lyr_STRUKTUR_GEOLOGI_32.setVisible(false);lyr_PolaRuangSaumalakiLarat_33.setVisible(true);lyr_polaruang_lermatang_34.setVisible(false);lyr_blok_35.setVisible(true);lyr_BATASDESA_36.setVisible(false);lyr_JaringanAirMinum_37.setVisible(false);lyr_InfrastrukturAirMinum_38.setVisible(false);lyr_JaringanAirLimbah_39.setVisible(false);lyr_InfrastrukturAirLimbah_40.setVisible(false);lyr_JaringanDrainase_41.setVisible(false);lyr_JaringanEnergi_42.setVisible(false);lyr_InfrastrukturEnergi_43.setVisible(false);lyr_InfrastrukturPersampahan_44.setVisible(false);lyr_JaringanPrasaranLainnya_45.setVisible(false);lyr_InfrastrukturPrasaranLainnya_46.setVisible(false);lyr_InfrastrukturTelekomunikasi_47.setVisible(false);lyr_JaringanTelekomunikasi_48.setVisible(false);lyr_JaringanTransportasi_49.setVisible(false);lyr_InfrastrukturTransportasi_50.setVisible(false);lyr_PusatPelayanan_51.setVisible(false);lyr_TOPONIMI_52.setVisible(false);
var layersList = [lyr_ESRISatellite_0,lyr_GoogleSatellite_1,lyr_ANALISISSIMPANGANPOLARUANG_2,lyr_JangkauanMenujuSDSederajat_3,lyr_JangkauanMenujuSMPSederajat_4,lyr_JangkauanMenujuSMASederajat_5,lyr_JangkauanMenujuPendidikanTinggi_6,lyr_UsulanPLTMGMasela_7,lyr_KonsepPenataan_8,lyr_Waterfront_City_9,lyr_JangkauanMenujuKlinikApotekPraktek_Dokter_10,lyr_JangkauanMenujuFasilitasKesehatan_11,lyr_WaktuTempuhMenitMenujuBandara_12,lyr_SMCA_WP_13,lyr_kepadatanPenduduk_14,lyr_HakAtasTanah_15,lyr_POLARUANG_RTRW_KAB_16,lyr_POLARUANG_RTRW_PROV_MALUKU_17,lyr_CekunganAirTanah_18,lyr_GEOLOGI_LITOLOGI_19,lyr_BatasDAS_20,lyr_ProduktivitasAkuifer_21,lyr_JENISTANAH_22,lyr_KawasanHutan_23,lyr_RawanBanjir_24,lyr_RawanGempaBumi_25,lyr_RawanLongsor_26,lyr_RawanTsunami_27,lyr_Lereng_28,lyr_Mangrove_29,lyr_KAWASANKUMUH_30,lyr_Runoff_31,lyr_STRUKTUR_GEOLOGI_32,lyr_PolaRuangSaumalakiLarat_33,lyr_polaruang_lermatang_34,lyr_blok_35,lyr_BATASDESA_36,lyr_JaringanAirMinum_37,lyr_InfrastrukturAirMinum_38,lyr_JaringanAirLimbah_39,lyr_InfrastrukturAirLimbah_40,lyr_JaringanDrainase_41,lyr_JaringanEnergi_42,lyr_InfrastrukturEnergi_43,lyr_InfrastrukturPersampahan_44,lyr_JaringanPrasaranLainnya_45,lyr_InfrastrukturPrasaranLainnya_46,lyr_InfrastrukturTelekomunikasi_47,lyr_JaringanTelekomunikasi_48,lyr_JaringanTransportasi_49,lyr_InfrastrukturTransportasi_50,lyr_PusatPelayanan_51,lyr_TOPONIMI_52];
lyr_ANALISISSIMPANGANPOLARUANG_2.set('fieldAliases', {'FID_batas_': 'FID_batas_', 'WADMKC': 'Kecamatan', 'WADMKD': 'Desa/Keluarahan', 'WADMKK': 'Kab/Kot', 'UUPP': 'Sumber', 'LUAS': 'LUAS', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'NAMOBJ_1': 'RTRW', 'REMARK_1': 'Landuse eksisting', 'status': 'status', 'sesuai': 'sesuai', 'RTRW_RECL': 'RTRW_RECL', 'LANDUS_REC': 'LANDUS_REC', 'PERUBAHAN': 'PERUBAHAN', });
lyr_JangkauanMenujuSDSederajat_3.set('fieldAliases', {'Name': 'Name', 'SD': 'SD', });
lyr_JangkauanMenujuSMPSederajat_4.set('fieldAliases', {'Name': 'Name', 'SMP': 'SMP', });
lyr_JangkauanMenujuSMASederajat_5.set('fieldAliases', {'Name': 'Name', 'SMA': 'SMA', });
lyr_JangkauanMenujuPendidikanTinggi_6.set('fieldAliases', {'Name': 'Name', 'UNIVERSITA': 'UNIVERSITA', });
lyr_UsulanPLTMGMasela_7.set('fieldAliases', {'Id': 'Id', 'Keterangan': 'Keterangan', 'luas_ha': 'luas_ha', 'Usulan': 'Usulan', });
lyr_Waterfront_City_9.set('fieldAliases', {'Id': 'Id', });
lyr_JangkauanMenujuKlinikApotekPraktek_Dokter_10.set('fieldAliases', {'Name': 'Name', 'KL_AP_PDOK': 'KL_AP_PDOK', });
lyr_JangkauanMenujuFasilitasKesehatan_11.set('fieldAliases', {'Name': 'Name', 'KESEHTAN': 'KESEHTAN', });
lyr_WaktuTempuhMenitMenujuBandara_12.set('fieldAliases', {'ObjectID': 'ObjectID', 'FacilityID': 'FacilityID', 'Name': 'Name', 'FromBreak': 'FromBreak', 'ToBreak': 'ToBreak', });
lyr_SMCA_WP_13.set('fieldAliases', {'OBJECTID_1': 'OBJECTID_1', 'WADMKC': 'WADMKC', 'WADMKC_1': 'WADMKC_1', 'WADMKD': 'WADMKD', 'LUAS_KM2': 'LUAS_KM2', 'EQ_Index': 'EQ_Index', 'B_ekologi': 'B_ekologi', 'Nilai': 'Nilai', 'b_kwhutan': 'b_kwhutan', 'raw_longso': 'raw_longso', 'B_longsor': 'B_longsor', 'rwn_tsunam': 'rwn_tsunam', 'B_tsunami': 'B_tsunami', 'Singkatan': 'Singkatan', 'lereng': 'lereng', 'b_lereng': 'b_lereng', 'raw_banjir': 'raw_banjir', 'b_banjir': 'b_banjir', 'SKOR': 'SKOR', 'SMCA': 'SMCA', 'SK_SMCA4VA': 'SK_SMCA4VA', 'SMCA4VA': 'SMCA4VA', });
lyr_kepadatanPenduduk_14.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Id': 'Id', 'gridcode': 'gridcode', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_HakAtasTanah_15.set('fieldAliases', {'ID': 'ID', 'WILAYAHID': 'WILAYAHID', 'WILAYAHIND': 'WILAYAHIND', 'KODEWILAYA': 'KODEWILAYA', 'KECAMATAN': 'KECAMATAN', 'KELURAHAN': 'KELURAHAN', 'TIPEHAK': 'TIPEHAK', 'TIPEPRODUK': 'TIPEPRODUK', 'TAHUN': 'TAHUN', 'NIB': 'NIB', 'LUASTERTUL': 'LUASTERTUL', 'LUASPETA': 'LUASPETA', 'SUMBERGEOM': 'SUMBERGEOM', 'ALATUKUR': 'ALATUKUR', 'METODUKUR': 'METODUKUR', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_POLARUANG_RTRW_KAB_16.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'WADMKK': 'WADMKK', 'WADMKC': 'WADMKC', 'KKOP_1': 'KKOP_1', 'KP2B_2': 'KP2B_2', 'KRB_03': 'KRB_03', 'CAGBUD': 'CAGBUD', 'RESAIR': 'RESAIR', 'KSMPDN': 'KSMPDN', 'HANKAM': 'HANKAM', 'KKARST': 'KKARST', 'PTBGMB': 'PTBGMB', 'MGRSAT': 'MGRSAT', 'RDBUMI': 'RDBUMI', 'REMARK': 'REMARK', 'LUASHA': 'LUASHA', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_POLARUANG_RTRW_PROV_MALUKU_17.set('fieldAliases', {'Id': 'Id', 'Ket': 'Ket', });
lyr_CekunganAirTanah_18.set('fieldAliases', {'LAYER': 'LAYER', 'cat_ntt': 'cat_ntt', 'NAMA_CAT': 'NAMA_CAT', 'nilai_cat': 'nilai_cat', });
lyr_GEOLOGI_LITOLOGI_19.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'fcode': 'fcode', 'simobj': 'simobj', 'namobj': 'namobj', 'umurobj': 'umurobj', 'remark': 'remark', 'metadata': 'metadata', 'srs_id': 'srs_id', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_BatasDAS_20.set('fieldAliases', {'OBJECTID_1': 'OBJECTID_1', 'objectid': 'objectid', 'kode_das': 'kode_das', 'luas_das': 'luas_das', 'keliling_m': 'keliling_m', 'nama_das': 'nama_das', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'kab': 'kab', });
lyr_ProduktivitasAkuifer_21.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'sys_aq': 'sys_aq', 'prod': 'prod', 'keterusan': 'keterusan', 'debit': 'debit', 'debit_min': 'debit_min', 'debit_max': 'debit_max', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_JENISTANAH_22.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'kd_sl': 'kd_sl', 'spt': 'spt', 'jntnh1': 'jntnh1', 'jntnh2': 'jntnh2', 'jntnh3': 'jntnh3', 'remark': 'remark', 'tahun': 'tahun', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_KawasanHutan_23.set('fieldAliases', {'KODEPROV': 'KODEPROV', 'FUNGSIKWS': 'FUNGSIKWS', 'NOSKPNJK': 'NOSKPNJK', 'TGLSKPNJK': 'TGLSKPNJK', 'LSKPNJK': 'LSKPNJK', 'KET': 'KET', 'FUNGSI_ID': 'FUNGSI_ID', 'Kode_angka': 'Kode_angka', 'Nilai': 'Nilai', 'Singkatan': 'Singkatan', });
lyr_RawanBanjir_24.set('fieldAliases', {'Id': 'Id', 'gridcode': 'gridcode', 'Shape_Le_1': 'Shape_Le_1', 'Shape_Ar_1': 'Shape_Ar_1', 'raw_banjir': 'raw_banjir', 'b_banjir': 'b_banjir', });
lyr_RawanGempaBumi_25.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Id': 'Id', 'gridcode': 'gridcode', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'RAWAN_GEMP': 'RAWAN_GEMP', });
lyr_RawanLongsor_26.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'gridcode': 'gridcode', 'raw_longso': 'raw_longso', 'B_longsor': 'B_longsor', });
lyr_RawanTsunami_27.set('fieldAliases', {'gridcode': 'gridcode', 'Shape_Le_1': 'Shape_Le_1', 'Shape_Ar_1': 'Shape_Ar_1', 'rwn_tsunam': 'rwn_tsunam', 'B_tsunami': 'B_tsunami', });
lyr_Lereng_28.set('fieldAliases', {'gridcode': 'gridcode', 'lereng': 'lereng', 'b_lereng': 'b_lereng', });
lyr_Mangrove_29.set('fieldAliases', {'kttj': 'kttj', 'thnbuat': 'thnbuat', 'ints': 'ints', 'bpdashl': 'bpdashl', 'kab': 'kab', 'prov': 'prov', 'lsmgr': 'lsmgr', 'smbdt': 'smbdt', 'fgsfrf': 'fgsfrf', 'remark': 'remark', 'shape_Area': 'shape_Area', 'shape_Leng': 'shape_Leng', });
lyr_KAWASANKUMUH_30.set('fieldAliases', {'Id': 'Id', 'LOKASI': 'LOKASI', 'LUAS_HA': 'LUAS_HA', 'SKEMA_DANA': 'SKEMA_DANA', 'Prioritas': 'Prioritas', 'instansi': 'instansi', });
lyr_Runoff_31.set('fieldAliases', {'LAYER': 'LAYER', 'ELEVATION': 'ELEVATION', 'STREAM_ID': 'STREAM_ID', 'IN_FLOW': 'IN_FLOW', 'OUT_FLOW': 'OUT_FLOW', 'DRAIN_AREA': 'DRAIN_AREA', });
lyr_STRUKTUR_GEOLOGI_32.set('fieldAliases', {'objectid_1': 'objectid_1', 'objectid': 'objectid', 'fcode': 'fcode', 'namobj': 'namobj', 'klsstr': 'klsstr', 'remark': 'remark', 'metadata': 'metadata', 'srs_id': 'srs_id', 'st_length_': 'st_length_', 'st_length1': 'st_length1', });
lyr_PolaRuangSaumalakiLarat_33.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'NAMOBJ': 'Nama Objek', 'NAMZON': 'Nama Zona', 'KODZON': 'Kode Zona', 'NAMSZN': 'Nama Sub-Zona', 'KODSZN': 'Kode Sub-Zona', 'JNSRPR': 'Jenis Rencana Pola Ruang', 'KODEWP': 'Kode WP', 'KODSWP': 'Kode SWP', 'KODBLK': 'Kode Blok', 'KODSBL': 'Kode Sub-Blok', 'WADMPR': 'Wilayah Administrasi Provinsi', 'WADMKK': 'Wilayah Administrasi Kabupaten/Kota', 'WADMKC': 'Wilayah Administrasi Kecamatan', 'WADMKD': 'Wilayah Administrasi Kelurahan/Desa', 'KKOP_1': 'Kawasan Keselamatan Operasi Penerbangan', 'LP2B_2': 'Lahan Pertanian Pangan Berkelanjutan', 'KRB_03': 'Kawasan Rawan Bencana', 'TOD_04': 'Kawasan Berorientasi Transit', 'TEB_05': 'Tempat Evakuasi Bencana', 'PUSLIT': 'Pusat Penelitian', 'CAGBUD': 'Kawasan Cagar Budaya', 'RESAIR': 'Kawasan Resapan Air', 'KSMPDN': 'Kawasan Sempadan', 'HANKAM': 'Kawasan Pertahanan dan Keamanan', 'KKARST': 'Kawasan Karst', 'PTBGMB': 'Kawasan Pertambangan Mineral dan Batubara', 'MGRSAT': 'Kawasan Migrasi Satwa', 'RDBUMI': 'Ruang Dalam Bumi', 'TPZ_00': 'Teknik Pengaturan Zonasi', 'REMARK': 'Catatan', 'LUASHA': 'Luas Area', 'KEGIATAN': 'KEGIATAN', 'Shape_Length': 'Shape_Length', 'Shape_Area': 'Shape_Area', });
lyr_polaruang_lermatang_34.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'NAMOBJ': 'NAMOBJ', 'NAMZON': 'NAMZON', 'KODZON': 'KODZON', 'NAMSZN': 'NAMSZN', 'KODSZN': 'KODSZN', 'JNSRPR': 'JNSRPR', 'KODEWP': 'KODEWP', 'KODSWP': 'KODSWP', 'KODBLK': 'KODBLK', 'KODSBL': 'KODSBL', 'WADMPR': 'WADMPR', 'WADMKK': 'WADMKK', 'WADMKC': 'WADMKC', 'WADMKD': 'WADMKD', 'KKOP_1': 'KKOP_1', 'LP2B_2': 'LP2B_2', 'KRB_03': 'KRB_03', 'TOD_04': 'TOD_04', 'TEB_05': 'TEB_05', 'PUSLIT': 'PUSLIT', 'CAGBUD': 'CAGBUD', 'RESAIR': 'RESAIR', 'KSMPDN': 'KSMPDN', 'HANKAM': 'HANKAM', 'KKARST': 'KKARST', 'PTBGMB': 'PTBGMB', 'MGRSAT': 'MGRSAT', 'RDBUMI': 'RDBUMI', 'TPZ_00': 'TPZ_00', 'REMARK': 'REMARK', 'LUASHA': 'LUASHA', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'kode': 'kode', });
lyr_blok_35.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'WP': 'WP', 'SWP': 'SWP', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'luas': 'luas', 'blok': 'blok', 'BSWP': 'BSWP', 'BWP': 'BWP', });
lyr_BATASDESA_36.set('fieldAliases', {'WADMKC': 'WADMKC', 'WADMKD': 'WADMKD', 'LUAS_KM2': 'LUAS_KM2', 'ha': 'ha', });
lyr_JaringanAirMinum_37.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'NAMOBJ': 'Nama Objek', 'ORDE01': 'Orde 1', 'ORDE02': 'Orde 2', 'JNSRSR': 'Jenis Rencana Struktur Ruang', 'STSJRN': 'Status Jaringan Infrastruktur', 'WADMPR': 'Wilayah Administrasi Provinsi', 'WADMKK': 'Wilayah Administrasi Kabupaten/Kota', 'REMARK': 'Catatan', 'SBDATA': 'Sumber Data', 'Shape_Length': 'Shape_Length', });
lyr_InfrastrukturAirMinum_38.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'NAMOBJ': 'Nama Objek', 'ORDE01': 'Orde 1', 'ORDE02': 'Orde 2', 'JNSRSR': 'Jenis Rencana Struktur Ruang', 'STSJRN': 'Status Jaringan Infrastruktur', 'WADMPR': 'Wilayah Administrasi Provinsi', 'WADMKK': 'Wilayah Administrasi Kabupaten/Kota', 'REMARK': 'Catatan', 'SBDATA': 'Sumber Data', });
lyr_JaringanAirLimbah_39.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'NAMOBJ': 'Nama Objek', 'ORDE01': 'Orde 1', 'ORDE02': 'Orde 2', 'JNSRSR': 'Jenis Rencana Struktur Ruang', 'STSJRN': 'Status Jaringan Infrastruktur', 'WADMPR': 'Wilayah Administrasi Provinsi', 'WADMKK': 'Wilayah Administrasi Kabupaten/Kota', 'REMARK': 'Catatan', 'SBDATA': 'Sumber Data', 'Shape_Length': 'Shape_Length', });
lyr_InfrastrukturAirLimbah_40.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'NAMOBJ': 'Nama Objek', 'ORDE01': 'Orde 1', 'ORDE02': 'Orde 2', 'JNSRSR': 'Jenis Rencana Struktur Ruang', 'STSJRN': 'Status Jaringan Infrastruktur', 'WADMPR': 'Wilayah Administrasi Provinsi', 'WADMKK': 'Wilayah Administrasi Kabupaten/Kota', 'REMARK': 'Catatan', 'SBDATA': 'Sumber Data', });
lyr_JaringanDrainase_41.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'NAMOBJ': 'Nama Objek', 'ORDE01': 'Orde 1', 'ORDE02': 'Orde 2', 'JNSRSR': 'Jenis Rencana Struktur Ruang', 'STSJRN': 'Status Jaringan Infrastruktur', 'WADMPR': 'Wilayah Administrasi Provinsi', 'WADMKK': 'Wilayah Administrasi Kabupaten/Kota', 'REMARK': 'Catatan', 'SBDATA': 'Sumber Data', 'Shape_Length': 'Shape_Length', });
lyr_JaringanEnergi_42.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'NAMOBJ': 'Nama Objek', 'ORDE01': 'Orde 1', 'ORDE02': 'Orde 2', 'JNSRSR': 'Jenis Rencana Struktur Ruang', 'STSJRN': 'Status Jaringan Infrastruktur', 'WADMPR': 'Wilayah Administrasi Provinsi', 'WADMKK': 'Wilayah Administrasi Kabupaten/Kota', 'REMARK': 'Catatan', 'SBDATA': 'Sumber Data', 'Shape_Length': 'Shape_Length', });
lyr_InfrastrukturEnergi_43.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'NAMOBJ': 'Nama Objek', 'ORDE01': 'Orde 1', 'ORDE02': 'Orde 2', 'JNSRSR': 'Jenis Rencana Struktur Ruang', 'STSJRN': 'Status Jaringan Infrastruktur', 'WADMPR': 'Wilayah Administrasi Provinsi', 'WADMKK': 'Wilayah Administrasi Kabupaten/Kota', 'REMARK': 'Catatan', 'SBDATA': 'Sumber Data', });
lyr_InfrastrukturPersampahan_44.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'NAMOBJ': 'Nama Objek', 'ORDE01': 'Orde 1', 'ORDE02': 'Orde 2', 'JNSRSR': 'Jenis Rencana Struktur Ruang', 'STSJRN': 'Status Jaringan Infrastruktur', 'WADMPR': 'Wilayah Administrasi Provinsi', 'WADMKK': 'Wilayah Administrasi Kabupaten/Kota', 'REMARK': 'Catatan', 'SBDATA': 'Sumber Data', });
lyr_JaringanPrasaranLainnya_45.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'NAMOBJ': 'Nama Objek', 'ORDE01': 'Orde 1', 'ORDE02': 'Orde 2', 'JNSRSR': 'Jenis Rencana Struktur Ruang', 'STSJRN': 'Status Jaringan Infrastruktur', 'WADMPR': 'Wilayah Administrasi Provinsi', 'WADMKK': 'Wilayah Administrasi Kabupaten/Kota', 'REMARK': 'Catatan', 'SBDATA': 'Sumber Data', 'Shape_Length': 'Shape_Length', });
lyr_InfrastrukturPrasaranLainnya_46.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'NAMOBJ': 'Nama Objek', 'ORDE01': 'Orde 1', 'ORDE02': 'Orde 2', 'JNSRSR': 'Jenis Rencana Struktur Ruang', 'STSJRN': 'Status Jaringan Infrastruktur', 'WADMPR': 'Wilayah Administrasi Provinsi', 'WADMKK': 'Wilayah Administrasi Kabupaten/Kota', 'REMARK': 'Catatan', 'SBDATA': 'Sumber Data', });
lyr_InfrastrukturTelekomunikasi_47.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'NAMOBJ': 'Nama Objek', 'ORDE01': 'Orde 1', 'ORDE02': 'Orde 2', 'JNSRSR': 'Jenis Rencana Struktur Ruang', 'STSJRN': 'Status Jaringan Infrastruktur', 'WADMPR': 'Wilayah Administrasi Provinsi', 'WADMKK': 'Wilayah Administrasi Kabupaten/Kota', 'REMARK': 'Catatan', 'SBDATA': 'Sumber Data', });
lyr_JaringanTelekomunikasi_48.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'NAMOBJ': 'Nama Objek', 'ORDE01': 'Orde 1', 'ORDE02': 'Orde 2', 'JNSRSR': 'Jenis Rencana Struktur Ruang', 'STSJRN': 'Status Jaringan Infrastruktur', 'WADMPR': 'Wilayah Administrasi Provinsi', 'WADMKK': 'Wilayah Administrasi Kabupaten/Kota', 'REMARK': 'Catatan', 'SBDATA': 'Sumber Data', 'Shape_Length': 'Shape_Length', });
lyr_JaringanTransportasi_49.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'NAMOBJ': 'Nama Objek', 'ORDE01': 'Orde 1', 'ORDE02': 'Orde 2', 'JNSRSR': 'Jenis Rencana Struktur Ruang', 'STSJRN': 'Status Jaringan Infrastruktur', 'WADMPR': 'Wilayah Administrasi Provinsi', 'WADMKK': 'Wilayah Administrasi Kabupaten/Kota', 'REMARK': 'Catatan', 'SBDATA': 'Sumber Data', 'Shape_Length': 'Shape_Length', });
lyr_InfrastrukturTransportasi_50.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'NAMOBJ': 'Nama Objek', 'ORDE01': 'Orde 1', 'ORDE02': 'Orde 2', 'JNSRSR': 'Jenis Rencana Struktur Ruang', 'STSJRN': 'Status Jaringan Infrastruktur', 'WADMPR': 'Wilayah Administrasi Provinsi', 'WADMKK': 'Wilayah Administrasi Kabupaten/Kota', 'REMARK': 'Catatan', 'SBDATA': 'Sumber Data', });
lyr_PusatPelayanan_51.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'NAMOBJ': 'Nama Objek', 'ORDE01': 'Orde 1', 'ORDE02': 'Orde 2', 'JNSRSR': 'Jenis Rencana Struktur Ruang', 'STSJRN': 'Status Jaringan Infrastruktur', 'WADMPR': 'Wilayah Administrasi Provinsi', 'WADMKK': 'Wilayah Administrasi Kabupaten/Kota', 'REMARK': 'Catatan', 'SBDATA': 'Sumber Data', });
lyr_TOPONIMI_52.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'NAME': 'NAME', 'FOTO': 'FOTO', 'TOPONIM': 'TOPONIM', 'NO': 'NO', 'KEGIATAN_O': 'KEGIATAN_O', 'JENIS': 'JENIS', 'JENIS_UTAM': 'JENIS_UTAM', 'ATTACHMENT': 'ATTACHMENT', });
lyr_ANALISISSIMPANGANPOLARUANG_2.set('fieldImages', {'FID_batas_': 'TextEdit', 'WADMKC': 'TextEdit', 'WADMKD': 'TextEdit', 'WADMKK': 'TextEdit', 'UUPP': 'TextEdit', 'LUAS': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'NAMOBJ_1': 'TextEdit', 'REMARK_1': 'TextEdit', 'status': 'TextEdit', 'sesuai': 'TextEdit', 'RTRW_RECL': 'TextEdit', 'LANDUS_REC': 'TextEdit', 'PERUBAHAN': 'TextEdit', });
lyr_JangkauanMenujuSDSederajat_3.set('fieldImages', {'Name': 'TextEdit', 'SD': '', });
lyr_JangkauanMenujuSMPSederajat_4.set('fieldImages', {'Name': 'TextEdit', 'SMP': '', });
lyr_JangkauanMenujuSMASederajat_5.set('fieldImages', {'Name': 'TextEdit', 'SMA': '', });
lyr_JangkauanMenujuPendidikanTinggi_6.set('fieldImages', {'Name': 'TextEdit', 'UNIVERSITA': '', });
lyr_UsulanPLTMGMasela_7.set('fieldImages', {'Id': 'Range', 'Keterangan': 'TextEdit', 'luas_ha': 'TextEdit', 'Usulan': 'Range', });
lyr_Waterfront_City_9.set('fieldImages', {'Id': 'Range', });
lyr_JangkauanMenujuKlinikApotekPraktek_Dokter_10.set('fieldImages', {'Name': 'TextEdit', 'KL_AP_PDOK': '', });
lyr_JangkauanMenujuFasilitasKesehatan_11.set('fieldImages', {'Name': 'TextEdit', 'KESEHTAN': '', });
lyr_WaktuTempuhMenitMenujuBandara_12.set('fieldImages', {'ObjectID': 'TextEdit', 'FacilityID': 'TextEdit', 'Name': 'TextEdit', 'FromBreak': 'TextEdit', 'ToBreak': 'TextEdit', });
lyr_SMCA_WP_13.set('fieldImages', {'OBJECTID_1': '', 'WADMKC': 'TextEdit', 'WADMKC_1': '', 'WADMKD': 'TextEdit', 'LUAS_KM2': '', 'EQ_Index': '', 'B_ekologi': '', 'Nilai': 'TextEdit', 'b_kwhutan': '', 'raw_longso': 'TextEdit', 'B_longsor': '', 'rwn_tsunam': 'TextEdit', 'B_tsunami': '', 'Singkatan': 'TextEdit', 'lereng': 'TextEdit', 'b_lereng': '', 'raw_banjir': 'TextEdit', 'b_banjir': '', 'SKOR': 'TextEdit', 'SMCA': '', 'SK_SMCA4VA': '', 'SMCA4VA': '', });
lyr_kepadatanPenduduk_14.set('fieldImages', {'OBJECTID': 'TextEdit', 'Id': 'TextEdit', 'gridcode': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_HakAtasTanah_15.set('fieldImages', {'ID': 'TextEdit', 'WILAYAHID': 'TextEdit', 'WILAYAHIND': 'TextEdit', 'KODEWILAYA': 'TextEdit', 'KECAMATAN': 'TextEdit', 'KELURAHAN': 'TextEdit', 'TIPEHAK': 'TextEdit', 'TIPEPRODUK': 'TextEdit', 'TAHUN': 'TextEdit', 'NIB': 'TextEdit', 'LUASTERTUL': 'TextEdit', 'LUASPETA': 'TextEdit', 'SUMBERGEOM': 'TextEdit', 'ALATUKUR': 'TextEdit', 'METODUKUR': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_POLARUANG_RTRW_KAB_16.set('fieldImages', {'NAMOBJ': 'TextEdit', 'WADMKK': 'TextEdit', 'WADMKC': 'TextEdit', 'KKOP_1': 'TextEdit', 'KP2B_2': 'TextEdit', 'KRB_03': 'TextEdit', 'CAGBUD': 'TextEdit', 'RESAIR': 'TextEdit', 'KSMPDN': 'TextEdit', 'HANKAM': 'TextEdit', 'KKARST': 'TextEdit', 'PTBGMB': 'TextEdit', 'MGRSAT': 'TextEdit', 'RDBUMI': 'TextEdit', 'REMARK': 'TextEdit', 'LUASHA': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', });
lyr_POLARUANG_RTRW_PROV_MALUKU_17.set('fieldImages', {'Id': 'TextEdit', 'Ket': 'TextEdit', });
lyr_CekunganAirTanah_18.set('fieldImages', {'LAYER': 'TextEdit', 'cat_ntt': 'TextEdit', 'NAMA_CAT': 'TextEdit', 'nilai_cat': 'TextEdit', });
lyr_GEOLOGI_LITOLOGI_19.set('fieldImages', {'OBJECTID': 'TextEdit', 'fcode': 'TextEdit', 'simobj': 'TextEdit', 'namobj': 'TextEdit', 'umurobj': 'TextEdit', 'remark': 'TextEdit', 'metadata': 'TextEdit', 'srs_id': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_BatasDAS_20.set('fieldImages', {'OBJECTID_1': 'TextEdit', 'objectid': 'TextEdit', 'kode_das': 'TextEdit', 'luas_das': 'TextEdit', 'keliling_m': 'TextEdit', 'nama_das': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'kab': 'TextEdit', });
lyr_ProduktivitasAkuifer_21.set('fieldImages', {'OBJECTID': 'TextEdit', 'sys_aq': 'TextEdit', 'prod': 'TextEdit', 'keterusan': 'TextEdit', 'debit': 'TextEdit', 'debit_min': 'TextEdit', 'debit_max': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_JENISTANAH_22.set('fieldImages', {'OBJECTID': 'TextEdit', 'kd_sl': 'TextEdit', 'spt': 'TextEdit', 'jntnh1': 'TextEdit', 'jntnh2': 'TextEdit', 'jntnh3': 'TextEdit', 'remark': 'TextEdit', 'tahun': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_KawasanHutan_23.set('fieldImages', {'KODEPROV': 'TextEdit', 'FUNGSIKWS': 'TextEdit', 'NOSKPNJK': 'TextEdit', 'TGLSKPNJK': 'DateTime', 'LSKPNJK': 'TextEdit', 'KET': 'TextEdit', 'FUNGSI_ID': 'TextEdit', 'Kode_angka': 'TextEdit', 'Nilai': 'TextEdit', 'Singkatan': 'TextEdit', });
lyr_RawanBanjir_24.set('fieldImages', {'Id': 'TextEdit', 'gridcode': 'TextEdit', 'Shape_Le_1': 'TextEdit', 'Shape_Ar_1': 'TextEdit', 'raw_banjir': 'TextEdit', 'b_banjir': 'TextEdit', });
lyr_RawanGempaBumi_25.set('fieldImages', {'OBJECTID': 'TextEdit', 'Id': 'TextEdit', 'gridcode': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'RAWAN_GEMP': 'TextEdit', });
lyr_RawanLongsor_26.set('fieldImages', {'OBJECTID': 'TextEdit', 'gridcode': 'TextEdit', 'raw_longso': 'TextEdit', 'B_longsor': 'TextEdit', });
lyr_RawanTsunami_27.set('fieldImages', {'gridcode': 'TextEdit', 'Shape_Le_1': 'TextEdit', 'Shape_Ar_1': 'TextEdit', 'rwn_tsunam': 'TextEdit', 'B_tsunami': 'TextEdit', });
lyr_Lereng_28.set('fieldImages', {'gridcode': 'TextEdit', 'lereng': 'TextEdit', 'b_lereng': 'TextEdit', });
lyr_Mangrove_29.set('fieldImages', {'kttj': 'TextEdit', 'thnbuat': 'TextEdit', 'ints': 'TextEdit', 'bpdashl': 'TextEdit', 'kab': 'TextEdit', 'prov': 'TextEdit', 'lsmgr': 'TextEdit', 'smbdt': 'TextEdit', 'fgsfrf': 'TextEdit', 'remark': 'TextEdit', 'shape_Area': 'TextEdit', 'shape_Leng': 'TextEdit', });
lyr_KAWASANKUMUH_30.set('fieldImages', {'Id': 'Range', 'LOKASI': 'TextEdit', 'LUAS_HA': 'TextEdit', 'SKEMA_DANA': 'TextEdit', 'Prioritas': 'TextEdit', 'instansi': 'TextEdit', });
lyr_Runoff_31.set('fieldImages', {'LAYER': 'TextEdit', 'ELEVATION': 'TextEdit', 'STREAM_ID': 'Range', 'IN_FLOW': 'Range', 'OUT_FLOW': 'Range', 'DRAIN_AREA': 'TextEdit', });
lyr_STRUKTUR_GEOLOGI_32.set('fieldImages', {'objectid_1': '', 'objectid': '', 'fcode': '', 'namobj': '', 'klsstr': '', 'remark': '', 'metadata': '', 'srs_id': '', 'st_length_': '', 'st_length1': '', });
lyr_PolaRuangSaumalakiLarat_33.set('fieldImages', {'OBJECTID': 'TextEdit', 'NAMOBJ': 'TextEdit', 'NAMZON': 'TextEdit', 'KODZON': 'ValueMap', 'NAMSZN': 'ValueMap', 'KODSZN': 'ValueMap', 'JNSRPR': 'ValueMap', 'KODEWP': 'TextEdit', 'KODSWP': 'TextEdit', 'KODBLK': 'TextEdit', 'KODSBL': 'ValueMap', 'WADMPR': 'TextEdit', 'WADMKK': 'TextEdit', 'WADMKC': 'TextEdit', 'WADMKD': 'TextEdit', 'KKOP_1': 'ValueMap', 'LP2B_2': 'ValueMap', 'KRB_03': 'ValueMap', 'TOD_04': 'ValueMap', 'TEB_05': 'ValueMap', 'PUSLIT': 'ValueMap', 'CAGBUD': 'ValueMap', 'RESAIR': 'ValueMap', 'KSMPDN': 'ValueMap', 'HANKAM': 'ValueMap', 'KKARST': 'ValueMap', 'PTBGMB': 'ValueMap', 'MGRSAT': 'ValueMap', 'RDBUMI': 'ValueMap', 'TPZ_00': 'TextEdit', 'REMARK': 'TextEdit', 'LUASHA': 'TextEdit', 'KEGIATAN': 'TextEdit', 'Shape_Length': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_polaruang_lermatang_34.set('fieldImages', {'OBJECTID': 'TextEdit', 'NAMOBJ': 'TextEdit', 'NAMZON': 'TextEdit', 'KODZON': 'TextEdit', 'NAMSZN': 'TextEdit', 'KODSZN': 'TextEdit', 'JNSRPR': 'TextEdit', 'KODEWP': 'TextEdit', 'KODSWP': 'TextEdit', 'KODBLK': 'TextEdit', 'KODSBL': 'TextEdit', 'WADMPR': 'TextEdit', 'WADMKK': 'TextEdit', 'WADMKC': 'TextEdit', 'WADMKD': 'TextEdit', 'KKOP_1': 'TextEdit', 'LP2B_2': 'TextEdit', 'KRB_03': 'TextEdit', 'TOD_04': 'TextEdit', 'TEB_05': 'TextEdit', 'PUSLIT': 'TextEdit', 'CAGBUD': 'TextEdit', 'RESAIR': 'TextEdit', 'KSMPDN': 'TextEdit', 'HANKAM': 'TextEdit', 'KKARST': 'TextEdit', 'PTBGMB': 'TextEdit', 'MGRSAT': 'TextEdit', 'RDBUMI': 'TextEdit', 'TPZ_00': 'TextEdit', 'REMARK': 'TextEdit', 'LUASHA': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'kode': 'TextEdit', });
lyr_blok_35.set('fieldImages', {'OBJECTID': 'TextEdit', 'WP': 'TextEdit', 'SWP': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'luas': 'TextEdit', 'blok': 'TextEdit', 'BSWP': 'TextEdit', 'BWP': 'TextEdit', });
lyr_BATASDESA_36.set('fieldImages', {'WADMKC': 'TextEdit', 'WADMKD': 'TextEdit', 'LUAS_KM2': 'TextEdit', 'ha': '', });
lyr_JaringanAirMinum_37.set('fieldImages', {'OBJECTID': 'TextEdit', 'NAMOBJ': 'TextEdit', 'ORDE01': 'ValueMap', 'ORDE02': 'ValueMap', 'JNSRSR': 'ValueMap', 'STSJRN': 'ValueMap', 'WADMPR': 'TextEdit', 'WADMKK': 'TextEdit', 'REMARK': 'TextEdit', 'SBDATA': 'TextEdit', 'Shape_Length': 'TextEdit', });
lyr_InfrastrukturAirMinum_38.set('fieldImages', {'OBJECTID': 'TextEdit', 'NAMOBJ': 'TextEdit', 'ORDE01': 'ValueMap', 'ORDE02': 'ValueMap', 'JNSRSR': 'ValueMap', 'STSJRN': 'ValueMap', 'WADMPR': 'TextEdit', 'WADMKK': 'TextEdit', 'REMARK': 'TextEdit', 'SBDATA': 'TextEdit', });
lyr_JaringanAirLimbah_39.set('fieldImages', {'OBJECTID': 'TextEdit', 'NAMOBJ': 'TextEdit', 'ORDE01': 'ValueMap', 'ORDE02': 'ValueMap', 'JNSRSR': 'ValueMap', 'STSJRN': 'ValueMap', 'WADMPR': 'TextEdit', 'WADMKK': 'TextEdit', 'REMARK': 'TextEdit', 'SBDATA': 'TextEdit', 'Shape_Length': 'TextEdit', });
lyr_InfrastrukturAirLimbah_40.set('fieldImages', {'OBJECTID': 'TextEdit', 'NAMOBJ': 'TextEdit', 'ORDE01': 'ValueMap', 'ORDE02': 'ValueMap', 'JNSRSR': 'ValueMap', 'STSJRN': 'ValueMap', 'WADMPR': 'TextEdit', 'WADMKK': 'TextEdit', 'REMARK': 'TextEdit', 'SBDATA': 'TextEdit', });
lyr_JaringanDrainase_41.set('fieldImages', {'OBJECTID': 'TextEdit', 'NAMOBJ': 'TextEdit', 'ORDE01': 'ValueMap', 'ORDE02': 'ValueMap', 'JNSRSR': 'ValueMap', 'STSJRN': 'ValueMap', 'WADMPR': 'TextEdit', 'WADMKK': 'TextEdit', 'REMARK': 'TextEdit', 'SBDATA': 'TextEdit', 'Shape_Length': 'TextEdit', });
lyr_JaringanEnergi_42.set('fieldImages', {'OBJECTID': 'TextEdit', 'NAMOBJ': 'TextEdit', 'ORDE01': 'ValueMap', 'ORDE02': 'ValueMap', 'JNSRSR': 'ValueMap', 'STSJRN': 'ValueMap', 'WADMPR': 'TextEdit', 'WADMKK': 'TextEdit', 'REMARK': 'TextEdit', 'SBDATA': 'TextEdit', 'Shape_Length': 'TextEdit', });
lyr_InfrastrukturEnergi_43.set('fieldImages', {'OBJECTID': 'TextEdit', 'NAMOBJ': 'TextEdit', 'ORDE01': 'ValueMap', 'ORDE02': 'ValueMap', 'JNSRSR': 'ValueMap', 'STSJRN': 'ValueMap', 'WADMPR': 'TextEdit', 'WADMKK': 'TextEdit', 'REMARK': 'TextEdit', 'SBDATA': 'TextEdit', });
lyr_InfrastrukturPersampahan_44.set('fieldImages', {'OBJECTID': 'TextEdit', 'NAMOBJ': 'TextEdit', 'ORDE01': 'ValueMap', 'ORDE02': 'ValueMap', 'JNSRSR': 'ValueMap', 'STSJRN': 'ValueMap', 'WADMPR': 'TextEdit', 'WADMKK': 'TextEdit', 'REMARK': 'TextEdit', 'SBDATA': 'TextEdit', });
lyr_JaringanPrasaranLainnya_45.set('fieldImages', {'OBJECTID': 'TextEdit', 'NAMOBJ': 'TextEdit', 'ORDE01': 'ValueMap', 'ORDE02': 'ValueMap', 'JNSRSR': 'ValueMap', 'STSJRN': 'ValueMap', 'WADMPR': 'TextEdit', 'WADMKK': 'TextEdit', 'REMARK': 'TextEdit', 'SBDATA': 'TextEdit', 'Shape_Length': 'TextEdit', });
lyr_InfrastrukturPrasaranLainnya_46.set('fieldImages', {'OBJECTID': 'TextEdit', 'NAMOBJ': 'TextEdit', 'ORDE01': 'ValueMap', 'ORDE02': 'ValueMap', 'JNSRSR': 'ValueMap', 'STSJRN': 'ValueMap', 'WADMPR': 'TextEdit', 'WADMKK': 'TextEdit', 'REMARK': 'TextEdit', 'SBDATA': 'TextEdit', });
lyr_InfrastrukturTelekomunikasi_47.set('fieldImages', {'OBJECTID': 'TextEdit', 'NAMOBJ': 'TextEdit', 'ORDE01': 'ValueMap', 'ORDE02': 'ValueMap', 'JNSRSR': 'ValueMap', 'STSJRN': 'ValueMap', 'WADMPR': 'TextEdit', 'WADMKK': 'TextEdit', 'REMARK': 'TextEdit', 'SBDATA': 'TextEdit', });
lyr_JaringanTelekomunikasi_48.set('fieldImages', {'OBJECTID': 'TextEdit', 'NAMOBJ': 'TextEdit', 'ORDE01': 'ValueMap', 'ORDE02': 'ValueMap', 'JNSRSR': 'ValueMap', 'STSJRN': 'ValueMap', 'WADMPR': 'TextEdit', 'WADMKK': 'TextEdit', 'REMARK': 'TextEdit', 'SBDATA': 'TextEdit', 'Shape_Length': 'TextEdit', });
lyr_JaringanTransportasi_49.set('fieldImages', {'OBJECTID': 'TextEdit', 'NAMOBJ': 'TextEdit', 'ORDE01': 'ValueMap', 'ORDE02': 'ValueMap', 'JNSRSR': 'ValueMap', 'STSJRN': 'ValueMap', 'WADMPR': 'TextEdit', 'WADMKK': 'TextEdit', 'REMARK': 'TextEdit', 'SBDATA': 'TextEdit', 'Shape_Length': 'TextEdit', });
lyr_InfrastrukturTransportasi_50.set('fieldImages', {'OBJECTID': 'TextEdit', 'NAMOBJ': 'TextEdit', 'ORDE01': 'ValueMap', 'ORDE02': 'ValueMap', 'JNSRSR': 'ValueMap', 'STSJRN': 'ValueMap', 'WADMPR': 'TextEdit', 'WADMKK': 'TextEdit', 'REMARK': 'TextEdit', 'SBDATA': 'TextEdit', });
lyr_PusatPelayanan_51.set('fieldImages', {'OBJECTID': 'TextEdit', 'NAMOBJ': 'TextEdit', 'ORDE01': 'ValueMap', 'ORDE02': 'ValueMap', 'JNSRSR': 'ValueMap', 'STSJRN': 'ValueMap', 'WADMPR': 'TextEdit', 'WADMKK': 'TextEdit', 'REMARK': 'TextEdit', 'SBDATA': 'TextEdit', });
lyr_TOPONIMI_52.set('fieldImages', {'OBJECTID': 'TextEdit', 'NAME': 'TextEdit', 'FOTO': 'ExternalResource', 'TOPONIM': 'TextEdit', 'NO': 'Range', 'KEGIATAN_O': 'TextEdit', 'JENIS': 'TextEdit', 'JENIS_UTAM': 'TextEdit', 'ATTACHMENT': 'TextEdit', });
lyr_ANALISISSIMPANGANPOLARUANG_2.set('fieldLabels', {'FID_batas_': 'inline label', 'WADMKC': 'inline label', 'WADMKD': 'inline label', 'WADMKK': 'inline label', 'UUPP': 'inline label', 'LUAS': 'inline label', 'Shape_Leng': 'inline label', 'Shape_Area': 'inline label', 'NAMOBJ_1': 'inline label', 'REMARK_1': 'inline label', 'status': 'inline label', 'sesuai': 'inline label', 'RTRW_RECL': 'inline label', 'LANDUS_REC': 'inline label', 'PERUBAHAN': 'inline label', });
lyr_JangkauanMenujuSDSederajat_3.set('fieldLabels', {'Name': 'inline label', 'SD': 'inline label', });
lyr_JangkauanMenujuSMPSederajat_4.set('fieldLabels', {'Name': 'inline label', 'SMP': 'no label', });
lyr_JangkauanMenujuSMASederajat_5.set('fieldLabels', {'Name': 'inline label', 'SMA': 'no label', });
lyr_JangkauanMenujuPendidikanTinggi_6.set('fieldLabels', {'Name': 'inline label', 'UNIVERSITA': 'no label', });
lyr_UsulanPLTMGMasela_7.set('fieldLabels', {'Id': 'inline label', 'Keterangan': 'inline label', 'luas_ha': 'inline label', 'Usulan': 'no label', });
lyr_Waterfront_City_9.set('fieldLabels', {'Id': 'inline label', });
lyr_JangkauanMenujuKlinikApotekPraktek_Dokter_10.set('fieldLabels', {'Name': 'inline label', 'KL_AP_PDOK': 'no label', });
lyr_JangkauanMenujuFasilitasKesehatan_11.set('fieldLabels', {'Name': 'header label', 'KESEHTAN': 'no label', });
lyr_WaktuTempuhMenitMenujuBandara_12.set('fieldLabels', {'ObjectID': 'inline label', 'FacilityID': 'inline label', 'Name': 'inline label', 'FromBreak': 'inline label', 'ToBreak': 'inline label', });
lyr_SMCA_WP_13.set('fieldLabels', {'OBJECTID_1': 'no label', 'WADMKC': 'inline label', 'WADMKC_1': 'no label', 'WADMKD': 'inline label', 'LUAS_KM2': 'no label', 'EQ_Index': 'no label', 'B_ekologi': 'no label', 'Nilai': 'inline label', 'b_kwhutan': 'no label', 'raw_longso': 'inline label', 'B_longsor': 'no label', 'rwn_tsunam': 'inline label', 'B_tsunami': 'no label', 'Singkatan': 'inline label', 'lereng': 'inline label', 'b_lereng': 'no label', 'raw_banjir': 'inline label', 'b_banjir': 'no label', 'SKOR': 'inline label', 'SMCA': 'no label', 'SK_SMCA4VA': 'no label', 'SMCA4VA': 'no label', });
lyr_kepadatanPenduduk_14.set('fieldLabels', {'OBJECTID': 'inline label', 'Id': 'inline label', 'gridcode': 'inline label', 'Shape_Leng': 'inline label', 'Shape_Area': 'inline label', });
lyr_HakAtasTanah_15.set('fieldLabels', {'ID': 'inline label', 'WILAYAHID': 'inline label', 'WILAYAHIND': 'inline label', 'KODEWILAYA': 'inline label', 'KECAMATAN': 'inline label', 'KELURAHAN': 'inline label', 'TIPEHAK': 'inline label', 'TIPEPRODUK': 'inline label', 'TAHUN': 'inline label', 'NIB': 'inline label', 'LUASTERTUL': 'inline label', 'LUASPETA': 'inline label', 'SUMBERGEOM': 'inline label', 'ALATUKUR': 'inline label', 'METODUKUR': 'inline label', 'Shape_Leng': 'inline label', 'Shape_Area': 'inline label', });
lyr_POLARUANG_RTRW_KAB_16.set('fieldLabels', {'NAMOBJ': 'inline label', 'WADMKK': 'inline label', 'WADMKC': 'inline label', 'KKOP_1': 'inline label', 'KP2B_2': 'inline label', 'KRB_03': 'inline label', 'CAGBUD': 'inline label', 'RESAIR': 'inline label', 'KSMPDN': 'inline label', 'HANKAM': 'inline label', 'KKARST': 'inline label', 'PTBGMB': 'inline label', 'MGRSAT': 'inline label', 'RDBUMI': 'inline label', 'REMARK': 'inline label', 'LUASHA': 'inline label', 'SHAPE_Leng': 'inline label', 'SHAPE_Area': 'inline label', });
lyr_POLARUANG_RTRW_PROV_MALUKU_17.set('fieldLabels', {'Id': 'inline label', 'Ket': 'inline label', });
lyr_CekunganAirTanah_18.set('fieldLabels', {'LAYER': 'inline label', 'cat_ntt': 'inline label', 'NAMA_CAT': 'inline label', 'nilai_cat': 'inline label', });
lyr_GEOLOGI_LITOLOGI_19.set('fieldLabels', {'OBJECTID': 'inline label', 'fcode': 'inline label', 'simobj': 'inline label', 'namobj': 'inline label', 'umurobj': 'inline label', 'remark': 'inline label', 'metadata': 'inline label', 'srs_id': 'inline label', 'Shape_Leng': 'inline label', 'Shape_Area': 'inline label', });
lyr_BatasDAS_20.set('fieldLabels', {'OBJECTID_1': 'inline label', 'objectid': 'inline label', 'kode_das': 'inline label', 'luas_das': 'inline label', 'keliling_m': 'inline label', 'nama_das': 'inline label', 'Shape_Leng': 'inline label', 'Shape_Area': 'inline label', 'kab': 'inline label', });
lyr_ProduktivitasAkuifer_21.set('fieldLabels', {'OBJECTID': 'inline label', 'sys_aq': 'inline label', 'prod': 'inline label', 'keterusan': 'inline label', 'debit': 'inline label', 'debit_min': 'inline label', 'debit_max': 'inline label', 'Shape_Leng': 'inline label', 'Shape_Area': 'inline label', });
lyr_JENISTANAH_22.set('fieldLabels', {'OBJECTID': 'inline label', 'kd_sl': 'inline label', 'spt': 'inline label', 'jntnh1': 'inline label', 'jntnh2': 'inline label', 'jntnh3': 'inline label', 'remark': 'inline label', 'tahun': 'inline label', 'Shape_Leng': 'inline label', 'Shape_Area': 'inline label', });
lyr_KawasanHutan_23.set('fieldLabels', {'KODEPROV': 'inline label', 'FUNGSIKWS': 'inline label', 'NOSKPNJK': 'inline label', 'TGLSKPNJK': 'inline label', 'LSKPNJK': 'inline label', 'KET': 'inline label', 'FUNGSI_ID': 'inline label', 'Kode_angka': 'inline label', 'Nilai': 'inline label', 'Singkatan': 'inline label', });
lyr_RawanBanjir_24.set('fieldLabels', {'Id': 'inline label', 'gridcode': 'inline label', 'Shape_Le_1': 'inline label', 'Shape_Ar_1': 'inline label', 'raw_banjir': 'inline label', 'b_banjir': 'inline label', });
lyr_RawanGempaBumi_25.set('fieldLabels', {'OBJECTID': 'inline label', 'Id': 'inline label', 'gridcode': 'inline label', 'Shape_Leng': 'inline label', 'Shape_Area': 'inline label', 'RAWAN_GEMP': 'inline label', });
lyr_RawanLongsor_26.set('fieldLabels', {'OBJECTID': 'inline label', 'gridcode': 'inline label', 'raw_longso': 'inline label', 'B_longsor': 'inline label', });
lyr_RawanTsunami_27.set('fieldLabels', {'gridcode': 'inline label', 'Shape_Le_1': 'inline label', 'Shape_Ar_1': 'inline label', 'rwn_tsunam': 'inline label', 'B_tsunami': 'inline label', });
lyr_Lereng_28.set('fieldLabels', {'gridcode': 'inline label', 'lereng': 'inline label', 'b_lereng': 'inline label', });
lyr_Mangrove_29.set('fieldLabels', {'kttj': 'inline label', 'thnbuat': 'inline label', 'ints': 'inline label', 'bpdashl': 'inline label', 'kab': 'inline label', 'prov': 'inline label', 'lsmgr': 'inline label', 'smbdt': 'inline label', 'fgsfrf': 'inline label', 'remark': 'inline label', 'shape_Area': 'inline label', 'shape_Leng': 'inline label', });
lyr_KAWASANKUMUH_30.set('fieldLabels', {'Id': 'inline label', 'LOKASI': 'inline label', 'LUAS_HA': 'inline label', 'SKEMA_DANA': 'inline label', 'Prioritas': 'inline label', 'instansi': 'inline label', });
lyr_Runoff_31.set('fieldLabels', {'LAYER': 'inline label', 'ELEVATION': 'inline label', 'STREAM_ID': 'inline label', 'IN_FLOW': 'inline label', 'OUT_FLOW': 'inline label', 'DRAIN_AREA': 'inline label', });
lyr_STRUKTUR_GEOLOGI_32.set('fieldLabels', {'objectid_1': 'inline label', 'objectid': 'inline label', 'fcode': 'inline label', 'namobj': 'inline label', 'klsstr': 'inline label', 'remark': 'inline label', 'metadata': 'inline label', 'srs_id': 'inline label', 'st_length_': 'inline label', 'st_length1': 'inline label', });
lyr_PolaRuangSaumalakiLarat_33.set('fieldLabels', {'OBJECTID': 'inline label', 'NAMOBJ': 'inline label', 'NAMZON': 'inline label', 'KODZON': 'inline label', 'NAMSZN': 'inline label', 'KODSZN': 'inline label', 'JNSRPR': 'inline label', 'KODEWP': 'inline label', 'KODSWP': 'inline label', 'KODBLK': 'inline label', 'KODSBL': 'inline label', 'WADMPR': 'inline label', 'WADMKK': 'inline label', 'WADMKC': 'inline label', 'WADMKD': 'inline label', 'KKOP_1': 'inline label', 'LP2B_2': 'inline label', 'KRB_03': 'inline label', 'TOD_04': 'inline label', 'TEB_05': 'inline label', 'PUSLIT': 'inline label', 'CAGBUD': 'inline label', 'RESAIR': 'inline label', 'KSMPDN': 'inline label', 'HANKAM': 'inline label', 'KKARST': 'inline label', 'PTBGMB': 'inline label', 'MGRSAT': 'inline label', 'RDBUMI': 'inline label', 'TPZ_00': 'inline label', 'REMARK': 'inline label', 'LUASHA': 'inline label', 'KEGIATAN': 'inline label', 'Shape_Length': 'inline label', 'Shape_Area': 'inline label', });
lyr_polaruang_lermatang_34.set('fieldLabels', {'OBJECTID': 'inline label', 'NAMOBJ': 'inline label', 'NAMZON': 'inline label', 'KODZON': 'inline label', 'NAMSZN': 'inline label', 'KODSZN': 'inline label', 'JNSRPR': 'inline label', 'KODEWP': 'inline label', 'KODSWP': 'inline label', 'KODBLK': 'inline label', 'KODSBL': 'inline label', 'WADMPR': 'inline label', 'WADMKK': 'inline label', 'WADMKC': 'inline label', 'WADMKD': 'inline label', 'KKOP_1': 'inline label', 'LP2B_2': 'inline label', 'KRB_03': 'inline label', 'TOD_04': 'inline label', 'TEB_05': 'inline label', 'PUSLIT': 'inline label', 'CAGBUD': 'inline label', 'RESAIR': 'inline label', 'KSMPDN': 'inline label', 'HANKAM': 'inline label', 'KKARST': 'inline label', 'PTBGMB': 'inline label', 'MGRSAT': 'inline label', 'RDBUMI': 'inline label', 'TPZ_00': 'inline label', 'REMARK': 'inline label', 'LUASHA': 'inline label', 'Shape_Leng': 'inline label', 'Shape_Area': 'inline label', 'kode': 'inline label', });
lyr_blok_35.set('fieldLabels', {'OBJECTID': 'inline label', 'WP': 'inline label', 'SWP': 'inline label', 'Shape_Leng': 'inline label', 'Shape_Area': 'inline label', 'luas': 'inline label', 'blok': 'inline label', 'BSWP': 'inline label', 'BWP': 'inline label', });
lyr_BATASDESA_36.set('fieldLabels', {'WADMKC': 'inline label', 'WADMKD': 'inline label', 'LUAS_KM2': 'inline label', 'ha': 'inline label', });
lyr_JaringanAirMinum_37.set('fieldLabels', {'OBJECTID': 'inline label', 'NAMOBJ': 'inline label', 'ORDE01': 'inline label', 'ORDE02': 'inline label', 'JNSRSR': 'inline label', 'STSJRN': 'inline label', 'WADMPR': 'inline label', 'WADMKK': 'inline label', 'REMARK': 'inline label', 'SBDATA': 'inline label', 'Shape_Length': 'inline label', });
lyr_InfrastrukturAirMinum_38.set('fieldLabels', {'OBJECTID': 'inline label', 'NAMOBJ': 'inline label', 'ORDE01': 'inline label', 'ORDE02': 'inline label', 'JNSRSR': 'inline label', 'STSJRN': 'inline label', 'WADMPR': 'inline label', 'WADMKK': 'inline label', 'REMARK': 'inline label', 'SBDATA': 'inline label', });
lyr_JaringanAirLimbah_39.set('fieldLabels', {'OBJECTID': 'inline label', 'NAMOBJ': 'inline label', 'ORDE01': 'inline label', 'ORDE02': 'inline label', 'JNSRSR': 'inline label', 'STSJRN': 'inline label', 'WADMPR': 'inline label', 'WADMKK': 'inline label', 'REMARK': 'inline label', 'SBDATA': 'inline label', 'Shape_Length': 'inline label', });
lyr_InfrastrukturAirLimbah_40.set('fieldLabels', {'OBJECTID': 'inline label', 'NAMOBJ': 'inline label', 'ORDE01': 'inline label', 'ORDE02': 'inline label', 'JNSRSR': 'inline label', 'STSJRN': 'inline label', 'WADMPR': 'inline label', 'WADMKK': 'inline label', 'REMARK': 'inline label', 'SBDATA': 'inline label', });
lyr_JaringanDrainase_41.set('fieldLabels', {'OBJECTID': 'inline label', 'NAMOBJ': 'inline label', 'ORDE01': 'inline label', 'ORDE02': 'inline label', 'JNSRSR': 'inline label', 'STSJRN': 'inline label', 'WADMPR': 'inline label', 'WADMKK': 'inline label', 'REMARK': 'inline label', 'SBDATA': 'inline label', 'Shape_Length': 'inline label', });
lyr_JaringanEnergi_42.set('fieldLabels', {'OBJECTID': 'inline label', 'NAMOBJ': 'inline label', 'ORDE01': 'inline label', 'ORDE02': 'inline label', 'JNSRSR': 'inline label', 'STSJRN': 'inline label', 'WADMPR': 'inline label', 'WADMKK': 'inline label', 'REMARK': 'inline label', 'SBDATA': 'inline label', 'Shape_Length': 'inline label', });
lyr_InfrastrukturEnergi_43.set('fieldLabels', {'OBJECTID': 'inline label', 'NAMOBJ': 'inline label', 'ORDE01': 'inline label', 'ORDE02': 'inline label', 'JNSRSR': 'inline label', 'STSJRN': 'inline label', 'WADMPR': 'inline label', 'WADMKK': 'inline label', 'REMARK': 'inline label', 'SBDATA': 'inline label', });
lyr_InfrastrukturPersampahan_44.set('fieldLabels', {'OBJECTID': 'inline label', 'NAMOBJ': 'inline label', 'ORDE01': 'inline label', 'ORDE02': 'inline label', 'JNSRSR': 'inline label', 'STSJRN': 'inline label', 'WADMPR': 'inline label', 'WADMKK': 'inline label', 'REMARK': 'inline label', 'SBDATA': 'inline label', });
lyr_JaringanPrasaranLainnya_45.set('fieldLabels', {'OBJECTID': 'inline label', 'NAMOBJ': 'inline label', 'ORDE01': 'inline label', 'ORDE02': 'inline label', 'JNSRSR': 'inline label', 'STSJRN': 'inline label', 'WADMPR': 'inline label', 'WADMKK': 'inline label', 'REMARK': 'inline label', 'SBDATA': 'inline label', 'Shape_Length': 'inline label', });
lyr_InfrastrukturPrasaranLainnya_46.set('fieldLabels', {'OBJECTID': 'inline label', 'NAMOBJ': 'inline label', 'ORDE01': 'inline label', 'ORDE02': 'inline label', 'JNSRSR': 'inline label', 'STSJRN': 'inline label', 'WADMPR': 'inline label', 'WADMKK': 'inline label', 'REMARK': 'inline label', 'SBDATA': 'inline label', });
lyr_InfrastrukturTelekomunikasi_47.set('fieldLabels', {'OBJECTID': 'inline label', 'NAMOBJ': 'inline label', 'ORDE01': 'inline label', 'ORDE02': 'inline label', 'JNSRSR': 'inline label', 'STSJRN': 'inline label', 'WADMPR': 'inline label', 'WADMKK': 'inline label', 'REMARK': 'inline label', 'SBDATA': 'inline label', });
lyr_JaringanTelekomunikasi_48.set('fieldLabels', {'OBJECTID': 'inline label', 'NAMOBJ': 'inline label', 'ORDE01': 'inline label', 'ORDE02': 'inline label', 'JNSRSR': 'inline label', 'STSJRN': 'inline label', 'WADMPR': 'inline label', 'WADMKK': 'inline label', 'REMARK': 'inline label', 'SBDATA': 'inline label', 'Shape_Length': 'inline label', });
lyr_JaringanTransportasi_49.set('fieldLabels', {'OBJECTID': 'inline label', 'NAMOBJ': 'inline label', 'ORDE01': 'inline label', 'ORDE02': 'inline label', 'JNSRSR': 'inline label', 'STSJRN': 'inline label', 'WADMPR': 'inline label', 'WADMKK': 'inline label', 'REMARK': 'inline label', 'SBDATA': 'inline label', 'Shape_Length': 'inline label', });
lyr_InfrastrukturTransportasi_50.set('fieldLabels', {'OBJECTID': 'inline label', 'NAMOBJ': 'inline label', 'ORDE01': 'inline label', 'ORDE02': 'inline label', 'JNSRSR': 'inline label', 'STSJRN': 'inline label', 'WADMPR': 'inline label', 'WADMKK': 'inline label', 'REMARK': 'inline label', 'SBDATA': 'inline label', });
lyr_PusatPelayanan_51.set('fieldLabels', {'OBJECTID': 'inline label', 'NAMOBJ': 'inline label', 'ORDE01': 'inline label', 'ORDE02': 'inline label', 'JNSRSR': 'inline label', 'STSJRN': 'inline label', 'WADMPR': 'inline label', 'WADMKK': 'inline label', 'REMARK': 'inline label', 'SBDATA': 'inline label', });
lyr_TOPONIMI_52.set('fieldLabels', {'OBJECTID': 'inline label', 'NAME': 'inline label', 'FOTO': 'inline label', 'TOPONIM': 'inline label', 'NO': 'inline label', 'KEGIATAN_O': 'inline label', 'JENIS': 'inline label', 'JENIS_UTAM': 'inline label', 'ATTACHMENT': 'inline label', });
lyr_TOPONIMI_52.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});


var layersList = [
new ol.layer.Group({
            title: 'Basemap',
            layers: [
lyr_GoogleSatellite_1,lyr_ESRISatellite_0,
]}),

new ol.layer.Group({
            title: 'Analisis Jangkauan',
            fold: 'close',
            layers: [
lyr_JangkauanMenujuSDSederajat_3,lyr_JangkauanMenujuSMPSederajat_4,lyr_JangkauanMenujuSMASederajat_5,lyr_JangkauanMenujuPendidikanTinggi_6,lyr_JangkauanMenujuKlinikApotekPraktek_Dokter_10,lyr_JangkauanMenujuFasilitasKesehatan_11,
]}),

new ol.layer.Group({
            title: 'Rencana Tata Ruang',
            fold: 'close',
            layers: [
lyr_POLARUANG_RTRW_KAB_16,lyr_POLARUANG_RTRW_PROV_MALUKU_17,
]}),

new ol.layer.Group({
            title: 'Analisis Lainnya',
            fold: 'close',
            layers: [
lyr_ANALISISSIMPANGANPOLARUANG_2,lyr_SMCA_WP_13,lyr_kepadatanPenduduk_14,lyr_Runoff_31,
]}),

new ol.layer.Group({
            title: 'Status Lahan/Kawasan',
            fold: 'close',
            layers: [
lyr_KAWASANKUMUH_30,lyr_HakAtasTanah_15,lyr_KawasanHutan_23,lyr_Mangrove_29,
]}),

new ol.layer.Group({
            title: 'Kebencanaan',
            fold: 'close',
            layers: [
lyr_RawanBanjir_24, lyr_RawanGempaBumi_25, lyr_RawanTsunami_27,lyr_RawanLongsor_26,
]}),


new ol.layer.Group({
            title: 'Fisik Wilayah',
            fold: 'close',
            layers: [
lyr_CekunganAirTanah_18, lyr_GEOLOGI_LITOLOGI_19, lyr_STRUKTUR_GEOLOGI_32, lyr_BatasDAS_20, lyr_ProduktivitasAkuifer_21, lyr_JENISTANAH_22, lyr_Lereng_28, 
]}),

new ol.layer.Group({
            title: 'Usulan Lokasi',
            fold: 'close',
            layers: [
lyr_UsulanPLTMGMasela_7,lyr_Waterfront_City_9,lyr_KonsepPenataan_8,
]}),

new ol.layer.Group({
            title: 'Rencana Pola Ruang Lermatang',
            fold: 'close',
            layers: [
lyr_polaruang_lermatang_34,
]}),

new ol.layer.Group({
            title: 'Rencana Pola Ruang WP Saumlaki Larat',
            fold: 'close',
            layers: [
lyr_PolaRuangSaumalakiLarat_33,
]}),


new ol.layer.Group({
            title: 'Rencana Struktur Ruang Air Minum',
            fold: 'close',
            layers: [
lyr_JaringanAirMinum_37, lyr_InfrastrukturAirMinum_38,
]}),


new ol.layer.Group({
            title: 'Rencana Struktur Ruang Limbah',
            fold: 'close',
            layers: [
lyr_JaringanAirLimbah_39,lyr_InfrastrukturAirLimbah_40,
]}),

new ol.layer.Group({
            title: 'Rencana Struktur Ruang Drainase',
            fold: 'close',
            layers: [
lyr_JaringanDrainase_41,
]}),

new ol.layer.Group({
            title: 'Rencana Struktur Ruang Energi',
            fold: 'close',
            layers: [
lyr_JaringanEnergi_42,lyr_InfrastrukturEnergi_43,
]}),

new ol.layer.Group({
            title: 'Rencana Struktur Ruang Persampahan',
            fold: 'close',
            layers: [
lyr_InfrastrukturPersampahan_44,
]}),

new ol.layer.Group({
            title: 'Rencana Struktur Ruang Prasarana Lainnya',
            fold: 'close',
            layers: [
lyr_JaringanPrasaranLainnya_45,lyr_InfrastrukturPrasaranLainnya_46,
]}),

new ol.layer.Group({
            title: 'Rencana Struktur Ruang Telekomunikasi',
            fold: 'close',
            layers: [
lyr_InfrastrukturTelekomunikasi_47,lyr_JaringanTelekomunikasi_48,
]}),

new ol.layer.Group({
            title: 'Rencana Struktur Ruang Transportasi',
            fold: 'close',
            layers: [
lyr_JaringanTransportasi_49,lyr_InfrastrukturTransportasi_50,
]}),

new ol.layer.Group({
            title: 'Pusat Pelayanan',
            fold: 'close',
            layers: [
lyr_PusatPelayanan_51,
]}),

new ol.layer.Group({
            title: 'Peta Dasar',
            fold: 'open',
            layers: [
lyr_BATASDESA_36,lyr_TOPONIMI_52,lyr_blok_35,
]}),
];