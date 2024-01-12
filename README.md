<a name="readme-top"></a>

[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![GNU License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]

<br />
<div align="center">
  <a href="https://github.com/jamestkelly/is-my-coffee-cold">
    <img src="doc/img/logo.png" alt="Logo" width="80" height="80">
  </a>

  <h3 align="center"><code>is-my-coffee-cold</code></h3>

  <p align="center">
    A full-stack web application to calculate how long you have until your coffee goes cold.
    <br />
    <a href="https://github.com/jamestkelly/is-my-coffee-cold"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://github.com/jamestkelly/is-my-coffee-cold">View Demo</a>
    ·
    <a href="https://github.com/jamestkelly/is-my-coffee-cold/issues">Report Bug</a>
    ·
    <a href="https://github.com/jamestkelly/is-my-coffee-cold/issues">Request Feature</a>
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
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

## About The Project

[![Product Name Screen Shot][product-screenshot]](https://is-my-coffee-cold.web.app)

`is-my-coffee-cold` is a simple full-stack web application built to calculate the amount of time you have until your coffee goes cold, i.e., becomes _undrinkable_. The application achieves this through the combination of localised weather data sourced via external API calls alongside the [Huen's method](https://en.wikipedia.org/wiki/Heun%27s_method) (otherwise referred to as the modified Euler method) for interpolating polynomials and [Newton's law of cooling](https://en.wikipedia.org/wiki/Newton%27s_law_of_cooling).

Essentially, the crux of this application is equating the point at which the temperature of a coffee, $t$, is less than the _undrinkable_ threshold supplied, e.g., $t_{x} = 40$ degrees Celcius. The primary equation being that of Newton's law of cooling:

$$ T = Ce^{-kt} + T\_{a} $$

To briefly summarise the mathematics utilised, in interpolation, we are generally given a set of $(x, y)$ coordinates. Given this, we can determin a function $f$ that passes between these two points. While, a second-order function, e.g., Taylor's method would provide higher accuracy than Huen's method; the requirement to differentiate $f(t, y)$ makes the gains in accuracy not entirely worth the loss in optimisation. As such, instead of differentiating $f(t, y)$ directly, we use a numerical approximation to the derivative.

Given a _derivative_ of a function is the limiting value of the slope of the line connecting two points on a curve, then for suitably small values of step-size $h$, it is possible to use the following approximation.

$$ f'(t*{i}, y*{i}) \approx \frac{f(t*{i+1}, y*{i+1}) - f(t*{i}, y*{i})}{h}$$

Then using Euler’s method to approximate $y_{i+1}$ on the right-hand side (RHS) to second order locally we derive what is called the modified Euler method. The mathematical explanation of this can be seen [here](https://web.physics.utah.edu/~detar/phys6720/handouts/ode/ode/node3.html). Notably, this equation **does not** take into account the impacts of say being indoors compared to outdoors or the material the coffee cup is made of. Rather it assumes that the temperature of the coffee will change in direct proportion to the surrounding temperature in the area.

The remainder of the application follows standard paradigms for [CRUD](https://budibase.com/blog/crud-app/) applications, albeit expanded to a full-stack pattern with a back-end API load-balanced via an API Gateway.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Built With

The following are the main languages and technologies utilised in building the application.

- [![Docker][Docker.com]][Docker-url]
- [![Go][Go.dev]][Go-url]
- [![Oracle Cloud Infrastructure][Oracle.dev]][Oracle-url]
- [![React][React.js]][React-url]
- [![TypeScript][TypeScript.ts]][TypeScript-url]

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- GETTING STARTED -->

## Getting Started

To run the entire application locally you can follow either one of two options:

1. Using Docker
2. Manual execution

### Prerequisites

The following are the assumed prerequisites required for local development and usage of the application.

- `npm`
  ```sh
  npm install npm@latest -g
  ```
- `go`
  - Follow the instructions [here](https://go.dev/doc/install).
- `docker`
  - Follow the instructions [here](https://www.docker.com/get-started/).

### Installation

#### General

For both pathways in local development and usage of the application, you will need your own Firebase Admin SDK configuration. You can get one [here](https://firebase.google.com/docs/reference/admin). Once this has been completed:

1. Clone the repository
   ```sh
   git clone https://github.com/jamestkelly/is-my-coffe-cold.git
   ```
2. Copy the environment variables for each respective service
   ```sh
   cd api && cp .env.template .env && cd ../frontend && cp .env.template .env
   ```
3. Populate the environment variables for each service with the corresponding values.

#### Via Docker Compose

1. From the `root` of the repository:
   ```sh
   cd /path/to/is-my-coffee-cold
   docker compose up
   ```

#### Manual Execution

1. Install the required packages

   ```sh
   cd api
   go mod install

   cd ../frontend
   npm install
   ```

2. Initialise the back-end API server
   ```sh
   cd api
   go run cmd/server/main.go
   ```
3. Initialise the front-end
   ```sh
   cd frontend
   npm run start
   ```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- USAGE EXAMPLES -->

## Usage

Use this space to show useful examples of how a project can be used. Additional screenshots, code examples and demos work well in this space. You may also link to more resources.

_For more examples, please refer to the [Documentation](https://example.com)_

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- ROADMAP -->

## Roadmap

- [x] Build original application (re: [`is-my-coffee-cold/v1`](https://github.com/jamestkelly/is-my-coffee-cold/releases/tag/v1.0.0))
- [x] Create new design for the _new brew_, e.g., 2023 onwards.
- [ ] Build API microservice.
  - [x] Convert original `TypeScript` code to `Go` for calculating coffee temperature decay.
  - [x] Integrate Firebase Admin SDK.
  - [ ] Implement an authentication (`auth`) service.
- [ ] Abstract API microservices behind API Gateway.
- [ ] Build new front-end application.
  - [ ] Integrate with API microservice via API Gateway.
  - [ ] Integrate API microservices with front-end client application.
- [ ] Establish application life-cycle.
  - [x] Create Docker images via corresponding `Dockerfiles` for local containerised development.
    - [x] Front-end
    - [x] API
  - [ ] Implement Kubernetes for application microservices.
    - [ ] API
    - [ ] API Gateway (Kong)
  - [ ] Implement build and deploy pipeline for the front-end via Firebase.
  - [ ] Implement build and deploy pipelines for the API and API Gateway to Oracle Cloud Infrastructure.
- [ ] Add sub-repository specific `README.md` information, e.g., for the API and front-end.
- [ ] Write up documentation covering application information and host it via GitHub repository [Wiki](https://github.com/jamestkelly/is-my-coffee-cold/wiki).
- [ ] Push _stable_ release of the application.
- [ ] Create long-term roadmap.
- [ ] Implement a way for users to provide feedback and bugs beyond GitHub issues.

See the [open issues](https://github.com/jamestkelly/is-my-coffee-cold/issues) for a full list of proposed features (and known issues).

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTRIBUTING -->

## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- LICENSE -->

## License

Distributed under the GNU Affero General Public License. See `LICENSE.txt` for more information.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTACT -->

## Contact

Jim Tran kelly - jimkelly.t@outlook.com

Project Link: [https://github.com/jamestkelly/is-my-coffee-cold](https://github.com/jamestkelly/is-my-coffee-cold)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- ACKNOWLEDGMENTS -->

## Acknowledgments

The following are several references and guides used in building the application that I would like to acknowledge.

- [Best-README-Template](https://github.com/othneildrew/Best-README-Template)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[contributors-shield]: https://img.shields.io/github/contributors/jamestkelly/is-my-coffee-cold.svg?style=for-the-badge
[contributors-url]: https://github.com/jamestkelly/is-my-coffee-cold/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/jamestkelly/is-my-coffee-cold.svg?style=for-the-badge
[forks-url]: https://github.com/jamestkelly/is-my-coffee-cold/network/members
[stars-shield]: https://img.shields.io/github/stars/jamestkelly/is-my-coffee-cold.svg?style=for-the-badge
[stars-url]: https://github.com/jamestkelly/is-my-coffee-cold/stargazers
[issues-shield]: https://img.shields.io/github/issues/jamestkelly/is-my-coffee-cold.svg?style=for-the-badge
[issues-url]: https://github.com/jamestkelly/is-my-coffee-cold/issues
[license-shield]: https://img.shields.io/github/license/jamestkelly/is-my-coffee-cold.svg?style=for-the-badge
[license-url]: https://github.com/jamestkelly/is-my-coffee-cold/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/jimkellyt
[product-screenshot]: doc/img/product_screenshot.png

<!-- Built with badges-->

[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/
[Firebase.dev]: https://img.shields.io/badge/Firebase-039BE5?style=for-the-badge&logo=Firebase&logoColor=white
[Firebase-url]: https://firebase.google.com/
[Oracle.dev]: https://img.shields.io/badge/Oracle-F80000?style=for-the-badge&logo=oracle&logoColor=white
[Oracle-url]: https://www.oracle.com/au/cloud/
[Go.dev]: https://img.shields.io/badge/go-%2300ADD8.svg?style=for-the-badge&logo=go&logoColor=white
[Go-url]: https://go.dev/
[TypeScript.ts]: https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white
[TypeScript-url]: https://www.typescriptlang.org/
[Docker.com]: https://img.shields.io/badge/docker-%230db7ed.svg?style=for-the-badge&logo=docker&logoColor=white
[Docker-url]: https://www.docker.com/
