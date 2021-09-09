export default function ({ store, redirect }) {
  // If the user is not authenticated
  let authenticated = false
  if (!authenticated) {
    return redirect('/login')
  }
}
