# Brookfield

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) using [Nrwl Nx](https://nrwl.io/nx).

## Nrwl Extensions for Angular (Nx)

<a href="https://nrwl.io/nx"><img src="https://preview.ibb.co/mW6sdw/nx_logo.png"></a>

Nx is an open source toolkit for enterprise Angular applications.

Nx is designed to help you create and build enterprise grade Angular applications. It provides an opinionated approach to application project structure and patterns.


## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).


## Overview of app structure

_Note: The structure approach is mostly influenced by conbination of Victor Savki's book "Enterprise Angular Monorepo Patterns" and examples from Venturplex projects_

*Apps* - (From the guide):
An app produces a binary. It contains the minimal amount of code required to package many libs to create an artifact that is deployed.
Apps are meant only to organize other libs into a deployable artifact - there is not a lot of code present in the applications outside of the module file and maybe a some basic routing.
All of the application’s code is organized into libs.

*Libs* - A lib is a set of files packaged together that is consumed by apps. It has units that build up a application - features, data-services, everything state-related, etc.
Lib is usually a module, and has a barrel file that exports the lib’s public API.


## Our app structure




```
apps 
- portal
...

libs

- material	// lib for importing Angular Material Modules

- common			// things that can be shared between different apps.
- - styles			// lib for variables to be used across libs and apps
- - ui-components 	// lib for components, which can be shared across different apps
- - utilities		// lib for utility services, which can be shared across different apps

- portal		// everything that intended to be used only across ‘portal’ app
- - feature 	// grouping folder for features that form the ‘portal’ app. 
			  	// Each is a module, usually lazy loaded, that has it’s ‘container’ and ‘presentational’ components, specific only to this feature.

- - shared-components	// lib for components which may be reused within the ‘portal’ app (modals, selects, filters, header, footer, etc.)

- - core-data		// grouping folder for data-services
- - - generated		// everything generated, module + folders, split by features
- - - feature		// feature-related data-services
- - - - interface 
- - - - http service 
- - - utils			// utils to be used across ‘portal’ app
- - - common
- - - - interceptors
- - - - error handlers

- - core-state
- - - feature
- - - - actions
- - - - reducers
- - - - effects
- - - - facade
```



# CLI commands for generating things:

Below are listed some of most commonly used commands so far. We’ll be adding more as we use them.

All can be found [here](https://nx.dev/getting-started/what-is-nx) under _CLI Schematics_.
We can also run any of the generate commands with —-help to get usage details.
_Ex:_ `ng g lib --help`. 

## Generating lib:

Command: `ng g lib {{ lib-name }} [options]`

_Example:_ `ng g lib empower --directory portal/feature --routing=true --parent-module=apps/portal/src/app/app-routing.module.ts --lazy --tags=scope:empower,type:feature`

Options:

`--directory={{ path }}` // path relative to *libs* folder, where the lib will be generated

`--routing=true` 		// add router configuration

`-—lazy` 				// Add _RouterModule.forChild_ when set to true, and a simple array of routes when set to false.

`--parent-module={{ pathToParentModule }}` // path to parent module for registering lib's routes as child routes. From project root.

`--tags=scope:{{ scope }},type:{{ type }}` (see below)

`{{ scope }}` - logical grouping, business use-case, or domain. May be routing group, general feature or collection of pages the lib belongs to. Ex. `community`, `resources`

`{{ type }}` - one of 4: _feature, ui, data-access_ or _utility_.


*Note on lazy loading*: _In some cases, when creating lazy-loaded libraries, you need to manually add an entry to the `tsconfig.app.json` file of the parent module app, so TypeScript knows to build it as well_.


## Generating component

Command:

`ng g c containers/{{component-name}} --project={{ project-name }}`
`ng g c presentational/{{component-name}} --project={{ project-name }}`


`{{ project-name }}` - lib, whose module will be registering and containing the component. `{{ project-name }}` can be found in `nx.json` file.

_Example_: `ng g c containers/empower --project=portal-feature-empower`
