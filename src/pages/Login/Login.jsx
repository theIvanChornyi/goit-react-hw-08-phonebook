import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';

import { yupResolver } from '@hookform/resolvers/yup';
import { Box } from '@mui/system';
import { toast } from 'react-toastify';

import Container from 'components/Container';
import SectionTitle from 'components/SectionTitle';
import Form from 'components/Form';
import FormInput from 'components/FormInput';

import { logInThunk } from 'redux/auth/thunks.auth';
import { schemaLogin } from 'helpers/yup/validation.schema';

export default function Login() {
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schemaLogin),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const dispatch = useDispatch();

  const onSubmit = data => {
    dispatch(logInThunk(data));
    reset();
  };

  const errorMesage = errors.password?.message || errors.email?.message;
  toast.warn(errorMesage);
  return (
    <section>
      <Box sx={{ p: '25px 10px' }}>
        <Container>
          <SectionTitle title={'Login'} />
          <Form handleSubmit={handleSubmit} onSubmit={onSubmit}>
            <FormInput control={control} type="email" fieldName="email" />
            <FormInput control={control} type="password" fieldName="password" />
          </Form>
        </Container>
      </Box>
    </section>
  );
}
