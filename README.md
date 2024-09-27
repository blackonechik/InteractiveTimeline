# Interactive timeline

<img src="https://github.com/blackonechik/InteractiveTimeline/blob/main/demo.gif?raw=true">

<br>

<p align="center">
    <img src="https://img.shields.io/badge/Version-1.0.0-blue" alt="Game Version">
    <img src="https://img.shields.io/badge/License-MIT-success" alt="License">
</p>

## Overview

This project implements a **time segment block** based on a provided design mockup. The block presents a timeline with several time intervals, each containing multiple events. 

When a time interval is selected, the associated numbers change, and a new slider appears below it with detailed information about key events in that active time segment.

The block supports **2 to 6 time intervals**, and all interactive points are evenly spaced along the circumference of a circle.

### Key Features
- **Self-Contained**: The block is independent of other page logic. You can add multiple instances without affecting the layout or functionality.
- **Design Compliance**: All lines and elements in the mockup are integrated into the layout, not just for reference.
- **Responsive Slider**: Displays key event details dynamically as time intervals are switched.

## Technology Stack

- **React**: For building user interfaces.
- **TypeScript**: For type safety and enhanced development experience.
- **SASS**: For styling the components.
- **Swiper**: For implementing the responsive slider functionality.
- **Framer Motion**: For smooth animations and transitions.
- **Vite**: As the build tool for fast development.

## Demo

You can see a demonstration of the block in action with the maximum number of time segments by following this link to the design mockup: [Figma Mockup](https://www.figma.com/file/YXCbNT4Jf9INk62BKTZw1z/%D0%A2%D0%B5%D1%81%D1%82%D0%BE%D0%B2%D0%BE%D0%B5-%D0%B7%D0%B0%D0%B4%D0%B0%D0%BD%D0%B8%D0%B5?node-id=0%3A1).

## Installation

To get started, clone the repository and install the dependencies:

```bash
git clone https://github.com/blackonechik/InteractiveTimeline
cd InteractiveTimeline
npm install
```

## Usage

Run the project in development mode:

```bash
npm run dev
```

Open your browser and navigate to `http://localhost:3000` to see the block in action.

## Contributing

If you'd like to contribute to this project, please fork the repository and create a pull request.

## License

This project is licensed under the MIT License. 

Feel free to reach out if you have any questions or suggestions!