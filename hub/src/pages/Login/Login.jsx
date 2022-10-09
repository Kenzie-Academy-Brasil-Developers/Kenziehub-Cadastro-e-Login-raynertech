import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { LoginSection, Title, LoginForm, LinkStyled as Link } from './style';
import Api from '../../Api/Api.js';
import * as yup from 'yup';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'animate.css';

const schema = yup.object({
  email: yup
    .string()
    .email('Digite um email válido.')
    .required('O email é obrigatório.'),
  password: yup.string().required('Obrigatório digitar uma senha.'),
});

const Login = ({ setAuthenticated }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  function handleLogin(data) {
    Api.post('/sessions', data)
      .then((resp) => {
        toast.success('Login realizado com sucesso!');
        setTimeout(() => {
          setAuthenticated(resp.data.token);
          localStorage.setItem('@kenzieHub:token', resp.data.token);
          localStorage.setItem('@kenzieHub:Id', resp.data.user.id);
        }, 2000);
      })
      .catch((err) => {
        toast.error('Alguma coisa deu errado :(');
        console.log(err);
      });
  }

  return (
    <>
      <LoginSection>
        <ToastContainer theme="dark" />
        <Title>Kenzie Hub</Title>
        <LoginForm
          onSubmit={handleSubmit(handleLogin)}
          className="animate__animated animate__zoomIn"
        >
          <h2>Login</h2>
          <label htmlFor="email" className="Email">
            Email
          </label>
          <input
            className="inputEmail"
            type="email"
            name="email"
            id="email"
            placeholder="Insira seu e-mail"
            autoComplete="off"
            {...register('email')}
          />
          <p className="errorMessage animate__animated animate__fadeIn">
            {errors.email?.message}
          </p>
          <label htmlFor="password" className="Pass">
            Senha
          </label>
          <input
            className="inputPass"
            type="password"
            name="password"
            id="password"
            placeholder="Insira sua senha"
            {...register('password')}
          />
          <p className="errorMessage">{errors.password?.message}</p>
          <button className="loginButton">Entrar</button>
          <p className="still">Ainda não possui uma conta?</p>
          <Link to="/register">
            <button className="registerButton">Cadastre-se</button>
          </Link>
        </LoginForm>
      </LoginSection>
    </>
  );
};
export default Login;
