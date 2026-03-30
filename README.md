# Restaurant Page

A dynamic restaurant website built with vanilla JavaScript, HTML, and CSS as part of [The Odin Project](https://www.theodinproject.com/lessons/node-path-javascript-restaurant-page) curriculum. This project demonstrates DOM manipulation and modular JavaScript by dynamically rendering all content through JavaScript modules.

## 🎯 Project Overview

This project focuses on creating a restaurant homepage that renders content entirely via JavaScript, with tabbed navigation between different sections (Home, Menu, and About). The goal is to practice webpack configuration, ES6 modules, and dynamic DOM manipulation.

## ✨ Features

- **Dynamic Content Rendering**: All page content is generated through JavaScript
- **Tabbed Navigation**: Seamless switching between Home, Menu, and About sections
- **Modular Architecture**: Clean separation of concerns with ES6 modules
- **Webpack Integration**: Bundled with webpack for optimized asset management


## 🛠️ Technologies Used

- HTML5
- CSS3
- JavaScript (ES6+)
- Webpack
- npm

## 🚀 Getting Started

### Prerequisites

- Node.js installed on your machine
- npm (comes with Node.js)

### Installation

1. Clone the repository
```bash
git clone https://github.com/jormaedes/restaurant-page.git
cd restaurant-page
```

2. Install dependencies
```bash
npm install
```

3. Run development server
```bash
npm start
```

4. Build for production
```bash
npm run build
```

## 📁 Project Structure

```
restaurant-page/
├── src/
│   ├── js/
│   │   ├── about.js
│   │   ├── create-footer.js
│   │   ├── home.js
│   │   └── menu.js
│   ├── index.js
│   ├── styles.css
│   └── template.html
├── .gitignore
├── package-lock.json
├── package.json
├── webpack.config.js
└── README.md
```

## 🎓 Learning Outcomes

Through this project, I learned:
- Setting up and configuring webpack
- Working with ES6 modules and imports/exports
- Dynamically manipulating the DOM with JavaScript
- Organizing code into reusable modules
- Managing project dependencies with npm

## 🔮 Future Improvements

- [x] Add a custom logo and favicon for better branding
- [x] Implement custom fonts to enhance typography
- [x] Expand the menu section with more dishes and categories
- [x] Improve the About section layout and content
- [x] Add smooth page transitions/animations between sections
- [x] Implement a "Make Reservation" button with modal functionality
- [x] Create a Contact section with location map and contact form
- [x] Implement Responsive design

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- [The Odin Project](https://www.theodinproject.com/) for the excellent curriculum
- The web development community for inspiration and resources

---

**Live Demo**: [jormaedes.github.io/restaurant-page/](https://jormaedes.github.io/restaurant-page/)