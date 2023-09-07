function vowelsAndConsonants(s) {
  for (var i in s.split("")) {
    if ("aeiou".includes(s.split("")[i])) {
      console.log(s.split("")[i]);
    }
  }
  for (var i in s.split("")) {
    if (!"aeiou".includes(s.split("")[i])) {
      console.log(s.split("")[i]);
    }
  }
}

vowelsAndConsonants("annas");
