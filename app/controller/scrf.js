'use strict';

module.exports = app => {
  class ScrfController extends app.Controller {
    * index() {
       
	   this.ctx.body = this.ctx.crsf
       
    }
  }
  return ScrfController;
};
