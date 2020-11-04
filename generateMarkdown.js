// function to generate markdown for README
const generateMarkdown = (data) => {
  return `# ${data.title}
  [![License: ${data.licenseBadge}](https://img.shields.io/badge/License-${data.licenseBadge}-blue.svg)](https://opensource.org/licenses/${data.license})
  ## Description
  ${data.description}
## Table of Contents

* [Installation](#installation)
* [Usage](#usage)
* [Contributing](#usage)
* [Test](#test)
* [Questions](#questions)
* [License](#license)

## Installation

${data.installation}

## Usage

${data.usage}

## Contributing

${data.contributing}

Happy Editing!

## Test

${data.test}

## Questions

You can reach me via:
* **GitHub:** [${data.username}](https://github.com/${data.username})
* **E-mail:** [${data.email}](${data.email})

## License

Go to [${data.license}](${data.license}) for license description.
`;
};

module.exports = generateMarkdown;
