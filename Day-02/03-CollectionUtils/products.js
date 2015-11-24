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
        //sort();
        console.table(products);
    });

    print("Sort products by Units", function(){
        //sort(...);
        console.table(products);
    });

    print("Sort products by Cost", function(){
        //sort(...);
        console.table(products);
    });
});


print("Filtering", function(){
    console.log("Category-1 products")
    console.table(products);
});
