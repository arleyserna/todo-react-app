import { useState } from 'react';
import { supabase } from '../../utils/supabase';

const LoginForm = () => {

  const [result, setResult] = useState(null);

  const handleLogin = async (e) => {
    e.preventDefault();
    const username = e.target.username.value;
    const password = e.target.password.value;
    console.log('Logging in with', { username, password });
    const {data, error} = await supabase.auth.signInWithPassword({ email: username, password: password });
    console.log('Login attempted');
    console.log(data, error);
  }

  

  return (
    <form className='form' onSubmit={handleLogin}>
      <label>Usuario</label>
      <input type="text" name="username" required />
      <label>Contraseña</label>
      <input type="password" name="password" required />
      <button type="submit">Iniciar Sesión</button>
    </form>
  )
}

export default LoginForm