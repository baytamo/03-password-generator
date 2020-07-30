**pushing button begins program**

**User chooses number of characters**
1. user is prompted for a number between 8-128, the number of characters allowed in password
1. made possible with while loop, user will not be able to move forward until they choose a number between 8 and 28

**User chooses password characters**
1. characters are organized into 4 separate arrays, with each set to be (or not to be) pushed into a new array depending on what user chooses

**Random character generation**
1. for loop chooses characters at random from new user generated array and based on the number of desired characters
1. random characters generated are placed into a new array
1. .join used so that new password array doesn't appear as separate strings, but as one set of characters that is easy to copy and paste
1. password appears in window above button

![password generator](Assets/pwGenerator.png)
![first prompt](Assets/prompt.png)
![printed password](Assets/pwPrinted.png)