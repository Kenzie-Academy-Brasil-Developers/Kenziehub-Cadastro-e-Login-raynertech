import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import Api from '../../Api/Api';
import {
  StyledHeader,
  StyleSection,
  StyledError,
  LinkStyled as Link,
  StyledUl,
  ModalStyled,
} from './style';
import 'react-toastify/dist/ReactToastify.css';
import { FaPlus } from 'react-icons/fa';
import { toast, ToastContainer } from 'react-toastify';
import 'animate.css';
import Card from '../../components/Card/Card';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import 'animate.css';

const schema = yup.object({
  status: yup.string().required(),
});

const Dashboard = ({ setAuthenticated }) => {
  const [logUser, setLogUser] = useState('');
  const [logModule, setlogModule] = useState('');
  const [logUserT, setUserT] = useState('');
  const [openDetailModal, setOpenDetailModal] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  useEffect(() => {
    const userId = localStorage.getItem('@kenzieHub:Id');
    Api.get(`/users/${userId}`)
      .then((resp) => {
        setLogUser(resp.data.name);
        setlogModule(resp.data.course_module);
        setUserT(resp.data.techs);
      })
      .catch((err) => console.log(err));
  }, []);

  const cleanLocalStorage = () => {
    toast.success('Logout realizado com sucesso.');
    setTimeout(() => {
      setAuthenticated('');
      localStorage.clear();
    }, 2000);
  };

  const openModal = () => {
    setOpenDetailModal(true);
  };

  const closeModal = () => {
    setOpenDetailModal(false);
  };

  const handleRegisterTech = (data) => {
    Api.post('/users/techs/', data)
      .then((resp) => {
        console.log(resp);
        toast.success('Tecnologia adicionada com sucesso.');
        setOpenDetailModal(false);
        setUserT([...logUserT, data]);
      })
      .catch((err) => {
        console.log(err);
        toast.error('Alguma coisa deu errado. :(');
      });
  };

  ModalStyled.setAppElement('#root');

  const bg = {
    overlay: {
      backgroundColor: 'rgba(18, 18, 20, 0.5)',
    },
  };

  return (
    <>
      <ToastContainer theme="dark" />
      <ModalStyled
        isOpen={openDetailModal}
        onRequestClose={closeModal}
        className="modalRegister animate__animated animate__zoomIn"
        style={bg}
      >
        <form onSubmit={handleSubmit(handleRegisterTech)}>
          <div className="headerModal">
            <h1>Cadastrar tecnologia</h1>
            <span onClick={closeModal}>X</span>
          </div>
          <div className="contentModal">
            <label htmlFor="technology">Nome</label>
            <input
              type="text"
              id="technology"
              placeholder="Digite a tecnologia"
              {...register('title')}
            />
            <p className="errorMessage">{errors.title?.message}</p>
            <label htmlFor="status">Selecionar status</label>
            <select name="status" id="status" {...register('status')}>
              <option>Iniciante</option>
              <option>Intermediário</option>
              <option>Avançado</option>
            </select>
            <p className="errorMessage">{errors.status?.message}</p>
            <button>Cadastrar tecnologia</button>
          </div>
        </form>
      </ModalStyled>
      <StyledHeader>
        <div>
          <h2 className="animate__animated animate__fadeInLeft">Kenzie Hub</h2>
          <Link to="/">
            <button
              onClick={cleanLocalStorage}
              className="logoutButton animate__animated animate__fadeInRight"
            >
              Logout
            </button>
          </Link>
        </div>
      </StyledHeader>
      <StyleSection className="animate__animated animate__fadeIn animate__delay-0.5s">
        <div>
          <h2>Olá, {logUser}</h2>
          <span className="span">{logModule}</span>
        </div>
      </StyleSection>
      <StyledError className="animate__animated animate__zoomIn">
        <header>
          <h2 className="h2">Tecnologias</h2>
          <FaPlus
            className="addIcon"
            src="{plus}"
            alt="Button Plus"
            onClick={openModal}
          />
        </header>
        <div>
          <StyledUl>
            {logUserT ? (
              logUserT.map((card) => (
                <Card
                  key={card.id}
                  card={card}
                  logUserT={logUserT}
                  setUserT={setUserT}
                />
              ))
            ) : (
              <></>
            )}
          </StyledUl>
        </div>
      </StyledError>
    </>
  );
};

export default Dashboard;
