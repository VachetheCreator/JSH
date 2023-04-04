/* 1 */

let userIsLoggedIn = true;
let videoIsCommentable = false;

const userCanComment = userIsLoggedIn && videoIsCommentable;

console.log(userCanComment);

/* 2 */

let userIsLoggedIn2 = false;
let userIsBlocked = false;

const userCanPost = userIsLoggedIn2 && !(userIsBlocked);

console.log(userCanPost);

/* 3 */

let balance = 70;
let userCartTotal = 65;

const paymentComplete = balance >= userCartTotal;

console.log(paymentComplete);

/* 4 */

let userIsAdmin = false;
let userIsModerator = false;
let userIsCommentAuthor = true;

const userCanDelete = userIsAdmin || userIsModerator || userIsCommentAuthor;

console.log(userCanDelete);

/* 5 */

let presidentKey = false;
let primeMinisterKey = false;
let generalOfArmiesKey = false;
let masterKey = true;

const bombWillLaunch = (presidentKey && primeMinisterKey && generalOfArmiesKey) || masterKey;

console.log(bombWillLaunch);

/* 6 */

const userPinCode = 4545;
const currentPinCode = 4545;
const newPinCode = 6725;
const retypeNewPinCode = 6725;

const pinChangeComplete = userPinCode == currentPinCode && newPinCode == retypeNewPinCode;

console.log(pinChangeComplete);

/* 7 */

let health = 88;
let lives = 1;

const gameOver = health == 0 && lives == 0;

console.log(gameOver);

/* 8 */ 
// ver gavige es kargad //

let capsuleCount = 100;
let capsulePrice = 5;
let userBalance = 25;
let creditCardStatus = userBalance >= capsulePrice;

const paymentComplete2 = creditCardStatus;

console.log(paymentComplete2);

/* 9 */

let availableRooms = 5;
let roomPrice = 150;
let discount = 15;
let userBalance2 = 135;
let userHasDiscount = true;
let userRoomCount = 1;

const paymentComplete3 = (availableRooms >= userRoomCount) && userBalance2 >= ((roomPrice - discount) * userRoomCount);

console.log(paymentComplete3);

