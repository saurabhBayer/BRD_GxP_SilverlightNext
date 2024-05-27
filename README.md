# Saurabh 05/01/2024 ver. 1 - setting up BRD_GxP_SilverlightNext project structure
# Saurabh 05/25/2024 ver. 1.1 - drafting BRD_GxP_SilverlightNext project Release R2 tasks 


# project abbreviations 
#PLC - Passlink Cloud Server
#PLC Infra - PassLink Cloud Infra
#PLC API - PassLink Cloud APIs
#PLC APP - PassLink CLoud Management Web App
#PLC Mobile UI APP - PassLink Mobile Web UI 

#PLM - PassLink Mobile App for iOS & Android (bare bone App)
#PLA - PassLink Adapter (for Injector Devices)

# project directories definition

# iot-auth-api - common IOT login auth management endpoints [hosted on PLC] 
# iot-device-app - mobile device app supporting iOS and android
# iot-libraries - common IOT business logic libraries 
# passlink-api - endpoints for passlink based functions 
# passlink-app - ui for passlink based functions 
# passlink-platform - logic for injector based passlink functions


# project detail coverage

#PLC Infra - Git Repo: ..separate repo
# spin up EC2s and cloud configurations (teraform scripts)
1) spin up EC2s for DEV, STG, QA, PROD
2) ..

#PLC API - Git Repo: Passlink_ServerAPI
# APIs for user management (PLC APP) - on Bayer VPN Gateway only
# APIs for mobile users (PLC Mobile APP) & PLM - on Public domain
1) set NestJS Framework
2) spin up mongoDB instance 
3) define and set user and appLog object (without mongoose)
4) create 1st APIs - upsertUser (to insert, update, inactive)
5) create 2nd API - loginUser for PLC App (private with static JWT Auth)
6) create 3rd API - loginUser for PLM App (public with dynamic JWT Auth)
7) create 4th API - appLog for PLM, PLC App for User Info (public with dynamic JWT Auth)
(* UserLog contains only user login time, user accepting terms conditions, user reseting password only. In this release, it will not contain Mobile-Injector connectivty or Injector Service Tool logs)
8) docker script for API hosting 
9) unit testing setup with jasmine

#PLC APP
# web app for user management
1) setup Angular, NestJs Framework, scss*?
2) screen for login page
3) master screen for user dashboard page
4) modal popup screen for user insert, update 
5) screen for user activty log viewer 

#PLC Mobile APP  - merge with PLC App or PLM App?
# web app for mobile devices
1) setup Angular, NestJs Framework with capacitor, ionic, tailwind css*?
2) screen for login page
3) screen for service access option
4) screen for wired and QR code option
5) screen for user profile

#PLM - Git Repo: Passlink_Mobile
# bare bone mobile app for iOS and Android
1) setup Angular, NestJs Framework with capacitor, ionic
2) backend interfaces for biometric, usb data transfer, web message transfer, mobile settings transfer like keychain data, theme, etc

#PLA - Git Repo: Passlink_Platform
# APIs for Mobile app & Injector connection. 
1) set NestJS Framework
2) backend interfaces for Mobile app & Injector connection like handshake, cipher usb data transfer
3) backend interface for QR code cipher interpreter 
4) create API for generateQR code 
5) create API for unlock via QR code 
6) create API for unlock via wired code 
7) installer script for run app as windows service

