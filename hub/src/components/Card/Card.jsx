import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { StyledCard } from './style';
import api from '../../Api/Api';
import { FaPlus, FaTrashAlt } from 'react-icons/fa';
import { ModalStyled } from './style';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';
import 'animate.css';

const schema = yup.object({
  status: yup.string().required('Selecione alguma tecnologia'),
});

const Card = ({ card, loggedUserTechs, setUserTechs }) => {
  const [openDetailModal, setOpenDetailModal] = useState(false);
  const [classAnimate, setClassAnimate] = useState(false);

  const { register, handleSubmit } = useForm({
    resolver: yupResolver(schema),
  });

  function handleDelete() {
    setClassAnimate(true);
    api
      .delete(`/users/techs/${card.id}`)
      .then((resp) => {
        console.log(resp);
        toast.success('Tecnologia removida com sucesso.');
        setClassAnimate(true);
        setTimeout(() => {
          setUserTechs((oldUserTechs) => {
            return oldUserTechs.filter((userTech) => userTech.id !== card.id);
          });
        }, 1000);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function handleEdit(data) {
    api
      .put(`/users/techs/${card.id}`, data)
      .then((resp) => {
        console.log(resp);
        toast.success('Tecnologia editada com sucesso!');
        setOpenDetailModal(false);
        setUserTechs(loggedUserTechs);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  const openModal = () => {
    setOpenDetailModal(true);
  };

  const closeModal = () => {
    setOpenDetailModal(false);
  };

  ModalStyled.setAppElement('#root');

  const bg = {
    overlay: {
      backgroundColor: 'rgba(18, 18, 20, 0.5)',
    },
  };

  return (
    <StyledCard
      className={`${classAnimate && 'animate__animated animate__zoomOut'}`}
    >
      <ModalStyled
        isOpen={openDetailModal}
        onRequestClose={closeModal}
        style={bg}
        className="modalRegister animate__animated animate__fadeInDown"
      >
        <div>
          <h2>Editar Tecnologia: {card.title}</h2>
          <span onClick={closeModal}>X</span>
        </div>
        <form onSubmit={handleSubmit(handleEdit)}>
          <label>Selecionar novo status</label>
          <select
            name="editTechnology"
            id="editTechnology"
            {...register('status')}
          >
            <option>Iniciante</option>
            <option>Intermediário</option>
            <option>Avançado</option>
          </select>
          <button>Editar tecnologia</button>
        </form>
      </ModalStyled>
      <p>{card.title}</p>
      <div className="infosCard">
        <p>{card.status}</p>
        <FaTrashAlt
          className="trashIcon"
          alt="Lixeira"
          onClick={handleDelete}
        />
        <FaPlus className="editIcon" onClick={openModal} />
      </div>
    </StyledCard>
  );
};
export default Card;
