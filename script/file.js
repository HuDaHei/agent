const inquirer = require("inquirer");
const chalk = require("chalk");
const figlet = require("figlet");
// const shell = require("shelljs");
const path = require("path");
const fs = require("fs");
const state = {};
const ask = () => {
  const questions = [
    {
      name: "DIRNAME",
      type: "input",
      message: "文件夹名称"
    },
    {
      name: "MENUNAME",
      type: "input",
      message: "一级菜单名称"
    }
  ];
  return inquirer.prompt(questions);
};

const replaceFile = (filePath = "", mkFilePath = "") => {
  if (filePath.length) {
    fs.readFile(filePath, "utf8", (err, data) => {
      if (err) throw { err, type: "replace" };
      let fileStr = data.toString();
      //fsRepalceFieldMenuName
      fileStr = fileStr.replace(/fsRepalceField/g, state.DIRNAME);
      fileStr = fileStr.replace(/fsRepalceMenuName/g, state.MENUNAME);
      fs.writeFile(mkFilePath, fileStr, err => {
        if (err) throw { err, type: "writeFile" };
      });
    });
  }
};
const createFile = mkFilePath => {
  fs.readdir(path.resolve(__dirname, "./fileTemplate"), (err, files) => {
    if (err) throw err;
    if (files.length) {
      files.forEach(f => {
        const templateFilePath = path.resolve(__dirname, "./fileTemplate/" + f);
        fs.stat(templateFilePath, (err, status) => {
          if (err) throw err;
          if (status.isFile()) {
            // 是文件
            replaceFile(templateFilePath, `${mkFilePath}/${f}`);
          }
        });
      });
    }
  });
};
const createDir = async () => {
  const mkdirPath = path.resolve(process.cwd(), "./src/views/" + state.DIRNAME);
  fs.mkdir(mkdirPath, err => {
    if (err) throw { err, type: "mkdir" };
    // 生成三个文件 index.vue router.js vuex_module.js
    createFile(mkdirPath);
  });
};
const init = async () => {
  console.log(
    chalk.green(
      figlet.textSync("YIYE CLI", {
        font: "Greek",
        horizontalLayout: "universal smushing",
        verticalLayout: "full"
      })
    )
  );
  //
  const answers = await ask();
  const { DIRNAME, MENUNAME } = answers;
  Reflect.set(state, "DIRNAME", DIRNAME);
  Reflect.set(state, "MENUNAME", MENUNAME);
  //
  createDir();
};
init();
