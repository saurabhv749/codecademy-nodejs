// Import the encryptors functions here.
const {
    caesarCipher,
    reverseCipher,
    symbolCipher,
  } = require("./encryptors.js");
  
  const encodeMessage = (str) => {
    // Use the encryptor functions here.
    let encodedMessage = caesarCipher(str);
    encodedMessage = caesarCipher(encodedMessage, 10);
    encodedMessage = reverseCipher(encodedMessage);
    encodedMessage = symbolCipher(encodedMessage);
    encodedMessage = caesarCipher(encodedMessage, 15);
    return encodedMessage;
  };
  
  const decodeMessage = (str) => {
    // Use the encryptor functions here.
    let decodedMessage = caesarCipher(str);
    decodedMessage = caesarCipher(decodedMessage, -15);
    decodedMessage = symbolCipher(decodedMessage);
    decodedMessage = reverseCipher(decodedMessage);
    decodedMessage = caesarCipher(decodedMessage, -10);
    return decodedMessage;
  };
  
  // User input / output.
  
  const handleInput = (userInput) => {
    const str = userInput.toString().trim();
    let output;
    if (process.argv[2] === "encode") {
      output = encodeMessage(str);
    }
    if (process.argv[2] === "decode") {
      output = decodeMessage(str);
    }
  
    process.stdout.write(output + "\n");
    process.exit();
  };
  
  // Run the program.
  process.stdout.write("Enter the message you would like to encrypt...\n> ");
  process.stdin.on("data", handleInput);
  