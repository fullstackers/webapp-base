var yeoman = require("yeoman-generator");


function Base(args, opts) {
	yeoman.Base.call(this, args, opts);
};

Base.prototype = Object.create(yeoman.Base.prototype);

Base.prototype.start = function() {
	
}

function extend(name, cl) {
	var fn = function(args, opts) {
		Base.apply(this, args);
		cl.constructor && cl.constructor.call(this, args, opts);
	}
	fn.prototype = Object.create(Base.prototype);

	for(var i in cl)
		if(i !== 'constructor')
			fn.prototype[i] = cl[i];

	return fn;
}

module.exports = {extend: extend};