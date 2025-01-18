// import {ID, Account, Client} from 'appwrite'
// import Config from 'react-native-config'
// import Snackbar from 'react-native-snackbar'

// const client = new Client()

// const ENDPOINT: string = Config.ENDPOINT!
// const PROJECT_ID: string = Config.PROJECT_ID!

// type CreateUserAccount = {
//     email: string
//     password: string
//     name: string
// }

// type LoginUserAccount = {
//     email: string
//     password: string
// }

// class AppwriteService {
//     account

//     constructor() {
//     client
//         .setEndpoint(ENDPOINT)
//         .setProject(PROJECT_ID)

//         this.account = new Account(client)
//     }

//     // Create a new record of user

//     async createAccount({email, password, name}: CreateUserAccount) {
//             try {
//                 const userAccount = await this.account.create(
//                     ID.unique(),
//                     email,
//                     password,
//                     name
//                 )
//                 if (userAccount) {
//                     // TODO: create login feature
//                     return this.login({email, password})
//                 } else {
//                     return userAccount
//                 }
//             } catch (error) {
//                 Snackbar.show({
//                     text: String(error),
//                     duration: Snackbar.LENGTH_LONG
//                 })
//                 console.log("Appwrite service :: createAccount() :: " + error)
//             }
//         }

//     async login({email, password}: LoginUserAccount) {
//         try {
//             return await this.account.createSession(
//                 email, 
//                 password
//             )
//         } catch (error) {
//             Snackbar.show({
//                 text: String(error),
//                 duration: Snackbar.LENGTH_LONG
//             })
//             console.log("Appwrite service :: loginAccount() :: " + error)
//         }
//     }

//     async getCurrentUser() {
//         try {
//             return await this.account.get()
//         } catch (error) {
//             console.log("Appwrite service :: getCurrentUser() :: " + error)
//         }
//     }

//     async logout() {
//         try {
//             return await this.account.deleteSession('current')
//         } catch (error) {
//             console.log("Appwrite service :: logout() :: " + error)
//         }
//     }
// }

// export default AppwriteService