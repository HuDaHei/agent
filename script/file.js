const inquirer = require("inquirer");
const chalk = require("chalk");
const figlet = require("figlet");
// const shell = require("shelljs");
const path = require("path");
const fs = require("fs");
let state = {};
const ask = async () => {
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
    },
    {
      name: "HASTWOMENU",
      type: "confirm",
      message: "是有有二级菜单"
    }
  ];
  const twoquestions = [
    {
      name: "TWOMENUPATHNAME",
      type: "input",
      message: "二级菜单router的name名称"
    },
    {
      name: "TWOMENUNAME",
      type: "input",
      message: "二级菜单名称"
    }
  ];
  const { HASTWOMENU, ...rest } = await inquirer.prompt(questions);
  let res = {};
  if (HASTWOMENU) {
    res = await inquirer.prompt(twoquestions);
  }
  return { ...rest, ...res, HASTWOMENU };
};

const replaceFile = (filePath = "", mkFilePath = "") => {
  if (filePath.length) {
    fs.readFile(filePath, "utf8", (err, data) => {
      if (err) throw { err, type: "replace" };
      let fileStr = data.toString();
      //fsRepalceFieldMenuName
      fileStr = fileStr.replace(/fsRepalceField/g, state.DIRNAME);
      fileStr = fileStr.replace(/fsRepalceMenuName/g, state.MENUNAME);
      fileStr = fileStr.replace(/twomenupathname/g, state.TWOMENUPATHNAME);
      fileStr = fileStr.replace(/twomenupathcnname/g, state.TWOMENUNAME);
      fs.writeFile(mkFilePath, fileStr, err => {
        if (err) throw { err, type: "writeFile" };
      });
    });
  }
};
const createFile = mkFilePath => {
  let templatePath = "oneMenu";
  if (state.HASTWOMENU) {
    templatePath = "twoMenu";
  }
  const filePath = `./fileTemplate/${templatePath}`;
  fs.readdir(path.resolve(__dirname, filePath), (err, files) => {
    if (err) throw err;
    if (files.length) {
      files.forEach(f => {
        const templateFilePath = path.resolve(__dirname, filePath + "/" + f);
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
  // 创建项目文件目录
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
  state = await ask();
  //
  createDir();
};
init();
