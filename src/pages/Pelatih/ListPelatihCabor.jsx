import React, { useEffect } from 'react'
import PelatihCabor from '../../component/Pelatih/PelatihCabor'
import Layout from "../Layout"
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getMe } from '../../features/authSlice';



const ListPelatihCabor = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isError, user } = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(getMe());
  }, [dispatch]);

  useEffect(() => {
    if (isError) {
      navigate("/");
    }
    if (user && user.role === "Atlet") {
      navigate("/dashboard");
    }
  }, [isError, user, navigate]);
  return (
    <div>
      <Layout>

        <PelatihCabor/>
      </Layout>
    </div>
  )
}

export default ListPelatihCabor
