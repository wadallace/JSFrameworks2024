type WelcomeProps = {
  name?: string,
};

function Welcome({ name = "user" }: WelcomeProps) {
  return <p>Welcome {name}</p>;
}

export default Welcome;
