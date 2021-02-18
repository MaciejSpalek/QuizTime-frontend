import { capitalizeFirstLetter } from '../string';

describe("String helpers", ()=> {
    test("Check if funtion return string with capitalized first letter", ()=> {
        const exampleString = capitalizeFirstLetter("example");
        expect(exampleString).toBe("Example")
    })
})