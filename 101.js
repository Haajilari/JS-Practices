<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width">
  <title> Check whether a given string contains only Latin letters and no two uppercase and no two lowercase letters are in adjacent positions</title>
</head>
<body>

</body>
</html>
function test_string(input_str) {

  var is_lower_case = function(symbol) {
    if ('a' <= symbol && symbol <= 'z') {
      return true;
    }
    return false;
  }

  var is_upper_case = function(symbol) {
    if ('A' <= symbol && symbol <= 'Z') {
      return true;
    }
    return false;
  }

  var is_first_char_lower = is_lower_case(input_str[0]),
    is_first_char_upper = is_upper_case(input_str[0]);

  if (!(is_first_char_lower || is_first_char_upper)) {
    return false;
  }

  for (var i = 1; i < input_str.length; i++) {
    if (i % 2) {
      if (is_lower_case(input_str[i]) === is_first_char_lower ||
        is_upper_case(input_str[i]) === is_first_char_upper) {
        return false;
      }
    } else {
      if (is_lower_case(input_str[i]) !== is_first_char_lower ||
        is_upper_case(input_str[i]) !== is_first_char_upper) {
        return false;
      }
    }
  }

  return true;
}
