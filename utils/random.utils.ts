import { faker } from "@faker-js/faker";

class RandomUtils {
    randomFirstName() {
        return faker.person.firstName();
      }
      randomLastName() {
        return faker.person.middleName();
      }
      randomEmail() {
        return faker.internet.email();
      }
      randomPhooneNumber(){
        return faker.string.numeric(7)
      }
      randomText(){
        return faker.lorem.word(5)
      }
}
  
export default new RandomUtils();
  
  
  
  
  
  
  
  
  
 