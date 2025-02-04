import 'react-native-url-polyfill/auto'
// import { Account , Client} from 'react-native-appwrite';
import { Account, Client, ID } from 'react-native-appwrite';

export const config = {


    endpoint: "https://cloud.appwrite.io/v1",
    platform: "com.company.mymovies",
    projectId: "67a239cd0034fb29bf08",
    databaseId: "67a23ca40003f348bd93",
    userCollectionId: "67a23ceb00058a297d7e",
    videoCollectionId: "67a23d2c0001cea6ba07",
    StorageId: "67a2401300276199968c",
};


// Init your React Native SDK
export const client = new Client();

client
    .setEndpoint(config.endpoint) // Your Appwrite Endpoint
    .setProject(config.projectId) // Your project ID
    .setPlatform(config.platform) // Your application ID or bundle ID.
;



// intialize account class
const account = new Account(client);
// Create User
 export const createUser = () => {
    account.create(ID.unique(), 'me@example.com', 'password', 'Jane Doe')
    .then(function (response) {
        console.log(response);
    }, function (error) {
        console.log(error);
    });

};




// import 'react-native-url-polyfill/auto'
// import { Account, Client, ID } from 'react-native-appwrite';

// export const config = {
//     endpoint: "https://cloud.appwrite.io/v1",
//     platform: "com.company.mymovies",
//     projectId: "67a239cd0034fb29bf08",
//     databaseId: "67a23ca40003f348bd93",
//     userCollectionId: "67a23ceb00058a297d7e",
//     videoCollectionId: "67a23d2c0001cea6ba07",
//     StorageId: "67a2401300276199968c",
// };

// // Init your React Native SDK
// export const client = new Client();

// client
//     .setEndpoint(config.endpoint)
//     .setProject(config.projectId)
//     .setPlatform(config.platform);

// // initialize account class
// const account = new Account(client);

// // Create User
// export const createUser = (email, password, name) => {
//     return account.create(
//         ID.unique(),
//         email,
//         password,
//         name
//     ).then(function (response) {
//         console.log(response);
//         return response;
//     }).catch(function (error) {
//         console.log(error);
//         throw error;
//     });
// };





