define(['Backbone','underscore','jquery','Handlebars','text!productTemplate.html'], function(Backbone, _, $,Handlebars, templateHtml){
    var ProductView = Backbone.View.extend({
        tagName : 'li',
        events : {
            "click #btnUpdate" : "updateProduct",
            "click #btnRemove" : "removeProduct"
        },
        removeProduct : function(){
          this.model.destroy();
        },
        updateProduct : function(){
            var units = parseInt(this.$("#txtUnits").val(),10);
            this.model.set('units', units);
            this.model.update();
        },
        initialize : function(){
            _.bindAll(this, 'render', 'remove');
            this.model.on('change', this.render);
            this.model.on('destroy', this.remove);
        },
        remove : function(){
            this.$el.remove();
        },
        render : function(){
            if (!this.template){
                this.template = Handlebars.compile(templateHtml);
            }
            this.$el.html(this.template(this.model.toJSON()));
            return this;
        }
    });
    return ProductView;
});
