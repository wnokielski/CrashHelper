# CrashHelper
My Engineer's Thesis - web app for helping people with vehicles damaged after collision.

###Tech stack

1. Backend - Java + Spring Boot + MongoDB
2. Frontend - JavaScript + React + Ant Design

## About the app

There are two types of users - Client and Workshop. After successful registration Client can add new damage with photos, describe the damage, view his damages with specific status (new, priced, in progress or completed) and choose Workshop's offer. When damage is completed, he can add opinion of Workshop, that can help future Clients while selecting Workshop.

Workshop can view new damages added by Clients, submit a repair offer and view opinions about themselves.

## UI

UI was designed by using Ant Design library.

![alt text](https://github.com/wnokielski/CrashHelper/blob/master/Images/Home.png)
*Guest page of application*

Button "Start now" redirects user to Registration page. He can also use menu in header to navigate.

![alt text](https://github.com/wnokielski/CrashHelper/blob/master/Images/ChooseRegistration.png)
*Choosing type of account*

First step of registration is to select proper type of account - Workshop or Client.

![alt text](https://github.com/wnokielski/CrashHelper/blob/master/Images/WorkshopRegistration.png)
*Workshop registration form*

![alt text](https://github.com/wnokielski/CrashHelper/blob/master/Images/Login.png)
*Login form*

After successful registration user is redirected to Login page.

![alt text](https://github.com/wnokielski/CrashHelper/blob/master/Images/AfterLogin.png)
*Main page after successful login*

After successful login user can use two different types of navigation:
1. Menu in header - to show his profile information and to sign out
2. Menu on sider - to show proper types of damages and opinions

![alt text](https://github.com/wnokielski/CrashHelper/blob/master/Images/Profile.png)
*Profile informations*

![alt text](https://github.com/wnokielski/CrashHelper/blob/master/Images/Opinions.png)
*Opinions*

![alt text](https://github.com/wnokielski/CrashHelper/blob/master/Images/Offers.png)
*Offers submitted by Workshops*

![alt text](https://github.com/wnokielski/CrashHelper/blob/master/Images/DamagesList.png)
*List of damages*

![alt text](https://github.com/wnokielski/CrashHelper/blob/master/Images/DamagesPhotos.png)
*Damage's photos*
