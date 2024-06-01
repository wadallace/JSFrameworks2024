import { expect } from "chai";
import {
  greeter,
  highestNumber,
  combineArray,
  combineObject,
  onlyEvenValues,
  removeVowels,
  getIsHungryText,
  getTempOfTomorrow,
  addItems,
  removeDuplicates,
  doubleValues,
} from "./../00-review.js";

import path from "path";
import fs from "fs";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const reviewQuestionsPath = path.resolve(__dirname, "../00-review.js");
const greeterFilePath = path.resolve(__dirname, "../greet.js");

describe("greet", () => {
  it('should have a new file named "greet.js" inside of "exercises/00-review/". (NOTE that this is case sensitive)', () => {
    expect(fs.existsSync(greeterFilePath)).to.be.true;
  });
  it('"greet.js" should have the "greet" function inside of it', () => {
    const fileContents = fs.readFileSync(greeterFilePath, "utf8");
    expect(fileContents).to.match(/const\s*greet/);
  });
  it('"greet.js" should have an export statement', () => {
    const fileContents = fs.readFileSync(greeterFilePath, "utf8");
    expect(fileContents).to.match(/export/);
  });
  it('"00-review.js" should import the "greet" function from "greet.js"', () => {
    const fileContents = fs.readFileSync(reviewQuestionsPath, "utf8");
    expect(fileContents).to.match(/import\s*greet\s*from/);
  });
  it('The "greet" function should work, even after you move it to a different file', () => {
    expect(greeter).to.be.a("function");
    const greeting = greeter("Twinkle Toes");
    expect(greeting).to.equal("Hello Twinkle Toes!");
  });
});

describe("highestNumber", () => {
  it("should return the highest number in the array", () => {
    expect(highestNumber([1, 10, 2, 3, 4])).to.equal(10);
    expect(highestNumber([-1, -5, -4])).to.equal(-1);
  });
});

describe("combineArray", () => {
  it("should merge both arrays using the spread operator", () => {
    const combinedArray = combineArray(["HTML"], ["CSS"]);
    expect(combinedArray).to.have.all.members(["HTML", "CSS"]);
    const funcStr = combineArray.toString();
    expect(funcStr).to.match(/\[\s?\.\.\./);
  });
});

describe("combineObject", () => {
  it("should combine two objects and return a single object", () => {
    const obj1 = {
      firstName: "Clark",
    };
    const obj2 = {
      lastName: "Kent",
    };
    const combinedObj = combineObject(obj1, obj2);
    expect(combinedObj).to.deep.equal({
      firstName: "Clark",
      lastName: "Kent",
    });
  });
});

describe("doubledValues", () => {
  it("should use Array.map to return an array where every number in the array is doubled", () => {
    const doubledValues = doubleValues([2, 3, 4]);
    expect(doubledValues).to.have.all.members([4, 6, 8]);
    const funcStr = doubleValues.toString();
    expect(funcStr).to.contain(".map");
  });
});

describe("onlyEvenValues", () => {
  it("should return only even numbers in an array", () => {
    expect(onlyEvenValues([1, 2, 3])).to.have.all.members([2]);
    expect(onlyEvenValues([5, 1, 2, 3, 10])).to.have.all.members([2, 10]);
  });
});

describe("removeVowels", () => {
  it("removes all vowels from the string and lower case each letter", () => {
    expect(removeVowels("Elie")).to.equal("l");
    expect(removeVowels("TIM")).to.equal("tm");
  });
});

describe("getIsHungryTextString", () => {
  it("should use a ternary expression instead of an if ... else statement", () => {
    const getIsHungryTextString = getIsHungryText.toString().split(" ");

    expect(getIsHungryTextString.includes("?")).to.be.true;
    expect(getIsHungryTextString.includes(":")).to.be.true;

    expect(getIsHungryText()).to.equal("Keep coding!");
  });
});

describe("getTempOfTomorrow", () => {
  it("should use destructuring and return the right values. (NOTE this will return a false positive. It will pass, even if you do not use destructuring.)", () => {
    expect(getTempOfTomorrow()).to.equal(
      "Today's temperature is 77.5.\nTomorrow's temperature is 79"
    );
  });
});

describe("addItems", () => {
  it("should use reduce to return the sum of all the values inside the array", () => {
    expect(addItems([1, 5, 6])).to.equal(12);
    const funcStr = addItems.toString();
    expect(funcStr).to.contain(".reduce");
  });
});

describe("removeDuplicates", () => {
  it("should remove duplicates from the array", () => {
    expect(removeDuplicates([1, 1, 1, 2, 2, 5, 5])).to.have.all.members([
      1, 2, 5,
    ]);
  });
});
