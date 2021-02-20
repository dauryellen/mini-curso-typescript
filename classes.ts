class UserAccount {
  public name: string;
  protected age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  logDetails(): void {
    console.log(`The player ${this.name} is ${this.age} years old.`);
  }
}

class CharAccount extends UserAccount {
  private nickname: string;
  //readonly level: number;
  public level: number;

  constructor(name: string, age: number, nickname: string, level: number) {
    super(name, age);

    this.nickname = nickname;
    this.level = level;
  }

  get getLevel() {
    return this.level;
  }

  set setLevel(level: number) {
    this.level = level;
  }

  logCharDetails(): void {
    console.log(
      `The player ${this.name} is ${this.age} years old and has the char ${this.nickname} at level ${this.level}`
    );
  }
}

const daury = new UserAccount("Daury", 32);
console.log(daury);
//console.log(daury.age);
daury.logDetails();

const pedro = new CharAccount("Pedro", 41, "henriquepedro", 100);
console.log(pedro.name);
pedro.logDetails();
pedro.logCharDetails();

pedro.setLevel = 99;

console.log(pedro.getLevel);
