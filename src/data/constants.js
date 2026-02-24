export const BLOOD_GROUPS = ["A+", "A-", "B+", "B-", "O+", "O-", "AB+", "AB-"];

export function getRandom(array) {
  return array[Math.floor(Math.random() * array.length)];
}