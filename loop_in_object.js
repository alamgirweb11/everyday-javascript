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
const country = Object.keys(obj)