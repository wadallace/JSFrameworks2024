export default async () => {
  return {
    testEnvironment: "jsdom",
    setupFilesAfterEnv: ["<rootDir>/src/setupTests.js"],
    modulePathIgnorePatterns: ["<rootDir>/node_modules/"],
    moduleNameMapper: {
      "^.+\\.(css|less|scss)$": "identity-obj-proxy",
      "^.+\\.svg$": "jest-svg-transformer",
    },
  };
};
