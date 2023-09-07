function reverseString(s) {
  try {
    let arr = s.split("");
    console.log(arr.reverse().join(""));
  } catch (e) {
    console.log(e.message);
    console.log(e.name);
  }
}
reverseString(1234);
