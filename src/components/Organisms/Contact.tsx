import { Button, FormControl, useToast, VStack } from '@chakra-ui/react';
import { useForm } from 'react-hook-form';
import { AiOutlineMail } from 'react-icons/ai';
import { BsPencil } from 'react-icons/bs';
import ContactInput from '../Molecules/ContactInput';

export default function Contact() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();

  const toast = useToast();

  async function onSubmitForm(values: any) {
    let config = {
      method: 'post',
      body: JSON.stringify(values),
      url: '/api/contact',
      headers: {
        'Content-Type': 'application/json',
      },
      data: values,
    };
    try {
      const response = await fetch(config.url, config);
      if (response.status === 200) {
        console.log('Response Success', response);
        toast({
          title: 'Message Sent',
          status: 'success',
          isClosable: true,
        });
        reset();
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmitForm)}>
      <FormControl w="¨100%">
        <VStack align="center" w="80%" margin="0 auto">
          <ContactInput
            mode="input"
            leftChildreen={(<BsPencil />) as unknown as string}
            type={'text'}
            size={'sm'}
            placeholder={'Enter your name'}
            labelText={'name'}
            required={true}
            errorMessage={errors.name as any}
            register={register}
            minLenghtConfig={{
              value: 3,
              message: 'Your name must be at least 3 characters',
            }}
            pattern={{
              value: /^[-a-zA-Z0-9-()]+(\s+[-a-zA-Z0-9-()]+)*$/,
              message: 'Your name cant have whitespaces or special characters.',
            }}
          />
          <ContactInput
            mode="input"
            leftChildreen={(<AiOutlineMail />) as unknown as string}
            type={'text'}
            size={'sm'}
            placeholder={'Enter your email address'}
            labelText={'email'}
            required={true}
            errorMessage={errors.email as any}
            register={register}
            minLenghtConfig={{
              value: 12,
              message: 'Email must be at least 12 characters',
            }}
            pattern={{
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: 'invalid email address.',
            }}
          />
          <ContactInput
            mode="textarea"
            type={'text'}
            size={'sm'}
            placeholder={'Enter your message'}
            labelText={'message'}
            required={true}
            errorMessage={errors.message as any}
            register={register}
            minLenghtConfig={{
              value: 30,
              message: 'Your message must be at least 30 characters.',
            }}
            maxLengthConfig={{
              value: 1000,
              message: 'Your message must be at most 1000 characters.',
            }}
            pattern={{
              value: /^[^\s]+(\s+[^\s]+)*$/,
              message: 'Enter a valid message. Dont make whitespaces.',
            }}
          />
          <Button type="submit" isLoading={isSubmitting} loadingText="Sending">
            Send Message
          </Button>
          <Button onClick={() => reset()}>Reset</Button>
        </VStack>
      </FormControl>
    </form>
  );
}
