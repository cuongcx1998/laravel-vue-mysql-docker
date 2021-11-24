export default ({ router, auth, next }) => {
  try {
    return auth.getToken ? router.push({ name: 'home' }) : next();
  } catch(error) {}
}
