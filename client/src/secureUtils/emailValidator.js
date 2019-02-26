export function isValidEmailAddress(email) {
  let atCharacter = email.indexOf("@");
  let front = email.slice(0, atCharacter);
  let domain = email.slice(atCharacter + 1);
  let dot = domain.indexOf(".");
  let domainSuffix = domain.slice(dot + 1);

  if (atCharacter === -1 || atCharacter === 0) {
    return false;
  }
  if (domainSuffix) {
    console.log("domainSuffix", domainSuffix);
    return false;
  }
  if (front.startsWith(".") || front.startsWith("-") || front.startsWith("#")) {
    return false;
  }
  if (
    front.endsWith(".") ||
    front.endsWith("-") ||
    front.endsWith("#") ||
    front.endsWith("_") ||
    front.includes("..")
  ) {
    return false;
  }

  if (dot === -1) {
    return false;
  }
  if (domain.includes("..") || domain.includes("#") || domain.includes("_")) {
    return false;
  }

  return true;
}
