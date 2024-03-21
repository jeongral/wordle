<a name="readme-top"></a>
<br />
<div align="center">
  <h3 align="center">Wordle!</h3>
  <p align="center">
    <br />
    <a href="https://jeongral.github.io/wordle/">View Demo</a>
    ·
    <a href="https://github.com/jeongral/wordle/issues">Report Bug</a>
  </p>
</div>
<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#roadmap">Challenges</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->
## About The Project

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Built With

* [![React][React.js]][React-url]

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- GETTING STARTED -->
## Getting Started

To get a local copy up and running follow these simple example steps.

### Prerequisites

This is an example of how to list things you need to use the software and how to install them.
* npm
  ```sh
  npm install npm@latest -g
  ```

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/jeongral/wordle.git
   ```
2. Install NPM packages
   ```sh
   npm install
   ```
3. Enter NPM start
   ```js
   npm start
   ```
4. Enjoy Wordle in your local environment!

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- USAGE -->
## Usage

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- ROADMAP -->
## Roadmap

- [x] Add a word database
- [x] Work on the wordle hooks to make the game actually works
    - [x] get the input from user when user types
    - [x] keep track of user guess using a single String array object
    - [x] check the game condition every turn
    - [x] reset the game when it is a game over (whether it is win or lose)
- [x] Make the grid and keyboard components color changes regarding the correctness of the user guess
- [x] Add an appear animation when user types
- [x] Make the website responsive using css media
- [x] Add a loading screen
- [x] Add a help/statistics/reset buttons
- [ ] Make the keyboard works so that clicking on the keyboard buttons works same as typing
- [ ] Multi-language Support
    - [ ] Korean
    - [ ] Japanese
- [ ] Add a light-mode theme
- [ ] Add a custom-game mode (accepting a custom solution from user)
- [ ] Allow user to save the stat by adding register/login feature

See the [open issues](https://github.com/jeongral/wordle/issues) for a full list of proposed features (and known issues).

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CHALLENGE -->
## Challenges

* I tried to reuse the handleKeyup function to the individual keys so that when user clicks on a button, it works same as typing. However, it keeps returning undefined value from Keyboard to the handleKeyup function in the hooks folder.
    * If you know how to fix this issue, please let me know! (I'll really appreciate it)
* I tried to add the animation to the most current row component only by setting id to it, but unfortunately, ids of all row components get changed simultaneously. Hence, it resulted to the case of all components shaking, not the most current row component.
    * I need to make the id static so that the id doesn't change after
* I need to workon responsibility more
    * It still looks very wacky in mobile
    * I need to change the css of icons
<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/feature-name`)
3. Commit your Changes (`git commit -m 'Add some feature-name'`)
4. Push to the Branch (`git push origin feature/feature-name`)
5. Open a Pull Request

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTACT -->
## Contact

Esther Jeongran Lee - leejesther96@gmail.com

<p align="right">(<a href="#readme-top">back to top</a>)</p>
