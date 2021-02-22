import isValidCoordinates from './main.js';


//negative test case that checks when the given co-ordinates are null 
// and should return false.

// describe('isValidCoordinates function', () => {
//     it('checks whether the coordinates are valid', () => {
//       expect(isValidCoordinates({})).toEqual(false);
//     });
//   });

// const isDeviceValid = (dev) => {
//   // check if dev.coordinate
//    // check dev.coordinate with isCoordinateValid
//   return true;
// }
// const isLocationValid = (loc) => {
//   // check if loc.coordinates array exists
//   // check if loc.coordinates array length is correct for shape
//   // check each coordinate with isCoordinateValid
//   return true;
// }
// const isInsideQuad = (device, location) => {
//   // check args
//   const isDeviceValid = isDeviceValid(device);
//   const isLocationValid = isLocationValid(location);
//   if (!isDeviceValid) {
//     throw new Error('Invalid device');
//   }
//   if (!isLocationValid) {
//     throw new Error('Invalid location');
//   }
//   return true;
// };
