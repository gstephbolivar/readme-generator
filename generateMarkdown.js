// function to generate markdown for README
const generateMarkdown = (data) => {
  return `# ${data.title}
  ## Description
  ${data.description}
## Table of Contents

* [Installation](#installation)
* [Usage](#usage)
* [Contributing](#usage)
* [Test](#test)
* [Feedback](#feedback)
* [License](#license)

## Installation

${data.installation}

## Usage

${data.usage}

## Contributing

${data.contributing}

## Test

${data.test}

## Questions

${data.questions}

## License

// ${data.licence}
`;
}

module.exports = generateMarkdown;
