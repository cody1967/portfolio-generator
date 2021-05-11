const profileDataArgs = process.argv.slice(2, process.argv.length);
const name = profileDataArgs[0];
const github = profileDataArgs[1];
const generatePage = () => 'Name: Jane, Github: janehub';

const generatePages = (userName, githubName) => {
  return `
Name: ${userName}
Github: ${githubName}
 `;
};
console.log(generatePages(name, github))



