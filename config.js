// credit to: https://codingsans.com/blog/node-config-best-practices for config file structure
const env = process.env.NODE_ENV ? process.env.NODE_ENV : 'development';

const development = {
    sportsRadarBaseUrl: "http://api.sportradar.us/draft/nfl/trial",
    sportsRadarApiKey: "7gpb67pwf2ds79q6bxqskmds"
};

const staging = {
    appName: "Node Console Boilerplate - Staging"
};

const production = {
    appName: "Node Console Boilerplate - Production"
};

const config = {
    development,
    staging,
    production
};

export default config[env];
