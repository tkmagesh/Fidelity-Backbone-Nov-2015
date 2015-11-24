var products = [
    {id : 5, name : "Pen", cost : 80, units : 50, category :1},
    {id : 9, name : "Hen", cost : 70, units : 80, category :1},
    {id : 3, name : "Den", cost : 60, units : 90, category :2},
    {id : 4, name : "Zen", cost : 50, units : 40, category :2},
    {id : 2, name : "Ken", cost : 40, units : 60, category :1}
]

/*
Sort
Filter
Min
Max
Avg
CountBy
Some
All
GroupBy
*/

function print(title, fn){
    console.group(title);
    fn();
    console.groupEnd();
}

print("Default List", function(){
    console.table(products);
});

print("Sorting", function(){
    print("Default Sorting", function(){
        function sort(){
            for(var i=0; i<products.length-1; i++)
                for(var j=i+1; j<products.length; j++)
                    if (products[i].id > products[j].id){
                        var temp = products[i];
                        products[i] = products[j];
                        products[j] = temp;
                    }
        }
        sort()
        console.table(products);
    });
    print("Sort by attribute", function(){
        function sort(list, attrName){
            for(var i=0; i<list.length-1; i++)
                for(var j=i+1; j<list.length; j++)
                    if (list[i][attrName] > list[j][attrName]){
                        var temp = list[i];
                        list[i] = list[j];
                        list[j] = temp;
                    }
        }
        print("products by Units", function(){
            sort(products, "units");
            console.table(products);
        });

        print("products by Cost", function(){
            sort(products, "cost");
            console.table(products);
        });
    });
    print("Sort by custom comparers", function(){
       function sort(list, comparer){
            for(var i=0; i<list.length-1; i++)
                for(var j=i+1; j<list.length; j++)
                    if (comparer(list[i], list[j]) > 0){
                        var temp = list[i];
                        list[i] = list[j];
                        list[j] = temp;
                    }
        }
        print("products by value [ units * cost ]", function(){
            var productComparerByValue = function(p1, p2){
                var p1Value = p1.cost * p1.units,
                    p2Value = p2.cost * p2.units;
                if (p1Value < p2Value) return -1;
                if (p1Value === p2Value) return 0;
                return 1;
            };
            sort(products, productComparerByValue);
            console.table(products);
        });
    });

});


print("Filtering", function(){
    print("All category-1 products", function(){
        function filterCategory1Products(){
            var result = [];
            for(var i=0; i<products.length; i++)
                if (products[i].category === 1)
                    result.push(products[i]);
            return result;
        }
        var category1Products = filterCategory1Products();
        console.table(category1Products);
    });
    print("All coslty products", function(){
        function filterCostlyProducts(){
            var result = [];
            for(var i=0; i<products.length; i++)
                if (products[i].cost > 50)
                    result.push(products[i]);
            return result;
        }
        var CostlyProducts = filterCostlyProducts();
        console.table(CostlyProducts);
    });
    print("Any list by any criteria", function(){
        function filter(list, criteriaFn){
            var result = [];
            for(var i=0; i<list.length; i++)
                if (criteriaFn(list[i]))
                    result.push(list[i]);
            return result;
        };
        print("Category-1 products", function(){
            var category1Criteria = function(product){
                return product.category === 1;
            };
            var category1Products = filter(products, category1Criteria);
            console.table(category1Products);
        });
        var costlyProductCriteria = function(product){
            return product.cost > 50;
        };
        print("Costly products [cost > 50]", function(){

            var costlyProducts = filter(products, costlyProductCriteria);
            console.table(costlyProducts);
        });
        var overStockedProductCriteria = function(product){
            return product.units > 60;
        };
        print("Over stocked products [Units > 60]", function(){

            var overStockedProducts = filter(products, overStockedProductCriteria);
            console.table(overStockedProducts);
        });
        function negate(criteriaFn){
            return function(){
                return !criteriaFn.apply(this,arguments);
            }
        }
        print("Affordable products [cost < = 50]", function(){
            /*var affordableProductCriteria = function(product){
                //return product.cost <= 50;
                return !costlyProductCriteria(product);
            };*/
            var affordableProductCriteria = negate(costlyProductCriteria);
            var affordableProducts = filter(products, affordableProductCriteria);
            console.table(affordableProducts);
        });
        print("under stocked products [Units <= 60]", function(){
            /*var underStockedProductCriteria = function(product){
                return !overStockedProductCriteria(product);
            };*/
            var underStockedProductCriteria = negate(overStockedProductCriteria);
            var underStockedProducts = filter(products, underStockedProductCriteria);
            console.table(underStockedProducts);
        });
    })
});
