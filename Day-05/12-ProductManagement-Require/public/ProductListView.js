define(['Backbone','underscore','jquery','ProductView'], function(Backbone, _, $,ProductView){
    var ProductListView = Backbone.View.extend({
        el : "div.content",
        events : {
            "click #btnAdd" : 'addNewProduct'
        },
        addNewProduct : function(){
            var name = this.$("#txtName").val(),
                price = parseInt(this.$("#txtPrice").val(),10);
            this.collection.create({
                name : name,
                price : price
            });
        },
        onNewProduct : function(newProduct){
            var newProductView = new ProductView({model : newProduct});
            newProductView.render().$el.appendTo(this.$("#olProductList"));
        },
        initialize : function(){
            _.bindAll(this, "onNewProduct", "render");
            this.collection.on('add', this.onNewProduct);
            this.collection.on('all', this.render);
        },
        render : function(){
            this.$("#listCount").html(this.collection.length);
            this.$("#listValue").html(this.collection.getValue());
        }
    });
    return ProductListView;
})
