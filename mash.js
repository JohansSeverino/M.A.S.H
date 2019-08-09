function mash(){
    
    const str =  'You will live in a '  + getHome() + ', and you will have ' + getChildrenCount(100) + ' kids!, and you’ll drive a ' + getCar() ;


     return str

    
};

console.log(mash());

function getHome(){
const array = ['Mansion', 'Apartment', 'Shack', 'House', process.argv[2], 'box'];
let number = Math.random();
number *= 6
number = Math.floor(number);
return array[number];
}

getHome();

function getChildrenCount(max){

let decimal = Math.random();

let newnumber =decimal * max;

let child= Math.floor(newnumber);

if (child < 50){
    return child
}
else if (child > 50){
    return process.argv[3];
}

};
let number = getChildrenCount(100);


function getCar(){
    const array = ['Lambo', 'Ferrari', 'Box with wheels', process.argv[4], 'Convertable'];
    let number = Math.random();
    number *= 6
    number = Math.floor(number);
    if (process.argv[4] == undefined){
        let blah = ['Lambo', 'Truck', 'Ferrari', 'Convertable', 'Box with wheels']
        return 'Insert a vehicle'
        }
    return array[number];
    }

// if (process.argv[2] == no){
// console.log('Insert a home')
// }

// if (process.argv[3] == no){
//     console.log('Insert a number')
//     }

// if (process.argv[4] == no){
//         console.log('Insert a home')
//         }
        
        

    
    




