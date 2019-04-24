










/* Exercise 1*/

var shopping_list = ["pop tarts","ramen noodles","chips","salsa","coffee"];
 shopping_list.push("fruit loops");
 // console.log(shopping_list);
 shopping_list[4] = "fair trade coffee";
// console.log(shopping_list);
shopping_list[2] ="rice";
 // console.log(shopping_list);
 shopping_list[3] = "beans";
// console.log(shopping_list);

var shopping_cart = [];

var tempvalue = shopping_list.pop();
shopping_cart.push( tempvalue) ;
// console.log(shopping_cart);

tempvalue = shopping_list.shift();
shopping_cart.push(tempvalue);
console.log(shopping_cart);

while(shopping_list.length > 0)
{
	tempvalue = shopping_list.pop();
	shopping_cart.push(tempvalue);
}
console.log(shopping_list);
console.log(shopping_cart);

shopping_cart.sort();
shopping_cart.reverse();


console.log(shopping_cart.toString());

/* Exercise 2 */

var course = {
	name: 'JavaScript Applications',
	awesome: true,
	teachers: ['Assaf', 'Shane'],
	students: [
		{
			name: 'Steve',
			computer:
			 {
				OS: 'Linux',
				type: 'laptop'
			}
		},

		{
			name: 'Katy',
			computer: 
			{
				OS: 'OSX',
				type: 'macbook'
			}
		},
		{
			name: 'Chuck',
			computer:
			 {
				OS: 'OSX',
				type: 'macbook'
			}
		}

	],

	preReqs : {
		skills : ['html', 'css', 'git'],
		equipment: 
		{
			laptop: true,
			OSOptions: ['linux', 'osx']
		}
	}
};

console.log(course.name);
console.log(course.teachers[1]);

console.log(course.students[0].name);

console.log(course.students[1].computer.OS);

console.log(course.preReqs.equipment);

console.log(course.preReqs.equipment.OSOptions[1]);

console.log(course.preReqs.equipment.OSOptions.join(" or "));


for (var i = 0 ; i < course.students.length ; i++)
 {
	if(course.students[i].computer.OS === "OSX")
	{
		console.log(course.students[i].name);

	}	
 } 
 