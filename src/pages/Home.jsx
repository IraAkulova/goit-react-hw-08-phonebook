const styles = {
  container: {
    minHeight: 'calc(100vh - 50px)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontWeight: 500,
    fontSize: 48,
    textAlign: 'center',
  },
  text: {
    fontWeight: 400,
    fontSize: 24,
    textAlign: 'center',
  },
};

const Home = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Welcome, Dear friend!</h1>
      <p style={styles.text}>
        This service will help you quickly and conveniently create your contact
        book. Your contact book will have a simple interface and the most
        necessary functions: you will be able to create a contact, delete it or
        search by name in the contact list.
      </p>
    </div>
  );
};

export default Home;
