/**
 * Конфигурация plop.js
 *
 * @param plop
 */
function setConfig(plop) {
  /**
   * Reference
   */
  plop.setGenerator("reference", {
    description: "template",
    prompts: [
      {
        type: "input",
        name: "NAME",
        message: "name:"
      }
    ],
    actions() {
      const actions = [];

      actions.push({
        type: "append",
        path: "./src/assets/styles/index.pcss",
        template: `@import "../../components/{{ dashCase NAME }}/{{ dashCase NAME }}.style.pcss";`
      });

      actions.push({
        type: "addMany",
        templateFiles: [".plop/component/**"],
        base: ".plop/component/",
        destination: "./src/components/",
        skipIfExists: true
      });

      return actions;
    }
  });
}

module.exports = setConfig;
