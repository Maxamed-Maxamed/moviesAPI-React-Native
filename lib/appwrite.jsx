import 'react-native-url-polyfill/auto'
import { Client, Account, ID, Avatars, Databases, Query} from 'react-native-appwrite';
export const  config = {
    endpoint: 'https://cloud.appwrite.io/v1',
    platform: 'com.company.maxmovies',
    projectId: '67c86206001195d103fc',
    databaseId: '67c864e500047d328277',
    userCollectionId: '67c86512000ac955122f',
    videoCollectionId: '67c8668d000573f7da3c',
    storageId: '67c86801003444697412',
};

const client = new Client()
const account = new Account(client); // Initialize Account class
const avatars = new Avatars(client);
const databases = new Databases(client);

client
    .setEndpoint(config.endpoint) 
    .setProject(config.projectId) 
    .setPlatform(config.platform) 
;


export const createUser = async (username,  email, password) => {{
    try {
        const newAccount =  await account.create(ID.unique(), email, password, username);
       if(newAccount) {
           console.log('Account created successfully');
           
       }
       else {
           console.log('Account creation failed');
           throw new Error(error);
       }

       const avatarURL = avatars.getInitials(username);

       await signIn(email, password);



       const newUser = await databases.createDocument(config.databaseId, config.userCollectionId, ID.unique(), {
           username: username,
           email,
           avatar: avatarURL,
           accountId: newAccount.$id,
       });
       if(newUser) {
           console.log('User created successfully');
       }
       else {
           console.log('User creation failed');
           throw new Error(error);
       }
         return newUser;


    } catch (error) {
        console.log(error);
        throw new Error(error);
    }
}
};

// Sign In
export const signIn = async (email, password) => {
    try {
        // Check for existing session first
        const currentUser = await account.get();
        if(currentUser) {
            await account.deleteSession('current');
        }
        
        const session = await account.createEmailPasswordSession(email, password);
        return session;
    } catch (error) {
        console.log(error);
        throw error;
    }
};



export const getCurrentUser = async () => {
    try {
        // Check for existing session first
      const currentAccount = await account.get();
      if(!currentAccount) throw new Error('No user found');

    const currentUser = await databases.listDocuments(config.databaseId, config.userCollectionId, [
        Query.equal('accountId', currentAccount.$id),
      ]);
      if(!currentUser) throw new Error('User not found');
      return currentUser.documents[0];
    } catch (error) {
        console.log(error);
        throw error;
    }
}

