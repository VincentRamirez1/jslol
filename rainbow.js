//use this in any mpp (only if they have the user color change feature)
var count = 0;
var size = 100;
var rainbow = new Array(size);

for (var i = 0; i < size; i++) {
var red = sin_to_hex(i, 0 * Math.PI * 2 / 3); // 0 deg
var blue = sin_to_hex(i, 1 * Math.PI * 2 / 3); // 120 deg
var green = sin_to_hex(i, 2 * Math.PI * 2 / 3); // 240 deg

rainbow[i] = "#" + red + green + blue;
}

function sin_to_hex(i, phase) {
var sin = Math.sin(Math.PI / size * 2 * i + phase);
var int = Math.floor(sin * 127) + 128;
var hex = int.toString(16);

return hex.length === 1 ? "0" + hex : hex;
}

function rainbow1() {
setTimeout(rainbow1, 500) //any number exept for 0
if (count > rainbow.length) count = 0;
count++;
MPP.client.sendArray([{
m: "userset",
set: {
color: `${rainbow[count]}`
}
}]);
}

setTimeout(rainbow1, 3000)
