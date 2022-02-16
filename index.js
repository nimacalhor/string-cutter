const txt = "Install Bootstrap’s source Sass and JavaScript files via npm, Composer, or Meteor.Package managed installs don’t include documentation or our full build scripts.You can also use our npm template repo to quickly generate a Bootstrap project via npm."

// const txtCutter = (txt, char = 70) => txt.split("").splice(0, char).join("") + ' ...'
const txtCutter = function (txt, char = 70) {
    const newTxt = txt;
    return newTxt.slice(0, char) + " ..."
}
