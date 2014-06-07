module.exports = {
    mongo_url: process.env.MONGOHQ_URL || 'mongodb://localhost:27017/gtfs'
  , agencies: [
      /* Put agency_key names from gtfs-data-exchange.com.  
      Optionally, specify a download URL to use a dataset not from gtfs-data-exchange.com */
      { agency_key: 'metro-st-louis', url: 'ftp://www.metrostlouis.org/transit/google_transit.zip'}

    ]
}
