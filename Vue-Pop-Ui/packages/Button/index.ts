import PopButton from "./PopButton.vue";

PopButton.install = (app) => {
  app.component(PopButton.name,PopButton);
};

export const Button = PopButton;
export default PopButton;
