//-------------------------------Exercise Based on Map------------------------------------------------------------------------------

// 1. Create a new Map
// 2. Set these properties  ("a", "b", "c")
// 3. Set these values (1, 2, 3)
// 4. Get "a" from that map
// 5. Check the size of that map
// 6. Delete the property "b" & then check the size.

let map1 = new Map();
map1.set("a", 1);
map1.set("b", 2);
map1.set("c", 3);

console.log(map1);

console.log(map1.get("a"));

console.log(map1.size);

map1.delete("b");

console.log(map1.size);
