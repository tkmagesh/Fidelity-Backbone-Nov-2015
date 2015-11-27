require(['ProductList','ProductListView','jquery','text!appTemplate.html'], function(ProductList, ProductListView, $, appTemplate){
    $(function(){
        $(appTemplate).appendTo(document.body);
        window.list = new ProductList();
        var view = new ProductListView({collection : list});
        list.fetch();
    });
});
