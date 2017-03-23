var expect = require('chai').expect;
var http = require('http');

describe("/", function() {
	it("should return 200 when starting the server", function() {
		http.get('http://localhost:3000', function(res) {
      		expect.equal(200, res.statusCode);
		});
	});
});
