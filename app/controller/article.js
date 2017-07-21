'use strict';

module.exports = app => {
  class ArticleController extends app.Controller {
    * info(ctx) {
       const id =  ctx.params.id
	   const data = yield ctx.service.mysql.articleall(id)
       ctx.body =   data
    }
  }
  return ArticleController;
};
