ol.proj.proj4.register(proj4);
ol.proj.get("EPSG:2056").setExtent([2536811.044714, 1152002.268511, 2538445.727871, 1153947.272687]);
var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_WHGFinal2_1 = new ol.format.GeoJSON();
var features_WHGFinal2_1 = format_WHGFinal2_1.readFeatures(json_WHGFinal2_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:2056'});
var jsonSource_WHGFinal2_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_WHGFinal2_1.addFeatures(features_WHGFinal2_1);
var lyr_WHGFinal2_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_WHGFinal2_1, 
                style: style_WHGFinal2_1,
                interactive: true,
    title: 'WHGFinal2<br />\
    <img src="styles/legend/WHGFinal2_1_0.png" /> house_[0;1920]<br />\
    <img src="styles/legend/WHGFinal2_1_1.png" /> house_[1920;1945]<br />\
    <img src="styles/legend/WHGFinal2_1_2.png" /> house_[1945;1960]<br />\
    <img src="styles/legend/WHGFinal2_1_3.png" /> house_[1960;1980]<br />\
    <img src="styles/legend/WHGFinal2_1_4.png" /> house_[1980;1990]<br />\
    <img src="styles/legend/WHGFinal2_1_5.png" /> house_[1990;2015]<br />\
    <img src="styles/legend/WHGFinal2_1_6.png" /> house_[2015;2022]<br />'
        });

lyr_OpenStreetMap_0.setVisible(true);lyr_WHGFinal2_1.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_WHGFinal2_1];
lyr_WHGFinal2_1.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'DKM_UUID': 'DKM_UUID', 'Symbol': 'Symbol', 'Shape_Length': 'Shape_Length', 'Shape_Area': 'Shape_Area', 'EGID': 'EGID', 'GKODE': 'GKODE', 'GKODN': 'GKODN', 'GSTAT': 'GSTAT', 'GKAT': 'GKAT', 'GKLAS': 'GKLAS', 'GBAUP': 'GBAUP', 'GAREA': 'GAREA', 'GASTW': 'GASTW', 'GGDENR': 'GGDENR', 'GFA': 'GFA', 'GWAERZH1': 'GWAERZH1', 'GENH1': 'GENH1', 'GWAERZH2': 'GWAERZH2', 'GENH2': 'GENH2', 'Typo': 'Typo', 'TotalWazim': 'TotalWazim', 'TotalWAREA': 'TotalWAREA', 'TotalCarpet': 'TotalCarpet', 'TotalWoodFloor': 'TotalWoodFloor', 'TotalKitchenElements': 'TotalKitchenElements', 'TotalShowers': 'TotalShowers', 'TotalBaths': 'TotalBaths', 'TotalWCs': 'TotalWCs', 'TotalSinks': 'TotalSinks', 'TotalTileFloor': 'TotalTileFloor', 'TotalDoors': 'TotalDoors', 'TotalElevators': 'TotalElevators', 'TotalStairs': 'TotalStairs', 'NumberFloors': 'NumberFloors', 'Hollow_body_in_clay_and_cement_with_beamsTotal': 'Hollow_body_in_clay_and_cement_with_beamsTotal', 'Cement_slab_with_metal_beamsTotal': 'Cement_slab_with_metal_beamsTotal', 'Concrete_slabTotal': 'Concrete_slabTotal', 'Concrete_slab_with_insulation_3_5cmTotal': 'Concrete_slab_with_insulation_3_5cmTotal', 'Concrete_slab_with_insulation_10_30cmTotal': 'Concrete_slab_with_insulation_10_30cmTotal', 'Wooden_floorTotal': 'Wooden_floorTotal', 'Concrete_slab_with_phonique_insulationTotal': 'Concrete_slab_with_phonique_insulationTotal', 'Roof_without_insulation_High_slopeManartTotal': 'Roof_without_insulation_High_slopeManartTotal', 'Roof_without_insulation_Low_slopeTotal': 'Roof_without_insulation_Low_slopeTotal', 'Roof_without_insulation_FlatTotal': 'Roof_without_insulation_FlatTotal', 'Flat_slope_insulated_roofTotal': 'Flat_slope_insulated_roofTotal', 'Flat_isolated_roof_3_5cmTotal': 'Flat_isolated_roof_3_5cmTotal', 'Flat_isolated_roof_10_30cmTotal': 'Flat_isolated_roof_10_30cmTotal', 'Solid_wall_plasteredRrubble_naturalStone_brickTotal': 'Solid_wall_plasteredRrubble_naturalStone_brickTotal', 'Hollow_brick_wallTotal': 'Hollow_brick_wallTotal', 'Wall_with_air_space_and_interior_liningTotal': 'Wall_with_air_space_and_interior_liningTotal', 'Wall_with_insulation_and_interior_liningTotal': 'Wall_with_insulation_and_interior_liningTotal', 'Wall_with_insulation_3_5cmTotal': 'Wall_with_insulation_3_5cmTotal', 'Wall_with_insulation_10_30_cmTotal': 'Wall_with_insulation_10_30_cmTotal', 'Single_glas_windowTotal': 'Single_glas_windowTotal', 'Double_glas_windowTotal': 'Double_glas_windowTotal', 'Double_insulated_glasTotal': 'Double_insulated_glasTotal', 'Triple_insulated_glasTotal': 'Triple_insulated_glasTotal', 'VeluxTotal': 'VeluxTotal', 'layer': 'layer', 'URLBaseSlab': 'URLBaseSlab', 'URLfs': 'URLfs', 'URLroof': 'URLroof', 'URLwindow': 'URLwindow', 'URLfacade': 'URLfacade', 'URLbs': 'URLbs', });
lyr_WHGFinal2_1.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID': 'TextEdit', 'DKM_UUID': 'TextEdit', 'Symbol': 'TextEdit', 'Shape_Length': 'TextEdit', 'Shape_Area': 'TextEdit', 'EGID': 'TextEdit', 'GKODE': 'TextEdit', 'GKODN': 'TextEdit', 'GSTAT': 'TextEdit', 'GKAT': 'TextEdit', 'GKLAS': 'TextEdit', 'GBAUP': 'TextEdit', 'GAREA': 'TextEdit', 'GASTW': 'TextEdit', 'GGDENR': 'TextEdit', 'GFA': 'TextEdit', 'GWAERZH1': 'TextEdit', 'GENH1': 'TextEdit', 'GWAERZH2': 'TextEdit', 'GENH2': 'TextEdit', 'Typo': 'TextEdit', 'TotalWazim': 'TextEdit', 'TotalWAREA': 'TextEdit', 'TotalCarpet': 'TextEdit', 'TotalWoodFloor': 'TextEdit', 'TotalKitchenElements': 'TextEdit', 'TotalShowers': 'TextEdit', 'TotalBaths': 'TextEdit', 'TotalWCs': 'TextEdit', 'TotalSinks': 'TextEdit', 'TotalTileFloor': 'TextEdit', 'TotalDoors': 'TextEdit', 'TotalElevators': 'TextEdit', 'TotalStairs': 'TextEdit', 'NumberFloors': 'TextEdit', 'Hollow_body_in_clay_and_cement_with_beamsTotal': 'TextEdit', 'Cement_slab_with_metal_beamsTotal': 'TextEdit', 'Concrete_slabTotal': 'TextEdit', 'Concrete_slab_with_insulation_3_5cmTotal': 'TextEdit', 'Concrete_slab_with_insulation_10_30cmTotal': 'TextEdit', 'Wooden_floorTotal': 'TextEdit', 'Concrete_slab_with_phonique_insulationTotal': 'TextEdit', 'Roof_without_insulation_High_slopeManartTotal': 'TextEdit', 'Roof_without_insulation_Low_slopeTotal': 'TextEdit', 'Roof_without_insulation_FlatTotal': 'TextEdit', 'Flat_slope_insulated_roofTotal': 'TextEdit', 'Flat_isolated_roof_3_5cmTotal': 'TextEdit', 'Flat_isolated_roof_10_30cmTotal': 'TextEdit', 'Solid_wall_plasteredRrubble_naturalStone_brickTotal': 'TextEdit', 'Hollow_brick_wallTotal': 'TextEdit', 'Wall_with_air_space_and_interior_liningTotal': 'TextEdit', 'Wall_with_insulation_and_interior_liningTotal': 'TextEdit', 'Wall_with_insulation_3_5cmTotal': 'TextEdit', 'Wall_with_insulation_10_30_cmTotal': 'TextEdit', 'Single_glas_windowTotal': 'TextEdit', 'Double_glas_windowTotal': 'TextEdit', 'Double_insulated_glasTotal': 'TextEdit', 'Triple_insulated_glasTotal': 'TextEdit', 'VeluxTotal': 'TextEdit', 'layer': 'TextEdit', 'URLBaseSlab': 'ExternalResource', 'URLfs': 'TextEdit', 'URLroof': 'TextEdit', 'URLwindow': 'TextEdit', 'URLfacade': 'TextEdit', 'URLbs': 'TextEdit', });
lyr_WHGFinal2_1.set('fieldLabels', {'fid': 'inline label', 'OBJECTID': 'inline label', 'DKM_UUID': 'inline label', 'Symbol': 'inline label', 'Shape_Length': 'inline label', 'Shape_Area': 'inline label', 'EGID': 'inline label', 'GKODE': 'inline label', 'GKODN': 'inline label', 'GSTAT': 'inline label', 'GKAT': 'inline label', 'GKLAS': 'inline label', 'GBAUP': 'inline label', 'GAREA': 'inline label', 'GASTW': 'inline label', 'GGDENR': 'inline label', 'GFA': 'inline label', 'GWAERZH1': 'inline label', 'GENH1': 'inline label', 'GWAERZH2': 'inline label', 'GENH2': 'inline label', 'Typo': 'inline label', 'TotalWazim': 'inline label', 'TotalWAREA': 'inline label', 'TotalCarpet': 'inline label', 'TotalWoodFloor': 'inline label', 'TotalKitchenElements': 'inline label', 'TotalShowers': 'inline label', 'TotalBaths': 'inline label', 'TotalWCs': 'inline label', 'TotalSinks': 'inline label', 'TotalTileFloor': 'inline label', 'TotalDoors': 'inline label', 'TotalElevators': 'inline label', 'TotalStairs': 'inline label', 'NumberFloors': 'inline label', 'Hollow_body_in_clay_and_cement_with_beamsTotal': 'inline label', 'Cement_slab_with_metal_beamsTotal': 'inline label', 'Concrete_slabTotal': 'inline label', 'Concrete_slab_with_insulation_3_5cmTotal': 'inline label', 'Concrete_slab_with_insulation_10_30cmTotal': 'inline label', 'Wooden_floorTotal': 'inline label', 'Concrete_slab_with_phonique_insulationTotal': 'inline label', 'Roof_without_insulation_High_slopeManartTotal': 'inline label', 'Roof_without_insulation_Low_slopeTotal': 'inline label', 'Roof_without_insulation_FlatTotal': 'inline label', 'Flat_slope_insulated_roofTotal': 'inline label', 'Flat_isolated_roof_3_5cmTotal': 'inline label', 'Flat_isolated_roof_10_30cmTotal': 'inline label', 'Solid_wall_plasteredRrubble_naturalStone_brickTotal': 'inline label', 'Hollow_brick_wallTotal': 'inline label', 'Wall_with_air_space_and_interior_liningTotal': 'inline label', 'Wall_with_insulation_and_interior_liningTotal': 'inline label', 'Wall_with_insulation_3_5cmTotal': 'inline label', 'Wall_with_insulation_10_30_cmTotal': 'inline label', 'Single_glas_windowTotal': 'inline label', 'Double_glas_windowTotal': 'inline label', 'Double_insulated_glasTotal': 'inline label', 'Triple_insulated_glasTotal': 'inline label', 'VeluxTotal': 'inline label', 'layer': 'inline label', 'URLBaseSlab': 'inline label', 'URLfs': 'inline label', 'URLroof': 'inline label', 'URLwindow': 'inline label', 'URLfacade': 'inline label', 'URLbs': 'inline label', });
lyr_WHGFinal2_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});