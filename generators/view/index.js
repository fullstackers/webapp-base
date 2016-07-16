var generators = require('yeoman-generator');

module.exports = generators.Base.extend({
  constructor: function () {
    generators.Base.apply(this, arguments);
    this.destinationRoot('app/');
    this.argument('viewName', {type : String, default : 'dashboard'})
    
  },
  initializing: function() {
  	this.viewName = this.arguments[0];
    this.viewNameCapital = this.viewName.substr(0,1).toUpperCase() + this.viewName.substr(1);
  },
  writing: function () {
  	// this.mkdir(`${this.destinationRoot()}/app/view/${this.viewName}`);
  	this.template('dashboard/dashboard.config.js', "view/"+this.viewName+"/"+this.viewName+".config.js");	
  	this.template('dashboard/dashboard.controller.js', "view/"+this.viewName+"/"+this.viewName+".controller.js");	
  	this.template('dashboard/dashboard.controller.spec.js', "view/"+this.viewName+"/"+this.viewName+".controller.spec.js");	
  	this.template('dashboard/dashboard.html', "view/"+this.viewName+"/"+this.viewName+".html");	
  	this.template('dashboard/dashboard.less', "view/"+this.viewName+"/"+this.viewName+".less");	
  }
});
