#!/usr/bin/env node

import chalk from 'chalk';
import boxen from 'boxen';
import figlet from 'figlet';

// Define your profile details
const data = {
    name: "Pradeepto Sarkar",
    handle: "@pradeeptosarkar",
    work: "Full-stack Software Developer",
    location: "New Delhi, India",
    website: "https://pradeeptosarkar.netlify.app",
    github: "https://github.com/pradeeptosarkar",
    leetcode: "https://leetcode.com/pradeeptosarkar",
    email: "mailto:pradeeptosarkarmail@gmail.com"
};

const funFacts = [
    "I love coding in JavaScript.",
    "I'm an avid reader.",
    "I enjoy solving puzzles and problems.",
];

const quotes = [
    "Code is like humor. When you have to explain it, it’s bad.",
    "First, solve the problem. Then, write the code.",
    "Experience is the name everyone gives to their mistakes.",
    "In order to be irreplaceable, one must always be different."
];

// Generate ASCII art with custom text and options
const generateAsciiArt = (text) => {
    return new Promise((resolve, reject) => {
        figlet(text, {
            font: 'Standard',
            horizontalLayout: 'default',
            verticalLayout: 'default',
            width: 80,
            whitespaceBreak: true
        }, (err, data) => {
            if (err) {
                reject(err);
            }
            resolve(data);
        });
    });
};


// Function to display the profile
const displayProfile = async (color) => {
    const output = `
${chalk[color](data.name)}
${chalk[color](data.handle)}
${chalk.white(data.work)}
${chalk.white(data.location)}

${chalk.bold("Website:")} ${chalk.cyan(data.website)}
${chalk.bold("GitHub:")} ${chalk.cyan(data.github)}
${chalk.bold("LeetCode:")} ${chalk.cyan(data.leetcode)}
${chalk.bold("Email:")} ${chalk.cyan(data.email)}
`;

    const boxenOptions = {
        padding: 1,
        margin: 1,
        borderStyle: "round",
        borderColor: color,
        backgroundColor: "#555555"
    };

    console.log(boxen(output, boxenOptions));
};

// Function to display ASCII art
const displayAsciiArt = async () => {
    const asciiArt = await generateAsciiArt('Pradeepto Sarkar');
    console.log(chalk.blue(asciiArt));
};


// Display a random fun fact
const displayFunFact = () => {
    const fact = funFacts[Math.floor(Math.random() * funFacts.length)];
    console.log(chalk.yellow(`\nFun Fact: ${fact}`));
};

// Display a random quote
const displayQuote = () => {
    const quote = quotes[Math.floor(Math.random() * quotes.length)];
    console.log(chalk.magenta(`\nQuote: ${quote}`));
};

// Display all features
const main = async () => {
    const color = 'green'; // You can customize the color here

    await displayProfile(color);
    await displayAsciiArt();
    displayFunFact();
    displayQuote();
};

main().catch(error => {
    console.error(chalk.red("Something went wrong:", error));
});
