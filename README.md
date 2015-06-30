# Page100

> A Tinder for Books

## Team

  - __Product Owner__: Valerie Liang
  - __Scrum Master__: Chris Clayman
  - __Development Team Members__: Jake Seiden, Danielle Blank

## Table of Contents

1. [Usage](#Usage)
1. [Requirements](#requirements)
1. [Development](#development)
    1. [Installing Dependencies](#installing-dependencies)
    1. [Tasks](#tasks)
    1. [ToDos](#todos)
1. [Team](#team)
1. [Contributing](#contributing)
1. [Product Development - User Stories]

## Usage

> Some usage instructions

## Requirements

- Node 0.10.x


## Development

### Installing Dependencies

From within the root directory:

```sh
sudo npm install -g bower
npm install
bower install
```

### ToDos
- Design
  - Android/ios specific design
  - Splash pages for login/signup

- User Experience
  - Notification for "Pulling More Books"
  - Additional genres
  - Be able to click on stack view to see additional details about books
  - Add rating to Main view of book swiping

- Social Sharing
  - Save and share stacks with other users

- API
  - Find a way to streamline book pulling process - right now only able to pull partial data from Gutenberg Books API (author, title, genre)




### Running the App

Check out the [ionic framework docs](http://ionicframework.com/getting-started/) for cli information, and for how to set up mobile emulation.

From within the app directory:

```
//to serve on browser for development
ionic serve

//to emulate on phone emulator
ionic build
ionic emulate ios //or
ionic emulate android

//to run on a phone, make sure phone has dev settings on
ionic build
ionic run ios //or
ionic run android
```

### Server

Server is currently set up via Digital Ocean. Please [email Chris](mailto:claymanchris@gmail.com) for login credentials and SSH keys.
MongoDB is currently set up via MobgoLabs. Please [email Chris](mailto:claymanchris@gmail.com) for login credentials.


## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md) for contribution guidelines.

## Product Development - User Stories
See [PRODUCTDEV.md](PRODUCTDEV.md) for user stories and other product development details
