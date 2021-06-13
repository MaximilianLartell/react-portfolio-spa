const skills = (key) => {
  return {
    programmingLanguages: [
      { l: 'JavaScript', i: 'javascript.svg' },
      { l: 'TypeScript', i: 'typescript.svg' },
    ],
    frontEnd: [
      { l: 'HTML5', i: 'html5.svg' },
      { l: 'CSS3', i: 'css3.svg' },
      { l: 'React', i: 'react.svg' },
      { l: 'Material-UI', i: 'material-ui.svg' },
      { l: 'React Router', i: 'react-router.svg' },
      { l: 'Redux', i: 'redux.svg' },
      { l: 'Redux-Saga', i: 'redux-saga.svg' },
    ],
    backEnd: [
      { l: 'Node.js', i: 'nodejs.svg' },
      { l: 'Express', i: 'express.svg' },
      // { l: 'Graphql', i: 'graphql.svg' },
    ],
    databases: [
      { l: 'MongoDB', i: 'mongodb.svg' },
      { l: 'PostgreSQL', i: 'postgresql.svg' },
      // { l: 'Firebase', i: 'firebase.svg' },
    ],
    versionControll: [{ l: 'Git', i: 'git.svg' }],
    tools: [
      { l: 'VS Code', i: 'vscode.svg' },
      { l: 'Mocha', i: 'mocha.svg' },
      { l: 'Jest', i: 'jest.svg' },
    ],
  };
};

export default skills;
