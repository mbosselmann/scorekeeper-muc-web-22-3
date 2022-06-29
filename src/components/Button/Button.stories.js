import Button from "./Button.js";

export default {
  title: "Button",
  component: Button,
};

export const Default = () => <Button>end game</Button>;

export const TealButton = () => (
  <Button background="lightseagreen">danger</Button>
);
