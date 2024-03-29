const program = require("commander");
const { createProject, addComponent, addPage,openBlog,cdResource,openNginx } = require("./action");

module.exports=() => {
  program
    .command("create <projectName>")
    .description("创建项目 例如: create Demo")
    .action(createProject);

  program
    .command("addC <componentName>")
    .description(
      "增加 vue 组件，例如：addComponent HelloWord -d src/components [-d src/components]"
    )
    .action((componentName) => {
      addComponent(componentName, program.dest || "/src/components");
    });

  program
    .command("addP <pageName>")
    .description(
      "增加 vue 页面，例如：addPage HelloWord -d src/pages  [-d src/pages]"
    )
    .action((pageName) => {
      addPage(pageName, program.dest || "/src/pages");
    });

    program
    .command("openBlog")
    .description("通过 VSCode 打开博客")
    .action(openBlog);

    program
    .command("cdResource")
    .description("进入 resource 目录")
    .action(cdResource);

    program
    .command("openNginx")
    .description("通过 VSCode 打开 Nginx 配置")
    .action(openNginx);
};

