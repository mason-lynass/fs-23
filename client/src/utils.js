export function displayUsername(username) {
  if (username.includes("@")) {
    return username.slice(0, username.indexOf("@"));
  }
  return username;
}
