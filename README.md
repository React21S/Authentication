# Authentication App
- This is an authentication app built with react context management with firebase for deployment.

## SignUp page

- Users can signup with their name, email, password and get access to enter data. Each user has their login page, where the user cannot see what is going on on another user's page.

![SignUp](/img/SignUp.png)

---

## Login page

- For the user to log in, it requires the user's email and password used initially for signing up for an account.
After logging in, user can view their page for all necessary information previously inserted.

![Login](/img/Login.png)

---
## User's page
- After logging in, user can view their page for all necessary information previously inserted. Users can enter a new item and delete the item from their page.

![LoginPage](/img/LoginPage.png)

## Installation 

```shell
npm install react-router-dom
```
```shell
npm install firebase
```
---

## Needed firestore query 
 [data query](https://firebase.google.com/docs/firestore/query-data/queries)
// const q = query(citiesRef, where("capital", "==", true));


## after creating orderBy
- Checking on console.log to create fetching data with an index requirements
(FirebaseError: The query requires an index. You can create it here: https://console.firebase.google.com....)

## set up the rules
![Firestore_rule](/img/Rule.png)
- Change to this line 
   match /NPS/{document=**}
   - then publish it 

## Install firebase cli
### Steps
```shell
curl -sL https://firebase.tools | upgrade=true bash
```

```shell
firebase login
```

```shell
firebase init
```
-select these line by press arrow down and space
![Firebase_setup](/img/Firebase_setup.png)
after press enter 
- use exiting one 
- select the right file
- then continue press enter 
    - when it ask for 
        - ? What do you want to use as your public directory? (public) 
        change public to build 
    - then choose yes
    - follow by press enter


### change the firebase rule
```shell
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /NPS/{document=**} {
      // //for allowing full access just write this 
      //  allow read, write, update, delete, create;
      // allow read, write; 
      // if
      //     request.time < timestamp.date(2022, 4, 24);

    //rule to allow create 
    // must be authenticated to create
      allow create: if request.auth != null;
    
    // for allowing the user to read and delete 
    // logged in user uid must match the document creator to read & delete
      allow read, delete: if request.auth.uid == resource.data.uid;
    }
  }
}
```
---
### For deploying Firebase rules
- only desire file
```shell
firebase deploy --only firestore
```
---

## Deployment through firebase

```shell
npm run build
```
```shell
firebase deploy
```

## Web for this package
- https://npscore-72b0f.web.app/

---
# Acknowledgement 
- Context, Hooks, Reducers, Routing, Auth, Databases. By Net Ninja (INSTRUCTOR)
