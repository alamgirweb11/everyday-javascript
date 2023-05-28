let obj = {
   Bangladesh: 'Dhaka', 
   India: 'Delhi', 
   Nepal: 'Kathmandu', 
   Afganistan: 'Kabul', 
   Thailand: 'Bangkok'
}

for(ob in obj){
     console.log(ob)
}

// object value and keys method
const capitals = Object.values(obj)
const countries = Object.keys(obj)

// print only capital name
capitals.map(function(capital) {
   console.log('Capital is: ' + capital);
})

// ES6 syntax
capitals.map(capital => console.log(`Capital is ${capital}`))

// print only country
countries.map(function(country) {
   console.log('Country is: ' + country);
})

// ES6 syntax
countries.map(country => console.log(`Country is ${country}`))