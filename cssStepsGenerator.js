let remSteps = ["0", "0.25rem", "0.5rem", "1rem", "1.5rem", "2rem", "3rem"];
let pxSteps = ["0", "0.5px", "1px", "2px", "3px", "4px"]

function cssGeneratorSingleProperty(className, cssProperty, values) {
  let outputString = "";
  let i = 0;
  for (value of values) {
    outputString += `.${className}-${i}{
        ${cssProperty}: ${value};
      }
      `
    i++;
  }
  console.log(outputString);
}

cssGeneratorSingleProperty("bw", "border-width", pxSteps);


function cssGeneratorTwoProperty(className, cssProperty1, cssProperty2, values) {
  let outputString = "";
  let i = 0;
  for (value of values) {
    outputString += `.${className}-${i}{
        ${cssProperty1}: ${value};
        ${cssProperty2}: ${value};
      }
      `
    i++;
  }
  console.log(outputString);
}

// cssGeneratorTwoProperty("py", "padding-top", "padding-bottom", values);