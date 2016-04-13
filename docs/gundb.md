
install:  
`npm install gun-level --save`

to start a new database:  
`var db = new Gun();`  
the database will be created in project root at './level'.

to change the location of the database do:
```javascript
var db = new Gun({level: {path: 'db'}});
```
the database will be created in project root './db'.

