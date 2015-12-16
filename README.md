Oneman web server
=====================================

Web server to expose the database

---

### Deploy

1. Clone this repo from `https://github.com/fuksi/server-oneman`
2. Set your database configuration in `custom_config.js` file by copying `cp config.js custom_config.js`
3. Run `npm install` from the root directory
4. Run `npm start` to start the server. Default port is 8080. You can modify port in `bin/www.js` line 15

### Use

- Web server has two route `simple` and `adhoc`, please refer path structure in `routes/simple.js` and `routes/adhoc.js`
- To know which arguments should be passed, please refer to `unformatted_sql.js`
- Example (replace the IP with yours to test locally):
  - http://188.166.88.118:8080/simple/all/course
  - http://188.166.88.118:8080/adhoc/withCondition/attendanceSingleStudent/125352
