# Star Wars Favorites mobile application

The mobile application based on `React Native` for `iOS` & `Android` platforms that gives the ability to indicate the total amount of **_male_/_female_/_other_** favourite characters across **the Star Wars Universe**.



# Features
- [x] The list of all characters and favorites is divided into different screens
- [x] A separate screen where full extra character information is displayed after clicking on the character card
- [x] Accumulation of favorite characters from the general list is available
- [x] Counts the total number of male/female/other characters based on the user's selection and display it on the favorite characters screen
- [x] The list of favorite characters is stored in the local storage
- [x] Available character search by name, year of birth, gender, home world on both screens (favorites and the entire list of characters)
- [x] Additional data is available for download if it's available ("LOAD MORE" button)
- [x] The "CLEAR FANS" button resets all previously added favorites characters and make all total count values ​​equal to zero.




# Getting started
These are instructions for setting up your project locally. Follow these simple example steps to run a local copy.
> [!Note]
> This requires a version of `node` greater than or equal to 16

## Installation
Below is instruction of how you can instruct to installing and setting up application. To get started, you need to complete the following steps.

* clone the repository:
   ```sh
   git clone https://github.com/Volod1ka/star-wars-favorites.git
   ```
   
* install `node_modules` packages:
  
	**Yarn:**
	```sh
	yarn 
	```
	**NPM:**
	```sh
	npm install
	```

* update `Pods` packages for iOS project:
	```sh
	cd ios && pod update hermes-engine --no-repo-update && cd ..
	```

> [!TIP]
> 
> **You** can run packages install and Pod update with a single command line.
> 
> **Yarn:**
> ```sh
> yarn && cd ios && pod update hermes-engine --no-repo-update && cd ..
> ```
> **NPM:**
> ```sh
> npm install && cd ios && pod update hermes-engine --no-repo-update && cd ..
> ```


## Run project

* start Metro server:

 	**Yarn:**
	```sh
	yarn start
	```
	**Other:**
	```sh
	react-native start
	```

* start for `Android`:

 	**Yarn:**
	```sh
	yarn android
	```
	**Other:**
	```sh
	react-native run-android
	```

* start for `iOS`:

	**Yarn:**
	``` sh
	yarn ios
	```
	**Other:**
	```sh
	react-native run-ios
	```



# Licence
MIT



