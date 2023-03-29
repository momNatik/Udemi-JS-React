function getPropertyValueByPath(instance, path) {
    const pathParts = path.split(".");
  
    var currentRoot = instance;
  
    pathParts.forEach((pathPart) => {
      currentRoot = currentRoot[pathPart];
    });
  
    return currentRoot;
    
  }
  
  function fillTemplate(instance, template) {
    const regex = /\$\{(\w+(\.\w+)*)\}/g;
    const result = template.replaceAll(regex, (match, g0) =>
      getPropertyValueByPath(instance, g0)
    );
  
    return result;
   
  }

  const t = { 
    name: "Petya",
    surname: "Pupkin",
    languages: ["en", "ru"],
    properties: {
      a: "PropertyA",
      b: "PropertyB",
      c: {
        d: "PropertyD",
      },
    },
  };
  
  console.log(
    fillTemplate(
      t,
      "Меня зовут ${name} ${surname}. Я владею следующими языками ${properties.c.d}.",
    )
  );
