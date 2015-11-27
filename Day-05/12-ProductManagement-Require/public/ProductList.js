define(['Backbone','Product'], function(Backbone, Product){
    var ProductList = Backbone.Collection.extend({
        model : Product,
        url : '/products',
        getValue : function(){
            var totalValue = this.reduce(function(result, product){
                return result + product.get('value');
            }, 0);
            return totalValue;
        }
    });
    return ProductList;
});
