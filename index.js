module.exports = {
   async Create(name, age){
        const People = new Object;

         People.name = name;
         People.age = age;

        return People;
    }
}
