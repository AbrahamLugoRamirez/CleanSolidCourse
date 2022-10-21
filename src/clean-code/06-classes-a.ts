(() => {
  type Gender = "M" | "F";
  class Person {
    public name: string;
    public gender: string;
    public birthdate: Date;

    constructor(name: string, gender: string, birthdate: Date) {
      this.name = name;
      this.gender = gender;
      this.birthdate = birthdate;
    }
  }

  const newPerson = new Person("Abraham", "M", new Date("1999-01-31"));
  console.log({newPerson})
})();
