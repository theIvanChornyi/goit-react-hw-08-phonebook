import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';

import Container from 'components/Container';
import SectionTitle from 'components/SectionTitle';
import Form from 'components/Form';
import FormInput from 'components/FormInput';

import { Box } from '@mui/material';
import { toast } from 'react-toastify';
import { schemaRegistration } from 'helpers/yup/validation.schema';
import { yupResolver } from '@hookform/resolvers/yup';

import { signUpThunk } from 'redux/auth/thunks.auth';

export default function Registration() {
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schemaRegistration),
    defaultValues: {
      email: '',
      password: '',
      name: '',
    },
  });
  const dispatch = useDispatch();
  const onSubmit = data => {
    dispatch(signUpThunk(data));
    reset();
  };
  const errorMesage =
    errors.email?.message || errors.password?.message || errors.name?.message;
  toast.warn(errorMesage);

  return (
    <section>
      <Container>
        <Box sx={{ p: '25px 10px' }}>
          <SectionTitle title={'Registration'} />
          <Form handleSubmit={handleSubmit} onSubmit={onSubmit}>
            <FormInput control={control} fieldName="name" />
            <FormInput control={control} type="email" fieldName="email" />
            <FormInput control={control} type="password" fieldName="password" />
          </Form>
        </Box>
      </Container>
    </section>
  );
}
