function processProducts(products){
    const names=products.map(p=>p.name);

    products.forEach(product => {
        if(product.price>50){
            console.log(`${product.name} is above $50`); 
        }
        else{
            console.log(`${product.name} is below $50`);
        }
    });
   return names;
}

const items = [
    { name: "Laptop", price: 1000 },
    { name: "Mouse", price: 20 }
  ];
  
  processProducts(items);