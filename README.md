I/ Project summary:
    - To do 2 challenges by creating ionic project.
    - The application can run in browser and mobile web, or mobile native.
    - The application allows user to search the list of the user information by typing in the text box in All User page.
    - The application will have different layout when running in different device resolution.
II/ Features want to showcase:
    - Familiar with working with ionic, angular, typescript.
    - The basic code structure for the project:
        + Separate code for components, provider, pages.
        + Each of component have one specific task. For example: user-list, user-item, etc..
    - The way data model is used in application
        + UserProvider handle to retrieve user info list data. Can specify where data is comming from(eg: backend service or localstorage, etc..).
        + UserInfo data model to manipulate the user data. For example it has getFromNow method and is used in user-item component. All the bussiness logic and any logic related to data need to put here.
    - The solution that display different layout base on the device resolution:
        + one solution is using css. For example the home page display differently just by css.
        + another solution is adding the logic to determine it's mobile or browswer. Base on that flag, in the user-item component, we use different template accordingly.
III/ Reason why choose ionic:
    - Ionic uses angular under the hood. And angular support many convenient ways to develop a big application like: Typing in TypeScript, Dependency injection, Routing, Binding data, etc..
    - Ionic provides the list of components that is customized for mobile solution. It supports cli command line and allows to speed up development and build process.
    - Ionic allows to build hybrid application.
