const generateRandomString = (length) => {
  let result = "";
  let characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ01234567789";
  let characterLenght = characters.length;

  for (let i = 0; i< length; i++) {
    result += characters.charAt(
      Math.floor(Math.random() * characterLenght)
    );
  }
  return result
}

module.exports = {generateRandomString}