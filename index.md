## Welcome localization web application an AngularJS App with Yeoman

Here we see how localization is possible with angular 1.4 and for creating angular structure we are using Yeoman

### Steps

```markdown
#Creating an AngularJS App with Yeoman
##-Install yo, grunt-cli, bower, generator-angular and generator-karma: (For First Time)
    ->npm install -g grunt-cli bower yo generator-karma generator-angular

##-Make a new directory, and cd into it:
    ->mkdir my-new-project

##-Run yo angular, optionally passing an app name:
    ->yo angular [app-name]
    ->select "NO" for gutfile insed of grunt
    ->select "NO" for use Sass (with compass)
    ->Rest select yes

##-To run it in you browser with the live-reload, on any changes, just run:
    ->grunt serve
```

### Angular Dependency

For angular localization we are going to use i18n

```markdown
-We have to download libraries and include them in the project.
-Then we'll need to provide translation files and set them working.
-Next, we will change angular $locale after the language change.
-Once step 4 is complete, we need to have the drop-down with the list of languages to select from.
-Lastly, the selected language should be stored and applied after the page reloads.
```
