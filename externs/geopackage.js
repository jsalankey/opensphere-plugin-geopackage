/**
 * @fileoverview Externs for ngageoint/geopackage 1.0.24
 * @externs
 */


/**
 * @type {Object}
 * @const
 */
var geopackage = {};

/**
 * @param {string} path Path where geopackage exists
 * @param {function(*, GeoPackage):*} callback Called with `err, geopackage`
 */
geopackage.openGeoPackage = function(path, callback) {};

/**
 * @param {Uint8Array} array Array of GeoPackage bytes
 * @param {function(*, GeoPackage):*} callback Called with `err, geopackage`
 */
geopackage.openGeoPackageByteArray = function(array, callback) {};

/**
 * @constructor
 */
var GeoPackage;

/**
 * Close the database connection
 */
GeoPackage.prototype.close = function() {};

/**
 * @return {string} The name
 */
GeoPackage.prototype.getName = function() {};

/**
 * @return {string} The path
 */
GeoPackage.prototype.getPath = function() {};

/**
 * @param {function(*, Array<!string>):*} callback Called with `err, tableNames`
 */
GeoPackage.prototype.getFeatureTables = function(callback) {};

/**
 * @param {!string} table The table name
 * @param {function(*, GeoPackage.FeatureDao):*} callback Called with `err, featureDao`
 */
GeoPackage.prototype.getFeatureDaoWithTableName = function(table, callback) {};

/**
 * @param {!string} tableName The name of the tile table to find
 * @param {function(*, GeoPackage.TileDao):*} callback Called with `err, TileDao`
 */
GeoPackage.prototype.getTileDaoWithTableName = function(tableName, callback) {};

/**
 * @param {function(*, Array<!string>):*} callback Called with `err, tableNames`
 */
GeoPackage.prototype.getTileTables = function(callback) {};

/**
 * @param {GeoPackage.TileDao|GeoPackage.FeatureDao} tableDao The table data access object
 * @param {function(*, Object<string, *>):*} callback Called with `err, info`
 */
GeoPackage.prototype.getInfoForTable = function(tableDao, callback) {};


// We aren't using properties off of these yet, but this allows us to still properly type
// items without resorting to {Object}.

/**
 * @typedef {{
 *  table_name: string
 * }}
 */
GeoPackage.TileDao;


/**
 * @typedef {{
 *  table_name: string
 * }}
 */
GeoPackage.FeatureDao;
