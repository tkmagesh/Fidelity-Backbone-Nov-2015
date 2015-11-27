define(['Backbone'], function(Backbone){
    var Product = Backbone.Model.extend({
       defaults : {
           name : '',
           units : 0,
           price : 0,
           value : 0
       },
       update : function(){
           this.save('value', this.get('price') * this.get('units'));
       }
    });
    return Product;
})
